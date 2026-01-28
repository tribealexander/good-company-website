"use client";

import {
  Header,
  Footer,
  Button,
  ScrollReveal,
  SectionHeading,
} from "@/components";
import RoughAnnotation from "@/components/RoughAnnotation";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="relative min-h-[80vh] overflow-hidden bg-[#E8E3DB]">
          {/* Background photo - right side on desktop */}
          <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <Image
              src="/images/1C1A0419.jpg"
              alt="Alex Tribe"
              fill
              className="object-cover object-center grayscale-[85%] contrast-[1.1] brightness-[1.05]"
              priority
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8E3DB] via-[#E8E3DB]/60 to-transparent" />
          </div>

          {/* Mobile photo - shows above content */}
          <div className="relative h-[50vh] w-full lg:hidden">
            <Image
              src="/images/1C1A0419.jpg"
              alt="Alex Tribe"
              fill
              className="object-cover object-top grayscale-[85%] contrast-[1.1] brightness-[1.05]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E8E3DB]" />
          </div>

          {/* Text content */}
          <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-32">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#6B6B6B]">
                About
              </p>
              <h1 className="mb-6 text-4xl font-bold text-dark md:text-5xl lg:text-[56px] lg:leading-tight">
                Hi, I&apos;m{" "}
                <RoughAnnotation
                  type="underline"
                  color="#006747"
                  strokeWidth={3}
                  animationDuration={800}
                  showOnScroll={true}
                >
                  Alex
                </RoughAnnotation>
                .
              </h1>
              <p className="text-xl leading-relaxed text-text-light">
                I help founder-led service businesses build operational systems that actually get used.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Origin Story */}
        <section className="bg-white px-6 py-12 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal>
              {/* Decorative quote mark */}
              <div className="relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[120px] leading-none text-primary/15">
                  &ldquo;
                </span>
              </div>

              <h2 className="mb-10 pt-16 text-center text-3xl font-bold text-dark lg:text-4xl">
                Why I Started Good Company
              </h2>

              <div className="space-y-6 text-lg leading-[1.8] text-text">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-primary">
                  Before consulting, I ran a DJ and events business. I automated everything—invoices, follow-ups, booking confirmations—because I wanted to stay in the studio, not answer emails. I learned that if you control the customer experience proactively, you stop being reactive. If you&apos;re always delivering information before someone thinks to ask, they never need to chase you.
                </p>
                <p>
                  COVID wiped that out overnight. I sold hand sanitizer for a while, then joined a digital agency where I learned software and got restless working for someone else. Eventually I started consulting—taking whatever came through the door. Strategy projects, CRM implementations, sales coaching. All over the place.
                </p>
                <p>
                  Then I noticed a pattern: I&apos;d build something, the client would love it, and nobody would use it. The CRM sat empty. The dashboards went stale. I looked like an idiot—but the problem wasn&apos;t the system. It was that no one had asked: what happens if people don&apos;t use it? That&apos;s when everything clicked.{" "}
                  <RoughAnnotation
                    type="highlight"
                    color="rgba(0, 103, 71, 0.15)"
                    strokeWidth={2}
                    animationDuration={600}
                    showOnScroll={true}
                  >
                    Technology is easy. Adoption is hard.
                  </RoughAnnotation>{" "}
                  Now I don&apos;t build anything without solving for that first.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: What I Believe */}
        <section className="bg-[#E8E3DB] px-6 py-12 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[800px]">
            <ScrollReveal>
              <h2 className="mb-12 text-center text-3xl font-bold text-dark lg:text-4xl">
                What I Believe
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {/* Belief Card 1 */}
              <ScrollReveal delay={0}>
                <div className="rounded-lg border-l-4 border-l-primary bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-5xl font-bold text-dark/20">01</span>
                  <h3 className="mt-4 text-xl font-semibold text-dark">
                    Systems don&apos;t{" "}
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                    >
                      enforce themselves
                    </RoughAnnotation>
                    .
                  </h3>
                  <p className="mt-3 text-text-light">
                    Most implementations fail because there&apos;s no consequence for non-compliance. I won&apos;t build a system without agreeing upfront on what happens if people don&apos;t use it.
                  </p>
                </div>
              </ScrollReveal>

              {/* Belief Card 2 */}
              <ScrollReveal delay={100}>
                <div className="rounded-lg border-l-4 border-l-primary bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-5xl font-bold text-dark/20">02</span>
                  <h3 className="mt-4 text-xl font-semibold text-dark">
                    Iteration{" "}
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={200}
                    >
                      beats planning
                    </RoughAnnotation>
                    .
                  </h3>
                  <p className="mt-3 text-text-light">
                    We can test ideas faster than ever. I&apos;d rather build something in a week and learn from it than spend a month on a PowerPoint that never ships.
                  </p>
                </div>
              </ScrollReveal>

              {/* Belief Card 3 */}
              <ScrollReveal delay={200}>
                <div className="rounded-lg border-l-4 border-l-primary bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-5xl font-bold text-dark/20">03</span>
                  <h3 className="mt-4 text-xl font-semibold text-dark">
                    Data only matters{" "}
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={400}
                    >
                      if you use it
                    </RoughAnnotation>
                    .
                  </h3>
                  <p className="mt-3 text-text-light">
                    Small companies can now get the visibility that used to require middle management—if the data is in one place and actually gets looked at.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Background */}
        <section className="bg-white px-6 py-12 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-bold text-dark lg:text-4xl">
                Where I&apos;ve Been
              </h2>
              <div className="space-y-6 text-lg leading-[1.8] text-text">
                <p>
                  I&apos;ve spent the last few years embedded with founder-led service businesses—MSPs, agencies, field service companies, anyone whose revenue is tied to people doing good work consistently. Before that, I was at a digital agency learning how software gets built, and before that I was automating my own business so I could avoid the parts I didn&apos;t like.
                </p>
                <p>
                  The common thread across all of it: businesses where the founder is the bottleneck, there are too many moving parts, and balls keep getting dropped. Service delivery and customer experience are everything—but the systems to support them are usually a mess.
                </p>
                <p>
                  What I bring from that: I&apos;ve seen what actually gets adopted and what sits unused. I know what breaks when companies try to scale, and I know what questions to ask before we build anything.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 5: How I Think */}
        <section className="bg-[#E8E3DB] px-6 py-12 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-dark lg:text-4xl">
                  How I Think
                </h2>
                <p className="text-xl text-text-light">
                  I write about operations, systems, and building businesses that actually work.
                </p>
              </div>
            </ScrollReveal>

            {/* Newsletter cards */}
            <div className="grid gap-6 md:grid-cols-3">
              <ScrollReveal delay={0}>
                <a
                  href="#"
                  className="group block h-full rounded-lg border border-[#E0DBD3] bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-dark">
                    The Come Up
                  </h3>
                  <p className="mb-4 text-sm text-text-light">
                    Interviews with entrepreneurs
                  </p>
                  <span className="font-medium text-primary transition-colors group-hover:text-primary-light">
                    Read →
                  </span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <a
                  href="#"
                  className="group block h-full rounded-lg border border-[#E0DBD3] bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-dark">
                    Five-Minute MBA
                  </h3>
                  <p className="mb-4 text-sm text-text-light">
                    Business book summaries
                  </p>
                  <span className="font-medium text-primary transition-colors group-hover:text-primary-light">
                    Read →
                  </span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <a
                  href="#"
                  className="group block h-full rounded-lg border border-[#E0DBD3] bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="mb-2 text-lg font-semibold text-dark">
                    Personal Writing
                  </h3>
                  <p className="mb-4 text-sm text-text-light">
                    Essays and observations
                  </p>
                  <span className="font-medium text-primary transition-colors group-hover:text-primary-light">
                    Read →
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="bg-[#004D36] px-6 py-12 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[600px] text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Want to Work Together?
              </h2>
              <p className="mb-8 text-lg text-[#A8D5C2]">
                Let&apos;s start with a conversation.
              </p>
              <a
                href="/#contact-form"
                className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#004D36] transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_20px_rgba(184,134,11,0.3)]"
              >
                Book a Brainstorm →
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
