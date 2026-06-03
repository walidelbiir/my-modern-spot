import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const CARD_GRADIENTS: Record<string, string> = {
  "preview-system-design": "from-sky-600 via-slate-800 to-slate-950",
  "gcp-cloud-migration": "from-blue-700 via-slate-900 to-slate-950",
  "financial-analytics-dashboard": "from-emerald-700 via-slate-900 to-slate-950",
  "e-commerce-platform": "from-rose-600 via-slate-900 to-slate-950",
  "smart-manufacturing-iot": "from-cyan-700 via-slate-900 to-slate-950",
  "multi-cloud-deployment": "from-indigo-600 via-slate-900 to-slate-950",
};

const DEFAULT_GRADIENT = "from-slate-600 via-slate-800 to-slate-950";

function PreviewSystemArt() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="ps-node" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[
        { cx: 80, cy: 70 },
        { cx: 200, cy: 50 },
        { cx: 320, cy: 70 },
        { cx: 120, cy: 150 },
        { cx: 280, cy: 150 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="28" fill="url(#ps-node)" stroke="#38bdf8" strokeWidth="1.5" opacity="0.85" />
          <circle cx={n.cx} cy={n.cy} r="5" fill="#7dd3fc">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      <path d="M108,70 L172,50 M228,50 L292,70 M108,98 L120,122 M280,98 L268,122" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      <rect x="140" y="168" width="120" height="28" rx="6" fill="#0ea5e9" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1" />
      <text x="200" y="186" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontFamily="system-ui">PR Preview</text>
    </svg>
  );
}

function GcpMigrationArt() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden>
      <circle cx="110" cy="112" r="42" fill="#0080FF" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="110" y="118" textAnchor="middle" fill="#bae6fd" fontSize="12" fontWeight="600" fontFamily="system-ui">DO</text>
      <path d="M165,112 L235,112" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow)" />
      <polygon points="235,108 245,112 235,116" fill="#34d399" />
      <circle cx="290" cy="112" r="42" fill="#4285F4" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="1.5" />
      <path d="M268,95 L290,112 L312,95 L290,130 Z" fill="#4285F4" fillOpacity="0.6" />
      <text x="290" y="168" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui">Zero downtime</text>
    </svg>
  );
}

function FinancialAnalyticsArt() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden>
      <rect x="60" y="50" width="280" height="130" rx="10" fill="#0f172a" fillOpacity="0.5" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
      <path
        d="M80,150 L120,130 L160,140 L200,100 L240,110 L280,70 L320,85"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M80,150 L320,150 L320,170 L80,170 Z" fill="#10b981" fillOpacity="0.08" />
      {[
        { x: 90, v: "+12%" },
        { x: 175, v: "Live" },
        { x: 260, v: "AI" },
      ].map((k) => (
        <g key={k.x}>
          <rect x={k.x} y="62" width="56" height="36" rx="6" fill="#10b981" fillOpacity="0.15" />
          <text x={k.x + 28} y="86" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="600" fontFamily="system-ui">
            {k.v}
          </text>
        </g>
      ))}
    </svg>
  );
}

function EcommerceArt() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden>
      {[
        { x: 70, y: 55 },
        { x: 175, y: 55 },
        { x: 280, y: 55 },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width="90" height="100" rx="8" fill="#1e293b" fillOpacity="0.6" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.5" />
          <rect x={p.x + 10} y={p.y + 10} width="70" height="50" rx="4" fill="#f43f5e" fillOpacity="0.2" />
          <rect x={p.x + 10} y={p.y + 68} width="40" height="8" rx="2" fill="#fda4af" fillOpacity="0.5" />
          <rect x={p.x + 55} y={p.y + 68} width="25" height="8" rx="2" fill="#f43f5e" fillOpacity="0.4" />
        </g>
      ))}
      <circle cx="330" cy="175" r="22" fill="#f43f5e" fillOpacity="0.35" stroke="#fb7185" strokeWidth="1.5" />
      <path
        d="M322,172 h8 l-2,6 h-10 l-2,-6 h4"
        fill="none"
        stroke="#fecdd3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmartManufacturingArt() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden>
      <rect x="50" y="80" width="300" height="90" rx="6" fill="#1e293b" fillOpacity="0.5" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={70 + i * 55}
          y={100}
          width="40"
          height="55"
          rx="4"
          fill="#06b6d4"
          fillOpacity={0.15 + i * 0.08}
          stroke="#22d3ee"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      ))}
      <circle cx="80" cy="55" r="8" fill="#f59e0b">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="48" r="6" fill="#06b6d4" />
      <circle cx="160" cy="52" r="7" fill="#22d3ee" />
      <path d="M80,63 L80,95 M120,54 L120,95 M160,59 L160,95" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <text x="200" y="195" textAnchor="middle" fill="#67e8f9" fontSize="10" fontFamily="system-ui">42 sensors live</text>
    </svg>
  );
}

function MultiCloudArt() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full" aria-hidden>
      <ellipse cx="100" cy="100" rx="55" ry="35" fill="#FF9900" fillOpacity="0.2" stroke="#FF9900" strokeWidth="1.5" strokeOpacity="0.6" />
      <text x="100" y="105" textAnchor="middle" fill="#fcd34d" fontSize="13" fontWeight="700" fontFamily="system-ui">AWS</text>
      <ellipse cx="300" cy="100" rx="55" ry="35" fill="#0078D4" fillOpacity="0.25" stroke="#0078D4" strokeWidth="1.5" strokeOpacity="0.6" />
      <text x="300" y="105" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700" fontFamily="system-ui">Azure</text>
      <rect x="175" y="75" width="50" height="50" rx="10" fill="#6366f1" fillOpacity="0.35" stroke="#818cf8" strokeWidth="1.5" />
      <text x="200" y="108" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="600" fontFamily="system-ui">K8s</text>
      <path d="M155,100 L175,100 M225,100 L245,100" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M155,100 L175,100" stroke="#34d399" strokeWidth="1.5" opacity="0.8" />
      <text x="200" y="175" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontFamily="system-ui">99.99% uptime</text>
    </svg>
  );
}

function FallbackArt({ initials }: { initials?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-5xl font-bold text-white/15">{initials ?? "—"}</span>
    </div>
  );
}

const ART_COMPONENTS: Record<string, () => ReactNode> = {
  "preview-system-design": PreviewSystemArt,
  "gcp-cloud-migration": GcpMigrationArt,
  "financial-analytics-dashboard": FinancialAnalyticsArt,
  "e-commerce-platform": EcommerceArt,
  "smart-manufacturing-iot": SmartManufacturingArt,
  "multi-cloud-deployment": MultiCloudArt,
};

type ProjectCardArtProps = {
  slug: string;
  initials?: string;
  className?: string;
};

export function ProjectCardArt({ slug, initials, className }: ProjectCardArtProps) {
  const Art = ART_COMPONENTS[slug];
  const gradient = CARD_GRADIENTS[slug] ?? DEFAULT_GRADIENT;

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[length:24px_24px] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]" />
      {Art ? (
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Art />
        </div>
      ) : (
        <FallbackArt initials={initials} />
      )}
    </div>
  );
}

export function getProjectCardGradient(slug: string) {
  return CARD_GRADIENTS[slug] ?? DEFAULT_GRADIENT;
}
