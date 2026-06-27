import { motion, useReducedMotion, useTime, useTransform, type MotionValue } from "motion/react";

/**
 * A point that scans the process line back and forth like a plane on a route:
 * a velocity-scaled contrail follows behind it, and each checkpoint glows as
 * the point passes through. Driven by motion values (no per-frame re-renders).
 */

const PERIOD = 4200; // ms for one left→right (or right→left) pass
const GLOW_REACH = 0.12; // how close (0–1) the point must be to light a node

// smoothstep position (ease-in-out) and its normalised speed (0 at ends, 1 mid)
const smooth = (x: number) => x * x * (3 - 2 * x);
const speed = (x: number) => 4 * x * (1 - x);
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

const phaseOf = (t: number) => (t % (PERIOD * 2)) / PERIOD; // 0..2
const triOf = (t: number) => {
  const p = phaseOf(t);
  return p <= 1 ? p : 2 - p; // triangle wave 0→1→0
};
const posOf = (t: number) => smooth(triOf(t)); // 0..1 eased position

function Checkpoint({ time, pos }: { time: MotionValue<number>; pos: number }) {
  const glow = useTransform(time, (t) => clamp01(1 - Math.abs(posOf(t) - pos) / GLOW_REACH));
  const scale = useTransform(glow, [0, 1], [1, 1.9]);
  return (
    <span className="relative flex h-2 w-2 items-center justify-center">
      {/* bloom — extends past the node's ring so the glow reads */}
      <motion.span
        style={{ opacity: glow, scale }}
        className="absolute h-5 w-5 rounded-full bg-accent blur-[6px]"
      />
      {/* base node, punched out of the section background */}
      <span className="relative h-2 w-2 rounded-full bg-foreground/25 ring-4 ring-secondary" />
      {/* accent core — fades in as the point arrives */}
      <motion.span style={{ opacity: glow }} className="absolute h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}

function AnimatedTrack({ count }: { count: number }) {
  const time = useTime();
  const left = useTransform(time, (t) => `${posOf(t) * 100}%`);
  const dir = useTransform(time, (t) => (phaseOf(t) <= 1 ? 1 : -1));
  const trailWidth = useTransform(time, (t) => `${12 + speed(triOf(t)) * 92}px`);
  const trailOpacity = useTransform(time, (t) => 0.1 + speed(triOf(t)) * 0.5);

  return (
    <div className="relative h-4">
      {/* base line */}
      <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-foreground/14" />
      {/* checkpoints */}
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
        {Array.from({ length: count }).map((_, i) => (
          <Checkpoint key={i} time={time} pos={count > 1 ? i / (count - 1) : 0} />
        ))}
      </div>
      {/* scanning point + contrail */}
      <motion.div style={{ left }} className="absolute top-1/2 z-10">
        <motion.div style={{ scaleX: dir }} className="absolute top-0 -translate-y-1/2">
          {/* contrail — trails behind, lengthening with speed, flipping with direction */}
          <motion.span
            style={{ width: trailWidth, opacity: trailOpacity }}
            className="absolute right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-l from-accent via-accent/40 to-transparent"
          />
          {/* head */}
          <span className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_5px_hsl(var(--accent)/0.16),0_0_18px_3px_hsl(var(--accent)/0.55)]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function StaticTrack({ count }: { count: number }) {
  return (
    <div className="relative h-4">
      <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-foreground/14" />
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-foreground/25 ring-4 ring-secondary" />
        ))}
      </div>
      <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
    </div>
  );
}

export function ProcessTrack({ count }: { count: number }) {
  const reduce = useReducedMotion();
  return reduce ? <StaticTrack count={count} /> : <AnimatedTrack count={count} />;
}
