import {
  Header,
  Footer,
  // ProblemsSectionWrapper, // using V2 version
  FloatingCTA,
  ScrollReveal,
  // FAQ, // using V2 version
  SectionHeading,
  WhatWeBuildSection,
  InvestmentSection,
  TestimonialsCarousel,
  CalEmbed,
} from "@/components";
import { HeroSection } from "@/components";
import ProblemsSectionWrapperV2 from "./ProblemsSectionWrapperV2";
import FAQV2 from "./FAQV2";

export default function HomeV2() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main>
        {/* Hero Section - Original */}
        <HeroSection />

        {/* The Problems We Solve - V2 with universal language */}
        <ProblemsSectionWrapperV2 />

        {/* What We Build - White (with dynamic colors on interaction) */}
        <WhatWeBuildSection />

        {/* Why We Stay — before/after transformation pattern */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading className="mb-10">
                The tools change. Your operations can&apos;t afford to.
              </SectionHeading>
            </ScrollReveal>

            {/* Before / After split */}
            <div className="mb-10 grid gap-0 overflow-hidden rounded-2xl border border-[#E8E4DE] shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:grid-cols-2">
              {/* WITHOUT — muted, problem state */}
              <ScrollReveal>
                <div className="h-full bg-[#F0EDEA] p-8 md:p-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D4CFC7] px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#9B9080]"></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">Without a partner</span>
                  </div>
                  <ul className="space-y-5 text-text-light">
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#9B9080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>AI tools change weekly. You hear about it months later</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#9B9080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>You invest in a solution that&apos;s outdated before your team adopts it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#9B9080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>No one internal knows what&apos;s hype and what&apos;s worth pursuing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#9B9080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Data ends up in tools you don&apos;t control or fully understand</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* WITH — vibrant, solution state */}
              <ScrollReveal delay={100}>
                <div className="h-full bg-[#004D36] p-8 md:p-10">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#4ADE80]"></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/80">With Good Company</span>
                  </div>
                  <ul className="space-y-5 text-[#A8D5C2]">
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We monitor the landscape and upgrade your systems when it makes sense</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>When something better comes along, we swap it in. You don&apos;t even notice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We separate hype from reality so you invest in what actually works</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Your data stays yours. Privacy-first, no black boxes</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <p className="text-center text-xl font-semibold text-dark">
                That&apos;s why this is a partnership, not a project.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* How We Work - Beige with grain texture */}
        <section id="how-we-work" className="bg-cream-textured py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading className="mb-6">
                How We Work
              </SectionHeading>
              <p className="mb-12 max-w-3xl text-xl text-text-light">
                We don&apos;t hand you a system and disappear. We embed with your team and stay until it works.
              </p>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal delay={0}>
                <div className="h-full rounded-2xl border border-[#E8E4DE] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-breathe transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
                <div className="h-full rounded-2xl border border-[#E8E4DE] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-breathe transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
                <div className="h-full rounded-2xl border border-[#E8E4DE] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-breathe transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
                <div className="h-full rounded-2xl border border-[#E8E4DE] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-breathe transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
                <div className="h-full rounded-2xl border border-[#E8E4DE] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-breathe transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
                <div className="h-full rounded-2xl border border-[#E8E4DE] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-breathe transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
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
        <section id="testimonials" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading className="mb-12">
                Working With Good Company
              </SectionHeading>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <TestimonialsCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* Investment - Beige with grain texture */}
        <InvestmentSection />

        {/* FAQ - White */}
        <section id="faq" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <ScrollReveal>
              <SectionHeading centered className="mb-12">
                Frequently Asked Questions
              </SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <FAQV2 />
            </ScrollReveal>
          </div>
        </section>

        {/* Book a Call Section - Beige with grain texture */}
        <section id="contact" className="bg-cream-textured py-16 lg:py-20">
          <div className="mx-auto max-w-xl px-6 lg:px-10 text-center">
            <ScrollReveal>
              <SectionHeading centered className="mb-4">
                Ready to reclaim your capacity?
              </SectionHeading>
              <p className="mb-8 text-text-light">
                Book a discovery call and let&apos;s talk about what&apos;s slowing you down.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <CalEmbed />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
