import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Docker", 
    "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "AI/ML", "OpenAI"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Our Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading IT solutions provider transforming businesses through innovative technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are a forward-thinking IT services company specializing in comprehensive digital 
              transformation. Our team of expert developers, DevOps engineers, and AI specialists 
              work together to deliver cutting-edge solutions that drive business growth.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From custom application development to intelligent automation, we combine technical 
              excellence with strategic thinking to help organizations stay ahead in the digital age. 
              Our commitment to quality and innovation has made us the trusted partner for businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Code className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Design & Development</h3>
                  <p className="text-muted-foreground">End-to-end application development with modern frameworks</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Palette className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">DevOps Excellence</h3>
                  <p className="text-muted-foreground">Streamlined deployment and infrastructure automation</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">AI Integration</h3>
                  <p className="text-muted-foreground">Intelligent automation and AI-powered solutions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;