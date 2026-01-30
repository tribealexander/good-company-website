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
    // Use explicit videoType if set, otherwise auto-detect from URL
    const videoType = (caseStudy.videoType && caseStudy.videoType !== 'none')
      ? caseStudy.videoType
      : detectVideoType(caseStudy.videoUrl);

    if (videoType === "youtube") {
      embedUrl = getYouTubeEmbedUrl(caseStudy.videoUrl);
    } else if (videoType === "loom") {
      embedUrl = getLoomEmbedUrl(caseStudy.videoUrl);
    }
  }

  return (
    <>
      {/* Video Section */}
      {embedUrl && (
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <ScrollReveal>
            <div className="relative w-full overflow-hidden rounded-xl bg-dark shadow-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={embedUrl}
                title={caseStudy.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Problem Section */}
      {caseStudy.problem && (
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-dark mb-6 lg:text-[28px]">
              The Problem
            </h2>
            <div
              className="prose prose-lg max-w-none text-text leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: caseStudy.problem }}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Solution Section */}
      {caseStudy.solution && (
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-dark mb-6 lg:text-[28px]">
              What We Built
            </h2>
            <div
              className="prose prose-lg max-w-none text-text leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
            />
          </ScrollReveal>
        </section>
      )}

      {/* Results Section */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-dark mb-8 lg:text-[28px]">
              Results
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudy.results.map((result, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="rounded-xl border border-[#D4CFC7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {result.stat && (
                      <div className="text-3xl font-bold text-primary mb-2 lg:text-4xl">
                        {result.stat}
                      </div>
                    )}
                    <p className="text-text-light text-sm lg:text-base">
                      {result.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}
    </>
  );
}
