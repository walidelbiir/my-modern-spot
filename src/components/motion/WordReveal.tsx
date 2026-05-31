import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type Segment = { text: string; className?: string };

type WordRevealProps = {
  /** Plain string, or styled segments (e.g. a gradient phrase) */
  segments: Segment[];
  className?: string;
  delay?: number;
  /** when true animates on mount; otherwise animates when scrolled into view */
  onMount?: boolean;
};

const container = (delay: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

const word = {
  hidden: { opacity: 0, y: "0.6em" },
  visible: { opacity: 1, y: "0em", transition: { duration: 0.6, ease: EASE } },
};

/**
 * Splits headline copy into words that rise into place in sequence.
 * Each segment can carry its own className (e.g. a gradient highlight phrase).
 */
export function WordReveal({ segments, className, delay = 0, onMount = false }: WordRevealProps) {
  const animateProps = onMount
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: { once: true, margin: "0px 0px -10% 0px" } };

  let key = 0;
  const nodes: ReactNode[] = [];
  segments.forEach((segment, sIdx) => {
    const words = segment.text.split(" ");
    words.forEach((w, wIdx) => {
      nodes.push(
        <span key={`w-${key++}`} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className={`inline-block ${segment.className ?? ""}`}>
            {w}
          </motion.span>
        </span>
      );
      const isLastWordOfLastSegment = sIdx === segments.length - 1 && wIdx === words.length - 1;
      if (!isLastWordOfLastSegment) nodes.push(<span key={`s-${key++}`}> </span>);
    });
  });

  return (
    <motion.span
      className={className}
      variants={container(delay)}
      initial="hidden"
      {...animateProps}
    >
      {nodes}
    </motion.span>
  );
}
