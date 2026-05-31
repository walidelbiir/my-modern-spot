import { Reveal } from "@/components/motion";

const clients = [
  "ACME CORP",
  "NORTHWIND",
  "STELLAR.IO",
  "QUANTUMLABS",
  "HELIX",
  "BYTEFORGE",
  "NIMBUS CLOUD",
  "ORBITAL",
  "VERTEX AI",
  "PARALLAX",
];

const ClientLogos = () => {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-10">
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            Trusted by teams at
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <div className="flex w-max gap-16 animate-scroll">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              <span className="text-xl md:text-2xl font-bold tracking-[0.15em] text-muted-foreground/60 hover:text-primary transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default ClientLogos;
