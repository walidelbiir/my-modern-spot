import { Link } from "react-router-dom";
import type { RefObject, ReactNode } from "react";

type CaseStudyShellProps = {
  accent: string;
  index: number;
  go: (i: number) => void;
  scrollerRef: RefObject<HTMLDivElement>;
  children: ReactNode;
};

export function CaseStudyShell({ index, scrollerRef, children }: CaseStudyShellProps) {
  return (
    <div className="fixed inset-0 bg-[#0d0d0c] text-[#f2eee5] font-sans">
      <Link
        to="/#portfolio"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 border-2 border-[#f2eee5] bg-[#0d0d0c]/70 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-[#f2eee5] backdrop-blur transition-colors hover:bg-[#ffe70a] hover:text-[#0d0d0c] hover:border-[#ffe70a]"
      >
        ← Back to Work
      </Link>
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 text-lg font-extrabold tracking-[-0.05em] text-[#f2eee5]"
      >
        B<span style={{ color: "#ffe70a" }}>!</span>R
      </Link>

      <div className="fixed top-16 left-0 right-0 z-40 h-1.5 bg-white/10">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${((index + 1) / 6) * 100}%`, background: "#ffe70a" }}
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0c] text-[#f2eee5] gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#f2eee5]/60 animate-pulse">
        Loading case study…
      </p>
    </div>
  );
}

export function CaseStudyNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0c] text-[#f2eee5] gap-4">
      <p className="font-mono text-sm uppercase tracking-[0.15em]">Case study not found.</p>
      <Link to="/#portfolio" className="text-[#ffe70a] underline-offset-4 hover:underline">
        ← Back to Work
      </Link>
    </div>
  );
}
