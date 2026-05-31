import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/lib/motion";

type CountUpProps = {
  /** e.g. "200+", "99.9%", "12" — numeric part is animated, prefix/suffix preserved */
  value: string;
  duration?: number;
  className?: string;
};

export function CountUp({ value, duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const match = value.match(/[\d.]+/);
  const numeric = match ? match[0] : "";
  const target = numeric ? parseFloat(numeric) : 0;
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + numeric.length) : value;

  const [display, setDisplay] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
