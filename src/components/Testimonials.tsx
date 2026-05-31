import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTestimonies } from "@/hooks/useSiteData";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { EASE, VIEWPORT } from "@/lib/motion";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const { data: testimonials = [], isLoading, isError } = useTestimonies();

  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary-glow)/0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--primary-glow)/0.15),transparent_55%)]" />

      <div className="container relative mx-auto px-6">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm tracking-[0.2em] uppercase text-primary-glow font-semibold mb-3">
            Client stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What our clients{" "}
            <span className="bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">
              say about us
            </span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Honest feedback from teams we've built and operated software with.
          </p>
        </Reveal>

        {isError && (
          <p className="text-center text-primary-foreground/70">
            Could not load testimonials. Please try again later.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
              <Card
                key={i}
                className="p-7 bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground"
              >
                <Skeleton className="h-9 w-9 mb-5 bg-primary-foreground/10" />
                <Skeleton className="h-24 w-full mb-5 bg-primary-foreground/10" />
                <Skeleton className="h-12 w-full bg-primary-foreground/10" />
              </Card>
            ))}

          {!isLoading &&
            testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, ease: EASE, delay: (i % 2) * 0.1 }}
              >
              <Card
                className="p-7 bg-primary-foreground/5 backdrop-blur-sm border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/10 transition-colors h-full"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <Quote className="h-9 w-9 text-primary-glow" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < t.rating
                              ? "h-4 w-4 fill-primary-glow text-primary-glow"
                              : "h-4 w-4 text-primary-foreground/20"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-base lg:text-lg leading-relaxed text-primary-foreground/90">
                    "{t.content}"
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/15">
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-sm font-bold text-white shadow-card`}
                    >
                      {initials(t.name)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-primary-foreground/60">
                        {t.position}
                        {t.company ? ` · ${t.company}` : ""}
                      </div>
                    </div>
                    <div className="text-xs text-primary-glow font-medium uppercase tracking-wider hidden sm:block">
                      {t.service}
                    </div>
                  </div>
                </div>
              </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
