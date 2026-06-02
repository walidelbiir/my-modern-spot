import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ChevronDown,
  Factory,
  Clock,
  Wrench,
  EyeOff,
  Zap,
  Cpu,
  Bot,
  Radio,
  Activity,
  ShieldCheck,
  Bell,
  CheckCircle2,
  Database,
  LineChart,
  Settings,
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

const CYAN = "#06b6d4";
const AMBER = "#f59e0b";
const SLATE = "#64748b";

type Props = { study: CaseStudy };

export default function SmartManufacturingIotCaseStudy({ study }: Props) {
  const navigate = useNavigate();
  const { scrollerRef, index, direction, go } = useCaseStudyScroll();

  return (
    <CaseStudyShell accent={CYAN} index={index} go={go} scrollerRef={scrollerRef}>
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
  <div className="w-full h-full bg-[#0a0e12] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-45"
      style={{
        background: `radial-gradient(ellipse at 60% 35%, ${CYAN}22 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, ${AMBER}15 0%, transparent 50%)`,
      }}
    />
    <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 pt-24 md:pt-0">
      <div className={cn("flex-1 space-y-6 max-w-xl", slideEnterClass(isActive, direction))}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border font-medium"
          style={{ borderColor: CYAN, color: CYAN }}
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
        className={cn("flex-1 w-full max-w-md", isActive && "animate-fade-in")}
        style={isActive ? { animationDelay: "200ms" } : undefined}
      >
        <FactoryDashboardVisual />
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

const FactoryDashboardVisual = () => (
  <div className="rounded-2xl border border-white/10 bg-[#111820]/95 backdrop-blur-sm overflow-hidden shadow-2xl">
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
      <div className="flex items-center gap-2">
        <Factory className="h-4 w-4" style={{ color: CYAN }} />
        <span className="text-xs font-semibold text-white">Production floor</span>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/25">
        <Radio className="h-3 w-3 text-cyan-400 animate-pulse" />
        <span className="text-[10px] text-cyan-300">42 sensors live</span>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Line A", value: "98.2%", status: "ok" },
          { label: "Line B", value: "91.4%", status: "warn" },
          { label: "Line C", value: "99.1%", status: "ok" },
        ].map((line) => (
          <div key={line.label} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-center">
            <div className="text-[9px] uppercase tracking-wider text-slate-500">{line.label}</div>
            <div className="text-sm font-bold text-white mt-0.5">{line.value}</div>
            <div
              className="text-[9px] mt-0.5"
              style={{ color: line.status === "ok" ? CYAN : AMBER }}
            >
              {line.status === "ok" ? "Normal" : "Watch"}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
        <svg viewBox="0 0 280 56" className="w-full h-12">
          <path
            d="M0,40 L35,38 L70,42 L105,28 L140,32 L175,18 L210,22 L245,12 L280,16"
            fill="none"
            stroke={CYAN}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M175,18 L175,56 L280,56 L280,16 L245,12"
            fill={`${AMBER}33`}
            stroke={AMBER}
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        </svg>
        <div className="flex justify-between text-[9px] text-slate-500 mt-1">
          <span>Vibration trend</span>
          <span className="text-amber-400">Anomaly flagged</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
        <Bot className="h-4 w-4 text-amber-400 shrink-0" />
        <span className="text-[11px] text-slate-400">
          AI agent: <span className="text-slate-200">Schedule maintenance on Line B — bearing wear detected</span>
        </span>
      </div>
    </div>
  </div>
);

const PROBLEM_ICONS = [Clock, Wrench, EyeOff, Factory];

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
    solution: CYAN,
    implementation: SLATE,
    results: CYAN,
  };
  const accent = accents[section.id] ?? CYAN;
  const bgs: Record<string, string> = {
    problem: "#0c0e10",
    need: "#0a0e12",
    solution: "#081014",
    implementation: "#0a0c10",
    results: "#060c10",
  };

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-hidden" style={{ background: bgs[section.id] }}>
      {section.id === "solution" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 85% 15%, ${CYAN}18, transparent 50%)` }}
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
    <div className="p-6 rounded-2xl bg-[#141a22] border border-orange-500/20">
      <div className="flex items-center gap-2 mb-5 text-orange-400">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-widest font-semibold">Reactive operations</span>
      </div>
      <div className="space-y-2">
        {section.items?.map((item, i) => {
          const Icon = PROBLEM_ICONS[i] ?? AlertTriangle;
          return (
            <div
              key={item}
              className={cn(
                "flex items-center gap-3 p-3.5 rounded-xl bg-[#1a222c] border border-white/5",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${100 + i * 90}ms` } : undefined}
            >
              <div
                className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center"
                style={{ background: `${accent}22`, color: accent }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm text-slate-300 leading-snug">{item}</p>
            </div>
          );
        })}
      </div>
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
            className={cn("p-4 rounded-xl bg-[#141a22] border border-red-500/20", staggerClass(isActive))}
            style={isActive ? { animationDelay: "150ms" } : undefined}
          >
            <div className="text-[10px] uppercase tracking-widest text-red-400 mb-3">Reactive</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex gap-2"><span className="text-red-400">×</span> Fix after failure</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Manual inspections</li>
              <li className="flex gap-2"><span className="text-red-400">×</span> Siloed sensor data</li>
            </ul>
          </div>
          <div
            className={cn("p-4 rounded-xl bg-[#141a22] border border-cyan-500/25", staggerClass(isActive))}
            style={isActive ? { animationDelay: "250ms" } : undefined}
          >
            <div className="text-[10px] uppercase tracking-widest text-cyan-400 mb-3">Predictive</div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" /> AI maintenance alerts</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" /> Automated QC</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" /> Unified IoT platform</li>
            </ul>
          </div>
        </div>
        {section.items?.map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-start gap-3 p-4 rounded-xl bg-[#141a22] border border-white/5",
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

const IOT_LAYERS = [
  { icon: Radio, label: "Edge sensors", sub: "Vibration, temperature, pressure" },
  { icon: Database, label: "InfluxDB", sub: "Time-series data ingestion" },
  { icon: Cpu, label: "ML models", sub: "Anomaly & failure prediction" },
  { icon: Bot, label: "AI agents", sub: "Maintenance & quality decisions" },
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
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
      <div className="space-y-2">
        {IOT_LAYERS.map((layer, i) => (
          <div
            key={layer.label}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-[#141a22]",
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
                "p-4 rounded-xl bg-[#141a22] border border-cyan-500/15",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${450 + i * 70}ms` } : undefined}
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

const DEPLOY_PHASES = [
  { phase: "01", title: "Sensor deployment", desc: "IoT devices installed across production lines with edge gateways" },
  { phase: "02", title: "Data pipeline", desc: "InfluxDB ingestion with real-time streaming and retention policies" },
  { phase: "03", title: "ML training", desc: "Failure and quality models trained on historical sensor data" },
  { phase: "04", title: "AI agents live", desc: "Autonomous agents for maintenance scheduling and QC alerts" },
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
        {DEPLOY_PHASES.map((p, i) => (
          <div
            key={p.phase}
            className={cn("flex gap-4", staggerClass(isActive))}
            style={isActive ? { animationDelay: `${100 + i * 110}ms` } : undefined}
          >
            <div className="flex flex-col items-center shrink-0 w-10">
              <div
                className="h-9 w-9 rounded-full border-2 bg-[#0a0c10] flex items-center justify-center text-[10px] font-bold leading-none"
                style={{ borderColor: accent, color: accent }}
              >
                {p.phase}
              </div>
              {i < DEPLOY_PHASES.length - 1 && (
                <div className="w-px flex-1 min-h-6 my-1 bg-slate-500/30" aria-hidden />
              )}
            </div>
            <div className={cn("flex-1 min-w-0", i < DEPLOY_PHASES.length - 1 ? "pb-8" : "pb-0")}>
              <h3 className="text-white font-semibold mb-1 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {section.items?.map((item, i) => {
          const icons = [Activity, LineChart, ShieldCheck, Bell];
          const Icon = icons[i] ?? Settings;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#141a22] border border-white/8 flex flex-col gap-3",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${450 + i * 70}ms` } : undefined}
            >
              <div
                className="h-9 w-9 rounded-lg flex items-center justify-center"
                style={{ background: `${CYAN}22`, color: CYAN }}
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
            "relative overflow-hidden p-6 md:p-8 rounded-2xl bg-[#141a22] border border-cyan-500/20 text-center",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${100 + i * 120}ms` } : undefined}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${CYAN}, ${AMBER})` }}
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
        Want IoT and AI agents running on your factory floor?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/#contact")}
          className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ background: CYAN }}
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
