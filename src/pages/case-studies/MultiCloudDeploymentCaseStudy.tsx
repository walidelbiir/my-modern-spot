import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ChevronDown,
  CloudOff,
  DollarSign,
  MapPin,
  Lock,
  Zap,
  Cloud,
  Container,
  GitBranch,
  Activity,
  Shield,
  RefreshCw,
  BarChart3,
  CheckCircle2,
  Network,
  Server,
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

const INDIGO = "#6366f1";
const AWS_ORANGE = "#FF9900";
const AZURE_BLUE = "#0078D4";

type Props = { study: CaseStudy };

export default function MultiCloudDeploymentCaseStudy({ study }: Props) {
  const navigate = useNavigate();
  const { scrollerRef, index, direction, go } = useCaseStudyScroll();

  return (
    <CaseStudyShell accent={INDIGO} index={index} go={go} scrollerRef={scrollerRef}>
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
  <div className="w-full h-full bg-[#0a0c14] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-45"
      style={{
        background: `radial-gradient(ellipse at 20% 50%, ${AWS_ORANGE}18 0%, transparent 45%), radial-gradient(ellipse at 80% 50%, ${AZURE_BLUE}20 0%, transparent 45%), radial-gradient(ellipse at 50% 100%, ${INDIGO}15 0%, transparent 50%)`,
      }}
    />
    <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 pt-24 md:pt-0">
      <div className={cn("flex-1 space-y-6 max-w-xl", slideEnterClass(isActive, direction))}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border font-medium"
          style={{ borderColor: INDIGO, color: INDIGO }}
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
        <MultiCloudHeroVisual />
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

const MultiCloudHeroVisual = () => (
  <div className="rounded-2xl border border-white/10 bg-[#12151f]/95 backdrop-blur-sm overflow-hidden shadow-2xl p-5">
    <div className="flex items-center justify-center gap-3 mb-5">
      <CloudRegion label="AWS" color={AWS_ORANGE} region="us-east-1" status="Active" load="42%" />
      <div className="flex flex-col items-center gap-1 shrink-0 px-2">
        <div className="h-10 w-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
          <Container className="h-5 w-5 text-indigo-400" />
        </div>
        <span className="text-[9px] uppercase tracking-widest text-slate-500">K8s</span>
        <RefreshCw className="h-3.5 w-3.5 text-indigo-400 animate-spin" style={{ animationDuration: "4s" }} />
      </div>
      <CloudRegion label="Azure" color={AZURE_BLUE} region="west-europe" status="Standby" load="18%" />
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Uptime", value: "99.99%", color: INDIGO },
        { label: "Failover", value: "<30s", color: AWS_ORANGE },
        { label: "Cost saved", value: "28%", color: AZURE_BLUE },
      ].map((kpi) => (
        <div key={kpi.label} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-center">
          <div className="text-[9px] uppercase tracking-wider text-slate-500">{kpi.label}</div>
          <div className="text-sm font-bold mt-0.5" style={{ color: kpi.color }}>{kpi.value}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 flex items-center gap-2 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
      <Activity className="h-4 w-4 text-emerald-400 shrink-0" />
      <span className="text-[11px] text-slate-400">
        Traffic routed: <span className="text-slate-200">AWS primary · Azure ready for failover</span>
      </span>
    </div>
  </div>
);

const CloudRegion = ({
  label,
  color,
  region,
  status,
  load,
}: {
  label: string;
  color: string;
  region: string;
  status: string;
  load: string;
}) => (
  <div className="flex-1 p-3 rounded-xl border border-white/10 bg-white/[0.03] text-center">
    <div
      className="h-10 w-10 mx-auto rounded-lg flex items-center justify-center mb-2 border"
      style={{ borderColor: `${color}55`, background: `${color}15` }}
    >
      <Cloud className="h-5 w-5" style={{ color }} />
    </div>
    <div className="text-xs font-bold text-white">{label}</div>
    <div className="text-[10px] text-slate-500 mt-0.5">{region}</div>
    <div className="mt-2 flex justify-center gap-2 text-[9px]">
      <span style={{ color }}>{status}</span>
      <span className="text-slate-600">·</span>
      <span className="text-slate-400">{load} load</span>
    </div>
  </div>
);

const PROBLEM_ICONS = [Lock, CloudOff, DollarSign, MapPin];

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
    need: AWS_ORANGE,
    solution: INDIGO,
    implementation: AZURE_BLUE,
    results: INDIGO,
  };
  const accent = accents[section.id] ?? INDIGO;
  const bgs: Record<string, string> = {
    problem: "#0c0e12",
    need: "#0a0c14",
    solution: "#0a0c18",
    implementation: "#0c1018",
    results: "#080c14",
  };

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-hidden" style={{ background: bgs[section.id] }}>
      {section.id === "solution" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${INDIGO}18, transparent 55%)` }}
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
    <div className="p-6 rounded-2xl bg-[#141820] border border-orange-500/20">
      <div className="flex items-center gap-2 mb-5 text-orange-400">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-widest font-semibold">Single-cloud risks</span>
      </div>
      <div className="space-y-2">
        {section.items?.map((item, i) => {
          const Icon = PROBLEM_ICONS[i] ?? AlertTriangle;
          return (
            <div
              key={item}
              className={cn(
                "flex items-center gap-3 p-3.5 rounded-xl bg-[#1a2030] border border-white/5",
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
        <div
          className={cn(
            "p-5 rounded-2xl bg-[#141820] border border-indigo-500/20 grid grid-cols-2 gap-4",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: "150ms" } : undefined}
        >
          <div className="text-center p-3 rounded-xl bg-red-500/10 border border-red-500/20">
            <CloudOff className="h-6 w-6 mx-auto text-red-400 mb-2" />
            <div className="text-[10px] uppercase text-red-400">Single cloud</div>
            <div className="text-xs text-slate-500 mt-1">One region · one vendor</div>
          </div>
          <div className="text-center p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25">
            <Network className="h-6 w-6 mx-auto text-indigo-400 mb-2" />
            <div className="text-[10px] uppercase text-indigo-400">Multi-cloud</div>
            <div className="text-xs text-slate-400 mt-1">AWS + Azure · failover ready</div>
          </div>
        </div>
        {section.items?.map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-start gap-3 p-4 rounded-xl bg-[#141820] border border-white/5",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${250 + i * 80}ms` } : undefined}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: accent }} />
            <span className="text-slate-300 text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ARCH_LAYERS = [
  { icon: Container, label: "Kubernetes", sub: "Portable workloads across clouds" },
  { icon: Server, label: "AWS", sub: "Primary compute & storage" },
  { icon: Cloud, label: "Azure", sub: "Secondary region & failover" },
  { icon: GitBranch, label: "Traffic routing", sub: "Automated DNS & load balancing" },
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
      <div className="relative p-5 rounded-2xl bg-[#141820] border border-white/8">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-4">Architecture</div>
        <div className="space-y-2">
          {ARCH_LAYERS.map((layer, i) => (
            <div
              key={layer.label}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${100 + i * 90}ms` } : undefined}
            >
              <layer.icon className="h-5 w-5 shrink-0" style={{ color: accent }} />
              <div>
                <div className="text-sm font-semibold text-white">{layer.label}</div>
                <div className="text-[10px] text-slate-500">{layer.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center text-[10px] text-slate-500">Docker · Terraform · Prometheus</div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {section.items?.map((item, i) => {
          const [title, ...rest] = item.split(" — ");
          const desc = rest.join(" — ") || item;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#141820] border border-indigo-500/15",
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
  { phase: "01", title: "Assessment", desc: "Map workloads, dependencies, and cloud-specific constraints" },
  { phase: "02", title: "Dual-cloud setup", desc: "Kubernetes clusters provisioned on AWS and Azure via IaC" },
  { phase: "03", title: "Failover wiring", desc: "DNS routing, health checks, and automated traffic switching tested" },
  { phase: "04", title: "Observability", desc: "Unified monitoring, alerting, and cost dashboards deployed" },
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
                className="h-9 w-9 rounded-full border-2 bg-[#0c1018] flex items-center justify-center text-[10px] font-bold leading-none"
                style={{ borderColor: accent, color: accent }}
              >
                {p.phase}
              </div>
              {i < DEPLOY_PHASES.length - 1 && (
                <div className="w-px flex-1 min-h-6 my-1 bg-blue-500/30" aria-hidden />
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
          const icons = [Shield, Activity, BarChart3, RefreshCw];
          const Icon = icons[i] ?? Zap;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#141820] border border-white/8 flex flex-col gap-3",
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
            "relative overflow-hidden p-6 md:p-8 rounded-2xl bg-[#141820] border border-indigo-500/20 text-center",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${100 + i * 120}ms` } : undefined}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${AWS_ORANGE}, ${INDIGO}, ${AZURE_BLUE})` }}
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
        Planning a resilient multi-cloud strategy?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/#contact")}
          className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ background: INDIGO }}
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
