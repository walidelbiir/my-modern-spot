import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp Solutions",
      image: "/placeholder.svg",
      content: "Their AI integration transformed our business processes completely. The automated workflows they implemented saved us 40% in operational costs while improving accuracy.",
      rating: 5,
      project: "AI Agents Integration"
    },
    {
      name: "Michael Chen", 
      position: "VP Engineering, DataFlow",
      company: "DataFlow Industries",
      image: "/placeholder.svg",
      content: "Outstanding DevOps implementation. They migrated our entire infrastructure to the cloud seamlessly with zero downtime. The monitoring and CI/CD pipelines are exceptional.",
      rating: 5,
      project: "DevOps Projects"
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, InnovateLab",
      company: "InnovateLab",
      image: "/placeholder.svg", 
      content: "The team delivered a stunning web application that exceeded our expectations. Their attention to detail in both design and development is remarkable.",
      rating: 5,
      project: "Design & Development"
    },
    {
      name: "David Thompson",
      position: "CEO, StartupHub",
      company: "StartupHub",
      image: "/placeholder.svg",
      content: "Professional, efficient, and innovative. They understood our vision perfectly and delivered a solution that scales beautifully with our growing business.",
      rating: 5,
      project: "Full Stack Solution"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Avatar className="h-12 w-12">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-primary font-medium">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;