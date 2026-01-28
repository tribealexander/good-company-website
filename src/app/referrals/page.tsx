"use client";

import { Header, Footer, ScrollReveal } from "@/components";
import RoughAnnotation from "@/components/RoughAnnotation";

export default function ReferralsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#004D36] px-6 pb-12 pt-28 lg:px-10 lg:pb-16 lg:pt-36">
          <div className="mx-auto max-w-[600px] text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#A8D5C2]">
              Referrals
            </p>
            <h1 className="mb-5 text-3xl font-bold text-white md:text-4xl lg:text-[42px] lg:leading-tight">
              Know someone who could use my help?
            </h1>
            <p className="text-base leading-[1.7] text-[#A8D5C2] lg:text-lg">
              If you introduce me to someone who becomes a client, I&apos;ll pay you{" "}
              <span className="text-white">
                <RoughAnnotation
                  type="underline"
                  color="#B8860B"
                  strokeWidth={2}
                  animationDuration={600}
                  showOnScroll={true}
                >
                  10%
                </RoughAnnotation>
              </span>{" "}
              of everything they pay me. Not just the first project—every invoice, for as long as they&apos;re a client.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-8 text-center text-2xl font-semibold text-[#1A1A1A] lg:text-3xl">
                How it works
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <ScrollReveal delay={0}>
                <div className="h-full rounded-xl border border-[#E0DBD3] bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EDE9]">
                    <span className="text-lg font-bold text-[#006747]">1</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">Send an intro</h3>
                  <p className="text-sm text-[#666666]">
                    Email is fine—just connect us
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={100}>
                <div className="h-full rounded-xl border border-[#E0DBD3] bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EDE9]">
                    <span className="text-lg font-bold text-[#006747]">2</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">I take it from there</h3>
                  <p className="text-sm text-[#666666]">
                    No selling required on your end
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={200}>
                <div className="h-full rounded-xl border border-[#E0DBD3] bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EDE9]">
                    <span className="text-lg font-bold text-[#006747]">3</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">You get paid</h3>
                  <p className="text-sm text-[#666666]">
                    After every invoice clears
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-[#E8E3DB] px-6 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[500px] text-center">
            <ScrollReveal>
              <h2 className="mb-3 text-xl font-semibold text-[#1A1A1A] lg:text-2xl">
                That&apos;s it.
              </h2>
              <p className="mb-6 text-sm text-[#666666] lg:text-base">
                No minimum engagement. No specific industry. No paperwork unless you want it.
              </p>
              <p className="mb-4 text-sm text-[#4A4A4A]">
                Have someone in mind?
              </p>
              <a
                href="mailto:alex@goodcompany.ca?subject=Referral%20Introduction"
                className="inline-block rounded-full bg-[#004D36] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-gold hover:shadow-[0_4px_12px_rgba(184,134,11,0.3)]"
              >
                Connect Us by Email →
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
