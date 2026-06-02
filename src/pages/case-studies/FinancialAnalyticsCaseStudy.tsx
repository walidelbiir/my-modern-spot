import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ChevronDown,
  FileSpreadsheet,
  Clock,
  TrendingDown,
  Eye,
  Zap,
  BarChart3,
  Brain,
  Bot,
  LineChart,
  Database,
  Layers,
  RefreshCw,
  Shield,
  Mail,
  CheckCircle2,
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

const EMERALD = "#10b981";
const AMBER = "#f59e0b";
const INDIGO = "#6366f1";

type Props = { study: CaseStudy };

export default function FinancialAnalyticsCaseStudy({ study }: Props) {
  const navigate = useNavigate();
  const { scrollerRef, index, direction, go } = useCaseStudyScroll();

  return (
    <CaseStudyShell accent={EMERALD} index={index} go={go} scrollerRef={scrollerRef}>
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
  <div className="w-full h-full bg-[#080f0d] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-50"
      style={{
        background: `radial-gradient(ellipse at 70% 30%, ${EMERALD}28 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, ${INDIGO}18 0%, transparent 50%)`,
      }}
    />
    <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-24 md:pt-0">
      <div className={cn("flex-1 space-y-6 max-w-xl", slideEnterClass(isActive, direction))}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border font-medium"
          style={{ borderColor: EMERALD, color: EMERALD }}
        >
          {study.category}
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
          {study.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-400">{study.tagline}</p>
        <div className="flex flex-wrap gap-2 pt-1">
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
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
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
        className={cn("flex-1 w-full max-w-lg", isActive && "animate-fade-in")}
        style={isActive ? { animationDelay: "200ms" } : undefined}
      >
        <DashboardHeroVisual />
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

const DashboardHeroVisual = () => (
  <div className="rounded-2xl border border-white/10 bg-[#0c1512]/90 backdrop-blur-sm overflow-hidden shadow-2xl">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
      <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
      <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      <span className="ml-2 text-[10px] text-slate-500 uppercase tracking-widest">Live dashboard</span>
    </div>
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Portfolio", value: "+12.4%", up: true },
          { label: "Risk score", value: "Low", up: null },
          { label: "Forecast", value: "Q3 ↑", up: true },
        ].map((kpi) => (
          <div key={kpi.label} className="p-3 rounded-xl bg-white/[0.04] border border-white/8">
            <div className="text-[9px] uppercase tracking-wider text-slate-500 mb-1">{kpi.label}</div>
            <div
              className="text-sm font-bold"
              style={{ color: kpi.up === true ? EMERALD : kpi.up === false ? "#f87171" : AMBER }}
            >
              {kpi.value}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
        <svg viewBox="0 0 320 80" className="w-full h-16">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={EMERALD} stopOpacity="0.35" />
              <stop offset="100%" stopColor={EMERALD} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 L40,52 L80,58 L120,38 L160,42 L200,22 L240,28 L280,12 L320,18 L320,80 L0,80 Z"
            fill="url(#chartFill)"
          />
          <path
            d="M0,60 L40,52 L80,58 L120,38 L160,42 L200,22 L240,28 L280,12 L320,18"
            fill="none"
            stroke={EMERALD}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="320" cy="18" r="4" fill={EMERALD}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
        <Bot className="h-4 w-4 text-indigo-400 shrink-0" />
        <span className="text-[11px] text-slate-400">
          AI insight: <span className="text-slate-200">Revenue trend exceeds forecast by 8.2%</span>
        </span>
      </div>
    </div>
  </div>
);

const PROBLEM_ICONS = [FileSpreadsheet, Clock, TrendingDown, Eye];

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
  const accents: Record<string, string> = {
    problem: "#f97316",
    need: AMBER,
    solution: EMERALD,
    implementation: INDIGO,
    results: EMERALD,
  };
  const accent = accents[section.id] ?? EMERALD;
  const bgs: Record<string, string> = {
    problem: "#0c1210",
    need: "#0a0f0d",
    solution: "#081210",
    implementation: "#0a0c14",
    results: "#060f0c",
  };

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-hidden" style={{ background: bgs[section.id] }}>
      {section.id === "solution" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 80% 20%, ${EMERALD}15, transparent 50%)` }}
        />
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
}) => (
  <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="grid grid-cols-2 gap-3">
      {section.items?.map((item, i) => {
        const Icon = PROBLEM_ICONS[i] ?? AlertTriangle;
        return (
          <div
            key={item}
            className={cn(
              "p-4 rounded-xl bg-[#141c18] border border-orange-500/15 flex flex-col gap-3",
              i === 0 && "col-span-2",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${120 + i * 90}ms` } : undefined}
          >
            <div
              className="h-9 w-9 rounded-lg flex items-center justify-center"
              style={{ background: `${accent}22`, color: accent }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
          </div>
        );
      })}
    </div>
  </div>
);

const NeedLayout = ({
  section,
  accent,
  isActive,
}: {
  section: CaseStudySection;
  accent: string;
  isActive: boolean;
}) => (
  <div className="w-full">
    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
      <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div
            className={cn("p-4 rounded-xl bg-[#141c18] border border-red-500/20", staggerClass(isActive))}
            style={isActive ? { animationDelay: "150ms" } : undefined}
          >
            <div className="text-[10px] uppercase tracking-widest text-red-400 mb-3">Before</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex gap-2"><span className="text-red-400">×</span> Manual spreadsheets</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Days to compile reports</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> No predictive signals</li>
            </ul>
          </div>
          <div
            className={cn("p-4 rounded-xl bg-[#141c18] border border-emerald-500/25", staggerClass(isActive))}
            style={isActive ? { animationDelay: "250ms" } : undefined}
          >
            <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-3">After</div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Live dashboards</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Automated reports</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> AI-driven forecasts</li>
            </ul>
          </div>
        </div>
        {section.items?.map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-start gap-3 p-4 rounded-xl bg-[#141c18] border border-white/5",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${350 + i * 80}ms` } : undefined}
          >
            <Zap className="h-5 w-5 shrink-0 mt-0.5" style={{ color: accent }} />
            <span className="text-slate-300 text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const STACK_LAYERS = [
  { icon: Database, label: "Data layer", sub: "Unified ingestion & warehouse" },
  { icon: Brain, label: "ML engine", sub: "TensorFlow predictive models" },
  { icon: BarChart3, label: "Visualization", sub: "React real-time dashboards" },
  { icon: Bot, label: "AI insights", sub: "Natural language analytics agent" },
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
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
      <div className="space-y-2">
        {STACK_LAYERS.map((layer, i) => (
          <div
            key={layer.label}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#141c18]",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${100 + i * 100}ms` } : undefined}
          >
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${accent}22`, color: accent }}
            >
              <layer.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{layer.label}</div>
              <div className="text-xs text-slate-500">{layer.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {section.items?.map((item, i) => {
          const [title, ...rest] = item.split(" — ");
          const desc = rest.join(" — ") || item;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#141c18] border border-emerald-500/15",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${450 + i * 80}ms` } : undefined}
            >
              <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const BUILD_PHASES = [
  { phase: "01", title: "Data foundation", desc: "Pipelines from CRM, ERP, and market feeds into a unified store" },
  { phase: "02", title: "Model training", desc: "Forecasting and risk models built and validated on historical data" },
  { phase: "03", title: "Dashboard build", desc: "Role-based React views with live charts and drill-downs" },
  { phase: "04", title: "AI & automation", desc: "Insight agent and scheduled report delivery wired in" },
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
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div className="space-y-0">
        {BUILD_PHASES.map((p, i) => (
          <div
            key={p.phase}
            className={cn("flex gap-4", staggerClass(isActive))}
            style={isActive ? { animationDelay: `${100 + i * 110}ms` } : undefined}
          >
            <div className="flex flex-col items-center shrink-0 w-10">
              <div
                className="h-9 w-9 rounded-full border-2 bg-[#0a0c14] flex items-center justify-center text-[10px] font-bold leading-none"
                style={{ borderColor: accent, color: accent }}
              >
                {p.phase}
              </div>
              {i < BUILD_PHASES.length - 1 && (
                <div className="w-px flex-1 min-h-6 my-1 bg-indigo-500/30" aria-hidden />
              )}
            </div>
            <div className={cn("flex-1 min-w-0", i < BUILD_PHASES.length - 1 ? "pb-8" : "pb-0")}>
              <h3 className="text-white font-semibold mb-1 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {section.items?.map((item, i) => {
          const icons = [Layers, RefreshCw, Shield, Mail];
          const Icon = icons[i] ?? LineChart;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#141c18] border border-white/8 flex flex-col gap-3",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${450 + i * 70}ms` } : undefined}
            >
              <div
                className="h-9 w-9 rounded-lg flex items-center justify-center"
                style={{ background: `${accent}22`, color: accent }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

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
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {section.stats?.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "relative overflow-hidden p-6 md:p-8 rounded-2xl bg-[#141c18] border border-emerald-500/20 text-center",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${100 + i * 120}ms` } : undefined}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${EMERALD}, ${AMBER})` }}
          />
          <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: accent }}>
            {s.value}
          </div>
          <div className="text-sm text-slate-400">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="pt-4 text-center space-y-5">
      <p className="text-lg md:text-xl text-white font-medium max-w-2xl mx-auto">
        Need a financial analytics platform with AI built in?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/#contact")}
          className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ background: EMERALD }}
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
