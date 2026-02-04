"use client";

import { useState } from "react";
import type { MindMap } from "@/lib/mindmaps";

interface Props {
  mindMap: MindMap;
}

export default function MindMapContent({ mindMap }: Props) {
  const [activeTab, setActiveTab] = useState<"mindmap" | "report">("mindmap");

  return (
    <div className="min-h-screen bg-cream py-10 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-light">
            Case Study Visualization
          </p>
          <h1 className="font-serif text-3xl font-bold text-dark">
            {mindMap.title}
          </h1>
        </div>

        {/* Tabs */}
        {mindMap.sampleReport && (
          <div className="mb-10 flex justify-center gap-2">
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
              onClick={() => setActiveTab("report")}
              className={`rounded-md border-2 px-6 py-3 text-sm font-medium transition-all ${
                activeTab === "report"
                  ? "border-primary bg-primary text-white"
                  : "border-primary bg-white text-primary hover:bg-gray-50"
              }`}
            >
              Sample Report
            </button>
          </div>
        )}

        {/* Mind Map Panel */}
        {activeTab === "mindmap" && (
          <div className="flex flex-col items-center gap-0">
            {/* THE PROBLEM */}
            <div className="rounded-md bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white">
              The Problem
            </div>
            <div className="h-8 w-0.5 bg-primary/30" />

            <div className="relative flex flex-wrap justify-center gap-6">
              {/* Horizontal line connector */}
              <div className="absolute -top-4 left-1/2 h-0.5 w-[400px] -translate-x-1/2 bg-primary/30 max-md:hidden" />
              {mindMap.problems.map((problem, i) => (
                <div
                  key={i}
                  className="w-48 rounded-md border-2 border-[#8b4049] bg-white p-4 text-center"
                >
                  <p className="mb-1 text-sm font-semibold text-dark">
                    {problem.title}
                  </p>
                  <p className="text-xs text-text-light">{problem.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="h-12 w-0.5 bg-primary/30" />

            {/* THE SOLUTION */}
            <div className="rounded-md bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white">
              The Solution
            </div>
            <div className="h-8 w-0.5 bg-primary/30" />

            <div className="flex flex-wrap items-center justify-center gap-4">
              {mindMap.solution.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-44 rounded-md border-2 border-primary bg-white p-4 text-center">
                    <p className="mb-1 text-sm font-semibold text-dark">
                      {step.title}
                    </p>
                    <p className="text-xs text-text-light">{step.subtitle}</p>
                  </div>
                  {i < mindMap.solution.length - 1 && (
                    <span className="text-2xl text-primary/40">→</span>
                  )}
                </div>
              ))}
            </div>

            <div className="h-12 w-0.5 bg-primary/30" />

            {/* THE OUTPUT */}
            <div className="rounded-md bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white">
              The Output
            </div>
            <div className="h-5 w-0.5 bg-primary/30" />

            {/* Branch connectors */}
            <div className="relative flex justify-center gap-60">
              <div className="absolute top-0 left-1/2 h-0.5 w-64 -translate-x-1/2 bg-primary/30" />
              <div className="h-5 w-0.5 bg-primary/30" />
              <div className="h-5 w-0.5 bg-primary/30" />
            </div>

            <div className="flex flex-wrap justify-center gap-16">
              {mindMap.outputs.map((output, i) => (
                <div
                  key={i}
                  className="w-48 rounded-md border-2 border-[#2a7d5c] bg-[#f7faf8] p-4 text-center"
                >
                  <p className="mb-1 text-sm font-semibold text-dark">
                    {output.title}
                  </p>
                  <p className="text-xs text-text-light">{output.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sample Report Panel */}
        {activeTab === "report" && mindMap.sampleReport && (
          <div className="rounded-lg bg-white p-8 shadow-sm">
            {/* Report Header */}
            <div className="mb-6 border-b border-border pb-4">
              <h2 className="text-2xl font-medium text-dark">
                Daily Compliance Report
              </h2>
              <p className="text-sm text-text-light">
                {mindMap.sampleReport.date}
              </p>
            </div>

            {/* Summary Box */}
            <div className="mb-8 rounded-md border-l-4 border-text-light bg-gray-50 p-5">
              <h3 className="mb-4 text-sm font-medium text-dark">Summary</h3>
              <div className="flex gap-10">
                <div className="text-center">
                  <p className="text-3xl font-medium text-dark">
                    {mindMap.sampleReport.summary.assessed}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-text-light">
                    Assessed
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-medium text-green-600">
                    {mindMap.sampleReport.summary.compliant}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-text-light">
                    Compliant (
                    {Math.round(
                      (mindMap.sampleReport.summary.compliant /
                        mindMap.sampleReport.summary.assessed) *
                        100
                    )}
                    %)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-medium text-red-600">
                    {mindMap.sampleReport.summary.nonCompliant}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-text-light">
                    Non-Compliant
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-medium text-amber-600">
                    {mindMap.sampleReport.summary.incomplete}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-text-light">
                    Incomplete
                  </p>
                </div>
              </div>
            </div>

            {/* Submission Status */}
            <p className="mb-3 border-b border-border pb-2 text-xs font-medium uppercase tracking-wide text-dark">
              Submission Status
            </p>
            <div className="mb-8 flex gap-4">
              <div className="flex-1 rounded-md border-l-4 border-green-600 bg-green-50 p-3">
                <p className="mb-1 text-xs uppercase text-text-light">
                  ✓ Submitted ({mindMap.sampleReport.submitted.length})
                </p>
                <p className="text-sm text-dark">
                  {mindMap.sampleReport.submitted.join(", ")}
                </p>
              </div>
              <div className="flex-1 rounded-md border-l-4 border-red-600 bg-red-50 p-3">
                <p className="mb-1 text-xs uppercase text-text-light">
                  ✗ No Notes ({mindMap.sampleReport.missing.length})
                </p>
                <p className="text-sm text-dark">
                  {mindMap.sampleReport.missing.join(", ")}
                </p>
              </div>
            </div>

            {/* Notes Table */}
            <p className="mb-3 border-b border-border pb-2 text-xs font-medium uppercase tracking-wide text-dark">
              All Notes
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-text-light">
                  <th className="px-3 py-2 font-medium">Tech</th>
                  <th className="px-3 py-2 font-medium">Ticket</th>
                  <th className="px-3 py-2 font-medium">Score</th>
                  <th className="px-3 py-2 font-medium">Details</th>
                </tr>
              </thead>
              <tbody>
                {mindMap.sampleReport.notes.map((note, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border ${
                      note.status === "compliant"
                        ? "bg-green-50"
                        : note.status === "non-compliant"
                          ? "bg-red-50"
                          : "bg-amber-50"
                    }`}
                  >
                    <td className="px-3 py-2">{note.tech}</td>
                    <td className="px-3 py-2 text-blue-600">{note.ticket}</td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-block rounded px-2 py-0.5 text-xs font-medium text-white ${
                          note.status === "compliant"
                            ? "bg-green-600"
                            : note.status === "non-compliant"
                              ? "bg-red-600"
                              : "bg-amber-600"
                        }`}
                      >
                        {note.score || "--"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-text-light">{note.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer */}
            <div className="mt-10 border-t border-border pt-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-text-light">
                Automated by Good Company
              </p>
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-10 text-center">
          <a
            href="/"
            className="text-sm text-text-light transition-colors hover:text-primary"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
