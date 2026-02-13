import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/strapi";
import { Header, Footer, ScrollReveal, PageTransition } from "@/components";
import CaseStudyContent from "./CaseStudyContent";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Good Company",
    };
  }

  return {
    title: `${caseStudy.title} | Good Company Case Study`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section - Dark green background */}
          <section className="relative bg-[#004D36] px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-36 overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#004D36] via-[#005a3d] to-[#003d2e] opacity-50" />

            {/* Decorative elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-5xl">
              {/* Back Link */}
              <Link
                href="/case-studies"
                className="inline-flex items-center text-[#A8D5C2] hover:text-white transition-colors group mb-8"
              >
                <svg
                  className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Case Studies
              </Link>

              <ScrollReveal>
                {/* Department Tag */}
                <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
                  {caseStudy.department}
                </span>

                {/* Title */}
                <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-[56px] lg:leading-[1.1] mb-6 max-w-4xl">
                  {caseStudy.title}
                </h1>

                {/* Description */}
                <p className="text-xl text-[#A8D5C2] leading-relaxed max-w-3xl lg:text-2xl">
                  {caseStudy.description}
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Main Content */}
          <CaseStudyContent caseStudy={caseStudy} />

          {/* CTA Section */}
          <section className="bg-[#004D36] px-6 py-20 lg:px-10 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <p className="text-[#A8D5C2] text-sm font-medium uppercase tracking-wider mb-4">
                  Ready to solve your problem?
                </p>
                <h2 className="font-serif mb-6 text-3xl font-bold text-white lg:text-4xl">
                  Got a Similar Challenge?
                </h2>
                <p className="mb-10 text-lg text-[#A8D5C2] max-w-xl mx-auto">
                  Let&apos;s talk through it. We&apos;ll help you identify the root cause and map out a solution—no pressure, no pitch.
                </p>
                <a
                  href="/contact"
                  className="inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#004D36] transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_30px_rgba(184,134,11,0.4)] hover:scale-105"
                >
                  Book a Brainstorm →
                </a>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
