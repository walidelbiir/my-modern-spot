import { Reveal } from "@/components/motion";

const rules = [
  {
    n: "01",
    title: "Human review on every change",
    body: "No code merges without a senior engineer's name on the approval. AI suggests; a person owns.",
  },
  {
    n: "02",
    title: "Tests are non-negotiable",
    body: "Generated broadly, curated tightly. Critical paths sit above 90% before anything ships.",
  },
  {
    n: "03",
    title: "Type-safe, end to end",
    body: "Contracts enforced from the database to the UI. Whole categories of bugs never compile.",
  },
  {
    n: "04",
    title: "Owned after launch",
    body: "Observability, on-call, and SLOs we actually hold. We stay with the system, not just the project.",
  },
];

const stats = [
  { value: "100%", label: "Human-reviewed" },
  { value: "90%+", label: "Test coverage" },
  { value: "99.99%", label: "SLA held" },
];

const QualityBar = () => {
  return (
    <section
      id="testimonials"
      className="max-w-[1180px] mx-auto px-10 py-[118px] border-b border-foreground/10"
    >
      <div className="flex gap-16 flex-wrap items-start">
        {/* Left */}
        <div className="flex-1 min-w-[320px]">
          <Reveal>
            <div className="eyebrow mb-4">The quality bar</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="m-0 mb-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.06]">
              Fast is only good if it's right.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="m-0 mb-8 text-[18px] leading-[1.6] text-muted-foreground max-w-[440px]">
              AI gets us to a working draft in hours. It doesn't get a vote on
              what ships. Four rules hold the line — every project, every time.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex gap-2.5 flex-wrap">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-foreground/14 rounded-[9px] px-[18px] py-3.5"
                >
                  <div className="text-[24px] font-semibold tracking-[-0.02em]">{s.value}</div>
                  <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <Reveal delay={0.1} className="flex-1 min-w-[320px] flex flex-col">
          {rules.map((r) => (
            <div
              key={r.n}
              className="flex gap-4 py-[22px] border-t border-foreground/12 first:border-t-0"
            >
              <span className="font-mono text-[13px] text-accent w-7 shrink-0">{r.n}</span>
              <div>
                <h4 className="m-0 mb-1.5 text-[17px] font-semibold">{r.title}</h4>
                <p className="m-0 text-[14.5px] leading-[1.55] text-muted-foreground">{r.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default QualityBar;
