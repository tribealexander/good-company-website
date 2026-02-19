import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Initialize Google Calendar API with domain-wide delegation
function getCalendarClient() {
  const credentials = JSON.parse(
    process.env.GOOGLE_CALENDAR_CREDENTIALS || "{}"
  );
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
    clientOptions: {
      subject: calendarId,
    },
  });

  return google.calendar({ version: "v3", auth });
}

// Available time slots (9am - 4pm)
const ALL_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date } = body; // Format: "Thursday, February 19"

    if (!date) {
      return NextResponse.json({ error: "Date required" }, { status: 400 });
    }

    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    if (!calendarId) {
      // Return all slots if calendar not configured
      return NextResponse.json({ availableSlots: ALL_SLOTS });
    }

    const calendar = getCalendarClient();

    // Parse the date
    const months: Record<string, number> = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };

    const dateParts = date.replace(/,/g, '').split(' ');
    const monthName = dateParts[1];
    const day = parseInt(dateParts[2], 10);
    const month = months[monthName];

    let year = new Date().getFullYear();
    let checkDate = new Date(year, month, day);

    // Handle year rollover
    if (checkDate < new Date()) {
      year += 1;
      checkDate = new Date(year, month, day);
    }

    // Set time bounds for the day (in Toronto timezone)
    const startOfDay = new Date(year, month, day, 0, 0, 0);
    const endOfDay = new Date(year, month, day, 23, 59, 59);

    // Fetch busy times from calendar
    const freeBusyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        timeZone: "America/Toronto",
        items: [{ id: calendarId }],
      },
    });

    const busySlots = freeBusyResponse.data.calendars?.[calendarId]?.busy || [];

    console.log("Busy slots for", date, ":", busySlots);

    // Filter out slots that conflict with busy times
    const availableSlots = ALL_SLOTS.filter(slot => {
      // Parse slot time
      const timeMatch = slot.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!timeMatch) return false;

      let hours = parseInt(timeMatch[1], 10);
      const minutes = parseInt(timeMatch[2], 10);
      const isPM = timeMatch[3].toUpperCase() === 'PM';
      if (isPM && hours !== 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;

      const slotStart = new Date(year, month, day, hours, minutes, 0);
      const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000); // 60 min meeting

      // Check if this slot conflicts with any busy period
      for (const busy of busySlots) {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);

        // Conflict if slot overlaps with busy period
        if (slotStart < busyEnd && slotEnd > busyStart) {
          return false;
        }
      }

      return true;
    });

    return NextResponse.json({ availableSlots });
  } catch (error) {
    console.error("Error checking availability:", error);
    // Return all slots on error (graceful degradation)
    return NextResponse.json({ availableSlots: ALL_SLOTS });
  }
}
