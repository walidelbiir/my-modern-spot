const clients = [
  "ACME",
  "NORTHWIND",
  "STELLAR",
  "QUANTUM",
  "HELIX",
  "BYTEFORGE",
  "NIMBUS",
  "ORBITAL",
  "VERTEX",
  "PARALLAX",
];

const ClientLogos = () => {
  return (
    <div className="border-t border-b border-foreground/10 bg-secondary">
      <div className="max-w-[1180px] mx-auto px-10 py-6 flex items-center gap-10 flex-wrap">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground whitespace-nowrap">
          Shipping for teams at
        </span>
        <div className="flex items-center gap-10 flex-wrap">
          {clients.slice(0, 6).map((name) => (
            <span
              key={name}
              className="font-bold text-[16px] text-foreground/30 tracking-[0.04em] uppercase hover:text-foreground/60 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
