import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { STATIC_CONTACT } from "@/lib/static-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { id: "about", label: "Manifesto" },
    { id: "services", label: "Capabilities" },
    { id: "process", label: "How we ship" },
    { id: "portfolio", label: "Work" },
    { id: "voices", label: "Voices" },
    { id: "contact", label: "Contact" },
  ];

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-foreground text-background">
      {/* big wordmark band */}
      <div className="border-b border-background/10">
        <div className="max-w-[1180px] mx-auto px-10 py-10">
          <Wordmark className="text-6xl md:text-8xl" invert />
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-10 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <p className="max-w-md text-[15px] leading-[1.65] text-background/60">
              AI-first software studio. We pair senior engineers with AI-accelerated workflows to
              ship reliable products — faster, and right.
            </p>
            <a
              href={`mailto:${STATIC_CONTACT.email}`}
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase text-background/60 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              {STATIC_CONTACT.email}
            </a>
          </div>

          <div className="space-y-4 md:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
              Navigate
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="group flex items-center gap-2 text-left text-[13.5px] font-medium text-background/70 transition-colors hover:text-accent"
                >
                  <ArrowUpRight className="h-3 w-3 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
              Connect
            </h3>
            <div className="flex gap-2">
              {[
                { Icon: Github, label: "GitHub", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: STATIC_CONTACT.linkedin_link ?? "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-background/20 text-background/60 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-background/40 md:flex-row md:items-center">
          <div>© {currentYear} B!R Studio — All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-accent">Privacy</a>
            <a href="#" className="transition-colors hover:text-accent">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
