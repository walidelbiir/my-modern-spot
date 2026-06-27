import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { useRef, useEffect } from "react";

const FEED_ITEMS = [
  { type: "agent", text: "drafted PR #2207 — preview engine", time: "0.4s" },
  { type: "ci",    text: "184 tests generated & run", time: "21s" },
  { type: "human", text: "staff eng approved architecture", time: "✓" },
  { type: "agent", text: "migration script ready — 0 downtime", time: "1.2s" },
  { type: "human", text: "reviewed diff & merged", time: "✓" },
  { type: "deploy",text: "shipped to prod — rollout 100%", time: "12s" },
  { type: "slo",   text: "99.99% held · p95 142ms", time: "▰▰▰" },
];

const TYPE_STYLE: Record<string, string> = {
  agent:  "bg-accent text-white",
  ci:     "bg-foreground text-background",
  human:  "border border-foreground/30 text-foreground bg-transparent",
  deploy: "bg-foreground text-background",
  slo:    "bg-accent text-white",
};

function FeedRow({ type, text, time }: { type: string; text: string; time: string }) {
  return (
    <div className="flex items-center gap-3 py-3.5 border-t border-foreground/7 first:border-t-0">
      <span
        className={`font-mono text-[9px] font-bold tracking-[0.06em] uppercase px-2 py-[3px] rounded-[5px] shrink-0 ${TYPE_STYLE[type] ?? "bg-foreground/10 text-foreground"}`}
      >
        {type}
      </span>
      <span className="text-[13.5px] text-foreground/80 flex-1 leading-snug">{text}</span>
      <span className="font-mono text-[11px] text-muted-foreground shrink-0">{time}</span>
    </div>
  );
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const Hero = () => {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    const resize = () => {
      const p = canvas.parentElement!;
      const r = p.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const start = performance.now();
    const blobs = [
      { x: 0.22, y: 0.40, r: 0.46, ac: true,  sx: 0.5,  sy: 0.4 },
      { x: 0.66, y: 0.30, r: 0.40, ac: false,  sx: -0.4, sy: 0.55 },
      { x: 0.52, y: 0.74, r: 0.36, ac: true,  sx: 0.35, sy: -0.6 },
    ];

    const frame = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);
      blobs.forEach((b, i) => {
        const cx = (b.x + 0.05 * Math.sin(t * b.sx + i)) * w;
        const cy = (b.y + 0.06 * Math.cos(t * b.sy + i)) * h;
        const rad = b.r * w;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        if (b.ac) {
          g.addColorStop(0, "rgba(194, 87, 51, 0.18)");
          g.addColorStop(1, "rgba(194, 87, 51, 0)");
        } else {
          g.addColorStop(0, "rgba(27, 24, 21, 0.05)");
          g.addColorStop(1, "rgba(27, 24, 21, 0)");
        }
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const doubled = [...FEED_ITEMS, ...FEED_ITEMS];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-[4.5rem]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 18%, transparent 40%, rgba(251,250,247,.55) 100%)",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto px-10 py-24 flex gap-16 items-center">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          <motion.div
            {...rise(0.05)}
            className="inline-flex items-center gap-2.5 font-mono text-[12.5px] tracking-[0.16em] uppercase text-muted-foreground border border-foreground/16 bg-card px-3 py-[7px] rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            AI-First Software Studio
          </motion.div>

          <motion.h1
            {...rise(0.12)}
            className="m-0 text-[clamp(2.8rem,6vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground"
          >
            Build at{" "}
            <span className="whitespace-nowrap mark-accent">AI speed</span>.<br />
            Ship at{" "}
            <span className="whitespace-nowrap text-accent">senior standards</span>.
          </motion.h1>

          <motion.p
            {...rise(0.22)}
            className="mt-7 text-[19px] leading-[1.6] text-muted-foreground max-w-[500px]"
          >
            B!R is an AI-first studio. We pair senior engineers with
            AI-accelerated workflows to design, build, and operate production
            software — dramatically faster, and without the slop.
          </motion.p>

          <motion.div {...rise(0.32)} className="flex items-center gap-6 mt-9">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[15.5px] font-semibold text-background bg-foreground px-7 py-4 rounded-[9px] transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-elegant active:translate-y-0 active:scale-[0.98]"
            >
              Start a project
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center gap-2 text-[15.5px] font-medium text-foreground border-b border-foreground/25 pb-0.5 transition-colors hover:text-accent hover:border-accent"
            >
              See how we ship{" "}
              <span className="text-accent">→</span>
            </button>
          </motion.div>

          <motion.div
            {...rise(0.42)}
            className="inline-flex items-center gap-2.5 mt-8 font-mono text-[12.5px] tracking-[0.05em] text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            Shipping now — 3 deploys today · 99.99% SLA held
          </motion.div>
        </div>

        {/* Activity feed */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="hidden lg:block flex-none w-[420px]"
        >
          <div className="bg-card border border-foreground/12 rounded-[14px] overflow-hidden shadow-elegant">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-[15px] border-b border-foreground/10 bg-secondary">
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-foreground inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
                The floor — live
              </span>
              <span className="font-mono text-[10.5px] tracking-[0.1em] text-muted-foreground">
                bir.tech
              </span>
            </div>

            {/* Scrolling feed */}
            <div className="relative h-[372px] overflow-hidden px-5">
              {reduce ? (
                FEED_ITEMS.map((item, i) => <FeedRow key={i} {...item} />)
              ) : (
                <div className="flex flex-col animate-feed">
                  {doubled.map((item, i) => (
                    <FeedRow key={i} {...item} />
                  ))}
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-14"
                style={{ background: "linear-gradient(to top, #fff, transparent)" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-0 h-6"
                style={{ background: "linear-gradient(to bottom, #fff, transparent)" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
