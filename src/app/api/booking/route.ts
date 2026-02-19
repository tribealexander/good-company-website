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
    // selectedDate format: "Monday, February 24"
    // selectedTime format: "10:00 AM"
    const year = new Date().getFullYear();
    const dateStr = `${selectedDate}, ${year}`;
    const startDateTime = new Date(`${dateStr} ${selectedTime}`);

    // Handle year rollover (if booking is for next year)
    if (startDateTime < new Date()) {
      startDateTime.setFullYear(year + 1);
    }

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
      attendees: [{ email }],
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
      sendUpdates: "all", // Send email invites to attendees
    });

    console.log("Calendar event created:", response.data.id);

    return NextResponse.json({
      success: true,
      eventId: response.data.id,
      meetLink: response.data.conferenceData?.entryPoints?.[0]?.uri,
      htmlLink: response.data.htmlLink,
    });
  } catch (error) {
    console.error("Error creating calendar event:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
