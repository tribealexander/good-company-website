"use client";

import { Header, Footer, ScrollReveal, PageTransition } from "@/components";
import type { Presentation } from "@/lib/presentations";

export default function PresentationContent({
  presentation,
}: {
  presentation: Presentation;
}) {
  const formattedDate = new Date(
    presentation.date + "T12:00:00"
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <PageTransition>
        <main>
          {/* Hero */}
          <section className="bg-[#004D36] px-6 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-40">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#A8D5C2]">
                {presentation.clientName} &middot; {formattedDate}
              </p>
              <h1
                className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-[48px] lg:leading-tight"
                dangerouslySetInnerHTML={{ __html: presentation.title }}
              />
              <p className="text-base leading-[1.7] text-[#A8D5C2] lg:text-lg">
                {presentation.subtitle}
              </p>
            </div>
          </section>

          {/* Sections */}
          {presentation.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            const isDark = section.variant === "dark";
            const isHighlight = section.variant === "highlight";

            let bgClass = isEven ? "bg-white" : "bg-[#F7F5F0]";
            if (isDark) bgClass = "bg-[#004D36]";
            if (isHighlight) bgClass = "bg-[#FFFBEB]";

            return (
              <section
                key={index}
                className={`${bgClass} px-6 py-12 lg:px-10 lg:py-20`}
              >
                <div className="mx-auto max-w-3xl">
                  <ScrollReveal>
                    <div className="mb-8">
                      <h2
                        className={`font-serif text-2xl font-semibold lg:text-3xl ${
                          isDark ? "text-white" : "text-[#1A1A1A]"
                        }`}
                      >
                        {section.title}
                      </h2>
                      {section.subtitle && (
                        <p
                          className={`mt-2 text-base lg:text-lg ${
                            isDark ? "text-[#A8D5C2]" : "text-[#555555]"
                          }`}
                        >
                          {section.subtitle}
                        </p>
                      )}
                    </div>
                    <div
                      className={`prose prose-sm max-w-none lg:prose-base ${
                        isDark
                          ? "text-[#A8D5C2] prose-strong:text-white prose-p:text-[#A8D5C2]"
                          : "text-[#555555] prose-strong:text-[#1A1A1A] prose-headings:text-[#1A1A1A]"
                      }`}
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </ScrollReveal>
                </div>
              </section>
            );
          })}

          {/* CTA */}
          <section className="bg-[#004D36] px-6 py-16 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <ScrollReveal>
                <h2 className="font-serif mb-4 text-2xl font-semibold text-white lg:text-3xl">
                  Ready to talk about it?
                </h2>
                <p className="mb-8 text-base text-[#A8D5C2] lg:text-lg">
                  This is a conversation, not a commitment. Let&apos;s discuss
                  what makes sense for your team.
                </p>
                <a
                  href="mailto:alex@yourgoodcompany.com"
                  className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#004D36] transition-all duration-300 hover:bg-[#B8860B] hover:text-white"
                >
                  Get in Touch
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
