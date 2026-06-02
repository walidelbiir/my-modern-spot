import { useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  ChevronDown,
  Package,
  Clock,
  ShoppingCart,
  TrendingDown,
  Zap,
  Sparkles,
  Boxes,
  CreditCard,
  RefreshCw,
  Search,
  Truck,
  Heart,
  CheckCircle2,
  Server,
  Database,
  Layout,
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

const ROSE = "#f43f5e";
const VIOLET = "#8b5cf6";
const TEAL = "#14b8a6";

type Props = { study: CaseStudy };

export default function EcommercePlatformCaseStudy({ study }: Props) {
  const navigate = useNavigate();
  const { scrollerRef, index, direction, go } = useCaseStudyScroll();

  return (
    <CaseStudyShell accent={ROSE} index={index} go={go} scrollerRef={scrollerRef}>
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
  <div className="w-full h-full bg-[#0f0a0c] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-45"
      style={{
        background: `radial-gradient(ellipse at 25% 40%, ${ROSE}22 0%, transparent 50%), radial-gradient(ellipse at 75% 60%, ${VIOLET}20 0%, transparent 55%)`,
      }}
    />
    <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 pt-24 md:pt-0">
      <div className={cn("flex-1 space-y-6 max-w-xl", slideEnterClass(isActive, direction))}>
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] border font-medium"
          style={{ borderColor: ROSE, color: ROSE }}
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
        <StorefrontHeroVisual />
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

const StorefrontHeroVisual = () => (
  <div className="rounded-2xl border border-white/10 bg-[#161016]/95 backdrop-blur-sm overflow-hidden shadow-2xl">
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
      <div className="flex items-center gap-2">
        <ShoppingCart className="h-4 w-4" style={{ color: ROSE }} />
        <span className="text-xs font-semibold text-white">Storefront</span>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] text-emerald-300">Live inventory</span>
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "Classic Tee", price: "$49", badge: "In stock" },
          { name: "Urban Sneaker", price: "$129", badge: "12 left" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl bg-white/[0.04] border border-white/8 overflow-hidden">
            <div className="h-16 bg-gradient-to-br from-rose-500/20 to-violet-500/20 flex items-center justify-center">
              <Package className="h-6 w-6 text-white/40" />
            </div>
            <div className="p-2.5">
              <div className="text-xs font-medium text-white truncate">{p.name}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-bold" style={{ color: ROSE }}>{p.price}</span>
                <span className="text-[9px] text-teal-400">{p.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
        <Sparkles className="h-4 w-4 text-violet-400 shrink-0" />
        <span className="text-[11px] text-slate-400">
          Recommended for you: <span className="text-slate-200">Leather Belt — 94% match</span>
        </span>
      </div>
      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/8">
        <span className="text-xs text-slate-400">Cart total</span>
        <span className="text-sm font-bold text-white">$178.00</span>
      </div>
    </div>
  </div>
);

const PROBLEM_ICONS = [Server, Package, ShoppingCart, TrendingDown];

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
    need: VIOLET,
    solution: ROSE,
    implementation: TEAL,
    results: ROSE,
  };
  const accent = accents[section.id] ?? ROSE;
  const bgs: Record<string, string> = {
    problem: "#120c0e",
    need: "#0f0a12",
    solution: "#100a0e",
    implementation: "#0a0f0e",
    results: "#0c0a0f",
  };

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-hidden" style={{ background: bgs[section.id] }}>
      {section.id === "solution" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 15% 85%, ${ROSE}18, transparent 50%)` }}
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
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
      />
      <div className="relative p-6 rounded-2xl bg-[#1a1218] border border-orange-500/20">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[10px] uppercase tracking-widest">
            <AlertTriangle className="h-3 w-3" />
            Legacy monolith
          </div>
        </div>
        <div className="space-y-2">
          {section.items?.map((item, i) => {
            const Icon = PROBLEM_ICONS[i] ?? AlertTriangle;
            return (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-3 p-3.5 rounded-xl bg-[#221820] border border-white/5",
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
  </div>
);

const JOURNEY_STEPS = [
  { icon: Search, label: "Discover" },
  { icon: Heart, label: "Save" },
  { icon: ShoppingCart, label: "Checkout" },
  { icon: Truck, label: "Deliver" },
];

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
            "flex items-center justify-between p-4 rounded-2xl bg-[#1a1218] border border-violet-500/20",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: "150ms" } : undefined}
        >
          {JOURNEY_STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center border"
                style={{ borderColor: `${accent}55`, color: accent, background: `${accent}15` }}
              >
                <step.icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] text-slate-400">{step.label}</span>
              {i < JOURNEY_STEPS.length - 1 && (
                <div className="hidden sm:block absolute" aria-hidden />
              )}
            </div>
          ))}
        </div>
        {section.items?.map((item, i) => (
          <div
            key={item}
            className={cn(
              "flex items-start gap-3 p-4 rounded-xl bg-[#1a1218] border border-white/5",
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

const SERVICES = [
  { icon: Layout, name: "Storefront", sub: "React SPA" },
  { icon: Boxes, name: "Catalog", sub: "Product service" },
  { icon: Package, name: "Inventory", sub: "Real-time stock" },
  { icon: CreditCard, name: "Orders", sub: "Checkout & payments" },
  { icon: Sparkles, name: "Recommendations", sub: "AI engine" },
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
      <div className="p-5 rounded-2xl bg-[#1a1218] border border-white/8">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-4">Microservices map</div>
        <div className="grid grid-cols-2 gap-2">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.name}
              className={cn(
                "p-3 rounded-xl border border-white/8 bg-white/[0.03] text-center",
                i === 4 && "col-span-2",
                staggerClass(isActive)
              )}
              style={isActive ? { animationDelay: `${100 + i * 80}ms` } : undefined}
            >
              <svc.icon className="h-5 w-5 mx-auto mb-1.5" style={{ color: accent }} />
              <div className="text-xs font-semibold text-white">{svc.name}</div>
              <div className="text-[10px] text-slate-500">{svc.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-500">
          <Database className="h-3 w-3" />
          PostgreSQL · Docker · Node.js
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {section.items?.map((item, i) => {
          const [title, ...rest] = item.split(" — ");
          const desc = rest.join(" — ") || item;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#1a1218] border border-rose-500/15",
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

const BUILD_PHASES = [
  { phase: "01", title: "Core storefront", desc: "React catalog, product pages, and responsive checkout flow" },
  { phase: "02", title: "Service layer", desc: "Node.js microservices for catalog, cart, and order management" },
  { phase: "03", title: "Real-time inventory", desc: "Live stock sync across channels with PostgreSQL" },
  { phase: "04", title: "AI recommendations", desc: "Personalized product suggestions based on behavior" },
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
                className="h-9 w-9 rounded-full border-2 bg-[#0a0f0e] flex items-center justify-center text-[10px] font-bold leading-none"
                style={{ borderColor: accent, color: accent }}
              >
                {p.phase}
              </div>
              {i < BUILD_PHASES.length - 1 && (
                <div className="w-px flex-1 min-h-6 my-1 bg-teal-500/30" aria-hidden />
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
          const icons = [Server, RefreshCw, CreditCard, Sparkles];
          const Icon = icons[i] ?? Boxes;
          return (
            <div
              key={item}
              className={cn(
                "p-4 rounded-xl bg-[#1a1218] border border-white/8 flex flex-col gap-3",
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
            "relative overflow-hidden p-6 md:p-8 rounded-2xl bg-[#1a1218] border border-rose-500/20 text-center",
            staggerClass(isActive)
          )}
          style={isActive ? { animationDelay: `${100 + i * 120}ms` } : undefined}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, ${ROSE}, ${VIOLET})` }}
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
        Ready to build a modern e-commerce experience?
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/#contact")}
          className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
          style={{ background: ROSE }}
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
