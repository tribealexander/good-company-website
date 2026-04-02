"use client";

import { Header, Footer, ScrollReveal, PageTransition } from "@/components";
import RoughAnnotation from "@/components/RoughAnnotation";

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="bg-[#004D36] px-6 pb-12 pt-28 lg:px-10 lg:pb-16 lg:pt-36">
            <div className="mx-auto max-w-[600px] text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#A8D5C2]">
                Workshops
              </p>
              <h1 className="mb-5 text-3xl font-bold text-white md:text-4xl lg:text-[42px] lg:leading-tight">
                <RoughAnnotation
                  type="underline"
                  color="#B8860B"
                  strokeWidth={2}
                  animationDuration={600}
                  showOnScroll={true}
                >
                  Practical workshops
                </RoughAnnotation>
                {" "}for your team
              </h1>
              <p className="text-base leading-[1.7] text-[#A8D5C2] lg:text-lg">
                No-fluff sessions that help your people actually use the tools and processes we build together.
              </p>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="bg-[#F7F5F0] px-6 py-16 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <ScrollReveal>
                <div className="mb-6 inline-flex items-center rounded-full border border-[#E0DBD3] bg-white px-4 py-1.5 text-sm font-medium text-[#006747] shadow-sm">
                  Coming Soon
                </div>
                <h2 className="font-serif mb-4 text-2xl font-semibold text-[#1A1A1A] lg:text-3xl">
                  We&apos;re building the workshop lineup now
                </h2>
                <p className="mb-8 text-base leading-relaxed text-[#555555] lg:text-lg">
                  We&apos;re putting together a series of workshops designed for teams who want to get more out of AI, automation, and the systems they already have. Think less lecture, more working session.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="grid gap-4 text-left md:grid-cols-2">
                  {[
                    {
                      title: "AI for Your Actual Job",
                      description:
                        "Not a ChatGPT demo. We work with your real tasks, your real tools, and figure out where AI actually saves time.",
                    },
                    {
                      title: "Automate the Boring Stuff",
                      description:
                        "Identify the repetitive work that eats your week, then build the automations to eliminate it. You leave with something working.",
                    },
                    {
                      title: "Reporting That Runs Itself",
                      description:
                        "Stop spending Friday afternoons pulling numbers. We build dashboards and automated reports that stay current on their own.",
                    },
                    {
                      title: "Getting Unstuck with Your Tools",
                      description:
                        "Already paying for software your team barely uses? We dig in and show you what you're missing.",
                    },
                  ].map((workshop) => (
                    <div
                      key={workshop.title}
                      className="rounded-xl border border-[#E0DBD3] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                        {workshop.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#666666]">
                        {workshop.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-xl text-center">
              <ScrollReveal>
                <h2 className="font-serif mb-4 text-xl font-semibold text-[#1A1A1A] lg:text-2xl">
                  Want to know when workshops launch?
                </h2>
                <p className="mb-6 text-base text-[#555555]">
                  Book a brainstorm and we&apos;ll keep you in the loop. If you have a specific topic in mind, even better.
                </p>
                <button
                  data-cal-namespace="good-company-discovery-call"
                  data-cal-link="alex-tribe-pzou91/good-company-discovery-call"
                  data-cal-config='{"layout":"month_view","theme":"light"}'
                  className="inline-flex items-center rounded-full bg-[#004D36] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-gold hover:shadow-[0_4px_12px_rgba(184,134,11,0.3)]"
                >
                  Book a Brainstorm →
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
