import { Badge } from "@/components/ui/badge";

const skillGroups = [
  { label: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL"] },
  { label: "Cloud & DevOps", items: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"] },
  { label: "AI & Data", items: ["OpenAI", "LangChain", "Vector DBs", "MLOps"] },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold">
              About BIR Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              A senior engineering team{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                building software that ships.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with founders and enterprise teams to design, build, and operate modern
              digital platforms. From product engineering to DevOps and AI agent integration, we
              bring clarity, speed, and accountability to every engagement.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-accent pl-4">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years of senior experience</div>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Engineers across 4 timezones</div>
              </div>
            </div>
          </div>

          {/* Visual / team panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant overflow-hidden">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
              <div className="relative space-y-4">
                <div className="text-xs tracking-[0.25em] uppercase text-primary-foreground/70">
                  Led by
                </div>
                <div className="flex -space-x-3">
                  {["BR", "IM", "RK", "SO"].map((initials, i) => (
                    <div
                      key={i}
                      className="h-12 w-12 rounded-full border-2 border-primary bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-sm font-bold"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-primary-foreground/90 italic pt-2">
                  "We treat your codebase like our own — pragmatic, well-tested, and built to last
                  beyond the contract."
                </blockquote>
                <div className="text-sm text-primary-foreground/70">
                  — The BIR Solutions founders
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grouped */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="space-y-3">
                <h3 className="text-xs tracking-[0.2em] uppercase text-accent font-semibold">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
