"use client";

import { useState, useRef } from "react";
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
      "Alex is one of the sharpest operators I know. Every conversation with him leaves me with a clearer picture of what's actually important and what's just noise. He thinks in systems, cuts through complexity, and genuinely wants to see the people around him win.",
    name: "Taylor Scollon",
    role: "Co-founder",
    company: "The Peak",
    image: "/images/taylor headshot.jpeg",
  },
  {
    id: 2,
    quote:
      "Alex is always a level-headed sounding board and the best kind of pressure cooker - someone who helps you formulate, execute, and perfect your ideas. Whether it's automations that streamline onboarding or introducing tech innovations to our team, Alex has consistently saved us time and, more importantly, saved me money.",
    name: "Mitch Starkman",
    role: "Owner",
    company: "Movement Sports Medicine + Physiotherapy",
    image: "/images/mitch headshot.jpeg",
  },
  {
    id: 3,
    quote:
      "Alex has a rare ability to take chaotic, half-formed thoughts and pinpoint the real bottleneck hiding in plain sight. He diagnoses the root issue and translates overwhelming goals into clear, strategic micro-steps. If you're building something big and feel stuck, Alex will bring clarity and real momentum.",
    name: "Angella Fajardo",
    role: "Founder",
    company: "Ella Events & Marketing",
    image: "/images/angella headshot.jpeg",
    imageScale: 1.3,
  },
  {
    id: 4,
    quote:
      "Alex blends the rare ability to capture a client's needs and trust with the organizational aptitude to deliver results. People and process; sales and strategy. He thinks like a visionary and executes like an implementor. During an extremely fluid COVID period, he was instrumental in helping our organization achieve milestone sales. I continue to rely on his unique business acumen today.",
    name: "Andrew Miller",
    role: "President",
    company: "Purple Frog Products",
    image: "/images/andrew headshot.jpeg",
  },
  {
    id: 5,
    quote:
      "Alex and the Good Company built a to-do list follow-up system that fits seamlessly into our existing processes and tools, namely Google Drive/Sheets and Slack. We'll keep working the way we already do, but now we have a bot that gently keeps tasks on our radar and keeps us on track without being obtrusive. It's perfect.",
    name: "Chris Spoke",
    role: "Partner",
    company: "Toronto Standard",
    image: "/images/chris spoke headshot.jpeg",
  },
  {
    id: 6,
    quote:
      "We hired Alex to integrate multiple platform customer data sets into a single client dashboard. He was thorough in his assessment of each platform's capabilities for automation and provided a solid recommendation with the associated development. Truly appreciate Alex's expertise and communication.",
    name: "Aden Smith",
    role: "Marketing Consultant",
    company: "Independent",
  },
  {
    id: 7,
    quote:
      "Alex has opened insights for me with a nimble and strategic way of thinking that I had been missing as an entrepreneur. Conversations with Alex, whether 20 minutes or 2 hours, leave me with enthusiasm and insight in ways that I wouldn't have discovered on my own. Great dude with a big brain who has a penchant for helping.",
    name: "Marko Lindhe",
    role: "Founder",
    company: "Marlin Capital",
    image: "/images/marko headshot.jpeg",
  },
];

function TestimonialCard({ testimonial, isMobile = false }: { testimonial: Testimonial; isMobile?: boolean }) {
  return (
    <div className={`flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 ${
      isMobile ? "w-full" : "h-[400px] w-[380px] shrink-0"
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

      <p className="flex-1 text-[14px] leading-[1.75] text-text">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        {testimonial.image ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover grayscale-[85%] contrast-[1.1] brightness-[1.05]"
              style={testimonial.imageScale ? { transform: `scale(${testimonial.imageScale})` } : undefined}
            />
          </div>
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {testimonial.name.split(" ").map(n => n[0]).join("")}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-dark">
            {testimonial.name}
          </p>
          <p className="text-xs text-text-light">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // roughly one card width
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
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

      {/* Desktop: Horizontal scroll with side arrows */}
      <div
        className="relative hidden md:block"
        aria-label="Client testimonials"
        role="region"
      >
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-lg transition-all ${
            canScrollLeft
              ? "text-text hover:border-primary hover:text-primary hover:shadow-xl"
              : "text-border cursor-not-allowed opacity-50"
          }`}
          aria-label="Previous testimonials"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-lg transition-all ${
            canScrollRight
              ? "text-text hover:border-primary hover:text-primary hover:shadow-xl"
              : "text-border cursor-not-allowed opacity-50"
          }`}
          aria-label="Next testimonials"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-12 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-12 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="scrollbar-hide flex gap-6 overflow-x-auto px-16 py-4"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
}
