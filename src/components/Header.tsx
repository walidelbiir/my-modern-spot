import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";

const NAV_ITEMS = [
  { id: "about", label: "How we ship" },
  { id: "services", label: "Capabilities" },
  { id: "portfolio", label: "Work" },
  { id: "testimonials", label: "Quality" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((i) => i.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn(
        "fixed top-0 w-full z-50 border-b transition-colors duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-foreground/10"
          : "bg-background/80 backdrop-blur-sm border-foreground/10"
      )}
    >
      <div className="max-w-[1180px] mx-auto px-10">
        <nav className="flex items-center justify-between h-[4.5rem]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5"
            aria-label="B!R home"
          >
            <span className="font-bold text-xl tracking-[-0.02em]">B!R</span>
            <span className="hidden sm:block font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground border border-foreground/18 px-[7px] py-[3px] rounded-[5px]">
              AI-First Studio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-[14.5px] transition-colors",
                  active === item.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[14px] font-semibold bg-foreground text-background px-5 py-2.5 rounded-lg transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-elegant active:translate-y-0 active:scale-[0.98]"
            >
              Start a project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center border border-foreground/20 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="md:hidden overflow-hidden border-t border-foreground/10 bg-background"
          >
            <div className="max-w-[1180px] mx-auto px-10 py-4 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: EASE, delay: i * 0.04 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex w-full items-center gap-3 py-2.5 text-sm transition-colors",
                    active === item.id ? "text-foreground font-medium" : "text-muted-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      active === item.id ? "bg-accent" : "bg-muted-foreground/40"
                    )}
                  />
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-3 text-[14px] font-semibold bg-foreground text-background py-3 rounded-lg"
              >
                Start a project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
