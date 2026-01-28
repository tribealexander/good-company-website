"use client";

import { useEffect, useRef, useState } from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  children,
  className = "",
  centered = false,
}: SectionHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headingRef}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-dark md:text-4xl lg:text-5xl">
        {children}
      </h2>
      <div
        className={`mt-4 h-1 rounded-full bg-primary transition-all duration-600 ease-out ${
          centered ? "mx-auto" : ""
        } ${isVisible ? "w-20 opacity-100" : "w-0 opacity-0"}`}
      />
    </div>
  );
}
