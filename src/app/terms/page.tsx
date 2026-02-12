import { Metadata } from "next";
import { Header, Footer, PageTransition } from "@/components";

export const metadata: Metadata = {
  title: "Terms of Use | Good Company",
  description: "Terms and conditions for using the Good Company website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <h1 className="mb-8 font-serif text-4xl font-medium text-dark">
              Terms of Use
            </h1>
            <p className="mb-8 text-sm text-text-light">
              Last updated: February 2026
            </p>

            <div className="prose prose-lg max-w-none text-text">
              <p>
                Welcome to Good Company. By accessing or using our website at goodcompany.works, you agree to be bound by these Terms of Use. If you do not agree, please do not use our website.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Use of Website
              </h2>
              <p>
                This website is provided for informational purposes about Good Company&apos;s consulting services. You may browse, download, and print content for your personal, non-commercial use, provided you do not modify the content and maintain all copyright notices.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Good Company or its content suppliers and is protected by Canadian and international copyright laws. The Good Company name and logo are trademarks of Good Company.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                User Submissions
              </h2>
              <p>
                When you submit information through our contact forms, you grant us permission to use that information to respond to your inquiry and provide our services. We handle all submissions in accordance with our Privacy Policy.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Disclaimer
              </h2>
              <p>
                The information on this website is provided &quot;as is&quot; without warranties of any kind, either express or implied. Good Company does not warrant that the website will be uninterrupted or error-free.
              </p>
              <p>
                Case studies and results mentioned on this website are specific to those clients and circumstances. We do not guarantee that you will achieve similar results.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Limitation of Liability
              </h2>
              <p>
                Good Company shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                External Links
              </h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse or assume responsibility for the content or practices of linked websites.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Governing Law
              </h2>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of Ontario.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website constitutes acceptance of the modified terms.
              </p>

              <h2 className="mt-10 mb-4 font-serif text-2xl font-medium text-dark">
                Contact
              </h2>
              <p>
                Questions about these Terms of Use may be directed to{" "}
                <a href="mailto:alex@yourgoodcompany.com" className="text-primary hover:underline">
                  alex@yourgoodcompany.com
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
