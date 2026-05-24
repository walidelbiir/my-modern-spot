import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MidCTA = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--primary-glow)/0.4),transparent_60%)]" />
      <div className="container relative mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Have a project in mind?
            </h3>
            <p className="text-primary-foreground/75">
              Tell us what you're building. We'll respond within one business day with a clear next step.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start a Project
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("portfolio")}
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              See Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
