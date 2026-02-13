"use client";

import { useState, useRef, useEffect } from "react";
import {
  BrainCircuit,
  BarChart3,
  TrendingUp,
  Clock,
  Flame,
  HeartPulse,
  LucideIcon,
} from "lucide-react";

interface Problem {
  id: number;
  headline: string;
  shortLabel: string;
  brief: string;
  whatWeFind: string;
  whatWeBuild: string;
  result: string;
  Icon: LucideIcon;
}

interface ProblemSelectorProps {
  onProblemChange?: (id: number | null) => void;
}

const problems: Problem[] = [
  {
    id: 1,
    headline: "The \"It's All in Their Head\" Problem",
    shortLabel: "Knowledge Silos",
    brief: "Critical information trapped in someone's head",
    whatWeFind:
      "Critical information lives in someone's head or scattered across email threads and Slack channels. When key people are out or leave, operations slow to a crawl.",
    whatWeBuild:
      "Systems that capture knowledge as work happens: decision logs, process documentation, and pattern detection. Expertise becomes shared, not person-dependent.",
    result: "Scalable operations that don't break when someone's unavailable.",
    Icon: BrainCircuit,
  },
  {
    id: 2,
    headline: "The Reporting Treadmill",
    shortLabel: "Manual Reporting",
    brief: "Teams spend 8-15 hours/week manually pulling data",
    whatWeFind:
      "Teams spend 8-15 hours per week manually pulling data from multiple systems to create reports that arrive too late to act on. By the time you see it, it's history.",
    whatWeBuild:
      "Automated dashboards with real-time data and early warning alerts that flag issues before they escalate. No more chasing spreadsheets.",
    result:
      "Hours reclaimed and proactive decisions instead of reactive firefighting.",
    Icon: BarChart3,
  },
  {
    id: 3,
    headline: "The \"Are We Profitable?\" Problem",
    shortLabel: "Profitability",
    brief: "Profitability calculated weeks after work completes",
    whatWeFind:
      "Project profitability is calculated manually in spreadsheets weeks after work completes. Teams don't know if they're making money or losing it until it's too late to fix.",
    whatWeBuild:
      "Real-time tracking of time, costs, and margins per project. Alerts fire when budgets trend off-track, giving you visibility while you can still act.",
    result: "Know your margins in real-time. Stop bleeding money on projects you thought were profitable.",
    Icon: TrendingUp,
  },
  {
    id: 4,
    headline: "The Invisible Work",
    shortLabel: "Hidden Delays",
    brief: "Work sits waiting 20-40% of cycle time",
    whatWeFind:
      "Work sits waiting in approval queues, handoff points, and email threads that nobody's monitoring. 20-40% of cycle time is just waiting. Nobody sees it.",
    whatWeBuild:
      "Automated handoffs, escalation rules, and visibility into where work actually sits. Bottlenecks become obvious before they cause delays.",
    result:
      "Projects move faster and you see friction points before they cause delays.",
    Icon: Clock,
  },
  {
    id: 5,
    headline: "The Fire Drill Culture",
    shortLabel: "Fire Drills",
    brief: "Always reacting, catching issues after complaints",
    whatWeFind:
      "Teams are always reacting. They catch client issues after complaints come in, discover problems during review meetings, and operate blind between check-ins.",
    whatWeBuild:
      "Continuous monitoring that tracks client health, service quality, and operational metrics. You catch problems early, not after they explode.",
    result: "Move from reactive firefighting to proactive problem-solving.",
    Icon: Flame,
  },
  {
    id: 6,
    headline: "Flying Blind on Client Health",
    shortLabel: "Client Health",
    brief: "No visibility into who's happy until they leave",
    whatWeFind:
      "You don't know which clients are happy and which are at risk until they complain or churn. Customer success runs on gut feel, not data. Surprises are common.",
    whatWeBuild:
      "Automated health monitoring that tracks sentiment, engagement, and warning signs. You catch at-risk accounts before they leave.",
    result: "Protect revenue by seeing problems while you can still fix them.",
    Icon: HeartPulse,
  },
];

export default function ProblemSelector({
  onProblemChange,
}: ProblemSelectorProps) {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [displayedProblem, setDisplayedProblem] = useState<Problem | null>(problems[0]);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [pressedId, setPressedId] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleSelect = (id: number) => {
    if (id === selectedId) return;

    // Notify parent of change immediately for background color
    onProblemChange?.(id);

    const newProblem = problems.find((p) => p.id === id)!;

    // If no problem was previously selected, just set it directly with enter animation
    if (selectedId === null) {
      setSelectedId(id);
      setDisplayedProblem(newProblem);
      setIsEntering(true);
      setTimeout(() => {
        setIsEntering(false);
      }, 300);
      return;
    }

    if (prefersReducedMotion) {
      // Instant swap for reduced motion
      setSelectedId(id);
      setDisplayedProblem(newProblem);
      return;
    }

    // Start exit animation
    setIsExiting(true);

    // After exit animation (150ms), update content and start enter animation
    setTimeout(() => {
      setSelectedId(id);
      setDisplayedProblem(newProblem);
      setIsExiting(false);
      setIsEntering(true);

      // Remove entering state after animation completes (250ms)
      setTimeout(() => {
        setIsEntering(false);
      }, 300);
    }, 150);
  };

  const handleMouseDown = (id: number) => {
    if (!prefersReducedMotion) {
      setPressedId(id);
    }
  };

  const handleMouseUp = () => {
    setPressedId(null);
  };

  // Scroll content to top when problem changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedId]);

  // Smooth fade + slide animation
  const getContentClasses = () => {
    if (prefersReducedMotion) return "opacity-100 translate-y-0";

    if (isExiting) {
      return "opacity-0 transition-all duration-150 ease-out";
    }

    if (isEntering) {
      return "opacity-100 translate-y-0 transition-all duration-250 ease-out";
    }

    return "opacity-100 translate-y-0";
  };

  // Initial state for entering elements (slide up from 8px)
  const getInitialTransform = () => {
    if (isEntering) return "";
    return "";
  };

  return (
    <div className="mt-8">
      {/* Desktop: Split-screen layout - both columns equal height */}
      <div className="hidden lg:flex lg:gap-7">
        {/* Left Side - Problem List */}
        <div className="w-2/5 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
          {problems.map((problem, index) => {
            const IconComponent = problem.Icon;
            const isActive = selectedId === problem.id;
            const isLast = index === problems.length - 1;
            const isPressed = pressedId === problem.id;
            return (
              <button
                key={problem.id}
                onClick={() => handleSelect(problem.id)}
                onMouseDown={() => handleMouseDown(problem.id)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={`w-full cursor-pointer px-5 py-4 text-left transition-all duration-200 ease-out ${
                  !isLast ? "border-b border-border" : ""
                } ${
                  isActive
                    ? "border-l-4 border-l-primary bg-[#F0F7F4]"
                    : "border-l-4 border-l-transparent bg-white hover:bg-gray-50"
                } ${isPressed && !prefersReducedMotion ? "scale-[0.98]" : "scale-100"}`}
                style={{ transitionProperty: "background-color, border-color, transform" }}
              >
                <div className="flex items-start gap-3">
                  <IconComponent
                    size={20}
                    strokeWidth={1.5}
                    className={`mt-0.5 shrink-0 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-[#6B6B6B]"
                    }`}
                  />
                  <div>
                    <h4
                      className={`text-base font-semibold leading-tight transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-dark"
                      }`}
                    >
                      {problem.headline}
                    </h4>
                    <p
                      className={`mt-1 text-sm leading-snug transition-colors duration-200 ${
                        isActive ? "text-text" : "text-text-light"
                      }`}
                    >
                      {problem.brief}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side - Problem Details */}
        <div
          ref={contentRef}
          className="flex w-3/5 items-start"
        >
          {displayedProblem ? (
            <div
              className={`w-full rounded-xl border border-border bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ${getContentClasses()}`}
            >
              <h3 className="mb-5 text-2xl font-bold text-dark">
                {displayedProblem.headline}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    What we find
                  </h4>
                  <p className="text-base leading-relaxed text-text">
                    {displayedProblem.whatWeFind}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    What we build
                  </h4>
                  <p className="text-base leading-relaxed text-text">
                    {displayedProblem.whatWeBuild}
                  </p>
                </div>

                <div className="rounded-lg border border-primary/30 bg-[#E5F0E8] p-4">
                  <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    Result
                  </h4>
                  <p className="text-base font-medium text-primary">
                    {displayedProblem.result}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full items-center justify-center rounded-xl border border-dashed border-border bg-white/50 p-7 text-center">
              <p className="text-text-light">
                Select a problem to see how we solve it
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Accordion style */}
      <div className="space-y-3 lg:hidden">
        {problems.map((problem) => {
          const isOpen = selectedId === problem.id;
          const IconComponent = problem.Icon;
          return (
            <div
              key={problem.id}
              className="overflow-hidden rounded-xl border border-border bg-white"
            >
              <button
                onClick={() => handleSelect(problem.id)}
                className="flex w-full items-center gap-3 p-4 text-left"
              >
                <IconComponent
                  size={20}
                  strokeWidth={1.5}
                  className={`shrink-0 ${isOpen ? "text-primary" : "text-text-light"}`}
                />
                <span className={`flex-1 font-medium ${isOpen ? "text-primary" : "text-dark"}`}>
                  {problem.shortLabel}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-text-light transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border p-4 pt-3">
                    <p className="mb-3 text-sm text-text-light">{problem.brief}</p>
                    <div className="rounded-lg border border-primary/30 bg-[#E5F0E8] p-3">
                      <p className="text-sm font-medium text-primary">{problem.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
