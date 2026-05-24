import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    description:
      "We map the problem, align on outcomes, and define the smallest valuable scope to ship.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Architecture, UX, and technical decisions documented before a single line of production code.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Weekly demos, transparent progress, and engineering practices that hold up under scale.",
  },
  {
    icon: Rocket,
    title: "Launch & Operate",
    description:
      "Automated deploys, observability, and ongoing support — we stay with you after launch.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
            How we work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            A clear, repeatable{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              engineering process.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Predictable delivery, transparent communication, no surprises.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300"
              >
                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-card">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
