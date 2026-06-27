import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Send, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/motion";
import { z } from "zod";
import { STATIC_CONTACT } from "@/lib/static-data";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-secondary border-b border-foreground/10">
      <div className="max-w-[1180px] mx-auto px-10 py-[118px]">
        <Reveal className="mb-14">
          <div className="eyebrow mb-4">Get in touch</div>
          <h2 className="m-0 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.06]">
            Let's build{" "}
            <span className="mark-accent">something together.</span>
          </h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-muted-foreground max-w-[500px]">
            Tell us about your project and we'll respond within one business day.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[300px_1fr] items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-0">
            {[
              { Icon: Mail, label: "Email", value: STATIC_CONTACT.email, href: `mailto:${STATIC_CONTACT.email}` },
              { Icon: MapPin, label: "Location", value: STATIC_CONTACT.location, href: undefined },
            ].map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/6 text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-0.5">
                      {label}
                    </div>
                    <div className="font-medium text-[14.5px]">{value}</div>
                  </div>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 py-5 border-t border-foreground/10 first:border-t-0 hover:text-accent transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-3 py-5 border-t border-foreground/10">
                  {inner}
                </div>
              );
            })}

            {/* Book a call */}
            <div className="mt-6 bg-foreground text-background rounded-[12px] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-foreground shrink-0">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[16px]">Skip the form</h4>
                  <p className="text-[13px] text-background/60 mt-0.5">
                    Book a 30-min intro call.
                  </p>
                </div>
              </div>
              <a
                href={STATIC_CONTACT.book_meeting_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-accent text-foreground font-semibold text-[14px] py-3 rounded-lg transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4" />
                Book a meeting
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-foreground/10 rounded-[14px] p-8">
            <h3 className="mb-6 text-[22px] font-semibold tracking-[-0.01em]">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  Full Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" maxLength={100} />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" maxLength={255} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  Service of Interest
                </label>
                <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">AI Product Engineering</SelectItem>
                    <SelectItem value="devops">AI-Accelerated DevOps</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
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
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-semibold text-[15px] py-4 rounded-lg transition-[transform,box-shadow] duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-elegant active:translate-y-0 active:scale-[0.98]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
