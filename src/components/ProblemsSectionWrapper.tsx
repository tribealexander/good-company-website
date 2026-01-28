"use client";

import { useState } from "react";
import ProblemSelector from "./ProblemSelector";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

// Dynamic background colors for each problem (earth tones to complement dark green hero)
const backgroundColors: Record<number, string> = {
  1: "#E8EDE9", // light sage - It's All in Their Head
  2: "#F0EBE3", // warm sand - The Reporting Treadmill
  3: "#F5F2EA", // light gold tint - Are We Profitable?
  4: "#E5E9E6", // soft green-gray - The Invisible Work
  5: "#EAEBE6", // muted olive - Fire Drill Culture
  6: "#EBEDEF", // cool stone - Flying Blind on Client Health
};

export default function ProblemsSectionWrapper() {
  const [selectedProblemId, setSelectedProblemId] = useState(1);
  const backgroundColor =
    backgroundColors[selectedProblemId] || backgroundColors[1];

  return (
    <section
      className="py-12 transition-colors duration-400 ease-in-out lg:py-14"
      style={{ backgroundColor }}
    >
      <div id="problems" className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading className="mb-5">The Problems We Solve</SectionHeading>
          <p className="mb-8 text-xl text-text-light">
            Every business is different, but these are the problems we see most
            often:
          </p>
        </ScrollReveal>

        {/* Interactive Problem Selector */}
        <ScrollReveal delay={100}>
          <ProblemSelector onProblemChange={setSelectedProblemId} />
        </ScrollReveal>

        {/* Value Framework */}
        <ScrollReveal delay={200}>
          <p className="mb-6 mt-10 text-center text-lg font-semibold text-text">
            These are just a few examples. Ultimately, every system we build
            delivers one of two business outcomes:
          </p>
        </ScrollReveal>

        {/* Two-column framework */}
        <ScrollReveal delay={300}>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Reclaims Capacity */}
            <div className="flex items-center justify-center gap-3 rounded-lg border border-[#E0DBD3] bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
              <h3 className="text-base font-medium uppercase tracking-wider text-primary">
                Saves Time
              </h3>
            </div>

            {/* Protects & Grows Revenue */}
            <div className="flex items-center justify-center gap-3 rounded-lg border border-[#E0DBD3] bg-white px-6 py-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <svg
                  className="h-5 w-5 text-gold"
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
              <h3 className="text-base font-medium uppercase tracking-wider text-gold">
                Protects &amp; Grows Revenue
              </h3>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
