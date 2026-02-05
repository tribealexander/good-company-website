"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface ResultCardProps {
  stat?: string;
  text: string;
}

// Parse stat to extract number and suffix
function parseStat(stat: string): { value: number; prefix: string; suffix: string } | null {
  // Match patterns like "80%", "$1.2M", "3x", "10+", "15%+"
  const match = stat.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || "",
      value: parseFloat(match[2]),
      suffix: match[3] || "",
    };
  }
  return null;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ResultCard({ stat, text }: ResultCardProps) {
  const statRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!stat || !statRef.current || hasAnimated.current) return;

    const parsed = parseStat(stat);
    if (!parsed || prefersReducedMotion()) {
      // Just show the stat as-is
      if (statRef.current) {
        statRef.current.textContent = stat;
      }
      return;
    }

    const element = statRef.current;
    const { value, prefix, suffix } = parsed;
    const decimals = stat.includes(".") ? (stat.split(".")[1]?.match(/\d+/)?.[0]?.length || 0) : 0;

    // Set initial value
    element.textContent = `${prefix}0${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const obj = { val: 0 };
          animate(obj, {
            val: value,
            duration: 1800,
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
  }, [stat]);

  return (
    <div className="group relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden">
      {stat && (
        <div
          ref={statRef}
          className="text-4xl font-bold text-primary mb-4 lg:text-5xl font-mono tracking-tight"
        >
          {stat}
        </div>
      )}
      <p className="text-text text-base lg:text-lg leading-relaxed mt-auto">
        {text}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
