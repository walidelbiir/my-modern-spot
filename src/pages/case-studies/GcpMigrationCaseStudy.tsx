import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  Shield,
  Users,
  CloudOff,
  Gauge,
  Layers,
  GitBranch,
  Database,
  Workflow,
  CheckCircle2,
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

const GCP_BLUE = "#4285F4";
const DO_BLUE = "#0080FF";
const GCP_GREEN = "#34A853";

type Props = { study: CaseStudy };

export default function GcpMigrationCaseStudy({ study }: Props) {
  const navigate = useNavigate();
  const { scrollerRef, index, direction, go } = useCaseStudyScroll();

  return (
    <CaseStudyShell accent={GCP_BLUE} index={index} go={go} scrollerRef={scrollerRef}>
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
  <div className="w-full h-full bg-[#0a0f1a] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-40"
      style={{
        background: `linear-gradient(135deg, ${DO_BLUE}22 0%, transparent 40%, ${GCP_BLUE}33 100%)`,
      }}
    />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />

    <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center pt-20 md:pt-0">
      <div className={cn("max-w-4xl space-y-6", slideEnterClass(isActive, direction))}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border font-medium"
          style={{ borderColor: GCP_BLUE, color: GCP_BLUE }}
        >
          {study.category}
        </span>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
          {study.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl">{study.tagline}</p>
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
      </div>

      <div
        className={cn("mt-12 md:mt-16 w-full max-w-3xl", isActive && "animate-fade-in")}
        style={isActive ? { animationDelay: "250ms" } : undefined}
      >
        <MigrationHeroVisual />
      </div>

      {study.overview && (
        <div
          className={cn(
            "mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/10 pt-8",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: "400ms" } : undefined}
        >
          {Object.entries(study.overview).map(([k, v]) => (
            <div key={k}>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">{k}</div>
              <div className="text-sm text-slate-200 font-medium mt-1">{v}</div>
            </div>
          ))}
        </div>
      )}
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

const MigrationHeroVisual = () => (
  <div className="relative flex items-center justify-between gap-4 p-6 md:p-8 rounded-2xl bg-[#111827]/80 border border-white/10 backdrop-blur-sm">
    <CloudNode label="DigitalOcean" color={DO_BLUE} sub="Legacy stack" />
    <div className="flex-1 flex flex-col items-center gap-2 min-w-[80px]">
      <div className="flex items-center gap-1 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent relative overflow-hidden">
          <div
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent to-white/60 animate-[shimmer_2s_ease-in-out_infinite]"
            style={{ animation: "none" }}
          />
        </div>
        <ArrowRight className="h-6 w-6 shrink-0 text-white animate-pulse" style={{ color: GCP_GREEN }} />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
      </div>
      <span className="text-[10px] uppercase tracking-widest text-slate-500">Zero downtime</span>
    </div>
    <CloudNode label="Google Cloud" color={GCP_BLUE} sub="Target platform" gcp />
  </div>
);

const CloudNode = ({
  label,
  color,
  sub,
  gcp,
}: {
  label: string;
  color: string;
  sub: string;
  gcp?: boolean;
}) => (
  <div className="text-center space-y-3 flex-1">
    <div
      className="mx-auto h-16 w-16 md:h-20 md:w-20 rounded-2xl flex items-center justify-center border-2"
      style={{ borderColor: color, background: `${color}18`, boxShadow: `0 0 32px ${color}33` }}
    >
      {gcp ? (
        <svg viewBox="0 0 24 24" className="h-8 w-8 md:h-10 md:w-10">
          <path fill="#4285F4" d="M12 2L2 7v10l10 5 10-5V7L12 2z" opacity="0.9" />
          <path fill="#EA4335" d="M12 2v10l10-5V7L12 2z" />
          <path fill="#FBBC04" d="M12 12l10 5V12H12z" />
          <path fill="#34A853" d="M12 12H2v5l10 5V12z" />
        </svg>
      ) : (
        <CloudOff className="h-8 w-8 md:h-10 md:w-10" style={{ color }} />
      )}
    </div>
    <div>
      <div className="text-sm md:text-base font-semibold text-white">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
    </div>
  </div>
);

const PROBLEM_ICONS = [CloudOff, Users, Shield];

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
    need: "#eab308",
    solution: GCP_BLUE,
    implementation: "#a78bfa",
    results: GCP_GREEN,
  };
  const accent = accents[section.id] ?? GCP_BLUE;
  const bgs: Record<string, string> = {
    problem: "#0c1220",
    need: "#0a0f18",
    solution: "#0a1020",
    implementation: "#0d1117",
    results: "#081210",
  };
  const bg = bgs[section.id] ?? "#0f172a";

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-hidden" style={{ background: bg }}>
      {section.id === "solution" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 90% 20%, ${GCP_BLUE}18, transparent 55%)` }}
        />
      )}
      {section.id === "implementation" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 0% 100%, #a78bfa15, transparent 50%)` }}
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
  <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center w-full">
    <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
    <div className="relative">
      <div
        className="absolute inset-0 rounded-3xl opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
      />
      <div className="relative p-6 md:p-8 rounded-2xl border border-orange-500/20 bg-[#151c2c]">
        <div className="flex items-center gap-2 mb-6 text-orange-400">
          <AlertTriangle className="h-5 w-5" />
          <span className="text-xs uppercase tracking-widest font-semibold">Dependency risks</span>
        </div>
        <div className="space-y-3">
          {section.items?.map((item, i) => {
            const Icon = PROBLEM_ICONS[i] ?? AlertTriangle;
            return (
              <div
                key={item}
                className={cn(
                  "flex gap-4 p-4 rounded-xl bg-[#1a2332] border-l-[3px]",
                  staggerClass(isActive)
                )}
                style={{
                  borderLeftColor: accent,
                  ...(isActive ? { animationDelay: `${120 + i * 100}ms` } : {}),
                }}
              >
                <div
                  className="h-10 w-10 shrink-0 rounded-lg flex items-center justify-center"
                  style={{ background: `${accent}22`, color: accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed pt-1.5">{item}</p>
              </div>
            );
          })}
        </div>
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
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <SectionHeader label={section.label} accent={accent} headline={section.headline} body={section.body} />
      <div className="space-y-4">
        <div
          className={cn("p-6 rounded-2xl border border-yellow-500/20 bg-[#151c2c]", staggerClass(isActive))}
          style={isActive ? { animationDelay: "150ms" } : undefined}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-widest text-slate-500">Feature velocity</span>
            <Gauge className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="space-y-3">
            <VelocityBar label="Before — constrained ecosystem" width="28%" color="#ef4444" />
            <VelocityBar label="Target — unlocked delivery" width="88%" color={GCP_GREEN} />
          </div>
        </div>
        {section.items?.map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-start gap-3 p-4 rounded-xl bg-[#1a2332] border border-white/5",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${250 + i * 90}ms` } : undefined}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: accent }} />
            <span className="text-slate-300 text-sm md:text-base">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const VelocityBar = ({ label, width, color }: { label: string; width: string; color: string }) => (
  <div>
    <div className="text-xs text-slate-400 mb-1.5">{label}</div>
    <div className="h-2.5 rounded-full bg-white/5 overflow-hidden">
      <div className="h-full rounded-full transition-all duration-1000" style={{ width, background: color }} />
    </div>
  </div>
);

const CRITERIA_ICONS = [Layers, Server, Gauge, GitBranch];

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {section.items?.map((item, i) => {
        const Icon = CRITERIA_ICONS[i] ?? Layers;
        const [title, ...rest] = item.split(" — ");
        const desc = rest.join(" — ") || item;
        return (
          <div
            key={item}
            className={cn(
              "group p-5 rounded-2xl bg-[#151c2c] border border-white/8 hover:border-[#4285F4]/40 transition-colors",
              staggerClass(isActive)
            )}
            style={isActive ? { animationDelay: `${100 + i * 100}ms` } : undefined}
          >
            <div
              className="h-11 w-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
              style={{ background: `${accent}22`, color: accent }}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
          </div>
        );
      })}
    </div>
    <div
      className={cn(
        "flex items-center justify-center gap-4 p-5 rounded-2xl border border-[#4285F4]/30 bg-[#4285F4]/8",
        staggerClass(isActive)
      )}
      style={isActive ? { animationDelay: "550ms" } : undefined}
    >
      <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shrink-0">
        <span className="text-lg font-bold" style={{ color: GCP_BLUE }}>
          G
        </span>
      </div>
      <p className="text-sm md:text-base text-slate-300">
        <span className="text-white font-semibold">Google Cloud Platform</span> selected after weighing dev
        experience, ecosystem depth, scalability, and multi-cloud adaptability.
      </p>
    </div>
  </div>
);

const MIGRATION_PHASES = [
  { phase: "01", title: "Assessment", desc: "Inventory services, databases, and dependencies" },
  { phase: "02", title: "Parallel build", desc: "GCP environment + CI/CD scaffolded alongside DO" },
  { phase: "03", title: "Blue-green cutover", desc: "Traffic shifted gradually with rollback ready" },
  { phase: "04", title: "Handoff", desc: "Client team owns runbooks and maintenance" },
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
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
      <div className="space-y-0">
        {MIGRATION_PHASES.map((p, i) => (
          <div
            key={p.phase}
            className={cn("flex gap-4", staggerClass(isActive))}
            style={isActive ? { animationDelay: `${100 + i * 120}ms` } : undefined}
          >
            <div className="flex flex-col items-center shrink-0 w-10">
              <div
                className="h-9 w-9 rounded-full border-2 bg-[#0d1117] flex items-center justify-center text-[10px] font-bold leading-none"
                style={{ borderColor: accent, color: accent }}
              >
                {p.phase}
              </div>
              {i < MIGRATION_PHASES.length - 1 && (
                <div className="w-px flex-1 min-h-6 my-1 bg-violet-500/30" aria-hidden />
              )}
            </div>
            <div className={cn("flex-1 min-w-0", i < MIGRATION_PHASES.length - 1 ? "pb-8" : "pb-0")}>
              <h3 className="text-white font-semibold mb-1 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {section.items?.map((item, i) => {
          const icons = [Database, GitBranch, Workflow, Server];
          const Icon = icons[i] ?? Workflow;
          return (
            <div
              key={item}
              className={cn(
                "flex gap-4 p-4 rounded-xl bg-[#151c2c] border border-white/8",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${400 + i * 80}ms` } : undefined}
            >
              <div
                className="h-9 w-9 shrink-0 rounded-lg flex items-center justify-center"
                style={{ background: `${accent}22`, color: accent }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">{item}</p>
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
            "relative overflow-hidden p-6 md:p-8 rounded-2xl bg-[#151c2c] border border-[#34A853]/25 text-center",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${100 + i * 120}ms` } : undefined}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${GCP_GREEN}, ${GCP_BLUE})` }}
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
        Planning a cloud migration without disrupting your users?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/#contact")}
          className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ background: GCP_BLUE }}
        >
          Discuss Your Migration →
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
