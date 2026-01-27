import {
  Header,
  Footer,
  Button,
  ProblemsSectionWrapper,
  FloatingCTA,
  ScrollReveal,
  FAQ,
  SectionHeading,
  WhatWeBuildSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main>
        {/* Hero Section - Beige, Centered */}
        <section className="bg-cream px-6 pb-20 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Pill Badge */}
            <div className="animate-fade-in-up animation-delay-100 mb-8">
              <span className="inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
                For $1M–$50M companies ready to scale
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up animation-delay-200 mx-auto mb-6 max-w-[900px] text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-dark md:text-5xl lg:text-[64px]">
              We help you automate the work your team shouldn&apos;t be doing.
            </h1>

            {/* Subhead */}
            <p className="animate-fade-in-up animation-delay-300 mx-auto max-w-[700px] text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
              Your team wastes hours on manual coordination, flies blind on key
              metrics, and lacks clear performance data. We build intelligent
              systems that fix all three—so you can scale without adding
              headcount.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-400 mt-10">
              <Button href="#contact-form" size="large">
                Book a Discovery Call
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up animation-delay-500 mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6B6B] md:gap-8">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No new hires needed
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                4-month engagements
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                You own everything we build
              </span>
            </div>
          </div>
        </section>

        {/* What We Build - White (with dynamic colors on interaction) */}
        <WhatWeBuildSection />

        {/* The Problems We Solve - Beige (with dynamic colors on interaction) */}
        <ProblemsSectionWrapper />

        {/* Why Our Systems Actually Get Used - White */}
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading centered className="mb-16">
                Why Our Systems Actually Get Used
              </SectionHeading>
            </ScrollReveal>

            <div className="mx-auto max-w-4xl">
              {/* The Problem */}
              <ScrollReveal>
                <div className="mb-12 rounded-2xl border border-[#D4CFC7] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] lg:p-10">
                  <p className="mb-4 text-xl leading-relaxed text-text">
                    Most consultants build you a system, hand it off, and hope people use it.
                  </p>
                  <p className="text-xl font-semibold text-dark">
                    They don&apos;t.
                  </p>
                  <p className="mt-6 text-lg text-text-light">
                    We build automation, visibility, and accountability INTO the system from day one.
                  </p>
                </div>
              </ScrollReveal>

              {/* Our Approach - 3 pillars matching What We Build */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <ScrollReveal delay={0}>
                  <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-dark">Automation</h3>
                    <p className="text-sm text-text-light">
                      Systems that run themselves reduce the burden of adoption—there&apos;s nothing extra to do
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-dark">Visibility</h3>
                    <p className="text-sm text-text-light">
                      If people aren&apos;t using it, we know immediately—and so do you
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-dark">Accountability</h3>
                    <p className="text-sm text-text-light">
                      Clear metrics mean clear expectations—no hiding, no gaming
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Conclusion */}
              <ScrollReveal>
                <div className="rounded-2xl border-2 border-primary bg-white p-8 text-center lg:p-10">
                  <p className="text-2xl font-semibold leading-relaxed text-primary lg:text-3xl">
                    The system enforces its own adoption.
                  </p>
                  <p className="mt-2 text-lg text-text-light">
                    That&apos;s why our implementations stick.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How We Work - Beige */}
        <section id="how-we-work" className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading className="mb-6">How We Work</SectionHeading>
              <p className="mb-12 max-w-3xl text-xl text-text-light">
                We don&apos;t hand you a system and disappear. We embed with your team and stay until it works.
              </p>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal delay={0}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    We Live in Your Systems
                  </h3>
                  <p className="text-text">
                    We work directly in your Slack, Teams, or whatever tools you use. We sit in your meetings—not once, but ongoing. We see problems at ground level.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={50}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    We Work with Everyone
                  </h3>
                  <p className="text-text">
                    Leadership sets strategy with us, but we also pull employees at every level for quick check-ins. We solve problems where they happen.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    We Build on Solid Foundations
                  </h3>
                  <p className="text-text">
                    Before automation comes data consolidation. If your data is scattered, we create a single source of truth first. Clean data enables everything else.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    We Iterate, Not Prescribe
                  </h3>
                  <p className="text-text">
                    V1, V2, V3. Take feedback, tune, expand, improve. Cancel what&apos;s not working and shift to new priorities. Continuous evolution as your business changes.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    Technically Elite, Business-Grounded
                  </h3>
                  <p className="text-text">
                    We&apos;re ahead of the curve on AI, agents, and automation. But we ground every solution in real-world problems and human behavior.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="h-full rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-primary">
                    Principles, Not Tools
                  </h3>
                  <p className="text-text">
                    AI, Make, Zapier, custom code—whatever achieves the outcome. Every system serves one goal: eliminate tedious work, improve visibility, or create accountability.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials - White */}
        <section id="testimonials" className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading className="mb-12">What Clients Say</SectionHeading>
            </ScrollReveal>

            {/* Testimonial Cards - Fixed design */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Testimonial 1 */}
              <ScrollReveal delay={0}>
                <div className="relative h-full min-h-[280px] rounded-xl border border-[#D4CFC7] border-l-4 border-l-primary bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
                  {/* Quote mark */}
                  <span className="absolute left-6 top-6 font-serif text-5xl text-primary/30">&ldquo;</span>
                  <div className="flex h-full flex-col justify-between pt-8">
                    <p className="text-lg italic leading-relaxed text-dark" style={{ lineHeight: 1.7 }}>
                      We were drowning in manual reporting. Every week,
                      managers spent hours pulling data from three different
                      systems just to know what was happening. Now it&apos;s automated,
                      and we actually have time to act on the insights.
                    </p>
                    <div className="mt-6">
                      <h4 className="text-base font-semibold text-dark">
                        [CLIENT NAME]
                      </h4>
                      <p className="text-sm text-[#6B6B6B]">[ROLE], [COMPANY]</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Testimonial 2 */}
              <ScrollReveal delay={100}>
                <div className="relative h-full min-h-[280px] rounded-xl border border-[#D4CFC7] border-l-4 border-l-primary bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
                  {/* Quote mark */}
                  <span className="absolute left-6 top-6 font-serif text-5xl text-primary/30">&ldquo;</span>
                  <div className="flex h-full flex-col justify-between pt-8">
                    <p className="text-lg italic leading-relaxed text-dark" style={{ lineHeight: 1.7 }}>
                      Before Good Company, we had no idea which clients were
                      actually happy. Customer success made calls, but nothing was
                      tracked. Now we catch at-risk accounts before they churn.
                      It&apos;s already paid for itself three times over.
                    </p>
                    <div className="mt-6">
                      <h4 className="text-base font-semibold text-dark">
                        [CLIENT NAME]
                      </h4>
                      <p className="text-sm text-[#6B6B6B]">[ROLE], [COMPANY]</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-10 flex justify-center gap-4">
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#D4CFC7] text-dark transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative -left-px"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all duration-200 hover:bg-primary-light"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative left-px"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Investment - Beige */}
        <section id="investment" className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading centered className="mb-6">Your Investment</SectionHeading>

              {/* ICP Note */}
              <p className="mb-8 text-center text-lg text-text-light">
                For $1M-$50M companies with 10-200 employees
              </p>
            </ScrollReveal>

            {/* Discovery Workshop - Separate tier with tighter padding */}
            <ScrollReveal>
              <div className="mx-auto mb-8 max-w-2xl">
                <div className="rounded-2xl border-2 border-dashed border-[#D4CFC7] bg-white p-5 lg:p-6">
                  <div className="text-center">
                    <h3 className="mb-2 text-xl font-semibold text-dark">Discovery Workshop</h3>
                    <div className="mb-2 font-mono text-3xl font-bold text-gold">$6K</div>
                    <p className="mb-3 text-sm text-text-light">
                      Stakeholder interviews, workflow mapping, data audit, prioritized roadmap.
                      We&apos;ll tell you exactly what to automate and recommend a package size.
                    </p>
                    <div className="inline-block rounded-md bg-cream px-4 py-2 font-mono text-sm font-semibold text-primary">
                      $5K credit toward partnership if you proceed
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Transition text */}
            <ScrollReveal>
              <p className="mb-6 text-center text-base font-medium text-text">
                After Discovery, most clients move into an ongoing partnership:
              </p>
            </ScrollReveal>

            {/* 3 Partnership Tiers - Tighter padding */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Starter */}
              <ScrollReveal delay={0}>
                <div className="h-full rounded-xl border-2 border-[#D4CFC7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50">
                  <h3 className="mb-1 text-xl font-semibold text-dark">Starter Partnership</h3>
                  <div className="mb-2 font-mono text-3xl font-bold text-gold">$4,000<span className="text-base text-text-light">/mo</span></div>
                  <p className="mb-1 text-sm italic text-text-light">4 hours per week</p>
                  <p className="mb-3 text-sm leading-relaxed text-text">
                    Ideal for single workflow automation or maintenance of existing systems.
                  </p>
                  <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs text-text-light">
                    4 month minimum commitment
                  </div>
                </div>
              </ScrollReveal>

              {/* Standard - Featured */}
              <ScrollReveal delay={100}>
                <div className="relative h-full scale-[1.02] rounded-xl border-2 border-primary bg-white p-5 shadow-[0_12px_48px_rgba(0,103,71,0.12)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="mb-1 text-xl font-semibold text-dark">Standard Partnership</h3>
                  <div className="mb-2 font-mono text-3xl font-bold text-gold">$10,000<span className="text-base text-text-light">/mo</span></div>
                  <p className="mb-1 text-sm italic text-text-light">10 hours per week</p>
                  <p className="mb-3 text-sm leading-relaxed text-text">
                    Most common package. Build and expand multiple systems with ongoing optimization.
                  </p>
                  <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs font-semibold text-primary">
                    4 month minimum commitment
                  </div>
                </div>
              </ScrollReveal>

              {/* Premium */}
              <ScrollReveal delay={200}>
                <div className="h-full rounded-xl border-2 border-[#D4CFC7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50">
                  <h3 className="mb-1 text-xl font-semibold text-dark">Premium Partnership</h3>
                  <div className="mb-2 font-mono text-3xl font-bold text-gold">$18,000<span className="text-base text-text-light">/mo</span></div>
                  <p className="mb-1 text-sm italic text-text-light">20 hours per week</p>
                  <p className="mb-3 text-sm leading-relaxed text-text">
                    Dedicated capacity for complex implementations, multiple departments, or rapid buildout.
                  </p>
                  <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs text-text-light">
                    4 month minimum commitment
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Note below pricing */}
            <ScrollReveal>
              <p className="mt-6 text-center text-sm text-text-light">
                All partnerships include maintenance, tuning, and expansion. The difference is speed—how quickly we can build and how much we can cover.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ - White */}
        <section id="faq" className="bg-white py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading centered className="mb-12">
                Frequently Asked Questions
              </SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <FAQ />
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA - Beige */}
        <section id="contact" className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <ScrollReveal>
              <SectionHeading centered className="mb-6">
                Ready to reclaim your capacity?
              </SectionHeading>
              <p className="mb-10 text-xl text-text-light lg:text-2xl">
                Let&apos;s find the 15-20% you&apos;re leaving on the table—and build
                systems that actually stick.
              </p>
              <Button href="#contact-form">Book a Discovery Call</Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form Section - White */}
        <section id="contact-form" className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-2xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading centered className="mb-4">
                Get in Touch
              </SectionHeading>
              <p className="mb-10 text-center text-text-light">
                Tell us about your challenges and we&apos;ll schedule a discovery call.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-[#D4CFC7] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] lg:p-10">
                <ContactFormWrapper />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Separate client component for the contact form
import ContactForm from "@/components/ContactForm";

function ContactFormWrapper() {
  return <ContactForm />;
}
