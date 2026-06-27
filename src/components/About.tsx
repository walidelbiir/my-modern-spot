import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { EASE } from "@/lib/motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1180px] mx-auto px-10 py-[118px] border-b border-foreground/10"
    >
      <Reveal>
        <div className="eyebrow mb-8">Our stance</div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="m-0 text-[clamp(2rem,4vw,2.875rem)] font-semibold leading-[1.12] tracking-[-0.025em] max-w-[920px]">
          AI-first, <span className="text-accent">not</span> AI-only. The machine writes the
          first draft. A senior engineer decides what ships.
        </h2>
      </Reveal>

      <div className="flex gap-16 mt-12 flex-wrap">
        <Reveal delay={0.16} className="flex-1 min-w-[300px]">
          <p className="m-0 text-[17.5px] leading-[1.65] text-muted-foreground">
            AI generates most of the code now — scaffolding, tests, migrations, glue. We let
            it take minutes, and hand those hours back to what actually decides whether
            software is good: architecture, judgment, the last hard 5%.
          </p>
        </Reveal>

        <Reveal delay={0.22} className="flex-1 min-w-[300px]">
          <p className="m-0 text-[17.5px] leading-[1.65] text-muted-foreground">
            Speed is the easy part. The discipline is refusing to ship until it's right —
            reviewed by a person, covered by tests, type-safe end to end. AI just gets us
            there faster.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
