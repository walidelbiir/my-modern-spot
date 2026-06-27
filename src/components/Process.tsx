import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { EASE, VIEWPORT } from "@/lib/motion";
import { ProcessTrack } from "@/components/process/ProcessTrack";

const steps = [
  {
    n: "01",
    title: "Frame",
    ai: "drafts specs & options",
    you: "set the problem & scope",
  },
  {
    n: "02",
    title: "Generate",
    ai: "writes code, tests, migrations",
    you: "shape the architecture",
  },
  {
    n: "03",
    title: "Review",
    ai: "flags diffs & risks",
    you: "approve every change",
  },
  {
    n: "04",
    title: "Harden",
    ai: "generates edge-case tests",
    you: "sign off on the quality bar",
  },
  {
    n: "05",
    title: "Ship",
    ai: "runs deploy & checks",
    you: "own the release",
    dark: true,
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="bg-secondary border-b border-foreground/10"
    >
      <div className="max-w-[1180px] mx-auto px-10 py-[118px]">
        <Reveal>
          <div className="eyebrow mb-4">How we ship</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="m-0 mb-3 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.06]">
            AI accelerates. Engineers decide.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="m-0 mb-14 text-[18px] leading-[1.6] text-muted-foreground max-w-[600px]">
            Every project runs the same line. AI compresses the busywork at each
            stage — a senior engineer owns the gate before it advances.
          </p>
        </Reveal>

        {/* scanning point + glowing checkpoints across the stages */}
        <Reveal delay={0.2} className="mb-12">
          <ProcessTrack count={steps.length} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.08 }}
              className={`flex flex-col rounded-[12px] p-[26px] border transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1.5 hover:shadow-elegant ${
                step.dark
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card border-foreground/12"
              }`}
            >
              <div className="font-mono text-[13px] text-accent mb-2.5">{step.n}</div>
              <h3
                className={`m-0 mb-4 text-[18px] font-semibold tracking-[-0.01em] ${
                  step.dark ? "text-background" : "text-foreground"
                }`}
              >
                {step.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                <div className="flex gap-2 items-start">
                  <span className="font-mono text-[9px] font-bold tracking-[0.06em] uppercase bg-accent text-background px-1.5 py-[3px] rounded-[4px] shrink-0 mt-0.5">
                    AI
                  </span>
                  <span
                    className={`text-[13px] leading-[1.45] ${
                      step.dark ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {step.ai}
                  </span>
                </div>
                <div className="flex gap-2 items-start">
                  <span
                    className={`font-mono text-[9px] font-bold tracking-[0.06em] uppercase px-1.5 py-[3px] rounded-[4px] shrink-0 mt-0.5 ${
                      step.dark
                        ? "bg-background text-foreground"
                        : "bg-foreground text-background"
                    }`}
                  >
                    YOU
                  </span>
                  <span
                    className={`text-[13px] leading-[1.45] ${
                      step.dark ? "text-background/90" : "text-foreground"
                    }`}
                  >
                    {step.you}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
