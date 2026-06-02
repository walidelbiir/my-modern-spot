import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-tech.jpg";
import { CountUp, WordReveal } from "@/components/motion";
import { EASE } from "@/lib/motion";

const TERMINAL_LINES = [
  "> bir deploy --env=prod",
  "\u2713 build complete         2.4s",
  "\u2713 tests passed   142/142  18s",
  "\u2713 infra synced            6s",
  "\u2713 ai-agent registered     1s",
  "\u2713 rollout 100%           12s",
  "",
  "Deployment ready \u2192 99.99% SLA",
];

const HeroTerminal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? TERMINAL_LINES.length : 0);

  useEffect(() => {
    if (!inView || reduce || count >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 400 : 300);
    return () => clearTimeout(t);
  }, [inView, count, reduce]);

  const done = count >= TERMINAL_LINES.length;

  return (
    <div ref={ref} className="text-xs md:text-sm text-primary-foreground/85 font-mono leading-relaxed min-h-[11rem]">
      {TERMINAL_LINES.slice(0, count).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="whitespace-pre"
        >
          {line.startsWith("\u2713") ? (
            <span>
              <span className="text-green-400">{"\u2713"}</span>
              {line.slice(1)}
            </span>
          ) : line.startsWith("Deployment") ? (
            <span className="text-primary-glow font-semibold">{line}</span>
          ) : (
            line || "\u00a0"
          )}
        </motion.div>
      ))}
      {!done && (
        <motion.span
          className="inline-block h-4 w-2 bg-primary-glow align-middle"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        />
      )}
    </div>
  );
};

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 pb-12"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/95" />
      </div>

      {/* Living aurora background */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-1/4 left-1/4 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,hsl(var(--primary-glow)/0.4),transparent_60%)] blur-3xl"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,hsl(var(--primary-glow)/0.3),transparent_60%)] blur-3xl"
        animate={{ x: [0, -50, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8 text-primary-foreground">
            <motion.div
              {...rise(0.05)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm text-xs tracking-wider uppercase"
            >
              <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
              IT Services • DevOps • AI Agents
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight pb-0.5">
              <WordReveal
                onMount
                delay={0.2}
                segments={[
                  { text: "Engineering the" },
                  {
                    text: "next era",
                    className:
                      "bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent",
                  },
                  { text: "of digital business." },
                ]}
              />
            </h1>

            <motion.p
              {...rise(0.55)}
              className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-xl"
            >
              BIR Solutions designs, ships, and scales modern software — from product engineering
              to DevOps automation and AI agent integration.
            </motion.p>

            <motion.div {...rise(0.7)} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Start a Project
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                See Our Work
                <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              {...rise(0.85)}
              className="grid grid-cols-3 gap-6 pt-6 max-w-xl border-t border-primary-foreground/15"
            >
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  <CountUp value="200+" />
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  <CountUp value="50+" />
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">
                  Enterprise Clients
                </div>
              </div>
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  <CountUp value="99.9%" />
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">
                  Uptime Guarantee
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative terminal panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="hidden lg:block lg:col-span-5"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-glow/30 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-primary-foreground/15 bg-primary/40 backdrop-blur-md p-6 shadow-elegant">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <span className="text-xs text-primary-foreground/50 ml-2">deploy.bir.tech</span>
                </div>
                <HeroTerminal />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[0.65rem] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce-slow" />
      </button>
    </section>
  );
};

export default Hero;
