import { motion, useScroll, useSpring } from "motion/react";

/** Gradient reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-primary z-[60]"
      aria-hidden="true"
    />
  );
}
