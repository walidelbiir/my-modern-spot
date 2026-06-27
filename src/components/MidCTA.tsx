import { Reveal } from "@/components/motion";

const MidCTA = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="max-w-[1180px] mx-auto px-10 py-24">
      <div className="relative overflow-hidden bg-foreground text-background rounded-[18px] px-16 py-[72px] flex items-center justify-between gap-10 flex-wrap">
        {/* decorative rings */}
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 w-[200px] h-[200px] border border-background/12 rounded-full"
        />
        <div
          aria-hidden="true"
          className="absolute right-[30px] -bottom-[60px] w-[160px] h-[160px] border border-dashed border-accent/40 rounded-full animate-slow-spin"
        />

        <Reveal className="relative">
          <div className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.14em] uppercase text-background/60 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            Ready when you are
          </div>
          <h2 className="m-0 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.05] max-w-[560px]">
            Let's ship something — fast, and right.
          </h2>
          <p className="mt-4 text-[17px] text-background/70 max-w-[480px]">
            Tell us what you're building. We reply within one business day with
            a clear next step.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative flex flex-col gap-3.5 items-start">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[15.5px] font-semibold text-foreground bg-accent px-8 py-4 rounded-[9px] whitespace-nowrap transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98]"
          >
            Start a project
          </button>
          <a
            href="mailto:hello@bir.tech"
            className="font-mono text-[13px] text-background/60 hover:text-background transition-colors"
          >
            hello@bir.tech
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default MidCTA;
