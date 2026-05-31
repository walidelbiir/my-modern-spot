import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, GitBranch, Bot, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/motion";

const services = [
  {
    icon: Code2,
    title: "Design & Development",
    description:
      "Product engineering for web and mobile — from design systems to production-ready apps.",
    features: [
      "Custom Web Applications",
      "Design Systems & UI",
      "API & Backend Engineering",
      "Database Architecture",
    ],
    price: "Starting at $5,000",
    featured: false,
  },
  {
    icon: GitBranch,
    title: "DevOps Projects",
    description:
      "Ship faster and sleep better with CI/CD, infrastructure-as-code, and observability built in.",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Migration",
    ],
    price: "Starting at $3,500",
    featured: false,
  },
  {
    icon: Bot,
    title: "AI Agents Integration",
    description:
      "Production-grade AI agents and automations that plug into your existing stack and workflows.",
    features: [
      "Custom AI Agents",
      "Process Automation",
      "LLM & RAG Pipelines",
      "Intelligent Workflows",
    ],
    price: "Starting at $4,000",
    featured: true,
  },
];

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
            What we do
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Three practices.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              One engineering team.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategy, execution, and operations — delivered end-to-end by senior engineers.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title} className="h-full">
                <TiltCard className="h-full">
              <Card
                className={cn(
                  "relative p-7 transition-shadow duration-300 group h-full",
                  service.featured
                    ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                    : "hover:shadow-elegant"
                )}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-primary-glow text-primary-foreground text-xs font-semibold tracking-wide shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    Most in demand
                  </div>
                )}
                <div className="space-y-5">
                  <div
                    className={cn(
                      "p-3 rounded-xl w-fit transition-shadow",
                      service.featured
                        ? "bg-primary-foreground/10 group-hover:shadow-glow"
                        : "bg-gradient-primary group-hover:shadow-glow"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        service.featured ? "text-primary-foreground" : "text-primary-foreground"
                      )}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed",
                        service.featured
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      )}
                    >
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center text-sm">
                        <ArrowRight
                          className={cn(
                            "h-3 w-3 mr-2 shrink-0",
                            service.featured ? "text-primary-glow" : "text-accent"
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={cn(
                      "pt-4 border-t",
                      service.featured ? "border-primary-foreground/15" : "border-border"
                    )}
                  >
                    <div
                      className={cn(
                        "text-sm font-semibold mb-4",
                        service.featured ? "text-primary-glow" : "text-primary"
                      )}
                    >
                      {service.price}
                    </div>
                    <Button
                      variant={service.featured ? "default" : "default"}
                      className={cn(
                        "w-full",
                        service.featured
                          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => scrollToSection("contact")}
                    >
                      Get Started
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Services;
