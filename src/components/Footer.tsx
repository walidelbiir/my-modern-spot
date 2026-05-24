import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-gradient-subtle border-t">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-primary">BIR</span>
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                Solutions
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              IT services, DevOps, and AI agent integration. Engineering reliable digital
              infrastructure for modern businesses.
            </p>
            <a
              href="mailto:hello@bir.tech"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@bir.tech
            </a>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h3 className="font-semibold text-sm tracking-[0.15em] uppercase text-muted-foreground">
              Navigate
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-semibold text-sm tracking-[0.15em] uppercase text-muted-foreground">
              Connect
            </h3>
            <div className="flex space-x-3">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="p-2 rounded-lg bg-background border border-border hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {currentYear} BIR Solutions. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
