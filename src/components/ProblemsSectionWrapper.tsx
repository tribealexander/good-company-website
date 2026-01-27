"use client";

import { useState } from "react";
import ProblemSelector from "./ProblemSelector";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

// Dynamic background colors for each problem (more noticeable shifts)
const backgroundColors: Record<number, string> = {
  1: "#E8E3DB", // warm beige (default)
  2: "#F5EDE5", // warm cream
  3: "#E5EDF5", // cool blue-gray
  4: "#F0E8F0", // soft lavender
  5: "#F5EBE0", // warm peach-beige
  6: "#E5F0E8", // soft sage
};

export default function ProblemsSectionWrapper() {
  const [selectedProblemId, setSelectedProblemId] = useState(1);
  const backgroundColor = backgroundColors[selectedProblemId] || backgroundColors[1];

  return (
    <section
      className="py-12 transition-colors duration-400 ease-in-out lg:py-16"
      style={{ backgroundColor }}
    >
      <div id="problems" className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading className="mb-6">The Problems We Solve</SectionHeading>
          <p className="mb-10 text-xl text-text-light">
            Everything we do uses intelligent systems to help you make more
            money and solve problems. That looks like:
          </p>
        </ScrollReveal>

        {/* Interactive Problem Selector */}
        <ScrollReveal delay={100}>
          <ProblemSelector onProblemChange={setSelectedProblemId} />
        </ScrollReveal>

        {/* Value Framework */}
        <ScrollReveal delay={200}>
          <p className="mb-8 mt-12 text-center text-xl text-text-light">
            These are just a few examples. Ultimately, every system we build does one of two things:
          </p>
        </ScrollReveal>

        {/* Two-column framework */}
        <ScrollReveal delay={300}>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Reclaims Capacity */}
            <div className="rounded-lg bg-[#F9F9F7] p-8">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                  Reclaims Capacity
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-dark">
                Automates the repetitive coordination, reporting, and data-pulling
                that drains your team&apos;s time. Frees up 5-10 hours per person per
                week to focus on work that actually matters.
              </p>
            </div>

            {/* Protects & Grows Revenue */}
            <div className="rounded-lg bg-[#F9F9F7] p-8">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                  Protects & Grows Revenue
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-dark">
                Catches at-risk clients before they churn. Tracks profitability in
                real-time. Identifies opportunities before they slip away. Sees
                problems while you can still fix them.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
