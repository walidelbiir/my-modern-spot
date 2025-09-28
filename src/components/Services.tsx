import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Database, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
      price: "Starting at $2,500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices with mobile-first responsive design principles.",
      features: ["Progressive Web Apps", "Touch Optimization", "Offline Functionality", "App-like Experience"],
      price: "Starting at $1,800"
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Robust server-side applications with secure APIs, database design, and cloud deployment.",
      features: ["RESTful APIs", "Database Design", "Cloud Hosting", "Security Best Practices"],
      price: "Starting at $3,000"
    },
    {
      icon: Lightbulb,
      title: "Consulting & Strategy",
      description: "Technical consulting to help you make the right technology decisions for your project.",
      features: ["Tech Stack Planning", "Architecture Review", "Performance Audit", "Code Review"],
      price: "Starting at $150/hour"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-gradient-primary w-fit group-hover:shadow-glow transition-shadow">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <ArrowRight className="h-3 w-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t">
                    <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => scrollToSection('contact')}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;