import { Metadata } from "next";
import { Header, Footer, PageTransition } from "@/components";

export const metadata: Metadata = {
  title: "Privacy Policy | Good Company",
  description: "How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <h1 className="mb-8 font-serif text-4xl font-medium text-dark">
              Privacy Policy
            </h1>
            <p className="mb-8 text-sm text-text-light">
              Last updated: February 2026
            </p>

            <div className="prose prose-lg max-w-none text-text">
              <p>
                Good Company (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA).
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Information We Collect
              </h2>
              <p>When you use our website or services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> Name, email address, company name, and company size when you submit our contact form</li>
                <li><strong>Communications:</strong> Messages you send us through our forms or email</li>
                <li><strong>Usage data:</strong> Anonymous information about how you interact with our website (pages visited, time spent)</li>
              </ul>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                How We Use Your Information
              </h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and schedule discovery calls</li>
                <li>Provide our consulting services</li>
                <li>Send relevant communications about our services (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                How We Store Your Information
              </h2>
              <p>
                Your information is stored securely using industry-standard services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Form submissions are stored in Google Sheets (protected by Google&apos;s security infrastructure)</li>
                <li>Email notifications are processed through Resend</li>
                <li>Our website is hosted on Vercel</li>
              </ul>
              <p>
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Your Rights
              </h2>
              <p>Under PIPEDA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for communications</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:alex@goodcompany.works" className="text-primary hover:underline">
                  alex@goodcompany.works
                </a>
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Cookies and Analytics
              </h2>
              <p>
                We use Vercel Analytics to understand how visitors use our website. This collects anonymous usage data and does not track individual users across websites. No personal information is collected through analytics.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Third-Party Services
              </h2>
              <p>
                We use the following third-party services that may process your data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google (Calendar, Sheets) for scheduling and data storage</li>
                <li>Vercel for website hosting and analytics</li>
                <li>Resend for email delivery</li>
              </ul>
              <p>
                Each of these services has their own privacy policies and security measures.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or how we handle your information, please contact us at{" "}
                <a href="mailto:alex@goodcompany.works" className="text-primary hover:underline">
                  alex@goodcompany.works
                </a>
              </p>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
