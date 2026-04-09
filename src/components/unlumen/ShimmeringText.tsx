"use client";

import React, { useMemo, useRef } from "react";
import { motion, useInView, type UseInViewOptions } from "motion/react";

interface ShimmeringTextProps {
  text: string;
  duration?: number;
  delay?: number;
  repeat?: boolean;
  repeatDelay?: number;
  className?: string;
  startOnView?: boolean;
  once?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  spread?: number;
  color?: string;
  shimmerColor?: string;
}

export function ShimmeringText({
  text,
  duration = 2,
  delay = 0,
  repeat = true,
  repeatDelay = 0.5,
  className,
  startOnView = true,
  once = false,
  inViewMargin,
  spread = 2,
  color,
  shimmerColor,
}: ShimmeringTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: inViewMargin });

  const dynamicSpread = useMemo(() => {
    return text.length * spread;
  }, [text, spread]);

  const shouldAnimate = !startOnView || isInView;

  return (
    <motion.span
      ref={ref}
      className={`relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [background-repeat:no-repeat,padding-box] ${className ?? ""}`}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          "--base-color": color ?? "#B8860B",
          "--shimmer-color": shimmerColor ?? "#D4A843",
          backgroundImage: `linear-gradient(90deg, transparent calc(50% - var(--spread)), var(--shimmer-color), transparent calc(50% + var(--spread))), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
      initial={{
        backgroundPosition: "100% center",
        opacity: 0,
      }}
      animate={
        shouldAnimate
          ? {
              backgroundPosition: "0% center",
              opacity: 1,
            }
          : {}
      }
      transition={{
        backgroundPosition: {
          repeat: repeat ? Infinity : 0,
          duration,
          delay,
          repeatDelay,
          ease: "linear",
        },
        opacity: {
          duration: 0.3,
          delay,
        },
      }}
    >
      {text}
    </motion.span>
  );
}
