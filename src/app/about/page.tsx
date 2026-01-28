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
import { Briefcase, Building, Clock, MapPin } from "lucide-react";

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
                [Placeholder for one sentence about what you do and who you help]
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
                  [Placeholder: What you were doing before. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.]
                </p>
                <p>
                  [Placeholder: The frustration or realization.{" "}
                  <RoughAnnotation
                    type="highlight"
                    color="rgba(0, 103, 71, 0.15)"
                    strokeWidth={2}
                    animationDuration={600}
                    showOnScroll={true}
                  >
                    This key phrase will be highlighted
                  </RoughAnnotation>{" "}
                  when you scroll to it. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.]
                </p>
                <p>
                  [Placeholder: Why this matters to you. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.]
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
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                    >
                      [Placeholder
                    </RoughAnnotation>{" "}
                    belief statement]
                  </h3>
                  <p className="mt-3 text-text-light">
                    [Placeholder 1-2 sentences explaining this belief and why it matters.]
                  </p>
                </div>
              </ScrollReveal>

              {/* Belief Card 2 */}
              <ScrollReveal delay={100}>
                <div className="rounded-lg border-l-4 border-l-primary bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-5xl font-bold text-dark/20">02</span>
                  <h3 className="mt-4 text-xl font-semibold text-dark">
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={200}
                    >
                      [Placeholder
                    </RoughAnnotation>{" "}
                    belief statement]
                  </h3>
                  <p className="mt-3 text-text-light">
                    [Placeholder 1-2 sentences explaining this belief and why it matters.]
                  </p>
                </div>
              </ScrollReveal>

              {/* Belief Card 3 */}
              <ScrollReveal delay={200}>
                <div className="rounded-lg border-l-4 border-l-primary bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-5xl font-bold text-dark/20">03</span>
                  <h3 className="mt-4 text-xl font-semibold text-dark">
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={400}
                    >
                      [Placeholder
                    </RoughAnnotation>{" "}
                    belief statement]
                  </h3>
                  <p className="mt-3 text-text-light">
                    [Placeholder 1-2 sentences explaining this belief and why it matters.]
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Background */}
        <section className="bg-white px-6 py-12 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1000px]">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              {/* Left column - prose */}
              <div className="w-full lg:w-3/5">
                <ScrollReveal>
                  <h2 className="mb-6 text-3xl font-bold text-dark lg:text-4xl">
                    Where I&apos;ve Been
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed text-text">
                    <p>
                      [Placeholder: First paragraph about experience. Not a resume, just context about the journey and what shaped your perspective on operations and systems.]
                    </p>
                    <p>
                      [Placeholder: Second paragraph about specific experiences or roles that inform how you approach problems today.]
                    </p>
                    <p>
                      [Placeholder: Third paragraph about what you learned and why it matters for the clients you serve now.]
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right column - quick facts */}
              <div className="w-full lg:w-2/5">
                <ScrollReveal delay={100}>
                  <div className="rounded-xl border border-[#E0DBD3] bg-[#FAFAF9] p-6 lg:p-8">
                    <div className="space-y-6">
                      {/* Industries */}
                      <div className="flex items-start gap-4">
                        <Briefcase className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                            Industries
                          </p>
                          <p className="mt-1 text-base text-dark">
                            [Placeholder: e.g., MSPs, agencies, service businesses]
                          </p>
                        </div>
                      </div>

                      {/* Company Size */}
                      <div className="flex items-start gap-4">
                        <Building className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                            Company Size
                          </p>
                          <p className="mt-1 text-base text-dark">
                            [Placeholder: e.g., $1M–$50M businesses]
                          </p>
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="flex items-start gap-4">
                        <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                            Experience
                          </p>
                          <p className="mt-1 text-base text-dark">
                            [Placeholder: e.g., X years in operations]
                          </p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                            Location
                          </p>
                          <p className="mt-1 text-base text-dark">
                            Toronto, Ontario
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
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
