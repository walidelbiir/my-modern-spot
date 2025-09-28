import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Database, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Design & Development",
      description: "Full-stack application development with modern frameworks, responsive design, and seamless user experiences.",
      features: ["Custom Web Applications", "Mobile-Responsive Design", "API Development", "Database Architecture"],
      price: "Starting at $5,000"
    },
    {
      icon: Database,
      title: "DevOps Projects",
      description: "Complete DevOps solutions including CI/CD pipelines, infrastructure automation, and cloud deployment strategies.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Cloud Migration"],
      price: "Starting at $3,500"
    },
    {
      icon: Lightbulb,
      title: "AI Agents Integration",
      description: "Intelligent automation solutions with AI agents, machine learning integration, and custom AI-powered features.",
      features: ["Custom AI Agents", "Process Automation", "ML Model Integration", "Intelligent Workflows"],
      price: "Starting at $4,000"
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
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions that drive digital transformation and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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