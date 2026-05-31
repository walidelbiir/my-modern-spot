const GRADIENTS: Record<string, string> = {
  "Design & Development": "from-teal-500 to-blue-800",
  "DevOps Projects": "from-slate-600 to-slate-900",
  "AI Agents Integration": "from-cyan-500 to-blue-800",
};

const ACCENTS: Record<string, string> = {
  "Design & Development": "from-emerald-500 to-teal-700",
  "DevOps Projects": "from-slate-600 to-slate-900",
  "AI Agents Integration": "from-indigo-500 to-blue-700",
};

export function projectInitials(title: string) {
  return title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function projectGradient(type: string, index = 0) {
  const fallbacks = [
    "from-indigo-500 to-blue-700",
    "from-cyan-500 to-blue-800",
    "from-slate-600 to-slate-900",
    "from-teal-500 to-blue-800",
    "from-amber-600 to-rose-700",
    "from-violet-600 to-indigo-900",
  ];
  return GRADIENTS[type] ?? fallbacks[index % fallbacks.length];
}

export function testimonyAccent(service: string, index = 0) {
  const fallbacks = [
    "from-indigo-500 to-blue-700",
    "from-cyan-500 to-blue-800",
    "from-rose-500 to-amber-600",
    "from-emerald-500 to-teal-700",
  ];
  return ACCENTS[service] ?? fallbacks[index % fallbacks.length];
}
