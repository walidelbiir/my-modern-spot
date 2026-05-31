import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useGeneralInformation } from "@/hooks/useSiteData";
import { Skeleton } from "@/components/ui/skeleton";
import { Reveal } from "@/components/motion";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

const Contact = () => {
  const { data: info, isLoading } = useGeneralInformation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks — we'll get back to you within one business day.",
    });
    setFormData({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
            Get in touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's build{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              something great together.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your project and we'll respond within one business day.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Reveal direction="right" className="space-y-8">
            <div className="space-y-6">
              {isLoading ? (
                <>
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </>
              ) : (
                <>
              <a
                href={`mailto:${info?.email ?? "hello@bir.tech"}`}
                className="flex items-center space-x-4 group"
              >
                <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-shadow">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {info?.email ?? "hello@bir.tech"}
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">{info?.phone_number ?? ""}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">{info?.location ?? ""}</div>
                </div>
              </div>
                </>
              )}
            </div>

            {/* Prominent booking card */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground border-primary shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-foreground/10">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">Or skip the form</h4>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Book a 30-minute intro call directly on our calendar.
                  </p>
                  <Button
                    asChild
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
                  >
                    <a
                      href={info?.book_meeting_link ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="h-4 w-4" />
                      Book a Meeting
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="left" className="h-full">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  maxLength={100}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  maxLength={255}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service of Interest
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(v) => setFormData({ ...formData, service: v })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design-development">
                      Design &amp; Development
                    </SelectItem>
                    <SelectItem value="devops">DevOps Projects</SelectItem>
                    <SelectItem value="ai-agents">AI Agents Integration</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-destructive text-xs mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and budget..."
                  rows={5}
                  maxLength={1000}
                  className="resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
