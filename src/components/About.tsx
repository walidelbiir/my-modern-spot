import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "UI/UX Design", 
    "Figma", "Adobe Creative Suite", "MongoDB", "PostgreSQL"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              With over 3 years of experience in web development and design, I specialize in 
              creating modern, responsive applications that deliver exceptional user experiences. 
              My approach combines technical expertise with creative problem-solving.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe in clean code, intuitive design, and continuous learning. Whether it's 
              building a startup's first product or scaling an enterprise solution, I'm committed 
              to delivering quality results that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Code className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Full-Stack Development</h3>
                  <p className="text-muted-foreground">Modern web applications from concept to deployment</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Palette className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">UI/UX Design</h3>
                  <p className="text-muted-foreground">Beautiful, user-centered designs that convert</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-card transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Performance Optimization</h3>
                  <p className="text-muted-foreground">Fast, scalable solutions that grow with your business</p>
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