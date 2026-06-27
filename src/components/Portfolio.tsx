import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useProjects } from "@/hooks/useSiteData";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { EASE, VIEWPORT } from "@/lib/motion";
import { ProjectCardArt } from "@/components/portfolio/ProjectCardArt";

type Category = "All" | "AI Product Engineering" | "AI-Accelerated DevOps";

const categories: Category[] = [
  "All",
  "AI Product Engineering",
  "AI-Accelerated DevOps",
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const { data: projects = [] } = useProjects();
  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section
      id="portfolio"
      className="bg-secondary border-b border-foreground/10"
    >
      <div className="max-w-[1180px] mx-auto px-10 py-[118px]">
        <div className="flex items-end justify-between mb-11">
          <div>
            <Reveal>
              <div className="eyebrow mb-4">Selected work</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="m-0 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.06]">
                Shipped, AI-first.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              to="/portfolio"
              className="hidden md:inline-flex items-center gap-2 text-[15px] font-medium text-foreground border-b border-foreground/25 pb-0.5 transition-colors hover:text-accent hover:border-accent"
            >
              View all work <span className="text-accent">→</span>
            </Link>
          </Reveal>
        </div>

        {/* filter bar */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "px-4 py-2 rounded-full font-mono text-[11.5px] uppercase tracking-[0.1em] transition-colors border",
                active === category
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-muted-foreground border-foreground/16 hover:text-foreground hover:border-foreground/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.08 }}
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className="group flex flex-col border border-foreground/12 bg-card rounded-[12px] overflow-hidden transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1.5 hover:shadow-elegant"
              >
                {/* Card art */}
                <div className="relative overflow-hidden border-b border-foreground/10 bg-secondary">
                  <div className="aspect-video relative">
                    <ProjectCardArt slug={project.slug} initials={project.initials} index={i} />
                  </div>
                  {/* badge */}
                  {"badge" in project && (project as { badge?: string }).badge && (
                    <span className="absolute left-4 top-3.5 font-mono text-[10px] tracking-[0.1em] uppercase text-white bg-accent px-2 py-[3px] rounded-[5px]">
                      {(project as { badge?: string }).badge}
                    </span>
                  )}
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-card rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-col p-[26px] flex-1">
                  <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted-foreground mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.55] text-muted-foreground mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10.5px] text-muted-foreground border border-foreground/16 px-2 py-[3px] rounded-[5px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
