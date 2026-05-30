import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Cog, Container, Cloud, Database, Smartphone, Bell, MonitorCog, Timer, ChevronDown } from "lucide-react";
import { getCaseStudy, type CaseStudySection } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

const TEAL = "#0ea5e9";

const slideLabels = [
  "Hero",
  "01 Problem",
  "02 Need",
  "03 Solution",
  "04 Implementation",
  "05 Results",
];

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = slug ? getCaseStudy(slug) : undefined;
  const [index, setIndex] = useState(0);
  const total = 6;
  const lockRef = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const isMobile = useIsMobile();

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(total - 1, i));
      setIndex(next);
    },
    [total]
  );

  useEffect(() => {
    if (isMobile) return;
    const onWheel = (e: WheelEvent) => {
      if (lockRef.current) return;
      if (Math.abs(e.deltaY) < 20) return;
      lockRef.current = true;
      setIndex((i) => Math.max(0, Math.min(total - 1, i + (e.deltaY > 0 ? 1 : -1))));
      setTimeout(() => (lockRef.current = false), 700);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        go(indexRef.current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        go(indexRef.current - 1);
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current == null) return;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dy) > 50) go(indexRef.current + (dy < 0 ? 1 : -1));
      touchStartY.current = null;
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [go, isMobile]);

  const indexRef = useRef(index);
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-slate-200 gap-4">
        <p>Case study not found.</p>
        <Link to="/#portfolio" className="text-sky-400 hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const sections = study.sections;

  return (
    <div className="fixed inset-0 bg-[#0f172a] text-slate-100 overflow-hidden font-sans">
      {/* Top chrome */}
      <Link
        to="/#portfolio"
        className="fixed top-6 left-6 z-50 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
      </Link>
      <Link
        to="/"
        className="fixed top-6 right-6 z-50 text-sm font-semibold tracking-wide text-white"
      >
        BIR<span style={{ color: TEAL }}>.</span>
      </Link>

      {/* Mobile progress bar */}
      <div className="md:hidden fixed top-14 left-0 right-0 z-40 h-1 bg-white/5">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${((index + 1) / total) * 100}%`, background: TEAL }}
        />
      </div>

      {/* Dot nav (desktop) */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {slideLabels.map((label, i) => (
          <button
            key={label}
            onClick={() => go(i)}
            className="group flex items-center gap-3 text-right"
            aria-label={`Go to ${label}`}
          >
            <span
              className={cn(
                "text-xs tracking-wider uppercase transition-opacity",
                index === i ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-60 text-slate-300"
              )}
            >
              {label}
            </span>
            <span
              className={cn(
                "h-3 w-3 rounded-full border transition-all",
                index === i
                  ? "border-transparent scale-110"
                  : "border-slate-500 hover:border-slate-300"
              )}
              style={index === i ? { background: TEAL, boxShadow: `0 0 12px ${TEAL}` } : undefined}
            />
          </button>
        ))}
      </nav>

      {/* Slides container - desktop carousel / mobile scroll */}
      <div
        className={cn(
          "h-full md:transition-transform md:duration-700 md:ease-[cubic-bezier(0.65,0,0.35,1)]",
          isMobile ? "overflow-y-auto" : "overflow-hidden"
        )}
        style={!isMobile ? { transform: `translateY(-${index * 100}vh)` } : undefined}
      >
        <Slide active={index === 0 || isMobile}>
          <HeroSlide study={study} onScroll={() => go(1)} />
        </Slide>
        {sections.map((s, i) => (
          <Slide key={s.id} active={index === i + 1 || isMobile}>
            <SectionSlide section={s} number={i + 1} navigate={navigate} />
          </Slide>
        ))}
      </div>
    </div>
  );
};

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}

const Slide = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <section
    className={cn(
      "w-full h-screen relative md:overflow-hidden transition-opacity duration-500",
      active ? "opacity-100" : "opacity-60"
    )}
  >
    {children}
  </section>
);

const Watermark = ({ n }: { n: string }) => (
  <span
    className="pointer-events-none select-none absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 font-black leading-none text-white"
    style={{ fontSize: "25vw", opacity: 0.05 }}
  >
    {n}
  </span>
);

const HeroSlide = ({ study, onScroll }: { study: ReturnType<typeof getCaseStudy>; onScroll: () => void }) => {
  if (!study) return null;
  return (
    <div className="w-full h-full bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 80% 50%, ${TEAL}33, transparent 60%)` }} />
      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 pt-24 md:pt-0">
        <div className="flex-1 md:max-w-[60%] space-y-6 animate-fade-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            {study.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl">{study.tagline}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {study.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
          {study.overview && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-xl">
              {Object.entries(study.overview).map(([k, v]) => (
                <div key={k}>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">{k}</div>
                  <div className="text-sm text-slate-200 font-medium mt-1">{v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 md:max-w-[40%] w-full">
          <PipelineHero />
        </div>
      </div>
      <button
        onClick={onScroll}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors"
      >
        Scroll to explore
        <ChevronDown className="h-4 w-4 animate-bounce-slow" />
      </button>
    </div>
  );
};

const PipelineHero = () => (
  <svg viewBox="0 0 400 360" className="w-full h-auto max-h-[60vh]">
    <defs>
      <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {[
      { x: 80, y: 60 },
      { x: 280, y: 60 },
      { x: 80, y: 180 },
      { x: 280, y: 180 },
      { x: 180, y: 300 },
    ].map((n, i) => (
      <g key={i}>
        <circle cx={n.x} cy={n.y} r="34" fill="url(#nodeGrad)" stroke={TEAL} strokeWidth="1.5" filter="url(#glow)" />
        <circle cx={n.x} cy={n.y} r="6" fill={TEAL}>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      </g>
    ))}
    {[
      ["M114,60 L246,60"],
      ["M280,94 L280,146"],
      ["M246,180 L114,180"],
      ["M80,214 L80,260 L146,300"],
      ["M214,300 L280,260 L280,214"],
    ].map(([d], i) => (
      <path
        key={i}
        d={d}
        fill="none"
        stroke={TEAL}
        strokeWidth="1.5"
        strokeDasharray="5 5"
        opacity="0.6"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
      </path>
    ))}
  </svg>
);

const SectionSlide = ({
  section,
  number,
  navigate,
}: {
  section: CaseStudySection;
  number: number;
  navigate: (s: string) => void;
}) => {
  const n = String(number).padStart(2, "0");
  const labelColors: Record<string, string> = {
    problem: "#0ea5e9",
    need: "#f59e0b",
    solution: "#0ea5e9",
    implementation: "#a78bfa",
    results: "#34d399",
  };
  const accent = labelColors[section.id] ?? TEAL;
  const bg = section.id === "need" ? "#111827" : "#0f172a";

  return (
    <div className="relative w-full h-full" style={{ background: bg }}>
      {section.id === "solution" && (
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 10% 100%, ${TEAL}22, transparent 50%)` }} />
      )}
      {section.id === "results" && (
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 100%, #34d39922, transparent 60%)` }} />
      )}
      <Watermark n={n} />
      <div className="relative h-full container mx-auto px-6 md:px-12 flex items-center py-20 md:py-0">
        {section.visual === "list" && section.id === "problem" && (
          <ProblemLayout section={section} accent={accent} />
        )}
        {section.visual === "list" && section.id === "need" && (
          <NeedLayout section={section} accent={accent} />
        )}
        {section.visual === "diagram" && (
          <SolutionLayout section={section} accent={accent} />
        )}
        {section.visual === "icon" && (
          <ImplementationLayout section={section} accent={accent} />
        )}
        {section.visual === "stat" && (
          <ResultsLayout section={section} accent={accent} navigate={navigate} />
        )}
      </div>
    </div>
  );
};

const SectionHeader = ({ label, accent, headline, body }: { label: string; accent: string; headline: string; body?: string }) => (
  <div className="space-y-5 max-w-2xl">
    <div className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: accent }}>
      {label}
    </div>
    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">{headline}</h2>
    {body && <p className="text-base md:text-lg text-slate-300 leading-relaxed">{body}</p>}
  </div>
);

const ProblemLayout = ({ section, accent }: { section: CaseStudySection; accent: string }) => {
  const icons = ["🖥️", "⏱️", "📱"];
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
      <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
      <div className="relative h-[340px] hidden md:block">
        {section.items?.map((item, i) => (
          <div
            key={item}
            className="absolute left-0 right-0 mx-auto max-w-md p-6 rounded-xl bg-[#1e293b] border-l-4 border-red-500/70 shadow-2xl animate-fade-up"
            style={{
              top: `${i * 90}px`,
              transform: `rotate(${(i - 1) * 2}deg)`,
              animationDelay: `${i * 120}ms`,
              zIndex: 10 - i,
            }}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{icons[i]}</span>
              <p className="text-slate-200 font-medium">{item}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden space-y-3">
        {section.items?.map((item, i) => (
          <div key={item} className="p-4 rounded-xl bg-[#1e293b] border-l-4 border-red-500/70 flex items-center gap-3">
            <span className="text-2xl">{icons[i]}</span>
            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const NeedLayout = ({ section, accent }: { section: CaseStudySection; accent: string }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="space-y-3">
      {section.items?.map((item, i) => (
        <div
          key={item}
          className="flex items-center gap-4 p-4 rounded-xl bg-[#1e293b] border border-white/5 animate-fade-up"
          style={{ animationDelay: `${i * 120}ms` }}
        >
          <div className="h-9 w-9 rounded-full flex items-center justify-center" style={{ background: `${TEAL}22` }}>
            <Check className="h-5 w-5" style={{ color: TEAL }} />
          </div>
          <span className="text-slate-200">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const PIPELINE_STEPS = [
  "PR Opened",
  "Tests Run",
  "Images Built",
  "IaC Deploy",
  "Environment Live",
  "Dev Gets Link",
];

const SolutionLayout = ({ section, accent }: { section: CaseStudySection; accent: string }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="space-y-4">
      <div className="hidden md:grid grid-cols-3 gap-3">
        {PIPELINE_STEPS.slice(0, 3).map((s, i) => (
          <PipelineNode key={s} label={s} delay={i * 150} />
        ))}
        <div className="col-span-3 flex justify-end pr-6">
          <ArrowRight className="h-6 w-6 rotate-90" style={{ color: TEAL }} />
        </div>
        {PIPELINE_STEPS.slice(3).reverse().map((s, i) => (
          <PipelineNode key={s} label={s} delay={(i + 3) * 150} />
        ))}
      </div>
      <div className="md:hidden space-y-3">
        {PIPELINE_STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <PipelineNode label={s} delay={i * 100} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PipelineNode = ({ label, delay }: { label: string; delay: number }) => (
  <div
    className="px-4 py-3 rounded-xl bg-[#1e293b] border text-center text-sm font-medium text-white animate-fade-up"
    style={{ borderColor: `${TEAL}55`, boxShadow: `0 0 20px ${TEAL}11`, animationDelay: `${delay}ms` }}
  >
    {label}
  </div>
);

const IMPL_CARDS = [
  { icon: Cog, title: "GitHub Actions", desc: "Triggered on PR open, sync, and close events" },
  { icon: Container, title: "Docker Builds", desc: "All app images built and pushed per PR" },
  { icon: Cloud, title: "IaC Deploy", desc: "Cloud resources provisioned reproducibly via IaC" },
  { icon: Database, title: "Seeded Database", desc: "Isolated DB per environment with realistic test data" },
  { icon: Smartphone, title: "Expo OTA Update", desc: "Mobile preview via OTA — no full build cost" },
  { icon: Bell, title: "PR Notification", desc: "Dev receives links to web + mobile in PR comment" },
];

const ImplementationLayout = ({ section, accent }: { section: CaseStudySection; accent: string }) => (
  <div className="w-full space-y-10">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {IMPL_CARDS.map((c, i) => (
        <div
          key={c.title}
          className="p-5 rounded-xl bg-[#1e293b] border border-[#334155] animate-fade-up"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center mb-3"
            style={{ background: `${accent}22`, color: accent }}
          >
            <c.icon className="h-5 w-5" />
          </div>
          <h3 className="text-white font-semibold mb-1">{c.title}</h3>
          <p className="text-sm text-slate-400 leading-snug">{c.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const OUTCOMES = [
  { icon: "🚀", title: "Faster reviews", desc: "Code review cycle time cut significantly" },
  { icon: "🤝", title: "Better QA handoff", desc: "Dev → QA fully automated and documented" },
  { icon: "👥", title: "Client demos", desc: "Shareable beta URLs from any PR, instantly" },
  { icon: "💰", title: "Cost-effective", desc: "OTA mobile previews vs. costly full builds" },
];

const ResultsLayout = ({
  section,
  accent,
  navigate,
}: {
  section: CaseStudySection;
  accent: string;
  navigate: (s: string) => void;
}) => (
  <div className="w-full space-y-8">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {section.stats?.map((s, i) => (
        <div
          key={s.label}
          className="p-6 rounded-xl bg-[#1e293b] border border-white/10 text-center animate-fade-up"
          style={{ animationDelay: `${i * 120}ms` }}
        >
          <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: accent }}>
            {s.value}
          </div>
          <div className="text-sm text-slate-400">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {OUTCOMES.map((o, i) => (
        <div
          key={o.title}
          className="p-4 rounded-xl bg-[#1e293b] border border-white/10 animate-fade-up"
          style={{ animationDelay: `${(i + 3) * 100}ms` }}
        >
          <div className="text-2xl mb-2">{o.icon}</div>
          <div className="text-white font-semibold text-sm">{o.title}</div>
          <div className="text-xs text-slate-400 mt-1">{o.desc}</div>
        </div>
      ))}
    </div>
    <div className="pt-6 text-center space-y-4">
      <p className="text-lg md:text-xl text-white font-medium">
        Want a preview system like this for your team?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/#contact")}
          className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ background: accent }}
        >
          Start a Conversation →
        </button>
        <button
          onClick={() => navigate("/#portfolio")}
          className="px-6 py-3 rounded-full font-semibold text-slate-200 border border-white/20 hover:bg-white/5 transition-colors"
        >
          ← Back to Portfolio
        </button>
      </div>
    </div>
  </div>
);

export default CaseStudy;
