"use client";

import { useState, useRef, useEffect } from "react";

interface Problem {
  id: number;
  headline: string;
  brief: string;
  whatWeFind: string;
  whatWeBuild: string;
  result: string;
}

interface ProblemSelectorProps {
  onProblemChange?: (id: number) => void;
}

const problems: Problem[] = [
  {
    id: 1,
    headline: "The Reporting Treadmill",
    brief: "Teams spend 8-15 hours/week manually pulling data",
    whatWeFind:
      "Teams spend 8-15 hours/week manually pulling data from multiple systems to create reports that arrive too late to act on.",
    whatWeBuild:
      "Automated dashboards with real-time data and early warning alerts that flag issues before they escalate.",
    result:
      "Hours reclaimed + proactive decisions instead of reactive firefighting.",
  },
  {
    id: 2,
    headline: "The \"Are We Profitable?\" Problem",
    brief: "Profitability calculated weeks after work completes",
    whatWeFind:
      "Project profitability is calculated manually in spreadsheets weeks after work completes. Teams don't know if they're making or losing money until it's too late.",
    whatWeBuild:
      "Real-time tracking of time, costs, and margins per project with alerts when budgets are trending off-track.",
    result: "Course-correct during projects instead of doing autopsy reports after.",
  },
  {
    id: 3,
    headline: "The \"It's All in Their Head\" Problem",
    brief: "Critical information trapped in someone's head",
    whatWeFind:
      "Critical information lives in someone's head or scattered across email threads and Slack channels. When key people are out or leave, operations grind to a halt.",
    whatWeBuild:
      "Systems that capture knowledge as work happens—decision logs, process documentation, pattern detection—so expertise isn't person-dependent.",
    result: "Scalable operations that don't break when someone's unavailable.",
  },
  {
    id: 4,
    headline: "The Invisible Work",
    brief: "Work sits waiting 20-40% of cycle time",
    whatWeFind:
      "Work sits waiting in approval queues, handoff points, and email threads that nobody's monitoring. 20-40% of cycle time is just... waiting.",
    whatWeBuild:
      "Automated handoffs, escalation rules, and visibility into where work actually sits so bottlenecks become obvious.",
    result:
      "Projects move faster + you see friction points before they cause delays.",
  },
  {
    id: 5,
    headline: "The Fire Drill Culture",
    brief: "Always reacting, catching issues after complaints",
    whatWeFind:
      "Teams are always reacting—catching client issues after complaints come in, discovering problems during review meetings, operating blind between check-ins.",
    whatWeBuild:
      "Continuous monitoring systems that track client health, service quality, and operational metrics so you catch problems early.",
    result: "Move from reactive firefighting to proactive problem-solving.",
  },
  {
    id: 6,
    headline: "The Coordination Tax",
    brief: "Manual coordination eats 10+ hours per person per week",
    whatWeFind:
      "Every project requires manual coordination—status updates, follow-ups, \"just checking in\" emails—that eat 10+ hours per person per week.",
    whatWeBuild:
      "Automated status tracking, dependency alerts, and progress notifications so coordination happens in the background.",
    result: "Team focuses on actual work instead of coordination theater.",
  },
];

export default function ProblemSelector({ onProblemChange }: ProblemSelectorProps) {
  const [selectedId, setSelectedId] = useState(1);
  const [displayedProblem, setDisplayedProblem] = useState(problems[0]);
  const [isExiting, setIsExiting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: number) => {
    if (id === selectedId) return;

    // Notify parent of change immediately for background color
    onProblemChange?.(id);

    // Start exit animation
    setIsExiting(true);

    // After exit animation, update content and start enter animation
    setTimeout(() => {
      setSelectedId(id);
      setDisplayedProblem(problems.find((p) => p.id === id)!);
      setIsExiting(false);
    }, 200);
  };

  // Scroll content to top when problem changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedId]);

  return (
    <div className="mt-12 overflow-hidden rounded-xl border border-border">
      {/* Desktop: Split-screen layout */}
      <div className="hidden lg:grid lg:grid-cols-[2fr_3fr] lg:gap-0">
        {/* Left Side - Problem List */}
        <div className="border-r border-border bg-white">
          {problems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => handleSelect(problem.id)}
              className={`w-full cursor-pointer border-b border-border px-6 py-5 text-left transition-all duration-200 ease-out ${
                selectedId === problem.id
                  ? "border-l-4 border-l-primary bg-[#F0F7F4]"
                  : "border-l-4 border-l-transparent bg-white hover:bg-gray-50"
              }`}
            >
              <h4
                className={`text-lg font-semibold transition-colors duration-200 ${
                  selectedId === problem.id ? "text-primary" : "text-dark"
                }`}
              >
                {problem.headline}
              </h4>
              <p className={`mt-1 text-sm transition-colors duration-200 ${
                selectedId === problem.id ? "text-text" : "text-text-light"
              }`}>{problem.brief}</p>
            </button>
          ))}
        </div>

        {/* Right Side - Problem Details */}
        <div ref={contentRef} className="flex items-start bg-transparent p-8 lg:p-10">
          <div
            className={`min-h-[480px] w-full rounded-xl border border-border bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out lg:p-10 ${
              isExiting
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <h3 className="mb-6 text-2xl font-bold text-dark lg:text-3xl">
              {displayedProblem.headline}
            </h3>

            <div className="space-y-5">
              <div>
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  What we find
                </h4>
                <p className="text-lg leading-relaxed text-text">
                  {displayedProblem.whatWeFind}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  What we build
                </h4>
                <p className="text-lg leading-relaxed text-text">
                  {displayedProblem.whatWeBuild}
                </p>
              </div>

              <div className="rounded-lg border border-primary/30 bg-[#F0F7F4] p-5">
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  Result
                </h4>
                <p className="text-lg font-medium text-primary">
                  {displayedProblem.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Horizontal tabs + content below */}
      <div className="lg:hidden">
        {/* Horizontal scrollable tabs */}
        <div className="scrollbar-hide -mx-6 overflow-x-auto border-b border-border bg-white px-6">
          <div className="flex gap-2 py-4">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => handleSelect(problem.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedId === problem.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-cream text-text hover:bg-cream/80"
                }`}
              >
                {problem.headline}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile content */}
        <div className="bg-cream/50 p-4">
          <div
            className={`rounded-xl border border-border bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out ${
              isExiting
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <h3 className="mb-5 text-xl font-bold text-dark">
              {displayedProblem.headline}
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  What we find
                </h4>
                <p className="leading-relaxed text-text">
                  {displayedProblem.whatWeFind}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  What we build
                </h4>
                <p className="leading-relaxed text-text">
                  {displayedProblem.whatWeBuild}
                </p>
              </div>

              <div className="rounded-lg border border-primary/30 bg-[#F0F7F4] p-4">
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  Result
                </h4>
                <p className="font-medium text-primary">
                  {displayedProblem.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
