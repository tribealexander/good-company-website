import { Header, Footer, PageTransition } from "@/components";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Good Company",
  description: "Book a discovery call with Good Company. Let's talk about what's slowing you down.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section - Compact */}
          <section className="bg-[#004D36] pt-28 pb-10 lg:pt-32 lg:pb-12">
            <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
              <h1 className="font-serif mb-2 text-3xl font-bold text-white md:text-4xl">
                Book a Call
              </h1>
              <p className="text-[#A8D5C2]">
                Pick a time and we&apos;ll figure out if there&apos;s a fit.
              </p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-cream-textured py-12 lg:py-16">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
              <ContactForm />
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
