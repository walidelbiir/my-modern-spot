import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bookmark } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useProjects } from "@/hooks/useSiteData";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { EASE, VIEWPORT } from "@/lib/motion";
import { ProjectCardArt } from "@/components/portfolio/ProjectCardArt";

type Category = "All" | "Design & Development" | "DevOps Projects" | "AI Agents Integration";

const categories: Category[] = [
  "All",
  "Design & Development",
  "DevOps Projects",
  "AI Agents Integration",
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const { data: projects = [], isLoading, isError } = useProjects();
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
            Selected work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-[1.15]">
            Recent{" "}
            <span className="inline-block bg-gradient-primary bg-clip-text text-transparent pb-0.5">
              projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of the platforms, pipelines, and AI systems we've shipped.
          </p>
        </Reveal>

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

        {isError && (
          <p className="text-center text-muted-foreground">
            Could not load projects. Please try again later.
          </p>
        )}

        <TooltipProvider>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {isLoading &&
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden flex flex-col h-full p-0">
                  <Skeleton className="aspect-video w-full rounded-none" />
                  <div className="p-6 space-y-4 flex-1">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-7 w-3/4" />
                    <Skeleton className="h-16 w-full" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </div>
                </Card>
              ))}

            {!isLoading &&
              filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.08 }}
                  className="h-full"
                >
                <Card
                  className="overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                >
                  <Link to={`/portfolio/${project.slug}`} className="block">
                    <div className="aspect-video relative overflow-hidden">
                      <ProjectCardArt slug={project.slug} initials={project.initials} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                        <span className="text-xs text-white font-medium tracking-wide">View case study →</span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 space-y-4 flex flex-col flex-1">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {project.type}
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

                    <div className="flex gap-2 pt-2 mt-auto">
                      <Button asChild variant="default" size="sm" className="flex-1">
                        <Link to={`/portfolio/${project.slug}`}>
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
                </motion.div>
              ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Portfolio;
