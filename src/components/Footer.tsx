import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-primary">BIR</span>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">Solutions</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              IT Services &amp; AI Automation. Engineering reliable digital infrastructure for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} BIR Solutions. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>by the BIR team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;