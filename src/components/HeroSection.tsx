"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";
import RoughAnnotation from "./RoughAnnotation";
import { TextReveal } from "./unlumen/TextReveal";
import { GlowButton } from "./unlumen/GlowButton";
import { MagneticButton } from "./unlumen/MagneticButton";

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const headline = containerRef.current.querySelector("[data-hero-headline]");
    const subhead = containerRef.current.querySelector("[data-hero-subhead]");
    const cta = containerRef.current.querySelector("[data-hero-cta]");

    if (prefersReducedMotion()) {
      [headline, subhead, cta].forEach((el) => {
        if (el) {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        }
      });
      return;
    }

    // Set initial states
    [headline, subhead, cta].forEach((el) => {
      if (el) {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(30px)";
      }
    });

    const tl = createTimeline({
      defaults: {
        ease: "outExpo",
      },
    });

    if (headline) {
      tl.add(headline, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 900,
      }, 100);
    }

    if (subhead) {
      tl.add(subhead, {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 800,
      }, "-=600");
    }

    if (cta) {
      tl.add(cta, {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.95, 1],
        duration: 700,
      }, "-=500");
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#004D36] px-6 pb-28 pt-32 lg:px-10 lg:pb-40 lg:pt-44"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline with Rough Notation */}
        <h1
          data-hero-headline
          className="font-serif mx-auto mb-6 max-w-[900px] text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-[72px]"
        >
          We help you{" "}
          <RoughAnnotation
            type="underline"
            color="#B8860B"
            strokeWidth={3}
            animationDuration={800}
            showOnScroll={false}
            delay={700}
            padding={[0, 0, -8, 0]}
          >
            automate
          </RoughAnnotation>{" "}
          the work your team shouldn&apos;t be doing.
        </h1>

        {/* Subhead with blur-to-focus text reveal */}
        <div data-hero-subhead>
          <TextReveal
            text="Your team wastes hours on manual tasks, things slip through the cracks, and problems stay hidden until they're fires. We build systems that fix all three—so you can scale without adding headcount."
            as="p"
            splitBy="words"
            staggerDelay={0.03}
            duration={0.6}
            className="mx-auto max-w-[700px] text-lg leading-relaxed text-[#A8D5C2] md:text-xl"
          />
        </div>

        {/* CTA Button with magnetic pull + glow */}
        <div data-hero-cta className="mt-10">
          <MagneticButton
            className="inline-flex"
            radius={120}
            strength={0.4}
          >
            <GlowButton
              colors={["#006747", "#2D8659", "#B8860B", "#006747"]}
              blur="8px"
              opacity={0.5}
            >
              <button
                data-cal-namespace="good-company-discovery-call"
                data-cal-link="alex-tribe-pzou91/good-company-discovery-call"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="btn-press inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#004D36] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_30px_rgba(184,134,11,0.4)]"
              >
                Book a Discovery Call
              </button>
            </GlowButton>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
