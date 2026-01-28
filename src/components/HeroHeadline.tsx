"use client";

import RoughAnnotation from "./RoughAnnotation";

export default function HeroHeadline() {
  return (
    <h1 className="animate-fade-in-up animation-delay-200 mx-auto mb-6 max-w-[900px] text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-[64px]">
      We help you{" "}
      <RoughAnnotation
        type="underline"
        color="#B8860B"
        strokeWidth={3}
        animationDuration={800}
        showOnScroll={false}
        delay={500}
        className="relative -top-[2px]"
      >
        automate
      </RoughAnnotation>{" "}
      the work your team shouldn&apos;t be doing.
    </h1>
  );
}
