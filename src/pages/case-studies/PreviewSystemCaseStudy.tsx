import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cog,
  Container,
  Cloud,
  Database,
  Smartphone,
  Bell,
  ChevronDown,
  GitPullRequest,
  Rocket,
} from "lucide-react";
import type { CaseStudy, CaseStudySection } from "@/types/caseStudy";
import {
  CaseStudyShell,
  CaseStudySlide,
  SectionHeader,
  Watermark,
} from "@/components/case-study/CaseStudyShell";
import { slideEnterClass, staggerClass, useCaseStudyScroll } from "@/hooks/useCaseStudyScroll";
import { cn } from "@/lib/utils";

const TEAL = "#0ea5e9";

type Props = { study: CaseStudy };

export default function PreviewSystemCaseStudy({ study }: Props) {
  const navigate = useNavigate();
  const { scrollerRef, index, direction, go } = useCaseStudyScroll();

  return (
    <CaseStudyShell accent={TEAL} index={index} go={go} scrollerRef={scrollerRef}>
      <CaseStudySlide>
        <HeroSlide study={study} isActive={index === 0} direction={direction} onScroll={() => go(1)} />
      </CaseStudySlide>
      {study.sections.map((s, i) => (
        <CaseStudySlide key={s.id}>
          <SectionSlide
            section={s}
            number={i + 1}
            isActive={index === i + 1}
            direction={direction}
            navigate={navigate}
          />
        </CaseStudySlide>
      ))}
    </CaseStudyShell>
  );
}

const HeroSlide = ({
  study,
  isActive,
  direction,
  onScroll,
}: {
  study: CaseStudy;
  isActive: boolean;
  direction: number;
  onScroll: () => void;
}) => (
  <div className="w-full h-full bg-[#0f172a] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-30"
      style={{ background: `radial-gradient(ellipse at 80% 50%, ${TEAL}33, transparent 60%)` }}
    />
    <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 pt-24 md:pt-0">
      <div className={cn("flex-1 md:max-w-[60%] space-y-6", slideEnterClass(isActive, direction))}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border"
          style={{ borderColor: TEAL, color: TEAL }}
        >
          {study.category}
        </span>
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight">
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
      <div
        className={cn("hidden md:block flex-1 md:max-w-[40%] w-full", isActive && "animate-fade-in")}
        style={isActive ? { animationDelay: "200ms" } : undefined}
      >
        <PipelineHero />
      </div>
    </div>
    <button
      onClick={onScroll}
      className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors"
    >
      Scroll to explore
      <ChevronDown className="h-4 w-4 animate-bounce" />
    </button>
  </div>
);

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
      "M114,60 L246,60",
      "M280,94 L280,146",
      "M246,180 L114,180",
      "M80,214 L80,260 L146,300",
      "M214,300 L280,260 L280,214",
    ].map((d, i) => (
      <path key={i} d={d} fill="none" stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
      </path>
    ))}
  </svg>
);

const SectionSlide = ({
  section,
  number,
  isActive,
  direction,
  navigate,
}: {
  section: CaseStudySection;
  number: number;
  isActive: boolean;
  direction: number;
  navigate: (s: string) => void;
}) => {
  const n = String(number).padStart(2, "0");
  const labelColors: Record<string, string> = {
    problem: "#f87171",
    need: "#f59e0b",
    solution: "#0ea5e9",
    implementation: "#a78bfa",
    results: "#34d399",
  };
  const accent = labelColors[section.id] ?? TEAL;
  const bg = section.id === "need" || section.id === "implementation" ? "#111827" : "#0f172a";

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-hidden" style={{ background: bg }}>
      {section.id === "solution" && (
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 10% 100%, ${TEAL}22, transparent 50%)` }} />
      )}
      {section.id === "results" && (
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 100%, #34d39922, transparent 60%)` }} />
      )}
      <Watermark n={n} isActive={isActive} />
      <div
        className={cn(
          "relative min-h-full container mx-auto px-6 md:px-12 flex items-center py-24 md:py-0",
          slideEnterClass(isActive, direction)
        )}
      >
        {section.id === "problem" && <ProblemLayout section={section} accent={accent} isActive={isActive} />}
        {section.id === "need" && <NeedLayout section={section} accent={accent} isActive={isActive} />}
        {section.id === "solution" && <SolutionLayout section={section} accent={accent} isActive={isActive} />}
        {section.id === "implementation" && (
          <ImplementationLayout section={section} accent={accent} isActive={isActive} />
        )}
        {section.id === "results" && (
          <ResultsLayout section={section} accent={accent} isActive={isActive} navigate={navigate} />
        )}
      </div>
    </div>
  );
};

const ProblemLayout = ({
  section,
  accent,
  isActive,
}: {
  section: CaseStudySection;
  accent: string;
  isActive: boolean;
}) => {
  const icons = ["🖥️", "⏱️", "📱"];
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
      <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
      <div className="space-y-3">
        {section.items?.map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl bg-[#1e293b] border-l-4 border-red-500/70",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${150 + i * 120}ms` } : undefined}
          >
            <span className="text-2xl">{icons[i] ?? "⚠️"}</span>
            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const NeedLayout = ({
  section,
  accent,
  isActive,
}: {
  section: CaseStudySection;
  accent: string;
  isActive: boolean;
}) => (
  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="space-y-3">
      {section.items?.map((item, i) => (
        <div
          key={item}
          className={cn(
            "flex items-center gap-4 p-4 rounded-xl bg-[#1e293b] border border-white/5",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${150 + i * 120}ms` } : undefined}
        >
          <div className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center" style={{ background: `${TEAL}22` }}>
            <Check className="h-5 w-5" style={{ color: TEAL }} />
          </div>
          <span className="text-slate-200">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const PIPELINE_STEPS = [
  { icon: GitPullRequest, label: "PR Opened", sub: "Trigger" },
  { icon: Cog, label: "Pipeline Runs", sub: "Build & test" },
  { icon: Cloud, label: "Env Provisioned", sub: "Web + DB + Mobile" },
  { icon: Rocket, label: "Live Preview Link", sub: "Posted on PR" },
];

const SolutionLayout = ({
  section,
  accent,
  isActive,
}: {
  section: CaseStudySection;
  accent: string;
  isActive: boolean;
}) => (
  <div className="w-full space-y-10">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="hidden md:flex items-stretch gap-3">
      {PIPELINE_STEPS.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 flex-1">
          <div
            className={cn("flex-1 p-5 rounded-xl bg-[#1e293b] border text-center", staggerClass(isActive))}
            style={{
              borderColor: `${TEAL}55`,
              boxShadow: `0 0 24px ${TEAL}15`,
              ...(isActive ? { animationDelay: `${150 + i * 150}ms` } : {}),
            }}
          >
            <div className="h-10 w-10 mx-auto rounded-full flex items-center justify-center mb-3" style={{ background: `${TEAL}22`, color: TEAL }}>
              <s.icon className="h-5 w-5" />
            </div>
            <div className="text-white font-semibold text-sm">{s.label}</div>
            <div className="text-xs text-slate-400 mt-1">{s.sub}</div>
          </div>
          {i < PIPELINE_STEPS.length - 1 && <ArrowRight className="h-5 w-5 shrink-0" style={{ color: TEAL }} />}
        </div>
      ))}
    </div>
  </div>
);

const IMPL_CARDS = [
  { icon: Cog, title: "GitHub Actions", desc: "Triggered on PR open, sync, and close events" },
  { icon: Container, title: "Docker Builds", desc: "All app images built and pushed per PR" },
  { icon: Cloud, title: "IaC Provisioning", desc: "Cloud resources defined as code, reproducible per PR" },
  { icon: Database, title: "Seeded Database", desc: "Isolated DB per environment with realistic test data" },
  { icon: Smartphone, title: "Expo OTA Updates", desc: "Mobile preview via OTA — no full build cost" },
  { icon: Bell, title: "PR Notifications", desc: "Dev receives web + mobile links in a PR comment" },
];

const ImplementationLayout = ({
  section,
  accent,
  isActive,
}: {
  section: CaseStudySection;
  accent: string;
  isActive: boolean;
}) => (
  <div className="w-full space-y-10">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {IMPL_CARDS.map((c, i) => (
        <div
          key={c.title}
          className={cn(
            "p-5 rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#475569] transition-colors",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${150 + i * 80}ms` } : undefined}
        >
          <div className="h-10 w-10 rounded-full flex items-center justify-center mb-3" style={{ background: `${accent}22`, color: accent }}>
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
  isActive,
  navigate,
}: {
  section: CaseStudySection;
  accent: string;
  isActive: boolean;
  navigate: (s: string) => void;
}) => (
  <div className="w-full space-y-8">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {section.stats?.map((s, i) => (
        <div
          key={s.label}
          className={cn("p-6 rounded-xl bg-[#1e293b] border border-white/10 text-center", staggerClass(isActive))}
          style={isActive ? { animationDelay: `${150 + i * 120}ms` } : undefined}
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
          className={cn("p-4 rounded-xl bg-[#1e293b] border border-white/10", staggerClass(isActive))}
          style={isActive ? { animationDelay: `${450 + i * 100}ms` } : undefined}
        >
          <div className="text-2xl mb-2">{o.icon}</div>
          <div className="text-white font-semibold text-sm">{o.title}</div>
          <div className="text-xs text-slate-400 mt-1">{o.desc}</div>
        </div>
      ))}
    </div>
    <div className="pt-6 text-center space-y-4">
      <p className="text-lg md:text-xl text-white font-medium">Want a preview system like this for your team?</p>
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
