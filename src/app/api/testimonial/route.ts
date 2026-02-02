import { NextRequest, NextResponse } from "next/server";

interface TestimonialFormData {
  name: string;
  role: string;
  company: string;
  email: string;
  quote: string;
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

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
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
          subject: `New Testimonial from ${data.name} (${data.company})`,
          html: `
            <h2>New Testimonial</h2>

            <blockquote style="border-left: 4px solid #006747; padding-left: 16px; margin: 16px 0; font-style: italic; font-size: 18px;">
              "${data.quote}"
            </blockquote>
            <p><strong>${data.name}</strong>, ${data.role} at ${data.company}</p>
            <p style="color: #666; font-size: 14px;">Email: ${data.email}</p>

            <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />

            <h3>Ready to paste into TestimonialsCarousel</h3>
            <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; font-size: 12px;">{
  name: "${data.name}",
  role: "${data.role}",
  company: "${data.company}",
  quote: "${data.quote.replace(/"/g, '\\"').replace(/\n/g, " ")}",
}</pre>
          `,
          text: `
New Testimonial

"${data.quote}"

— ${data.name}, ${data.role} at ${data.company}
Email: ${data.email}
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
      console.log("Testimonial submission (email not configured):", data);
    }

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
