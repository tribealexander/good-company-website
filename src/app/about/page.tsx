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
        {/* Section 1: Hero + Origin Story (merged) */}
        <section className="relative overflow-hidden bg-[#E8E3DB]">
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

          {/* Hero content + Story (unified) */}
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
              <p className="mb-8 text-xl leading-relaxed text-text-light">
                I build operational systems for growing businesses.
              </p>

              {/* Story - flows directly from subhead */}
              <div className="space-y-6 text-lg leading-[1.8] text-text">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-primary">
                  I work with founders because they&apos;re the people I like to be around. People who take charge, figure things out, and don&apos;t wait for permission. That probably sounds like a platitude, but it&apos;s simpler than that—they&apos;re the people that energize me.
                </p>
                <p>
                  I like to think of myself as a co-founder on retainer. An advisor who isn&apos;t trying to sell you something you don&apos;t need. When I start working with someone, I mostly just ask questions. A lot of them. I don&apos;t show up with answers—I show up trying to understand what&apos;s actually broken, what matters, and what&apos;s going to get ignored if we build it.
                </p>
                <p>
                  After years of doing this, a lot of the work comes down to the same things: automation, visibility, and accountability. The tools change, but the principles don&apos;t.
                </p>
              </div>

              {/* Standalone statement */}
              <p className="mt-10 text-lg font-medium text-dark">
                I work{" "}
                <RoughAnnotation
                  type="underline"
                  color="#006747"
                  strokeWidth={2}
                  animationDuration={600}
                  showOnScroll={true}
                  delay={300}
                >
                  directly
                </RoughAnnotation>{" "}
                with every client. No handoffs, no juniors.
              </p>
            </div>
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

        {/* Section 4: How I Think */}
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
