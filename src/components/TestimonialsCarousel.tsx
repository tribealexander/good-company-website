"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Alex is always a level-headed sounding board and the best kind of pressure cooker - someone who helps you formulate, execute, and perfect your ideas. Whether it's automations that streamline onboarding or introducing tech innovations to our team, Alex has consistently saved us time and, more importantly, saved me money.",
    name: "Mitch Starkman",
    role: "Owner",
    company: "Movement Sports Medicine + Physiotherapy",
  },
  {
    id: 2,
    quote:
      "Alex blends the rare ability to capture a client's needs and trust with the organizational aptitude to deliver results. People and process; sales and strategy. He thinks like a visionary and executes like an implementor. During an extremely fluid COVID period, he was instrumental in helping our organization achieve milestone sales. It was a privilege to work with Alex during this time and I continue to rely on his unique business acumen today.",
    name: "Andrew Miller",
    role: "President",
    company: "Purple Frog Products",
  },
  {
    id: 3,
    quote:
      "We hired Alex to integrate multiple platform customer data sets into a single client dashboard. He was thorough in his assessment of each platform's capabilities for automation and provided a solid recommendation with the associated development. Truly appreciate Alex's expertise and communication. We will definitely use his services in the future.",
    name: "Aden Smith",
    role: "Marketing Consultant",
    company: "Independent",
  },
  {
    id: 4,
    quote:
      "I've worked with Alex for a few months now, and he has opened insights for me with a nimble and strategic way of thinking that I had been missing as an entrepreneur. Conversations with Alex, whether 20 minutes or 2 hours, leave me with enthusiasm and insight in ways that I wouldn't have discovered on my own. Great dude with a big brain who has a penchant for helping.",
    name: "Marko Lindhe",
    role: "Founder",
    company: "Marlin Capital",
  },
];

// Single testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col">
      {/* Quote text */}
      <p className="flex-1 text-base leading-relaxed text-text">
        {testimonial.quote}
      </p>

      {/* Attribution */}
      <div className="mt-6 border-t border-[#E5E5E5] pt-4">
        <p className="text-sm font-semibold text-dark">
          {testimonial.name}
        </p>
        <p className="text-xs text-text-light">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goToPrev = useCallback(() => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [canGoPrev]);

  const goToNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [canGoNext]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Threshold for swipe (50px)
    if (translateX > 50 && canGoPrev) {
      goToPrev();
    } else if (translateX < -50 && canGoNext) {
      goToNext();
    }

    setTranslateX(0);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setTranslateX(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 50 && canGoPrev) {
      goToPrev();
    } else if (translateX < -50 && canGoNext) {
      goToNext();
    }

    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  // Calculate the width percentage for each card based on cards per view
  const cardWidthPercent = 100 / cardsPerView;
  const gapAdjustment = (24 * (cardsPerView - 1)) / cardsPerView; // 24px gap (gap-6)

  return (
    <div
      className="relative"
      aria-label="Client testimonials"
      role="region"
    >
      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        disabled={!canGoPrev}
        aria-label="Previous testimonials"
        className={`absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md transition-all duration-200 lg:-left-6 ${
          canGoPrev
            ? "hover:bg-primary hover:text-white hover:scale-105"
            : "cursor-not-allowed opacity-40"
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        disabled={!canGoNext}
        aria-label="Next testimonials"
        className={`absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md transition-all duration-200 lg:-right-6 ${
          canGoNext
            ? "hover:bg-primary hover:text-white hover:scale-105"
            : "cursor-not-allowed opacity-40"
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="overflow-hidden px-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          className={`flex gap-6 ${
            prefersReducedMotion ? "" : "transition-transform duration-400 ease-out"
          }`}
          style={{
            transform: `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * 24}px + ${isDragging ? translateX : 0}px))`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="shrink-0"
              style={{
                width: `calc(${cardWidthPercent}% - ${gapAdjustment}px)`,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial set ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-primary"
                : "w-2 bg-[#D4CFC7] hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
