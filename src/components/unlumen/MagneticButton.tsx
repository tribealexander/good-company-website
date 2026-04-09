"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
  type HTMLMotionProps,
} from "motion/react";

export interface MagneticButtonProps
  extends Omit<HTMLMotionProps<"div">, "style"> {
  /** activation radius in px — @default 100 */
  radius?: number;
  springOptions?: SpringOptions;
  /** pull strength multiplier 0–1 — @default 0.5 */
  strength?: number;
}

/**
 * Magnetic wrapper — wraps any child element (button, link, div)
 * with cursor-follow spring physics. Uses a div so it works with
 * Cal.com data attributes and any inner element.
 */
export function MagneticButton({
  children,
  radius = 100,
  springOptions = { stiffness: 150, damping: 15, mass: 0.1 },
  strength = 0.5,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, springOptions);
  const y = useSpring(rawY, springOptions);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        const pull = (1 - dist / radius) * strength;
        rawX.set(dx * pull);
        rawY.set(dy * pull);
      }
    },
    [radius, strength, rawX, rawY],
  );

  const handleMouseLeave = React.useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
}
