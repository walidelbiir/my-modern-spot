import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE, VIEWPORT } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
};

/**
 * Scroll-triggered entrance. Transform + opacity only.
 * Honors reduced-motion globally via <MotionConfig reducedMotion="user">.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSET[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
