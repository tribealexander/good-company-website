"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string; // Optional headshot image path
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
      "We hired Alex to integrate multiple platform customer data sets into a single client dashboard. He was thorough in his assessment of each platform's capabilities for automation and provided a solid recommendation with the associated development. Truly appreciate Alex's expertise and communication.",
    name: "Aden Smith",
    role: "Marketing Consultant",
    company: "Independent",
  },
  {
    id: 5,
    quote:
      "Alex has opened insights for me with a nimble and strategic way of thinking that I had been missing as an entrepreneur. Conversations with Alex, whether 20 minutes or 2 hours, leave me with enthusiasm and insight in ways that I wouldn't have discovered on my own. Great dude with a big brain who has a penchant for helping.",
    name: "Marko Lindhe",
    role: "Founder",
    company: "Marlin Capital",
    image: "/images/marko headshot.jpeg",
  },
];

// Single testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-1">
      {/* Quote icon */}
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-primary/20"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="flex-1 text-[15px] leading-[1.8] text-text">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        {/* Avatar - show image if provided, otherwise initials */}
        {testimonial.image ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover grayscale-[85%] contrast-[1.1] brightness-[1.05]"
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

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
    } else {
      // Loop back to start
      setCurrentIndex(0);
    }
  }, [canGoNext]);

  // Auto-scroll functionality
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      return;
    }

    autoScrollRef.current = setInterval(() => {
      goToNext();
    }, 5000); // Scroll every 5 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [goToNext, prefersReducedMotion, isPaused, currentIndex]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
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
    } else if (translateX < -50) {
      goToNext();
    }

    setTranslateX(0);
    // Resume auto-scroll after a delay
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
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
    } else if (translateX < -50) {
      goToNext();
    }

    setTranslateX(0);
    // Resume auto-scroll after a delay
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Calculate the width percentage for each card based on cards per view
  const cardWidthPercent = 100 / cardsPerView;
  const gapAdjustment = (24 * (cardsPerView - 1)) / cardsPerView; // 24px gap (gap-6)

  return (
    <div
      className="relative"
      aria-label="Client testimonials"
      role="region"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Navigation arrows */}
      <button
        onClick={() => {
          goToPrev();
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 3000);
        }}
        disabled={!canGoPrev}
        aria-label="Previous testimonials"
        className={`absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-text-light shadow-md transition-all duration-200 lg:-left-6 ${
          canGoPrev
            ? "hover:bg-primary hover:text-white hover:border-primary hover:scale-105"
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
        onClick={() => {
          goToNext();
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 3000);
        }}
        aria-label="Next testimonials"
        className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-text-light shadow-md transition-all duration-200 lg:-right-6 hover:bg-primary hover:text-white hover:border-primary hover:scale-105"
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
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          className={`flex gap-6 ${
            prefersReducedMotion ? "" : "transition-transform duration-500 ease-out"
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

      {/* Progress dots with auto-scroll indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            aria-label={`Go to testimonial set ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
