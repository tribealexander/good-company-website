import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

interface TestimonialFormData {
  name: string;
  role: string;
  company: string;
  email: string;
  quote: string;
}

async function appendToGoogleSheet(data: TestimonialFormData) {
  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  const sheetId = process.env.GOOGLE_SHEETS_ID;

  if (!credentials || !sheetId) {
    console.log("Google Sheets not configured, skipping...");
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Testimonials!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, data.name, data.role, data.company, data.email, data.quote]],
      },
    });
  } catch (error) {
    console.error("Google Sheets error:", error);
    // Don't fail the request if sheets fails
  }
}

async function sendEmailNotification(data: TestimonialFormData) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "alex@tribealexander.com";

  if (!resendApiKey) {
    console.log("Resend not configured, skipping email...");
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Good Company Website <noreply@resend.dev>",
        to: contactEmail,
        subject: `New Testimonial from ${data.name} (${data.company})`,
        html: `
          <h2>New Testimonial</h2>

          <blockquote style="border-left: 4px solid #006747; padding-left: 16px; margin: 16px 0; font-style: italic; font-size: 18px;">
            "${data.quote}"
          </blockquote>
          <p><strong>${data.name}</strong>, ${data.role} at ${data.company}</p>
          <p style="color: #666; font-size: 14px;">Email: ${data.email}</p>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />

          <p style="color: #666; font-size: 14px;">
            This testimonial has been saved to your Google Sheet.
          </p>
        `,
        text: `
New Testimonial

"${data.quote}"

— ${data.name}, ${data.role} at ${data.company}
Email: ${data.email}

This testimonial has been saved to your Google Sheet.
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend API error:", await response.text());
    }
  } catch (error) {
    console.error("Email error:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: TestimonialFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.role || !data.company || !data.quote) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save to Google Sheet and send email notification in parallel
    await Promise.all([
      appendToGoogleSheet(data),
      sendEmailNotification(data),
    ]);

    return NextResponse.json(
      { success: true, message: "Testimonial submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Testimonial form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
