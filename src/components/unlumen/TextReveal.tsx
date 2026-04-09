"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";

export interface TextRevealProps {
  text: string;
  as?: keyof React.JSX.IntrinsicElements;
  splitBy?: "words" | "characters";
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export function TextReveal({
  text,
  as: Tag = "p",
  splitBy = "words",
  staggerDelay = 0.05,
  duration = 0.5,
  once = true,
  className,
}: TextRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "0px 0px -10% 0px" });

  const units =
    splitBy === "words"
      ? text
          .split(/\s+/)
          .map((w, i, arr) => (i < arr.length - 1 ? w + "\u00A0" : w))
      : text.split("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyTag = Tag as any;

  return (
    <AnyTag ref={ref} className={className} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.1, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, filter: "blur(0px)" }
              : { opacity: 0.1, filter: "blur(8px)" }
          }
          transition={{
            duration,
            delay: i * staggerDelay,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
          className="will-change-[opacity,filter]"
        >
          {unit}
        </motion.span>
      ))}
    </AnyTag>
  );
}
