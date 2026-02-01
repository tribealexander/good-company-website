"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { Header, Footer, PageTransition } from "@/components";
import { CaseStudy } from "@/lib/strapi";

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface CaseStudiesClientProps {
  initialCaseStudies: CaseStudy[];
}

export default function CaseStudiesClient({ initialCaseStudies }: CaseStudiesClientProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const gridRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(0);

  // Department filters
  const departments = [
    "All",
    "Operations",
    "Sales",
    "Customer Success",
    "Finance",
    "Marketing",
    "HR",
    "Field Services",
  ];

  // Filter case studies based on active filter
  const filteredCaseStudies =
    activeFilter === "All"
      ? initialCaseStudies
      : initialCaseStudies.filter((study) => study.department === activeFilter);

  // Get visible case studies based on Load More
  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);
  const hasMore = filteredCaseStudies.length > visibleCount;

  // Animate cards when filter changes or load more is clicked
  useEffect(() => {
    if (!gridRef.current || prefersReducedMotion()) return;

    const cards = gridRef.current.querySelectorAll("[data-case-study-card]");
    if (cards.length === 0) return;

    // Determine if this is a filter change or load more
    const isLoadMore = prevCountRef.current > 0 && visibleCount > prevCountRef.current;
    const startIndex = isLoadMore ? prevCountRef.current : 0;

    // Get cards to animate
    const cardsToAnimate = Array.from(cards).slice(startIndex);

    if (cardsToAnimate.length === 0) {
      prevCountRef.current = visibleCount;
      return;
    }

    // Set initial state
    cardsToAnimate.forEach((card) => {
      (card as HTMLElement).style.opacity = "0";
      (card as HTMLElement).style.transform = "translateY(30px)";
    });

    // Animate with stagger
    animate(cardsToAnimate, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outExpo",
    });

    prevCountRef.current = visibleCount;
  }, [activeFilter, visibleCount, visibleCaseStudies.length]);

  // Reset visible count when filter changes
  const handleFilterChange = (department: string) => {
    prevCountRef.current = 0; // Reset for filter change animation
    setActiveFilter(department);
    setVisibleCount(6);
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero */}
          <section className="bg-cream pb-6 pt-28 lg:pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <h1 className="font-serif mb-2 text-4xl font-bold tracking-tight text-dark md:text-5xl">
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
              {/* Department Filters - Left aligned, tight spacing */}
              <div className="mb-6 flex flex-wrap gap-2">
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
              {visibleCaseStudies.length > 0 ? (
                <div ref={gridRef} className="grid gap-x-8 gap-y-12 md:grid-cols-2">
                  {visibleCaseStudies.map((study) => (
                    <Link
                      key={study.id}
                      href={`/case-studies/${study.slug}`}
                      className="group block"
                      data-case-study-card
                    >
                      <article>
                        {/* Thumbnail */}
                        <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl bg-[#3D3D3D] transition-all duration-300 group-hover:scale-[1.02]">
                          {/* Thumbnail Image */}
                          {study.thumbnailUrl ? (
                            <Image
                              src={study.thumbnailUrl}
                              alt={study.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            /* Placeholder for no thumbnail */
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#004D36] to-[#006747]">
                              <svg className="h-12 w-12 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                              </svg>
                            </div>
                          )}

                          {/* Subtle gradient overlay for depth */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                          {/* Video indicator if has video */}
                          {study.videoUrl && (
                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              Video
                            </div>
                          )}
                        </div>

                        {/* Department Tag */}
                        <span className="mb-2 inline-block rounded-full bg-[#E8EDE9] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#006747]">
                          {study.department}
                        </span>

                        {/* Title */}
                        <h3 className="mb-2 text-xl font-semibold text-[#1A1A1A] group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-3 text-[15px] leading-relaxed text-[#666666] line-clamp-2">
                          {study.description}
                        </p>

                        {/* Results */}
                        <div className="space-y-1 mb-4">
                          {study.results.slice(0, 3).map((result, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="mt-0.5 text-sm text-[#006747]">✓</span>
                              <span className="text-sm text-[#666666]">
                                {typeof result === 'string' ? result : result.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Read Case Study Link */}
                        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary-light transition-colors">
                          Read Case Study
                          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                /* Empty state when no case studies */
                <div className="py-16 text-center">
                  <p className="text-lg text-text-light">
                    {activeFilter === "All"
                      ? "Case studies coming soon."
                      : "No case studies in this category yet."}
                  </p>
                </div>
              )}

              {/* Load More Button */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="rounded-lg border border-[#E0DBD3] bg-transparent px-8 py-3 text-sm font-medium text-[#3D3D3D] transition-all duration-200 hover:bg-[#E8EDE9]"
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
              <h2 className="font-serif mb-4 text-2xl font-medium text-white lg:text-3xl">
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
      </PageTransition>
      <Footer />
    </>
  );
}
