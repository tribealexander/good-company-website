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
                I build automation systems for growing businesses.
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
                  After years of doing this, a lot of the work comes down to the same things: don&apos;t drop leads, deliver a great customer experience, and make more money than you spend. Simple to say, hard to do consistently.
                </p>
                <p>
                  How I help is usually some combination of automation, visibility, and accountability—tech that handles the repetitive stuff, dashboards that show what&apos;s actually happening, and systems that make sure people follow through.
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

        {/* Section 2: If You Want to Go Deeper */}
        <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal>
              <h2 className="mb-8 text-3xl font-bold text-dark lg:text-4xl">
                If You Want to Go Deeper
              </h2>
              <div className="space-y-6 text-lg leading-[1.8] text-text">
                <p>
                  I write a lot.{" "}
                  <a href="#" className="text-primary hover:text-primary-light">
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                    >
                      The Come Up
                    </RoughAnnotation>
                  </a>{" "}
                  is where I interview entrepreneurs about the wins, the setbacks, and everything in between.{" "}
                  <a href="#" className="text-gold hover:text-gold/80">
                    <RoughAnnotation
                      type="underline"
                      color="#B8860B"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={200}
                    >
                      Five-Minute MBA
                    </RoughAnnotation>
                  </a>{" "}
                  is a weekly series of business book summaries for people who want the insights, but don&apos;t have the time. I also write the occasional{" "}
                  <a href="#" className="text-primary hover:text-primary-light">
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={400}
                    >
                      essay
                    </RoughAnnotation>
                  </a>{" "}
                  when something&apos;s stuck in my head.
                </p>
                <p>
                  And if you&apos;re in Toronto, I host a dinner series for business owners and executives, feel free to{" "}
                  <a href="#" className="text-primary hover:text-primary-light">
                    <RoughAnnotation
                      type="underline"
                      color="#006747"
                      strokeWidth={2}
                      animationDuration={600}
                      showOnScroll={true}
                      delay={600}
                    >
                      reach out
                    </RoughAnnotation>
                  </a>{" "}
                  if you want an invite.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section 3: CTA */}
        <section className="bg-[#004D36] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[600px] text-center">
            <ScrollReveal>
              <h3 className="mb-4 text-2xl font-medium text-white">
                Got a Project in Mind?
              </h3>
              <p className="mb-8 text-lg text-[#A8D5C2]">
                I&apos;m always happy to talk through what you&apos;re working on, even if it goes nowhere. No pressure, no pitch.
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
