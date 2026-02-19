import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Initialize Google Calendar API with service account
function getCalendarClient() {
  const credentials = JSON.parse(
    process.env.GOOGLE_CALENDAR_CREDENTIALS || "{}"
  );

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, selectedDate, selectedTime, message } = body;

    // Validate required fields
    if (!name || !email || !selectedDate || !selectedTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    if (!calendarId) {
      console.error("GOOGLE_CALENDAR_ID not configured");
      return NextResponse.json(
        { error: "Calendar not configured" },
        { status: 500 }
      );
    }

    const calendar = getCalendarClient();

    // Parse date and time
    // selectedDate format: "Thursday, February 19"
    // selectedTime format: "11:00 AM"
    const months: Record<string, number> = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    // Extract month and day from "Thursday, February 19"
    const dateParts = selectedDate.replace(/,/g, '').split(' ');
    const monthName = dateParts[1];
    const day = parseInt(dateParts[2], 10);
    const month = months[monthName];

    // Parse time "11:00 AM" -> hours and minutes
    const timeMatch = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeMatch) {
      console.error("Invalid time format:", selectedTime);
      return NextResponse.json({ error: "Invalid time format" }, { status: 400 });
    }
    let hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);
    const isPM = timeMatch[3].toUpperCase() === 'PM';
    if (isPM && hours !== 12) hours += 12;
    if (!isPM && hours === 12) hours = 0;

    // Build the date
    let year = new Date().getFullYear();
    let startDateTime = new Date(year, month, day, hours, minutes, 0);

    // Handle year rollover (if booking is for next year)
    if (startDateTime < new Date()) {
      year += 1;
      startDateTime = new Date(year, month, day, hours, minutes, 0);
    }

    console.log("Parsed date:", { selectedDate, selectedTime, startDateTime: startDateTime.toISOString() });

    // End time is 60 minutes after start
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    // Create calendar event with Google Meet
    const event = {
      summary: `Discovery Call - ${company || name}`,
      description: `Discovery call with ${name}${company ? ` from ${company}` : ""}\n\nEmail: ${email}${message ? `\n\nMessage:\n${message}` : ""}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/Toronto",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "America/Toronto",
      },
      // Note: Service accounts can't invite external attendees without Domain-Wide Delegation
      // The event is created on the calendar, and we send a confirmation email separately
      conferenceData: {
        createRequest: {
          requestId: `booking-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 }, // 1 day before
          { method: "email", minutes: 60 }, // 1 hour before
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId,
      requestBody: event,
      conferenceDataVersion: 1, // Required for Google Meet link
    });

    console.log("Calendar event created:", response.data.id);

    return NextResponse.json({
      success: true,
      eventId: response.data.id,
      meetLink: response.data.conferenceData?.entryPoints?.[0]?.uri,
      htmlLink: response.data.htmlLink,
    });
  } catch (error: unknown) {
    console.error("Error creating calendar event:", error);
    // Log more details if it's a Google API error
    if (error && typeof error === 'object' && 'response' in error) {
      const apiError = error as { response?: { data?: unknown } };
      console.error("Google API error details:", apiError.response?.data);
    }
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
