import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 pb-12"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow)/0.35),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8 text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm text-xs tracking-wider uppercase">
              <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
              IT Services • DevOps • AI Agents
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Engineering the{" "}
              <span className="bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">
                next era
              </span>{" "}
              of digital business.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-xl">
              BIR Solutions designs, ships, and scales modern software — from product engineering
              to DevOps automation and AI agent integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Start a Project
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                See Our Work
                <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 max-w-xl border-t border-primary-foreground/15">
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">200+</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">
                  Enterprise Clients
                </div>
              </div>
              <div className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">99.9%</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1">
                  Uptime Guarantee
                </div>
              </div>
            </div>
          </div>

          {/* Decorative panel */}
          <div className="hidden lg:block lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-glow/30 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-primary-foreground/15 bg-primary/40 backdrop-blur-md p-6 shadow-elegant">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <span className="text-xs text-primary-foreground/50 ml-2">deploy.bir.tech</span>
                </div>
                <pre className="text-xs md:text-sm text-primary-foreground/85 font-mono leading-relaxed overflow-hidden">
{`> bir deploy --env=prod
✓ build complete         2.4s
✓ tests passed   142/142  18s
✓ infra synced            6s
✓ ai-agent registered     1s
✓ rollout 100%           12s

Deployment ready → 99.99% SLA`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[0.65rem] tracking-[0.25em] uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce-slow" />
      </button>
    </section>
  );
};

export default Hero;
