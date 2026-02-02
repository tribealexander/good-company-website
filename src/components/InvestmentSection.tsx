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
            Your Investment
          </SectionHeading>

          {/* ICP Note */}
          <p className="mb-8 text-center text-lg text-text-light">
            For $1M-$50M companies with 10-200 employees
          </p>
        </ScrollReveal>

        {/* Automation Roadmap - Collapsible */}
        <ScrollReveal>
          <div className="mx-auto mb-8 max-w-2xl">
            <button
              onClick={() => setIsRoadmapOpen(!isRoadmapOpen)}
              className="w-full rounded-2xl border-2 border-dashed border-[#D4CFC7] bg-white p-5 lg:p-6 text-left transition-all duration-300 hover:border-primary/50"
            >
              {/* Always visible header */}
              <div className="text-center">
                <h3 className="mb-1 text-xl font-semibold text-dark">
                  Discovery & Automation Roadmap
                </h3>
                <div className="mb-1 font-mono text-3xl font-bold text-gold">
                  $6K
                </div>
                <p className="text-xs text-text-light mb-3">
                  Standalone value whether or not you continue with us.
                </p>
                <div className="inline-flex items-center gap-2">
                  <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs font-semibold text-primary">
                    $5K credit toward partnership if you proceed
                  </div>
                  <svg
                    className={`h-5 w-5 text-text-light transition-transform duration-300 ${
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

              {/* Expandable content */}
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isRoadmapOpen
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#D4CFC7] pt-5">
                    <div className="mx-auto max-w-md grid gap-4 md:grid-cols-2 text-left">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                          What we do
                        </p>
                        <ul className="space-y-1 text-xs text-text">
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            Stakeholder interviews
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            Workflow mapping
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            Data landscape audit
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-primary">•</span>
                            Tool evaluation
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                          What you get
                        </p>
                        <ul className="space-y-1 text-xs text-text">
                          <li className="flex items-start gap-1.5">
                            <span className="text-gold">✓</span>
                            Prioritized opportunities
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-gold">✓</span>
                            Implementation recommendations
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-gold">✓</span>
                            ROI estimates
                          </li>
                          <li className="flex items-start gap-1.5">
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

        {/* Transition text */}
        <ScrollReveal>
          <p className="mb-6 text-center text-base font-medium text-text">
            After Discovery, most clients move into an ongoing partnership:
          </p>
        </ScrollReveal>

        {/* 3 Partnership Tiers */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <ScrollReveal delay={0}>
            <div className="flex h-full flex-col rounded-xl border-2 border-[#D4CFC7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50">
              <h3 className="mb-1 text-xl font-semibold text-dark">
                Starter Partnership
              </h3>
              <div className="mb-2 font-mono text-3xl font-bold text-gold">
                $4,000
                <span className="text-base text-text-light">/mo</span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-text">
                One problem at a time, sequential focus. Ideal for single workflow
                automation or maintenance of existing systems.
              </p>
              <div className="mt-auto rounded-md bg-cream px-3 py-1.5 font-mono text-xs text-text-light">
                4 month minimum commitment
              </div>
            </div>
          </ScrollReveal>

          {/* Standard - Featured */}
          <ScrollReveal delay={100}>
            <div className="relative flex h-full flex-col scale-[1.02] rounded-xl border-2 border-primary bg-white p-5 shadow-[0_12px_48px_rgba(0,103,71,0.12)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="mb-1 text-xl font-semibold text-dark">
                Standard Partnership
              </h3>
              <div className="mb-2 font-mono text-3xl font-bold text-gold">
                $10,000
                <span className="text-base text-text-light">/mo</span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-text">
                Multiple workstreams in parallel. Build and expand multiple systems
                with ongoing optimization.
              </p>
              <div className="mt-auto rounded-md bg-cream px-3 py-1.5 font-mono text-xs font-semibold text-primary">
                4 month minimum commitment
              </div>
            </div>
          </ScrollReveal>

          {/* Premium */}
          <ScrollReveal delay={200}>
            <div className="flex h-full flex-col rounded-xl border-2 border-[#D4CFC7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50">
              <h3 className="mb-1 text-xl font-semibold text-dark">
                Premium Partnership
              </h3>
              <div className="mb-2 font-mono text-3xl font-bold text-gold">
                $18,000
                <span className="text-base text-text-light">/mo</span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-text">
                Compressed timelines, sprint mode. Dedicated capacity for complex
                implementations, multiple departments, or rapid buildout.
              </p>
              <div className="mt-auto rounded-md bg-cream px-3 py-1.5 font-mono text-xs text-text-light">
                4 month minimum commitment
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Note below pricing */}
        <ScrollReveal>
          <p className="mt-6 text-center text-sm text-text-light">
            All partnerships include maintenance, tuning, and expansion. The
            difference is speed—how quickly we can build and how much we can
            cover.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
