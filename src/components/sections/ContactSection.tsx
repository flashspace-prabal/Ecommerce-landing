import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Mail, Phone, MapPin, Plus } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  mobile: z.string().trim().min(1, "Mobile number is required"),
  email: z.string().trim().email("Please enter a valid email"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  location: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "GST Compliance",
  "Business Compliance",
  "Mailing Address",
  "E-commerce Registration",
  "VPOB Setup",
  "TDS/TCS Handling",
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "Instagram", href: "#", icon: "ig" },
];

export const ContactSection = () => {
  const [form, setForm] = useState<Partial<FormData>>({ services: [] });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleService = (service: string) => {
    setForm((prev) => {
      const current = prev.services || [];
      const updated = current.includes(service)
        ? current.filter((s) => s !== service)
        : [...current, service];
      return { ...prev, services: updated };
    });
    if (errors.services) setErrors((prev) => ({ ...prev, services: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-12"
          >
            <CheckCircle className="w-14 h-14 text-primary mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-primary mb-3 tracking-tight">Thank you!</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We've received your details. Our compliance team will reach out within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column – Text & Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
              Let's talk on something{" "}
              <span className="text-primary/70">great</span> together
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              Share your details and we'll create a tailored compliance plan for your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <a
                href="mailto:hello@flashspace.in"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </span>
                <span className="text-sm lg:text-base">hello@flashspace.in</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                <span className="text-sm lg:text-base">+91 98765 43210</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold hover:bg-primary/80 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column – Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Tags */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">I'm interested in:</p>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => {
                    const isSelected = form.services?.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="text-xs text-destructive mt-1.5">{errors.services}</p>
                )}
              </div>

              {/* Input Fields – Two Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold text-muted-foreground mb-1.5 block tracking-wide uppercase">
                    Your Name
                  </Label>
                  <Input
                    placeholder="John Doe"
                    value={form.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`bg-card border-border/60 focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label className="text-xs font-bold text-muted-foreground mb-1.5 block tracking-wide uppercase">
                    Mobile
                  </Label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.mobile || ""}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    className={`bg-card border-border/60 focus:border-primary ${errors.mobile ? "border-destructive" : ""}`}
                  />
                  {errors.mobile && <p className="text-xs text-destructive mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div>
                <Label className="text-xs font-bold text-muted-foreground mb-1.5 block tracking-wide uppercase">
                  Your Email
                </Label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`bg-card border-border/60 focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              {/* Location Field */}
              <div>
                <Label className="text-xs font-bold text-muted-foreground mb-1.5 block tracking-wide uppercase">
                  Location
                </Label>
                <div className="flex items-center gap-2 border border-border/60 rounded-md px-3 py-2 bg-card">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    Delhi
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    Add another location
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-sm font-bold tracking-widest uppercase rounded-xl bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
