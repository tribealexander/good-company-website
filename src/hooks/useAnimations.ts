"use client";

import { useEffect, useRef, useCallback } from "react";
import { animate, stagger, createTimeline } from "animejs";

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ============================================
// FADE IN ON SCROLL
// ============================================
export function useFadeInOnScroll<T extends HTMLElement>(
  options: {
    threshold?: number;
    translateY?: number;
    duration?: number;
    delay?: number;
    easing?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);

  const {
    threshold = 0.2,
    translateY = 30,
    duration = 800,
    delay = 0,
    easing = "outQuart",
  } = options;

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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate(element, {
              opacity: [0, 1],
              translateY: [translateY, 0],
              duration,
              delay,
              ease: easing,
            });

            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, translateY, duration, delay, easing]);

  return ref;
}

// ============================================
// STAGGERED REVEAL (for children)
// ============================================
export function useStaggeredReveal<T extends HTMLElement>(
  selector: string,
  options: {
    threshold?: number;
    translateY?: number;
    duration?: number;
    staggerDelay?: number;
    easing?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);

  const {
    threshold = 0.2,
    translateY = 40,
    duration = 700,
    staggerDelay = 100,
    easing = "outExpo",
  } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container || hasAnimated.current) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    if (prefersReducedMotion()) {
      elements.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    // Set initial state
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = `translateY(${translateY}px)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate(elements, {
              opacity: [0, 1],
              translateY: [translateY, 0],
              duration,
              delay: stagger(staggerDelay),
              ease: easing,
            });

            observer.unobserve(container);
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [selector, threshold, translateY, duration, staggerDelay, easing]);

  return ref;
}

// ============================================
// TEXT REVEAL (word by word)
// ============================================
export function useTextReveal<T extends HTMLElement>(
  options: {
    by?: "word" | "char";
    duration?: number;
    staggerDelay?: number;
    translateY?: number;
    easing?: string;
    autoPlay?: boolean;
  } = {}
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const {
    by = "word",
    duration = 600,
    staggerDelay = 50,
    translateY = 20,
    easing = "outExpo",
    autoPlay = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    const text = element.textContent || "";
    const units = by === "word" ? text.split(" ") : text.split("");

    if (prefersReducedMotion()) {
      return;
    }

    // Wrap each unit in a span
    element.innerHTML = units
      .map((unit, i) => {
        const space = by === "word" && i < units.length - 1 ? "&nbsp;" : "";
        return `<span class="anime-text-unit" style="display: inline-block; opacity: 0; transform: translateY(${translateY}px);">${unit}${space}</span>`;
      })
      .join("");

    wordsRef.current = Array.from(element.querySelectorAll(".anime-text-unit"));

    if (!autoPlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            animate(wordsRef.current, {
              opacity: [0, 1],
              translateY: [translateY, 0],
              duration,
              delay: stagger(staggerDelay),
              ease: easing,
            });

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [by, duration, staggerDelay, translateY, easing, autoPlay]);

  const play = useCallback(() => {
    if (hasAnimated.current || wordsRef.current.length === 0) return;
    hasAnimated.current = true;

    animate(wordsRef.current, {
      opacity: [0, 1],
      translateY: [translateY, 0],
      duration,
      delay: stagger(staggerDelay),
      ease: easing,
    });
  }, [duration, staggerDelay, translateY, easing]);

  return { ref, play };
}

// ============================================
// COUNT UP ANIMATION
// ============================================
export function useCountUp<T extends HTMLElement>(
  endValue: number,
  options: {
    duration?: number;
    easing?: string;
    suffix?: string;
    prefix?: string;
    decimals?: number;
  } = {}
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);

  const {
    duration = 1500,
    easing = "outExpo",
    suffix = "",
    prefix = "",
    decimals = 0,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    if (prefersReducedMotion()) {
      element.textContent = `${prefix}${endValue.toFixed(decimals)}${suffix}`;
      return;
    }

    // Set initial value
    element.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const obj = { value: 0 };
            animate(obj, {
              value: endValue,
              duration,
              ease: easing,
              round: decimals === 0 ? 1 : Math.pow(10, decimals),
              onUpdate: () => {
                if (element) {
                  element.textContent = `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
                }
              },
            });

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [endValue, duration, easing, suffix, prefix, decimals]);

  return ref;
}

// ============================================
// HERO ANIMATION TIMELINE
// ============================================
export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    if (prefersReducedMotion()) {
      // Show everything immediately
      container.querySelectorAll("[data-hero-animate]").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    hasAnimated.current = true;

    // Set initial states
    const headline = container.querySelector("[data-hero-headline]");
    const subhead = container.querySelector("[data-hero-subhead]");
    const cta = container.querySelector("[data-hero-cta]");
    const image = container.querySelector("[data-hero-image]");

    [headline, subhead, cta, image].forEach((el) => {
      if (el) {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(30px)";
      }
    });

    // Create timeline - v4 API
    const tl = createTimeline({
      defaults: {
        ease: "outExpo",
      },
    });

    if (headline) {
      tl.add(headline, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
      });
    }

    if (subhead) {
      tl.add(subhead, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
      }, "-=400");
    }

    if (cta) {
      tl.add(cta, {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.95, 1],
        duration: 500,
      }, "-=300");
    }

    if (image) {
      tl.add(image, {
        opacity: [0, 1],
        translateX: [30, 0],
        duration: 800,
      }, "-=600");
    }

    return () => {
      // Cleanup not needed for timeline
    };
  }, []);

  return containerRef;
}

// ============================================
// CARD HOVER ANIMATION
// ============================================
export function useCardHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const handleMouseEnter = () => {
      animate(element, {
        translateY: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        duration: 300,
        ease: "outQuart",
      });
    };

    const handleMouseLeave = () => {
      animate(element, {
        translateY: 0,
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        duration: 300,
        ease: "outQuart",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
}

// ============================================
// UTILITY: Animate element programmatically
// ============================================
export function animateElement(
  target: HTMLElement | string,
  properties: {
    opacity?: number | [number, number];
    translateY?: number | [number, number];
    translateX?: number | [number, number];
    scale?: number | [number, number];
    duration?: number;
    delay?: number;
    ease?: string;
  }
) {
  if (prefersReducedMotion()) {
    // Apply final state immediately
    const element = typeof target === "string"
      ? document.querySelector(target)
      : target;
    if (element) {
      Object.entries(properties).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          (element as HTMLElement).style[key as any] = String(value[1]);
        }
      });
    }
    return;
  }

  return animate(target, properties);
}
