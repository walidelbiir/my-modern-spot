import { Link } from "react-router-dom";
import type { RefObject, ReactNode } from "react";

type CaseStudyShellProps = {
  accent: string;
  index: number;
  go: (i: number) => void;
  scrollerRef: RefObject<HTMLDivElement>;
  children: ReactNode;
};

export function CaseStudyShell({ accent, index, scrollerRef, children }: CaseStudyShellProps) {
  return (
    <div className="fixed inset-0 bg-[#0f172a] text-slate-100 font-sans">
      <Link
        to="/#portfolio"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors bg-[#0f172a]/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10"
      >
        ← Back to Portfolio
      </Link>
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 text-sm font-semibold tracking-wide text-white"
      >
        BIR<span style={{ color: accent }}>.</span>
      </Link>

      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-white/5">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${((index + 1) / 6) * 100}%`, background: accent }}
        />
      </div>

      <div
        ref={scrollerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
}

export function CaseStudySlide({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-screen snap-start relative overflow-hidden">{children}</section>
  );
}

export function Watermark({ n, isActive }: { n: string; isActive: boolean }) {
  return (
    <span
      className={`pointer-events-none select-none absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 font-black leading-none text-white${
        isActive ? " animate-watermark-enter" : ""
      }`}
      style={{ fontSize: "25vw", opacity: isActive ? undefined : 0.05 }}
    >
      {n}
    </span>
  );
}

export function SectionHeader({
  label,
  accent,
  headline,
  body,
}: {
  label: string;
  accent: string;
  headline: string;
  body?: string;
}) {
  return (
    <div className="space-y-5 max-w-2xl">
      <div className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: accent }}>
        {label}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
        {headline}
      </h2>
      {body && <p className="text-base md:text-lg text-slate-300 leading-relaxed">{body}</p>}
    </div>
  );
}

export function CaseStudyLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-slate-200 gap-4">
      <p className="text-slate-400 animate-pulse">Loading case study…</p>
    </div>
  );
}

export function CaseStudyNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-slate-200 gap-4">
      <p>Case study not found.</p>
      <Link to="/#portfolio" className="text-sky-400 hover:underline">
        ← Back to Portfolio
      </Link>
    </div>
  );
}
