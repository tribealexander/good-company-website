"use client";

import { useState } from "react";
import type {
  ThreeColumnMindMap as ThreeColumnMindMapType,
  AutonomySpectrum,
  PeterAction,
} from "@/lib/mindmaps";

interface Props {
  mindMap: ThreeColumnMindMapType;
}

export default function ThreeColumnMindMap({ mindMap }: Props) {
  const hasTabs = !!(mindMap.autonomySpectrum || mindMap.peterActions);
  const [activeTab, setActiveTab] = useState<
    "mindmap" | "autonomy" | "actions"
  >("mindmap");

  return (
    <div className="min-h-screen bg-cream py-16 px-6">
      {/* Header */}
      <div className="mx-auto max-w-6xl mb-12 text-center">
        <h1 className="font-serif text-3xl font-bold text-dark lg:text-4xl">
          {mindMap.title}
        </h1>
      </div>

      {/* Tabs */}
      {hasTabs && (
        <div className="mx-auto max-w-6xl mb-10 flex justify-center gap-2">
          <button
            onClick={() => setActiveTab("mindmap")}
            className={`rounded-md border-2 px-6 py-3 text-sm font-medium transition-all ${
              activeTab === "mindmap"
                ? "border-primary bg-primary text-white"
                : "border-primary bg-white text-primary hover:bg-gray-50"
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => setActiveTab("autonomy")}
            className={`rounded-md border-2 px-6 py-3 text-sm font-medium transition-all ${
              activeTab === "autonomy"
                ? "border-primary bg-primary text-white"
                : "border-primary bg-white text-primary hover:bg-gray-50"
            }`}
          >
            Autonomy Spectrum
          </button>
          {mindMap.peterActions && (
            <button
              onClick={() => setActiveTab("actions")}
              className={`rounded-md border-2 px-6 py-3 text-sm font-medium transition-all ${
                activeTab === "actions"
                  ? "border-primary bg-primary text-white"
                  : "border-primary bg-white text-primary hover:bg-gray-50"
              }`}
            >
              Peter in Action
            </button>
          )}
        </div>
      )}

      {/* Mind Map Panel */}
      {activeTab === "mindmap" && <ThreeColumnFlow mindMap={mindMap} />}

      {/* Autonomy Spectrum Panel */}
      {activeTab === "autonomy" && mindMap.autonomySpectrum && (
        <AutonomySpectrumView spectrum={mindMap.autonomySpectrum} />
      )}

      {/* Peter in Action Panel */}
      {activeTab === "actions" && mindMap.peterActions && (
        <PeterActionsView actions={mindMap.peterActions} />
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
  );
}

// ============================================
// Three-Column Flow (original layout)
// ============================================

function ThreeColumnFlow({
  mindMap,
}: {
  mindMap: ThreeColumnMindMapType;
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 items-start">
        {/* PROBLEM COLUMN */}
        <div className="flex flex-col gap-4 animate-fade-in-up">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f85149]/10 border border-[#f85149]/20">
              <svg
                className="h-5 w-5 text-[#f85149]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="font-mono text-base font-bold uppercase tracking-widest text-[#c9403a]">
              Problem
            </h2>
          </div>
          {mindMap.problems.map((problem, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#f85149]/30 hover:-translate-y-0.5"
            >
              <p className="font-mono text-sm font-bold uppercase tracking-widest text-[#c9403a] mb-2">
                {problem.label}
              </p>
              <p className="text-sm leading-relaxed text-text-light whitespace-pre-line">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CONNECTOR 1 */}
        <div className="hidden lg:flex items-center justify-center px-4 pt-20">
          <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            className="text-border"
          >
            <line
              x1="0"
              y1="12"
              x2="36"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <polygon points="36,7 46,12 36,17" fill="currentColor" />
          </svg>
        </div>
        <div className="flex lg:hidden items-center justify-center py-2">
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            className="text-border"
          >
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="24"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <polygon points="7,24 12,32 17,24" fill="currentColor" />
          </svg>
        </div>

        {/* SOLUTION COLUMN */}
        <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-200">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="font-mono text-base font-bold uppercase tracking-widest text-primary">
              Solution
            </h2>
          </div>
          {mindMap.solution.map((step, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
            >
              <p className="font-mono text-sm font-bold uppercase tracking-widest text-primary mb-2">
                {step.label}
              </p>
              <p className="text-sm leading-relaxed text-text-light whitespace-pre-line">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CONNECTOR 2 */}
        <div className="hidden lg:flex items-center justify-center px-4 pt-20">
          <svg
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
            className="text-border"
          >
            <line
              x1="0"
              y1="12"
              x2="36"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <polygon points="36,7 46,12 36,17" fill="currentColor" />
          </svg>
        </div>
        <div className="flex lg:hidden items-center justify-center py-2">
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            className="text-border"
          >
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="24"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <polygon points="7,24 12,32 17,24" fill="currentColor" />
          </svg>
        </div>

        {/* RESULTS COLUMN */}
        <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2a7d5c]/10 border border-[#2a7d5c]/20">
              <svg
                className="h-5 w-5 text-[#2a7d5c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-mono text-base font-bold uppercase tracking-widest text-[#2a7d5c]">
              Results
            </h2>
          </div>
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
                    <span className="font-medium text-dark">
                      {result.label}
                    </span>
                    <span className="text-text-light">
                      {" "}
                      — {result.description}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <p className="font-mono text-sm font-bold uppercase tracking-widest text-[#2a7d5c] mb-2">
                    {result.label}
                  </p>
                  <p className="text-sm leading-relaxed text-text-light whitespace-pre-line">
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
              <span className="font-semibold text-dark">
                {mindMap.tagline.emphasis}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Autonomy Spectrum Visualization
// ============================================

const trustColors = {
  none: {
    border: "border-[#c9403a]/30",
    bg: "bg-[#f85149]/5",
    accent: "bg-[#c9403a]",
    text: "text-[#c9403a]",
    label: "Human Approves",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  monitored: {
    border: "border-gold/30",
    bg: "bg-gold/5",
    accent: "bg-gold",
    text: "text-gold",
    label: "Human Monitors",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  full: {
    border: "border-[#2a7d5c]/30",
    bg: "bg-[#2a7d5c]/5",
    accent: "bg-[#2a7d5c]",
    text: "text-[#2a7d5c]",
    label: "Fully Trusted",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
};

function AutonomySpectrumView({ spectrum }: { spectrum: AutonomySpectrum }) {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Intro */}
      <p className="text-center text-lg text-text-light mb-10">
        {spectrum.intro}
      </p>

      {/* Three columns, one per level */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {spectrum.levels.map((level) => {
          const colors = trustColors[level.trust];
          return (
            <div
              key={level.level}
              className={`rounded-lg border-2 ${colors.border} ${colors.bg} shadow-sm transition-all duration-200 hover:shadow-md flex flex-col`}
            >
              {/* Color bar at top */}
              <div className={`h-1.5 rounded-t-md ${colors.accent}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Level + Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.accent} text-white font-mono text-base font-bold`}
                  >
                    {level.level}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border ${colors.border} px-2.5 py-0.5 text-xs font-medium ${colors.text}`}
                  >
                    {colors.icon}
                    {colors.label}
                  </span>
                </div>

                {/* Name */}
                <h3 className={`font-mono text-lg font-bold ${colors.text} mb-2`}>
                  {level.name}
                </h3>

                {/* One-liner */}
                <p className="text-sm leading-relaxed text-text mb-5">
                  {level.description}
                </p>

                {/* Example pinned to bottom */}
                <div className="mt-auto rounded-md border border-border bg-white/80 px-4 py-3">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-text-light mb-1.5">
                    Example
                  </p>
                  <p className="text-xs leading-relaxed text-text-light">
                    {level.example}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spectrum Bar */}
      <div className="mb-10 flex items-center justify-center gap-0">
        <div className="flex flex-col items-center flex-1">
          <div className="h-2.5 w-full rounded-l-full bg-gradient-to-r from-[#c9403a] to-[#c9403a]/60" />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-text-light">
            Full oversight
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#B8860B]/60 to-[#B8860B]" />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-text-light">
            Monitored
          </p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="h-2.5 w-full rounded-r-full bg-gradient-to-r from-[#2a7d5c]/60 to-[#2a7d5c]" />
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-text-light">
            Fully trusted
          </p>
        </div>
      </div>

      {/* The Rule */}
      <div className="text-center">
        <div className="inline-block rounded-lg border border-border bg-white px-8 py-5 shadow-sm max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-text-light mb-2">
            The Rule
          </p>
          <p className="text-sm leading-relaxed text-text">
            {spectrum.rule}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Peter in Action — Mock Inbox
// ============================================

const actionTypeConfig = {
  sent: {
    label: "Sent",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: "text-primary",
    bg: "bg-primary/10",
  },
  cc: {
    label: "CC'd to you",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-gold",
    bg: "bg-gold/10",
  },
  calendar: {
    label: "Calendar",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-[#2a7d5c]",
    bg: "bg-[#2a7d5c]/10",
  },
  slack: {
    label: "Slack",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    color: "text-[#611f69]",
    bg: "bg-[#611f69]/10",
  },
};

const levelBadge = {
  1: { label: "L1", color: "text-[#c9403a]", border: "border-[#c9403a]/30", bg: "bg-[#c9403a]/5" },
  2: { label: "L2", color: "text-gold", border: "border-gold/30", bg: "bg-gold/5" },
  3: { label: "L3", color: "text-[#2a7d5c]", border: "border-[#2a7d5c]/30", bg: "bg-[#2a7d5c]/5" },
};

function PeterActionsView({ actions }: { actions: PeterAction[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-center text-lg text-text-light mb-3">
        A typical Tuesday in Peter&apos;s outbox.
      </p>
      <p className="text-center text-sm text-text-light/70 mb-10">
        Real examples of what Peter sends, schedules, and coordinates.
      </p>

      {/* Inbox container */}
      <div className="rounded-xl border border-border bg-white shadow-sm overflow-hidden">
        {/* Inbox header */}
        <div className="flex items-center gap-3 border-b border-border bg-gray-50/80 px-6 py-3">
          <div className="h-3 w-3 rounded-full bg-[#c9403a]/60" />
          <div className="h-3 w-3 rounded-full bg-gold/60" />
          <div className="h-3 w-3 rounded-full bg-[#2a7d5c]/60" />
          <span className="ml-3 font-mono text-xs text-text-light">
            peter@studioname.com — Sent
          </span>
        </div>

        {/* Email rows */}
        {actions.map((action, i) => {
          const typeConf = actionTypeConfig[action.type];
          const badge = levelBadge[action.autonomyLevel];
          return (
            <div
              key={i}
              className={`flex gap-4 px-6 py-4 transition-colors hover:bg-gray-50/50 ${
                i < actions.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              {/* Type icon */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${typeConf.bg} ${typeConf.color} mt-0.5`}
              >
                {typeConf.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm text-dark truncate">
                    {action.subject}
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${badge.color} ${badge.border} ${badge.bg} border`}
                  >
                    {badge.label}
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${typeConf.color} ${typeConf.bg}`}
                  >
                    {typeConf.label}
                  </span>
                </div>
                <p className="text-xs text-text-light leading-relaxed">
                  {action.to && (
                    <span className="text-text-light/60">
                      To: {action.to} ·{" "}
                    </span>
                  )}
                  {action.preview}
                </p>
              </div>

              {/* Time */}
              <span className="shrink-0 font-mono text-xs text-text-light/50 mt-0.5">
                {action.time}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-text-light/60">
          The founder saw 2 CC&apos;s in their inbox. Everything else just happened.
        </p>
      </div>
    </div>
  );
}
