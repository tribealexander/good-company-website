"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

// Type for the annotation object returned by annotate()
interface AnnotationObject {
  isShowing(): boolean;
  show(): void;
  hide(): void;
  remove(): void;
}

type AnnotationType =
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface RoughAnnotationProps {
  children: React.ReactNode;
  type?: AnnotationType;
  color?: string;
  strokeWidth?: number;
  animate?: boolean;
  animationDuration?: number;
  iterations?: number;
  multiline?: boolean;
  showOnScroll?: boolean;
  delay?: number;
  className?: string;
}

export default function RoughAnnotation({
  children,
  type = "underline",
  color = "#006747",
  strokeWidth = 2,
  animate = true,
  animationDuration = 800,
  iterations = 2,
  multiline = false,
  showOnScroll = true,
  delay = 0,
  className = "",
}: RoughAnnotationProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<AnnotationObject | null>(null);
  const hasShownRef = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!spanRef.current || hasShownRef.current) return;

    // Create annotation
    annotationRef.current = annotate(spanRef.current, {
      type,
      color,
      strokeWidth,
      animate: !prefersReducedMotion && animate,
      animationDuration: prefersReducedMotion ? 0 : animationDuration,
      iterations,
      multiline,
    });

    if (!showOnScroll) {
      // Show after delay
      const timeoutId = setTimeout(() => {
        if (!hasShownRef.current) {
          annotationRef.current?.show();
          hasShownRef.current = true;
        }
      }, delay);

      return () => {
        clearTimeout(timeoutId);
        annotationRef.current?.remove();
      };
    } else {
      // Use Intersection Observer
      const element = spanRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasShownRef.current) {
            setTimeout(() => {
              annotationRef.current?.show();
              hasShownRef.current = true;
            }, delay);
            observer.disconnect();
          }
        },
        { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
        annotationRef.current?.remove();
      };
    }
  }, [
    type,
    color,
    strokeWidth,
    animate,
    animationDuration,
    iterations,
    multiline,
    showOnScroll,
    delay,
  ]);

  return (
    <span ref={spanRef} className={className}>
      {children}
    </span>
  );
}
