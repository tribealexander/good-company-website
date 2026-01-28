"use client";

import { useState } from "react";
import { Header, Footer } from "@/components";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

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
        "Weekly reports now generated automatically",
      ],
    },
    {
      id: "real-time-project-profitability-dashboard",
      department: "Finance",
      title: "Real-Time Project Profitability Dashboard",
      description:
        "Live margin tracking and utilization visibility for a professional services firm.",
      results: [
        "Real-time margin tracking per project",
        "15% improvement in utilization",
        "Eliminated end-of-month surprises",
      ],
    },
    {
      id: "knowledge-capture-system",
      department: "Operations",
      title: "Knowledge Capture System",
      description:
        "Process documentation and institutional knowledge system for a growing team.",
      results: [
        "Complete process documentation",
        "40% faster employee onboarding",
        "Reduced reliance on tribal knowledge",
      ],
    },
  ];

  // Filter case studies based on active filter
  const filteredCaseStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.department === activeFilter);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-dark md:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="text-xl text-text-light">
              Real implementations, real results.
            </p>
          </div>
        </section>

        {/* Filters + Case Studies Grid */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Department Filters */}
            <div className="mb-12 flex flex-wrap gap-3">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setActiveFilter(department)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((study) => (
                <article
                  key={study.id}
                  className="group rounded-xl border border-[#E0DBD3] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                >
                  {/* Video Thumbnail Placeholder */}
                  <div className="mb-4 aspect-video rounded-lg bg-[#F5F5F5]" />

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
