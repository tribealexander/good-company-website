import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  message: string;
}

async function appendToSheet(data: ContactFormData) {
  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!credentials || !spreadsheetId) {
    console.log("Google Sheets not configured, skipping...");
    return false;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            data.name,
            data.email,
            data.company,
            data.companySize,
            data.message,
          ],
        ],
      },
    });

    return true;
  } catch (error) {
    console.error("Google Sheets error:", error);
    return false;
  }
}

async function sendEmail(data: ContactFormData) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "alex@tribealexander.com";

  if (!resendApiKey) {
    console.log("Resend not configured, skipping email...");
    return false;
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
        subject: `New inquiry from ${data.name} at ${data.company}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Company Size:</strong> ${data.companySize || "Not specified"}</p>
          <h3>What they're facing:</h3>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.message) {
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

    // Save to Google Sheets and send email notification (both optional)
    const [sheetResult, emailResult] = await Promise.all([
      appendToSheet(data),
      sendEmail(data),
    ]);

    console.log("Form submission:", { sheetResult, emailResult, data });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
