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
      "We were drowning in manual reporting. Every week, managers spent hours pulling data from three different systems just to know what was happening. Now it's automated, and we actually have time to act on the insights.",
    name: "[CLIENT NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
  {
    id: 2,
    quote:
      "Before Good Company, we had no idea which clients were actually happy. Customer success made calls, but nothing was tracked. Now we catch at-risk accounts before they churn. It's already paid for itself three times over.",
    name: "[CLIENT NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
  {
    id: 3,
    quote:
      "Our project margins were a black box. We'd find out we lost money on a project weeks after it ended. Now we see burn rate in real-time and can course-correct mid-project. Game changer for profitability.",
    name: "[CLIENT NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
  {
    id: 4,
    quote:
      "The biggest win wasn't the automation itself—it was finally having visibility. We can see where work is stuck, who's overloaded, and what's falling through the cracks. That clarity alone was worth the investment.",
    name: "[CLIENT NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
  {
    id: 5,
    quote:
      "We tried building automations ourselves with Zapier. It worked for simple stuff, but the complex workflows always broke. Good Company built something that actually handles the edge cases.",
    name: "[CLIENT NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
  {
    id: 6,
    quote:
      "I was skeptical about another consultant promising transformation. But they actually embedded with our team and stayed until things worked. Six months later, we're still using everything they built.",
    name: "[CLIENT NAME]",
    role: "[ROLE]",
    company: "[COMPANY]",
  },
];

// Avatar placeholder SVG component
function AvatarPlaceholder() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E5E5E5]">
      <svg
        className="h-5 w-5 text-[#9CA3AF]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}

// Single testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative flex h-full flex-col rounded-xl border border-[#D4CFC7] border-l-4 border-l-primary bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
      {/* Quote mark */}
      <span className="absolute left-6 top-5 font-serif text-5xl leading-none text-primary/30">
        &ldquo;
      </span>

      {/* Quote text */}
      <div className="flex-1 pt-8">
        <p
          className="text-base italic leading-relaxed text-dark"
          style={{ lineHeight: 1.75 }}
        >
          {testimonial.quote}
        </p>
      </div>

      {/* Attribution with avatar */}
      <div className="mt-6 flex items-center gap-3 border-t border-[#E5E5E5] pt-5">
        <AvatarPlaceholder />
        <div>
          <h4 className="text-sm font-semibold text-dark">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#6B6B6B]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
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
