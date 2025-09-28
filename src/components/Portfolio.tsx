import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Design & Development", 
      description: "Modern e-commerce solution with microservices architecture, real-time inventory, and AI-powered recommendations.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      category: "AI Agents Integration",
      description: "AI-powered financial analytics platform with predictive modeling, automated reporting, and intelligent insights.",
      image: "/placeholder.svg", 
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "DevOps Projects",
      description: "Complete infrastructure modernization with Kubernetes, CI/CD pipelines, and automated monitoring systems.",
      image: "/placeholder.svg",
      technologies: ["Kubernetes", "Terraform", "AWS", "Jenkins"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Management System",
      category: "Design & Development",
      description: "Comprehensive healthcare platform with patient management, telemedicine capabilities, and secure data handling.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Smart Manufacturing IoT",
      category: "AI Agents Integration", 
      description: "IoT-enabled manufacturing optimization with AI agents for predictive maintenance and quality control.",
      image: "/placeholder.svg",
      technologies: ["Python", "IoT", "Machine Learning", "InfluxDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Multi-Cloud Deployment",
      category: "DevOps Projects",
      description: "Scalable multi-cloud deployment strategy with automated failover, monitoring, and cost optimization.",
      image: "/placeholder.svg",
      technologies: ["Docker", "Kubernetes", "AWS", "Azure"],
      liveUrl: "#", 
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Design & Development", "DevOps Projects", "AI Agents Integration"];
  
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful projects that demonstrate our expertise and innovation
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;