"use client";

import type { ThreeColumnMindMap as ThreeColumnMindMapType } from "@/lib/mindmaps";

interface Props {
  mindMap: ThreeColumnMindMapType;
}

export default function ThreeColumnMindMap({ mindMap }: Props) {
  return (
    <div className="min-h-screen bg-cream py-16 px-6">
      {/* Header */}
      <div className="mx-auto max-w-6xl mb-12 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-light">
          Case Study Visualization
        </p>
        <h1 className="font-serif text-3xl font-bold text-dark lg:text-4xl">
          {mindMap.title}
        </h1>
      </div>

      {/* Three Column Flow */}
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 items-start">

          {/* PROBLEM COLUMN */}
          <div className="flex flex-col gap-4 animate-fade-in-up">
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f85149]/10 border border-[#f85149]/20">
                <svg className="h-5 w-5 text-[#f85149]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#c9403a]">
                Problem
              </h2>
            </div>

            {/* Problem Cards */}
            {mindMap.problems.map((problem, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#f85149]/30 hover:-translate-y-0.5"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#c9403a] mb-2">
                  {problem.label}
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* CONNECTOR 1 */}
          <div className="hidden lg:flex items-center justify-center px-4 pt-20">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-border">
              <line x1="0" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="36,7 46,12 36,17" fill="currentColor" />
            </svg>
          </div>

          {/* Mobile Connector */}
          <div className="flex lg:hidden items-center justify-center py-2">
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-border">
              <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="7,24 12,32 17,24" fill="currentColor" />
            </svg>
          </div>

          {/* SOLUTION COLUMN */}
          <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-200">
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Solution
              </h2>
            </div>

            {/* Solution Cards */}
            {mindMap.solution.map((step, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed text-text-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CONNECTOR 2 */}
          <div className="hidden lg:flex items-center justify-center px-4 pt-20">
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-border">
              <line x1="0" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="36,7 46,12 36,17" fill="currentColor" />
            </svg>
          </div>

          {/* Mobile Connector */}
          <div className="flex lg:hidden items-center justify-center py-2">
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-border">
              <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
              <polygon points="7,24 12,32 17,24" fill="currentColor" />
            </svg>
          </div>

          {/* RESULTS COLUMN */}
          <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-400">
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2a7d5c]/10 border border-[#2a7d5c]/20">
                <svg className="h-5 w-5 text-[#2a7d5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#2a7d5c]">
                Results
              </h2>
            </div>

            {/* Result Cards */}
            {mindMap.results.map((result, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#2a7d5c]/30 hover:-translate-y-0.5"
              >
                {result.metric ? (
                  <>
                    <p className="font-mono text-2xl font-bold text-gold mb-1">
                      {result.metric}
                    </p>
                    <p className="text-sm leading-relaxed text-text">
                      <span className="font-medium text-dark">{result.label}</span>
                      <span className="text-text-light"> — {result.description}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#2a7d5c] mb-2">
                      {result.label}
                    </p>
                    <p className="text-sm leading-relaxed text-text-light">
                      {result.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        {mindMap.tagline && (
          <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
            <div className="inline-block rounded-full border border-border bg-white px-8 py-4 shadow-sm">
              <p className="font-mono text-sm text-text-light tracking-wide">
                {mindMap.tagline.text}{" "}
                <span className="font-semibold text-dark">{mindMap.tagline.emphasis}</span>
              </p>
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-sm text-text-light transition-colors hover:text-primary"
          >
            &larr; Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
