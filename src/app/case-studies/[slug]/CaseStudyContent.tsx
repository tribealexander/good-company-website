"use client";

import { ScrollReveal } from "@/components";
import { CaseStudy } from "@/lib/strapi";

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
        <section className="relative mx-auto max-w-5xl px-6 lg:px-10 -mt-10 lg:-mt-16 pb-16">
          <ScrollReveal>
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
        <section className={`mx-auto max-w-6xl px-6 lg:px-10 ${embedUrl ? 'py-16' : 'py-20'}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* The Problem */}
            {caseStudy.problem && (
              <ScrollReveal>
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
                      <h2 className="text-2xl font-bold text-dark lg:text-[28px]">
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
              <ScrollReveal delay={100}>
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
                      <h2 className="text-2xl font-bold text-dark lg:text-[28px]">
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
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
                  Measurable Impact
                </p>
                <h2 className="text-3xl font-bold text-dark lg:text-4xl">
                  Results
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudy.results.map((result, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group relative rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent" />

                    {result.stat && (
                      <div className="text-4xl font-bold text-primary mb-3 lg:text-5xl font-mono tracking-tight">
                        {result.stat}
                      </div>
                    )}
                    <p className="text-text text-base lg:text-lg leading-relaxed">
                      {result.text}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
