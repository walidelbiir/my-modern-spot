import { cn } from "@/lib/utils";

type WordmarkProps = {
  /** Tailwind text-size class, e.g. "text-2xl". Controls the whole mark. */
  className?: string;
  /** When true the mark renders in bone for use on ink backgrounds. */
  invert?: boolean;
  /** Show the small "// software studio" tag beside the mark. */
  withTag?: boolean;
};

/**
 * The B!R wordmark — a heavy, monochrome lockup that mirrors the logo.
 * The "!" is rendered as the brand pivot; the brand stays pure ink/bone,
 * with signal-yellow reserved for the surrounding UI.
 */
export function Wordmark({ className, invert = false, withTag = false }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        className={cn(
          "font-extrabold leading-none tracking-[-0.05em]",
          invert ? "text-primary-foreground" : "text-foreground",
          className ?? "text-2xl",
        )}
        aria-label="B!R"
      >
        B<span className="text-accent" style={{ WebkitTextStroke: "0" }}>!</span>R
      </span>
      {withTag && (
        <span
          className={cn(
            "hidden font-mono text-[0.6rem] uppercase tracking-[0.22em] sm:inline",
            invert ? "text-primary-foreground/55" : "text-muted-foreground",
          )}
        >
          {"// software studio"}
        </span>
      )}
    </span>
  );
}

export default Wordmark;
