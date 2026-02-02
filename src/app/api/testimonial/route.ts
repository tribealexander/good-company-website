import { NextRequest, NextResponse } from "next/server";

interface TestimonialFormData {
  name: string;
  role: string;
  company: string;
  email: string;
  projectType: string;
  challenge: string;
  solution: string;
  results: string;
  recommendation: string;
  quote: string;
  photoConsent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const data: TestimonialFormData = await request.json();

    // Validate required fields
    if (
      !data.name ||
      !data.email ||
      !data.role ||
      !data.company ||
      !data.projectType ||
      !data.challenge ||
      !data.results ||
      !data.quote
    ) {
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
            <h2>New Testimonial Submission</h2>

            <h3>Contact Info</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Role:</strong> ${data.role}</p>
            <p><strong>Company:</strong> ${data.company}</p>

            <h3>Project</h3>
            <p><strong>Project Type:</strong> ${data.projectType}</p>
            <p><strong>Challenge:</strong></p>
            <p>${data.challenge.replace(/\n/g, "<br>")}</p>
            <p><strong>Solution:</strong></p>
            <p>${data.solution ? data.solution.replace(/\n/g, "<br>") : "Not provided"}</p>

            <h3>Results</h3>
            <p><strong>Results Seen:</strong></p>
            <p>${data.results.replace(/\n/g, "<br>")}</p>
            <p><strong>Recommendation:</strong></p>
            <p>${data.recommendation ? data.recommendation.replace(/\n/g, "<br>") : "Not provided"}</p>

            <h3>Quote for Website</h3>
            <blockquote style="border-left: 4px solid #006747; padding-left: 16px; margin: 16px 0; font-style: italic;">
              "${data.quote}"
            </blockquote>
            <p>— ${data.name}, ${data.role} at ${data.company}</p>

            <h3>Consent</h3>
            <p><strong>Photo/Display Consent:</strong> ${data.photoConsent ? "Yes" : "No"}</p>

            <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />

            <h3>Ready-to-Use Format</h3>
            <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; font-size: 12px;">
{
  name: "${data.name}",
  role: "${data.role}",
  company: "${data.company}",
  quote: "${data.quote.replace(/"/g, '\\"')}",
}
            </pre>
          `,
          text: `
New Testimonial Submission

CONTACT INFO
Name: ${data.name}
Email: ${data.email}
Role: ${data.role}
Company: ${data.company}

PROJECT
Project Type: ${data.projectType}
Challenge: ${data.challenge}
Solution: ${data.solution || "Not provided"}

RESULTS
Results Seen: ${data.results}
Recommendation: ${data.recommendation || "Not provided"}

QUOTE FOR WEBSITE
"${data.quote}"
— ${data.name}, ${data.role} at ${data.company}

CONSENT
Photo/Display Consent: ${data.photoConsent ? "Yes" : "No"}
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
