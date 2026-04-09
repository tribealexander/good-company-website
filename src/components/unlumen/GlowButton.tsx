"use client";

import * as React from "react";
import { motion } from "motion/react";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Glow colors — defaults to Good Company green/gold palette */
  colors?: string[];
  /** Animation duration in seconds @default 5 */
  duration?: number;
  /** Blur strength @default 6px */
  blur?: string;
  /** Glow opacity 0–1 @default 0.45 */
  opacity?: number;
}

/**
 * Rotating conic-gradient glow behind any child element.
 * Wraps children in a relative container — pass your button/link as children.
 */
export function GlowButton({
  children,
  className = "",
  colors = ["#006747", "#2D8659", "#B8860B", "#006747"],
  duration = 5,
  blur = "6px",
  opacity = 0.45,
}: GlowButtonProps) {
  const gradient = `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`;
  const gradientEnd = `conic-gradient(from 360deg at 50% 50%, ${colors.join(", ")})`;

  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ filter: `blur(${blur})`, opacity }}
        animate={{
          background: [gradient, gradientEnd],
        }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
      />
      {/* Content sits above the glow */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
