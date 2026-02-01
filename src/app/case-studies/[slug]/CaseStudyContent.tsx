"use client";

import { ScrollReveal, StaggerContainer } from "@/components";
import { CaseStudy } from "@/lib/strapi";
import ResultCard from "./ResultCard";

interface Props {
  caseStudy: CaseStudy;
}

// Helper to detect video type from URL
function detectVideoType(url: string): 'youtube' | 'loom' | null {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  if (url.includes('loom.com')) {
    return 'loom';
  }
  return null;
}

// Helper to get YouTube embed URL
function getYouTubeEmbedUrl(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/,
    /youtube\.com\/shorts\/([^&\s]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  return null;
}

// Helper to get Loom embed URL
function getLoomEmbedUrl(url: string): string | null {
  const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  if (match?.[1]) {
    return `https://www.loom.com/embed/${match[1]}`;
  }
  return null;
}

export default function CaseStudyContent({ caseStudy }: Props) {
  // Determine embed URL - auto-detect type if videoType is "none" or not set
  let embedUrl: string | null = null;
  if (caseStudy.videoUrl) {
    const videoType = (caseStudy.videoType && caseStudy.videoType !== 'none')
      ? caseStudy.videoType
      : detectVideoType(caseStudy.videoUrl);

    if (videoType === "youtube") {
      embedUrl = getYouTubeEmbedUrl(caseStudy.videoUrl);
    } else if (videoType === "loom") {
      embedUrl = getLoomEmbedUrl(caseStudy.videoUrl);
    }
  }

  const hasProblemOrSolution = caseStudy.problem || caseStudy.solution;

  return (
    <div className="bg-white">
      {/* Video Section - Pulled up with negative margin for visual interest */}
      {embedUrl && (
        <section className="relative mx-auto max-w-5xl px-6 lg:px-10 -mt-10 lg:-mt-16 pb-10">
          <ScrollReveal duration={900} easing="easeOutExpo">
            <div className="relative">
              {/* Decorative shadow/glow behind video */}
              <div className="absolute -inset-4 bg-gradient-to-b from-[#004D36]/20 to-transparent rounded-3xl blur-2xl" />

              <div className="relative w-full overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl ring-1 ring-white/10" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={embedUrl}
                  title={caseStudy.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Problem & Solution - Side by side on desktop */}
      {hasProblemOrSolution && (
        <section className={`mx-auto max-w-6xl px-6 lg:px-10 ${embedUrl ? 'py-10' : 'py-12'}`}>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* The Problem */}
            {caseStudy.problem && (
              <ScrollReveal translateY={40} duration={800} easing="easeOutExpo">
                <div className="relative">
                  {/* Accent line */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B8860B] to-[#B8860B]/20 rounded-full hidden lg:block" />

                  <div className="lg:pl-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8860B]/10">
                        <svg className="h-5 w-5 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-dark lg:text-[28px]">
                        The Problem
                      </h2>
                    </div>
                    <div
                      className="prose prose-lg max-w-none text-text leading-[1.8] prose-p:text-text prose-strong:text-dark"
                      dangerouslySetInnerHTML={{ __html: caseStudy.problem }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* What We Built */}
            {caseStudy.solution && (
              <ScrollReveal delay={150} translateY={40} duration={800} easing="easeOutExpo">
                <div className="relative">
                  {/* Accent line */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20 rounded-full hidden lg:block" />

                  <div className="lg:pl-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-dark lg:text-[28px]">
                        What We Built
                      </h2>
                    </div>
                    <div
                      className="prose prose-lg max-w-none text-text leading-[1.8] prose-p:text-text prose-strong:text-dark"
                      dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Results Section - Full width with beige background */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="bg-cream py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center mb-8">
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
                  Measurable Impact
                </p>
                <h2 className="font-serif text-3xl font-bold text-dark lg:text-4xl">
                  Results
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              staggerDelay={120}
              translateY={50}
              duration={700}
              easing="easeOutExpo"
            >
              {caseStudy.results.map((result, index) => (
                <ResultCard key={index} stat={result.stat} text={result.text} />
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </div>
  );
}
