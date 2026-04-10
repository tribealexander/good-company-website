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
      "Critical knowledge lives in someone's head—or scattered across notebooks, inboxes, and conversations nobody documented. When that person is on vacation, out sick, or leaves, everything slows down.",
    whatWeBuild:
      "Systems that capture knowledge as work happens: decision logs, documented processes, and searchable records. Expertise becomes shared, not person-dependent.",
    result: "Scalable operations that don't break when someone's unavailable.",
    Icon: BrainCircuit,
  },
  {
    id: 2,
    headline: "The Reporting Treadmill",
    shortLabel: "Manual Reporting",
    brief: "Spending hours every week assembling numbers by hand",
    whatWeFind:
      "Someone on your team spends hours every week pulling numbers from different systems, copying them into spreadsheets, and assembling reports that are already outdated by the time anyone reads them.",
    whatWeBuild:
      "Automated reporting that pulls from your existing tools and updates in real time. Early warning alerts flag issues before they escalate. No more chasing numbers.",
    result:
      "Hours reclaimed and proactive decisions instead of reactive firefighting.",
    Icon: BarChart3,
  },
  {
    id: 3,
    headline: "The \"Are We Profitable?\" Problem",
    shortLabel: "Profitability",
    brief: "You don't know if a job made money until weeks later",
    whatWeFind:
      "Job profitability is calculated manually—often weeks after the work is done. By the time you realize a project lost money, it's too late to do anything about it.",
    whatWeBuild:
      "Real-time tracking of time, costs, and margins per job or project. Alerts fire when budgets trend off-track, giving you visibility while you can still act.",
    result: "Know your margins in real-time. Stop bleeding money on jobs you thought were profitable.",
    Icon: TrendingUp,
  },
  {
    id: 4,
    headline: "The Invisible Work",
    shortLabel: "Hidden Delays",
    brief: "Work sits waiting and nobody sees it",
    whatWeFind:
      "Work stalls in approval queues, handoff points, and inboxes that nobody's watching. A quote waits three days for sign-off. A permit request sits because nobody flagged it. 20-40% of cycle time is just waiting.",
    whatWeBuild:
      "Automated handoffs, escalation rules, and visibility into where work actually sits. Bottlenecks become obvious before they cause delays.",
    result:
      "Jobs move faster and you see friction points before they cause delays.",
    Icon: Clock,
  },
  {
    id: 5,
    headline: "The Fire Drill Culture",
    shortLabel: "Fire Drills",
    brief: "Always reacting, catching issues after complaints",
    whatWeFind:
      "Your team is always reacting. You find out about problems when a customer calls angry, when a deadline blows past, or when something breaks in the field. Between check-ins, you're flying blind.",
    whatWeBuild:
      "Continuous monitoring that tracks service quality, job status, and operational metrics automatically. You catch problems early—not after they blow up.",
    result: "Move from reactive firefighting to proactive problem-solving.",
    Icon: Flame,
  },
  {
    id: 6,
    headline: "Flying Blind on Client Health",
    shortLabel: "Client Health",
    brief: "No visibility into who's happy until they leave",
    whatWeFind:
      "You don't know which clients are happy and which are about to walk. Your best customer hasn't called in two months—is that good or bad? Retention runs on gut feel, not data.",
    whatWeBuild:
      "Automated tracking of client engagement, response times, and warning signs. You see at-risk accounts before they leave.",
    result: "Protect revenue by seeing problems while you can still fix them.",
    Icon: HeartPulse,
  },
];

export default function ProblemSelectorV2({
  onProblemChange,
}: ProblemSelectorProps) {
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [displayedProblem, setDisplayedProblem] = useState<Problem | null>(problems[0]);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [pressedId, setPressedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
                onMouseEnter={() => setHoveredId(problem.id)}
                onMouseLeave={() => { handleMouseUp(); setHoveredId(null); }}
                className={`w-full cursor-pointer px-5 py-4 text-left transition-all duration-300 ease-out ${
                  !isLast ? "border-b border-border" : ""
                } ${
                  isActive
                    ? "border-l-4 border-l-primary bg-[#F0F7F4]"
                    : "border-l-4 border-l-transparent bg-white hover:bg-gray-50"
                } ${isPressed && !prefersReducedMotion ? "scale-[0.98]" : "scale-100"}`}
                style={{
                  transitionProperty: "background-color, border-color, transform, opacity",
                  opacity: isActive ? 1 : hoveredId === problem.id ? 0.85 : 0.5,
                }}
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
