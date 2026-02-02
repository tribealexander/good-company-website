import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  message: string;
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

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    // TODO: Move to CRM integration in future. For now, email directly to Alex.
    const contactEmail = process.env.CONTACT_EMAIL || "alex@tribealexander.com";

    if (resendApiKey) {
      // Send email via Resend
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Good Company Website <noreply@resend.dev>",
          to: contactEmail,
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Company Size:</strong> ${data.companySize || "Not specified"}</p>
            <h3>Message:</h3>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          `,
          text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Company Size: ${data.companySize || "Not specified"}

Message:
${data.message}
          `,
        }),
      });

      if (!response.ok) {
        console.error("Resend API error:", await response.text());
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        );
      }
    } else {
      // Log submission when email is not configured (for development)
      console.log("Contact form submission (email not configured):", data);
    }

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
