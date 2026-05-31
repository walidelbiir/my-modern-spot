import { motion } from "motion/react";
import { CountUp, Reveal } from "@/components/motion";
import { EASE } from "@/lib/motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up">
              <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold">
                About BIR Solutions
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                A senior engineering team{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  building software that ships.
                </span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with founders and enterprise teams to design, build, and operate modern
                digital platforms. From product engineering to DevOps and AI agent integration, we
                bring clarity, speed, and accountability to every engagement.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.24}>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-accent pl-4">
                  <div className="text-3xl font-bold text-primary">
                    <CountUp value="8+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Years of senior experience</div>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <div className="text-3xl font-bold text-primary">
                    <CountUp value="12" />
                  </div>
                  <div className="text-sm text-muted-foreground">Engineers across 4 timezones</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual / team panel */}
          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative rounded-2xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant overflow-hidden"
              >
                <motion.div
                  className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative space-y-4">
                  <div className="text-xs tracking-[0.25em] uppercase text-primary-foreground/70">
                    Led by
                  </div>
                  <div className="flex -space-x-3">
                    {["BR", "IM", "RK", "SO"].map((initials, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.3 + i * 0.08 }}
                        className="h-12 w-12 rounded-full border-2 border-primary bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-sm font-bold"
                      >
                        {initials}
                      </motion.div>
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
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
