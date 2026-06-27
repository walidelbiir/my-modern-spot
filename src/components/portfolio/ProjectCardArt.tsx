import { cn } from "@/lib/utils";

type ProjectCardArtProps = {
  slug: string;
  initials?: string;
  index?: number;
  className?: string;
};

/**
 * Monochrome, brutalist project art. No photos, no color gradients —
 * just ink, bone, a fine grid, and a single signal-yellow marker.
 * Three deterministic variants keyed off the card index for rhythm.
 */
export function ProjectCardArt({ slug, initials, index = 0, className }: ProjectCardArtProps) {
  const variant = index % 3;
  const label = (initials ?? slug.slice(0, 2)).toUpperCase();

  // 0 = ink field, 1 = bone field, 2 = yellow field
  const fields = [
    { bg: "bg-primary", text: "text-primary-foreground", grid: "grid-ink-invert" },
    { bg: "bg-card", text: "text-foreground", grid: "grid-ink" },
    { bg: "bg-accent", text: "text-accent-foreground", grid: "grid-ink" },
  ] as const;
  const f = fields[variant];

  return (
    <div className={cn("relative h-full w-full overflow-hidden", f.bg, className)}>
      <div aria-hidden className={cn("absolute inset-0 opacity-80", f.grid)} />

      {/* oversized initials */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center font-extrabold uppercase leading-none tracking-tighter transition-transform duration-500 ease-out group-hover:scale-105",
          f.text
        )}
      >
        <span className="text-[5.5rem]">{label}</span>
      </div>

      {/* corner marker — yellow on ink/bone, ink on yellow */}
      <div
        aria-hidden
        className={cn(
          "absolute h-8 w-8",
          variant === 2 ? "bg-foreground" : "bg-accent",
          variant === 1 ? "right-3 top-3" : "bottom-3 left-3"
        )}
      />

      {/* slug tag */}
      <div
        className={cn(
          "absolute bottom-3 right-3 font-mono text-[0.6rem] uppercase tracking-[0.15em] opacity-60",
          f.text
        )}
      >
        {slug.replace(/-/g, " ")}
      </div>
    </div>
  );
}
