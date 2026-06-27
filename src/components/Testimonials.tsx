import { Star } from "lucide-react";
import { useTestimonies } from "@/hooks/useSiteData";
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
  const { data: testimonials = [] } = useTestimonies();

  return (
    <section
      id="voices"
      className="bg-secondary border-b border-foreground/10"
    >
      <div className="max-w-[1180px] mx-auto px-10 py-[118px]">
        <Reveal className="mb-12">
          <div className="eyebrow mb-4">Client voices</div>
          <h2 className="m-0 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.06]">
            What clients say.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 2) * 0.1 }}
              className="flex flex-col bg-card border border-foreground/12 rounded-[14px] p-8 transition-[box-shadow] duration-300 ease-out-expo hover:shadow-elegant"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[40px] font-bold leading-none text-accent">"</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={
                        s < t.rating
                          ? "h-3.5 w-3.5 fill-accent text-accent"
                          : "h-3.5 w-3.5 text-foreground/20"
                      }
                    />
                  ))}
                </div>
              </div>

              <blockquote className="flex-1 text-[17px] leading-[1.65] text-foreground/85 mb-6">
                {t.content}
              </blockquote>

              <div className="flex items-center gap-4 border-t border-foreground/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent shrink-0">
                  {initials(t.name)}
                </div>
                <div>
                  <div className="font-semibold text-[15px]">{t.name}</div>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">
                    {t.position}
                    {t.company ? ` · ${t.company}` : ""}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
