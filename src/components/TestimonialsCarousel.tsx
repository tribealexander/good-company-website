"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  imageScale?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Alex is always a level-headed sounding board and the best kind of pressure cooker - someone who helps you formulate, execute, and perfect your ideas. Whether it's automations that streamline onboarding or introducing tech innovations to our team, Alex has consistently saved us time and, more importantly, saved me money.",
    name: "Mitch Starkman",
    role: "Owner",
    company: "Movement Sports Medicine + Physiotherapy",
    image: "/images/mitch headshot.jpeg",
  },
  {
    id: 2,
    quote:
      "Alex has a rare ability to take chaotic, half-formed thoughts and pinpoint the real bottleneck hiding in plain sight. He diagnoses the root issue and translates overwhelming goals into clear, strategic micro-steps. If you're building something big and feel stuck, Alex will bring clarity and real momentum.",
    name: "Angella Fajardo",
    role: "Founder",
    company: "Ella Events & Marketing",
    image: "/images/angella headshot.jpeg",
    imageScale: 1.3,
  },
  {
    id: 3,
    quote:
      "Alex blends the rare ability to capture a client's needs and trust with the organizational aptitude to deliver results. People and process; sales and strategy. He thinks like a visionary and executes like an implementor. During an extremely fluid COVID period, he was instrumental in helping our organization achieve milestone sales. I continue to rely on his unique business acumen today.",
    name: "Andrew Miller",
    role: "President",
    company: "Purple Frog Products",
    image: "/images/andrew headshot.jpeg",
  },
  {
    id: 4,
    quote:
      "Alex and the Good Company built a to-do list follow-up system that fits seamlessly into our existing processes and tools, namely Google Drive/Sheets and Slack. We'll keep working the way we already do, but now we have a bot that gently keeps tasks on our radar and keeps us on track without being obtrusive. It's perfect.",
    name: "Chris Spoke",
    role: "Partner",
    company: "Toronto Standard",
    image: "/images/chris spoke headshot.jpeg",
  },
  {
    id: 5,
    quote:
      "We hired Alex to integrate multiple platform customer data sets into a single client dashboard. He was thorough in his assessment of each platform's capabilities for automation and provided a solid recommendation with the associated development. Truly appreciate Alex's expertise and communication.",
    name: "Aden Smith",
    role: "Marketing Consultant",
    company: "Independent",
  },
  {
    id: 6,
    quote:
      "Alex has opened insights for me with a nimble and strategic way of thinking that I had been missing as an entrepreneur. Conversations with Alex, whether 20 minutes or 2 hours, leave me with enthusiasm and insight in ways that I wouldn't have discovered on my own. Great dude with a big brain who has a penchant for helping.",
    name: "Marko Lindhe",
    role: "Founder",
    company: "Marlin Capital",
    image: "/images/marko headshot.jpeg",
  },
  {
    id: 7,
    quote:
      "Alex is one of the sharpest operators I know. Every conversation with him leaves me with a clearer picture of what's actually important and what's just noise. He thinks in systems, cuts through complexity, and genuinely wants to see the people around him win.",
    name: "Taylor Scollon",
    role: "Co-founder",
    company: "The Peak",
    image: "/images/taylor headshot.jpeg",
  },
];

function TestimonialCard({ testimonial, isMobile = false }: { testimonial: Testimonial; isMobile?: boolean }) {
  return (
    <div className={`flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 ${
      isMobile ? "w-full" : ""
    }`}>
      <div className="mb-3">
        <svg
          className="h-7 w-7 text-primary/20"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
        </svg>
      </div>

      <p className="flex-1 text-base leading-relaxed text-text">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        {testimonial.image ? (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover grayscale-[85%] contrast-[1.1] brightness-[1.05]"
              style={testimonial.imageScale ? { transform: `scale(${testimonial.imageScale})` } : undefined}
            />
          </div>
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {testimonial.name.split(" ").map(n => n[0]).join("")}
          </div>
        )}
        <div>
          <p className="font-semibold text-dark">
            {testimonial.name}
          </p>
          <p className="text-sm text-text-light">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Mobile: Stacked vertical layout */}
      <div className="space-y-4 md:hidden" aria-label="Client testimonials" role="region">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isMobile={true}
          />
        ))}
      </div>

      {/* Desktop: Single testimonial with arrows */}
      <div
        className="relative hidden md:block"
        aria-label="Client testimonials"
        role="region"
      >
        <div className="mx-auto max-w-3xl">
          {/* Testimonial card with fade transition */}
          <div className="relative min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-light transition-all hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-text-light"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-light transition-all hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
