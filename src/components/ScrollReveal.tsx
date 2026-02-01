"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Convert easing names to v4 format (remove "ease" prefix)
function convertEasing(easing: string): string {
  return easing.replace(/^ease/, "").replace(/^[A-Z]/, (c) => c.toLowerCase());
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  translateY?: number;
  duration?: number;
  easing?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  translateY = 30,
  duration = 700,
  easing = "outQuart",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    if (prefersReducedMotion()) {
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    // Set initial state
    element.style.opacity = "0";
    element.style.transform = `translateY(${translateY}px)`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animate(element, {
            opacity: [0, 1],
            translateY: [translateY, 0],
            duration,
            delay,
            ease: convertEasing(easing),
          });

          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, translateY, duration, easing]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ============================================
// STAGGER CONTAINER - Animates children in sequence
// ============================================
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  translateY?: number;
  duration?: number;
  easing?: string;
  childSelector?: string;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  translateY = 40,
  duration = 600,
  easing = "outExpo",
  childSelector = "> *",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container || hasAnimated.current) return;

    // Use :scope for relative selectors, or fall back to direct children
    const elements = childSelector === "> *"
      ? Array.from(container.children)
      : container.querySelectorAll(childSelector);
    if (elements.length === 0) return;

    if (prefersReducedMotion()) {
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    // Set initial state for all children
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = `translateY(${translateY}px)`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animate(elements, {
            opacity: [0, 1],
            translateY: [translateY, 0],
            duration,
            delay: stagger(staggerDelay),
            ease: convertEasing(easing),
          });

          observer.unobserve(container);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [staggerDelay, translateY, duration, easing, childSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// ============================================
// TEXT REVEAL - Animates text word by word
// ============================================
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  easing?: string;
}

export function TextReveal({
  children,
  className = "",
  delay = 0,
  staggerDelay = 50,
  duration = 600,
  easing = "outExpo",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    if (prefersReducedMotion()) {
      return; // Keep original text
    }

    const words = children.split(" ");

    // Wrap each word in a span
    element.innerHTML = words
      .map(
        (word, i) =>
          `<span class="anime-word" style="display: inline-block; opacity: 0; transform: translateY(20px);">${word}</span>${
            i < words.length - 1 ? "&nbsp;" : ""
          }`
      )
      .join("");

    const wordElements = element.querySelectorAll(".anime-word");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animate(wordElements, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration,
            delay: stagger(staggerDelay, { start: delay }),
            ease: convertEasing(easing),
          });

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [children, delay, staggerDelay, duration, easing]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}

// ============================================
// COUNT UP - Animates numbers
// ============================================
interface CountUpProps {
  value: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export function CountUp({
  value,
  className = "",
  suffix = "",
  prefix = "",
  duration = 1500,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    if (prefersReducedMotion()) {
      element.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }

    // Set initial value
    element.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const obj = { val: 0 };
          animate(obj, {
            val: value,
            duration,
            ease: "outExpo",
            round: decimals === 0 ? 1 : Math.pow(10, decimals),
            onUpdate: () => {
              if (element) {
                element.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
              }
            },
          });

          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, suffix, prefix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
