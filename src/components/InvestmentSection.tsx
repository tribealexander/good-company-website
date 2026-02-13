"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function InvestmentSection() {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  return (
    <section id="investment" className="bg-cream-textured py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading centered className="mb-6">
            How We Work
          </SectionHeading>

          {/* ICP Note */}
          <p className="mb-8 text-center text-lg text-text-light">
            For $1M-$50M companies with 10-200 employees
          </p>
        </ScrollReveal>

        {/* Two-step process */}
        <div className="mx-auto max-w-3xl">
          {/* Step 1: Discovery */}
          <ScrollReveal>
            <div className="mb-6">
              <button
                onClick={() => setIsRoadmapOpen(!isRoadmapOpen)}
                className="w-full rounded-2xl border-2 border-[#D4CFC7] bg-white p-6 lg:p-8 text-left transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-lg font-bold text-primary">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-dark">
                      Discovery & Automation Roadmap
                    </h3>
                    <p className="text-text-light">
                      We start with a focused engagement to understand your operations, identify high-impact opportunities, and build a prioritized action plan. Standalone value whether or not you continue with us.
                    </p>

                    <div className="mt-4 hidden items-center gap-2 text-sm text-primary md:inline-flex">
                      <span>See what&apos;s included</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isRoadmapOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expandable content - hidden on mobile */}
                <div
                  className={`hidden md:grid transition-all duration-300 ease-out ${
                    isRoadmapOpen
                      ? "mt-6 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#D4CFC7] pt-5 ml-14">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                            What we do
                          </p>
                          <ul className="space-y-2 text-sm text-text">
                            <li className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              Stakeholder interviews
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              Workflow mapping
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              Data landscape audit
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              Tool evaluation
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
                            What you get
                          </p>
                          <ul className="space-y-2 text-sm text-text">
                            <li className="flex items-start gap-2">
                              <span className="text-gold">✓</span>
                              Prioritized opportunities
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gold">✓</span>
                              Implementation recommendations
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gold">✓</span>
                              ROI estimates
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gold">✓</span>
                              90-day action plan
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </ScrollReveal>

          {/* Step 2: Ongoing Partnership */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border-2 border-primary bg-white p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-lg font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-dark">
                    Ongoing Partnership
                  </h3>
                  <p className="mb-4 text-text-light">
                    After Discovery, most clients move into an ongoing retainer. We become your automation and systems team on call.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm text-text">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      New system builds
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Maintenance & support
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Tuning & optimization
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Expansion to new areas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <p className="mt-10 text-center text-base text-text-light">
            Want to learn more?{" "}
            <a
              href="/contact"
              className="text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
            >
              Let&apos;s talk about what makes sense for you.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
