"use client";

import {
  Header,
  Footer,
  ScrollReveal,
  PageTransition,
} from "@/components";

export default function AcquisitionsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
        {/* Hero Section */}
        <section className="bg-[#004D36] px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-[56px] lg:leading-tight">
              Thinking About an Exit?
            </h1>
            <p className="text-xl leading-relaxed text-[#A8D5C2]">
              I&apos;m not just a consultant—I&apos;m an operator. If you&apos;re looking to step back, sell, or bring on a partner, I&apos;d like to hear from you.
            </p>
          </div>
        </section>

        {/* The Pitch - 3 Paths */}
        <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="font-serif mb-12 text-center text-3xl font-bold text-dark lg:text-4xl">
                A Few Ways This Could Work
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1: You Want Out */}
              <ScrollReveal delay={0}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">You Want Out</h3>
                  <p className="text-text-light">
                    Clean exit. You&apos;re done, you want to move on, and you want someone who understands the business to take it from here.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 2: You Want Help */}
              <ScrollReveal delay={100}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">You Want Help</h3>
                  <p className="text-text-light">
                    Stay involved, but stop doing everything. I come in as an operating partner and handle the day-to-day while you stay connected to the business.
                  </p>
                </div>
              </ScrollReveal>

              {/* Card 3: You Want a Partner */}
              <ScrollReveal delay={200}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-dark">You Want a Partner</h3>
                  <p className="text-text-light">
                    You&apos;re not ready to sell, but you want someone with skin in the game. We explore an investment or equity partnership that makes sense for both of us.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="bg-[#E8E3DB] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="font-serif mb-10 text-center text-3xl font-bold text-dark lg:text-4xl">
                What I Look For
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-text">
                    Service businesses, $500K–$10M revenue
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-text">
                    Owners ready to step back, retire, or explore options
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-text">
                    Operational upside I know how to unlock
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-text">
                    Businesses where I&apos;d enjoy the work
                  </p>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#004D36] px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[600px] text-center">
            <ScrollReveal>
              <h2 className="font-serif mb-4 text-3xl font-bold text-white lg:text-4xl">
                Interested?
              </h2>
              <p className="mb-8 text-lg text-[#A8D5C2]">
                No pressure, no pitch. Just a conversation to see if there&apos;s a fit.
              </p>
              <button
                data-cal-namespace="acquisitions-discovery-call"
                data-cal-link="alex-tribe-pzou91/acquisitions-discovery-call"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#004D36] transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_20px_rgba(184,134,11,0.3)]"
              >
                Start a Conversation →
              </button>
            </ScrollReveal>
          </div>
        </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
