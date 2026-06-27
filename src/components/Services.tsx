import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { EASE, VIEWPORT } from "@/lib/motion";

const capabilities = [
  {
    n: "01",
    icon: "◳",
    title: "AI Product Engineering",
    description:
      "Web and mobile products, designed and built with AI-accelerated workflows — prototype to production in a fraction of the time.",
    features: ["AI-assisted full-stack build", "Design systems & UI", "APIs & data architecture"],
    featured: false,
  },
  {
    n: "02",
    icon: "⌥",
    title: "AI-Accelerated DevOps",
    description:
      "CI/CD, infrastructure-as-code, and observability — stood up fast with AI tooling and held to the SLOs you promise.",
    features: ["Pipelines & IaC", "Cloud migration", "Observability & on-call"],
    featured: false,
  },
];

const Services = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="services"
      className="max-w-[1180px] mx-auto px-10 py-[118px] border-b border-foreground/10"
    >
      <Reveal>
        <div className="eyebrow mb-4">What we build</div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="m-0 mb-13 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.06] max-w-[640px]">
          Two ways we ship.
        </h2>
      </Reveal>

      <div className="flex gap-6 flex-wrap mt-12">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
            className={`flex-1 min-w-[260px] rounded-[12px] p-[34px] border transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1.5 hover:shadow-elegant ${
              cap.featured
                ? "bg-foreground text-background border-foreground"
                : "bg-card border-foreground/12"
            }`}
          >
            {/* top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[13px] text-accent">{cap.n}</span>
              {cap.featured ? (
                <span className="font-mono text-[9.5px] tracking-[0.12em] uppercase bg-accent text-foreground px-2 py-1 rounded-[5px]">
                  Flagship
                </span>
              ) : (
                <span className="w-[34px] h-[34px] rounded-lg border border-foreground/16 flex items-center justify-center text-[15px] text-foreground">
                  {cap.icon}
                </span>
              )}
            </div>

            <h3
              className={`m-0 mb-3 text-[21px] font-semibold tracking-[-0.01em] ${
                cap.featured ? "text-background" : "text-foreground"
              }`}
            >
              {cap.title}
            </h3>
            <p
              className={`m-0 mb-5 text-[15px] leading-[1.6] ${
                cap.featured ? "text-background/70" : "text-muted-foreground"
              }`}
            >
              {cap.description}
            </p>

            <div className="flex flex-col gap-2.5">
              {cap.features.map((f) => (
                <span
                  key={f}
                  className={`text-[14px] flex items-center gap-2.5 ${
                    cap.featured ? "text-background/86" : "text-foreground/80"
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {f}
                </span>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className={`mt-8 w-full py-3 rounded-lg text-[14.5px] font-semibold transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98] ${
                cap.featured
                  ? "bg-accent text-foreground"
                  : "bg-foreground text-background"
              }`}
            >
              Get started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
