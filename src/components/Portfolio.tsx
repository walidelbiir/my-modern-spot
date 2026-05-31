import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bookmark } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { portfolioSlugMap } from "@/data/caseStudies";

type Category = "All" | "Design & Development" | "DevOps Projects" | "AI Agents Integration";

const projects: {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  gradient: string;
  initials: string;
  technologies: string[];
}[] = [
  {
    title: "E-Commerce Platform",
    category: "Design & Development",
    description:
      "Modern e-commerce solution with microservices, real-time inventory, and AI-powered recommendations.",
    gradient: "from-indigo-500 to-blue-700",
    initials: "EC",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Financial Analytics Dashboard",
    category: "AI Agents Integration",
    description:
      "AI-powered analytics platform with predictive modeling, automated reporting, and intelligent insights.",
    gradient: "from-cyan-500 to-blue-800",
    initials: "FA",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "DevOps Projects",
    description:
      "Complete infrastructure modernization with Kubernetes, CI/CD pipelines, and automated monitoring.",
    gradient: "from-slate-600 to-slate-900",
    initials: "CI",
    technologies: ["Kubernetes", "Terraform", "AWS", "Jenkins"],
  },
  {
    title: "Healthcare Management System",
    category: "Design & Development",
    description:
      "Comprehensive platform with patient management, telemedicine, and secure data handling.",
    gradient: "from-teal-500 to-blue-800",
    initials: "HM",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
  },
  {
    title: "Smart Manufacturing IoT",
    category: "AI Agents Integration",
    description:
      "IoT-enabled manufacturing optimization with AI agents for predictive maintenance and quality control.",
    gradient: "from-amber-600 to-rose-700",
    initials: "SM",
    technologies: ["Python", "IoT", "ML", "InfluxDB"],
  },
  {
    title: "Multi-Cloud Deployment",
    category: "DevOps Projects",
    description:
      "Scalable multi-cloud strategy with automated failover, monitoring, and cost optimization.",
    gradient: "from-violet-600 to-indigo-900",
    initials: "MC",
    technologies: ["Docker", "Kubernetes", "AWS", "Azure"],
  },
];

const categories: Category[] = [
  "All",
  "Design & Development",
  "DevOps Projects",
  "AI Agents Integration",
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
            Selected work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Recent{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the platforms, pipelines, and AI systems we've shipped.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-1.5 bg-background rounded-full border border-border shadow-card">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  "px-4 py-2 text-xs md:text-sm rounded-full transition-all duration-300 font-medium",
                  active === category
                    ? "bg-gradient-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <TooltipProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filtered.map((project) => {
              const slug = portfolioSlugMap[project.title] ?? project.title.toLowerCase().replace(/\s+/g, "-");
              return (
              <Card
                key={project.title}
                className="overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              >
                <Link to={`/portfolio/${slug}`} className="block">
                  <div
                    className={cn(
                      "aspect-video relative overflow-hidden bg-gradient-to-br",
                      project.gradient
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/20 group-hover:scale-110 transition-transform duration-500">
                        {project.initials}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-xs text-white/90 font-medium">View case study →</span>
                    </div>
                  </div>
                </Link>

                <div className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <Link to={`/portfolio/${slug}`}>
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Case Study
                      </Link>
                    </Button>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" aria-label="Save project">
                          <Bookmark className="h-3 w-3" />

                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Save for later</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </Card>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Portfolio;
