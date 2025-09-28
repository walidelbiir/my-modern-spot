const ClientLogos = () => {
  const clients = [
    { name: "Microsoft", logo: "/placeholder.svg" },
    { name: "Google", logo: "/placeholder.svg" },
    { name: "Amazon", logo: "/placeholder.svg" },
    { name: "Spotify", logo: "/placeholder.svg" },
    { name: "Netflix", logo: "/placeholder.svg" },
    { name: "Adobe", logo: "/placeholder.svg" },
    { name: "Tesla", logo: "/placeholder.svg" },
    { name: "Salesforce", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground">
            We've partnered with innovative companies worldwide
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-8 animate-[scroll_30s_linear_infinite]">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-background/50 rounded-lg hover:bg-background/80 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-24 max-h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;