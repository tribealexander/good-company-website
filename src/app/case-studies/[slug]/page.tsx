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
        <main className="bg-cream min-h-screen">
          {/* Back Link */}
          <div className="mx-auto max-w-4xl px-6 pt-28 lg:px-10 lg:pt-32">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-primary hover:text-primary-light transition-colors group"
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
          </div>

          {/* Hero Section */}
          <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
            <ScrollReveal>
              {/* Department Tag */}
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                {caseStudy.department}
              </span>

              {/* Title */}
              <h1 className="text-4xl font-bold text-dark md:text-5xl lg:text-[48px] lg:leading-tight mb-4">
                {caseStudy.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-text-light leading-relaxed max-w-3xl">
                {caseStudy.description}
              </p>
            </ScrollReveal>
          </section>

          {/* Main Content - Client Component for interactivity */}
          <CaseStudyContent caseStudy={caseStudy} />

          {/* CTA Section */}
          <section className="bg-[#004D36] px-6 py-16 lg:px-10 lg:py-20 mt-16">
            <div className="mx-auto max-w-[600px] text-center">
              <ScrollReveal>
                <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                  Got a Similar Problem?
                </h2>
                <p className="mb-8 text-lg text-[#A8D5C2]">
                  Let&apos;s talk through it. No pressure, no pitch.
                </p>
                <Link
                  href="/#contact-form"
                  className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#004D36] transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_20px_rgba(184,134,11,0.3)]"
                >
                  Book a Brainstorm →
                </Link>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
