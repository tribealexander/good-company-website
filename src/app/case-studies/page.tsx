"use client";

import { useState } from "react";
import { Header, Footer } from "@/components";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Department filters
  const departments = [
    "All",
    "Operations",
    "Sales",
    "Customer Success",
    "Finance",
    "Field Services",
  ];

  // CMS-ready case study data structure
  interface CaseStudy {
    id: string;
    department: string;
    title: string;
    description: string;
    results: string[];
    videoUrl?: string;
  }

  const caseStudies: CaseStudy[] = [
    {
      id: "customer-success-workflow-automation",
      department: "Operations",
      title: "Customer Success Workflow Automation",
      description:
        "Automated reporting and early warning system for a managed services provider.",
      results: [
        "80% reduction in reporting time",
        "3 at-risk accounts flagged early",
      ],
    },
    {
      id: "real-time-project-profitability-dashboard",
      department: "Finance",
      title: "Real-Time Project Profitability Dashboard",
      description:
        "Live margin tracking and utilization visibility for a professional services firm.",
      results: [
        "Real-time margin tracking",
        "15% improvement in utilization",
      ],
    },
    {
      id: "knowledge-capture-system",
      department: "Operations",
      title: "Knowledge Capture System",
      description:
        "Process documentation and institutional knowledge system for a growing team.",
      results: [
        "40% faster onboarding",
        "Reduced tribal knowledge dependency",
      ],
    },
    {
      id: "lead-response-automation",
      department: "Sales",
      title: "Lead Response Automation",
      description:
        "Automated lead routing and follow-up sequences for a sales team.",
      results: [
        "Response time under 5 minutes",
        "23% increase in conversion",
      ],
    },
    {
      id: "client-health-monitoring",
      department: "Customer Success",
      title: "Client Health Monitoring",
      description:
        "Proactive alerting system for at-risk accounts.",
      results: [
        "Churn reduced by 18%",
        "Early warning on 12 accounts",
      ],
    },
    {
      id: "technician-accountability-system",
      department: "Field Services",
      title: "Technician Accountability System",
      description:
        "GPS tracking and job note compliance scoring for field techs.",
      results: [
        "35% improvement in note quality",
        "Real-time location visibility",
      ],
    },
    {
      id: "invoice-automation",
      department: "Operations",
      title: "Invoice Automation",
      description:
        "End-to-end invoice generation and reconciliation system.",
      results: [
        "90% reduction in manual entry",
        "Faster payment cycles",
      ],
    },
    {
      id: "budget-vs-actual-tracking",
      department: "Finance",
      title: "Budget vs. Actual Tracking",
      description:
        "Automated budget monitoring with variance alerts.",
      results: [
        "Weekly variance reports automated",
        "No more end-of-quarter surprises",
      ],
    },
    {
      id: "pipeline-visibility-dashboard",
      department: "Sales",
      title: "Pipeline Visibility Dashboard",
      description:
        "Real-time sales pipeline with stage tracking and forecasting.",
      results: [
        "Accurate 90-day forecasting",
        "Rep accountability improved",
      ],
    },
    {
      id: "onboarding-workflow-automation",
      department: "Customer Success",
      title: "Onboarding Workflow Automation",
      description:
        "Automated onboarding sequences with milestone tracking.",
      results: [
        "50% faster time-to-value",
        "Nothing falls through cracks",
      ],
    },
    {
      id: "dispatch-optimization",
      department: "Field Services",
      title: "Dispatch Optimization",
      description:
        "Automated job assignment based on location and skill.",
      results: [
        "20% reduction in drive time",
        "Better tech utilization",
      ],
    },
    {
      id: "reporting-consolidation",
      department: "Operations",
      title: "Reporting Consolidation",
      description:
        "Unified dashboard pulling from 5 systems.",
      results: [
        "10 hours/week saved",
        "Single source of truth",
      ],
    },
  ];

  // Filter case studies based on active filter
  const filteredCaseStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.department === activeFilter);

  // Get visible case studies based on Load More
  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);
  const hasMore = filteredCaseStudies.length > visibleCount;

  // Reset visible count when filter changes
  const handleFilterChange = (department: string) => {
    setActiveFilter(department);
    setVisibleCount(6);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream pb-8 pt-28 lg:pb-10 lg:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-dark md:text-5xl">
              Case Studies
            </h1>
            <p className="text-lg text-text-light">
              Real implementations, real results.
            </p>
          </div>
        </section>

        {/* Filters + Case Studies Grid */}
        <section className="bg-cream pb-16 pt-6 lg:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Department Filters */}
            <div className="mb-8 flex flex-wrap gap-2">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => handleFilterChange(department)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFilter === department
                      ? "bg-[#004D36] text-white"
                      : "border border-[#E0DBD3] bg-white text-dark hover:bg-[#E8EDE9]"
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>

            {/* Case Study Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {visibleCaseStudies.map((study) => (
                <article
                  key={study.id}
                  className="group rounded-xl border border-[#E0DBD3] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                >
                  {/* Video Thumbnail with Play Button */}
                  <div className="relative mb-5 aspect-video cursor-pointer overflow-hidden rounded-lg bg-[#3D3D3D] transition-all duration-200 group-hover:shadow-md">
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 transition-transform duration-200 group-hover:scale-110">
                        <svg
                          className="ml-1 h-5 w-5 text-[#3D3D3D]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-all duration-200 group-hover:bg-black/10" />
                  </div>

                  {/* Department Tag */}
                  <span className="mb-2 inline-block rounded-full bg-[#E8EDE9] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#006747]">
                    {study.department}
                  </span>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-[#1A1A1A]">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-[#4A4A4A]">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-1.5">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="mt-0.5 text-sm text-primary">✓</span>
                        <span className="text-sm text-[#4A4A4A]">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state when no results */}
            {filteredCaseStudies.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-lg text-text-light">
                  No case studies in this category yet.
                </p>
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="rounded-full border border-[#E0DBD3] bg-white px-8 py-3 text-sm font-medium text-[#3D3D3D] transition-all duration-200 hover:bg-[#E8EDE9]"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#004D36] py-16 lg:py-20">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
            <h2 className="mb-4 text-2xl font-medium text-white lg:text-3xl">
              Got a Similar Problem?
            </h2>
            <p className="mb-8 text-lg text-[#A8D5C2]">
              Let&apos;s talk through it.
            </p>
            <a
              href="/#contact-form"
              className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#004D36] transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_20px_rgba(184,134,11,0.3)]"
            >
              Book a Brainstorm →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
