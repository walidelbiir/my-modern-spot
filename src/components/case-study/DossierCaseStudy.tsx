import { Link } from "react-router-dom";
import type { CaseStudy } from "@/types/caseStudy";
import { ArrowLeft, ExternalLink } from "lucide-react";

const SECTION_LABELS: Record<string, string> = {
  problem: "01 · The Problem",
  need: "02 · What Was Needed",
  solution: "03 · The Solution",
  implementation: "04 · How We Built It",
  results: "05 · Results",
};

export function DossierCaseStudy({ study }: { study: CaseStudy }) {
  const sections = study.sections;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* top nav */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-foreground/10">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 font-mono text-[11.5px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All work
          </Link>
          <Link
            to="/"
            className="font-bold text-[18px] tracking-[-0.04em]"
          >
            B<span className="text-accent">!</span>R
          </Link>
        </div>
      </header>

      {/* hero */}
      <div className="border-b border-foreground/10 bg-secondary">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent mb-5">
            {study.category}
          </div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.05] max-w-[760px] mb-6">
            {study.title}
          </h1>
          <p className="text-[18px] leading-[1.65] text-muted-foreground max-w-[560px] mb-10">
            {study.tagline}
          </p>

          {/* meta */}
          {study.overview && (
            <div className="flex flex-wrap gap-10">
              {Object.entries(study.overview).map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                    {k}
                  </div>
                  <div className="font-medium text-[15px]">{v}</div>
                </div>
              ))}
            </div>
          )}

          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {study.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground border border-foreground/16 px-2.5 py-[4px] rounded-[5px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* dossier body: sticky sidebar + reading column */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-[220px_1fr] gap-12 items-start">
        {/* sticky sidebar */}
        <aside className="hidden md:block sticky top-20">
          <nav className="space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#section-${s.id}`}
                className="flex items-center gap-2.5 py-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="h-px w-5 bg-muted-foreground/30 group-hover:bg-accent group-hover:w-7 transition-all duration-200" />
                {SECTION_LABELS[s.id] ?? s.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 border-t border-foreground/10 pt-8 space-y-3">
            <a
              href="/#contact"
              className="flex items-center gap-2 text-[13px] font-semibold text-foreground hover:text-accent transition-colors"
            >
              Start a project
              <ExternalLink className="h-3 w-3" />
            </a>
            <Link
              to="/#portfolio"
              className="flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to work
            </Link>
          </div>
        </aside>

        {/* reading column */}
        <article className="space-y-20">
          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="scroll-mt-24">
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent mb-3">
                {SECTION_LABELS[s.id] ?? s.label}
              </div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] leading-[1.1] mb-5">
                {s.headline}
              </h2>
              <p className="text-[16.5px] leading-[1.75] text-muted-foreground mb-8 max-w-[600px]">
                {s.body}
              </p>

              {s.items && s.items.length > 0 && (
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-accent" />
                      <span className="text-[15.5px] leading-[1.65]">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {s.stats && s.stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6">
                  {s.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-secondary border border-foreground/10 rounded-[10px] p-5"
                    >
                      <div className="text-[2rem] font-bold tracking-[-0.02em] text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[12.5px] text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* CTA */}
          <div className="border-t border-foreground/10 pt-14">
            <p className="text-[18px] font-semibold mb-5 tracking-[-0.01em]">
              Want results like these?
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background font-semibold text-[14px] px-6 py-3.5 rounded-[9px] transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-elegant active:translate-y-0 active:scale-[0.98]"
              >
                Start a project
              </a>
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground border border-foreground/20 px-6 py-3.5 rounded-[9px] hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                All work
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
