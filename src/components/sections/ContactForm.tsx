import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "VPOB Registration",
  "GST Registration",
  "Multi-State Compliance",
  "Amazon/Flipkart Onboarding",
  "TDS Recovery",
  "Full Compliance Package",
  "Other",
];

export const ContactForm = () => {
  const [form, setForm] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-medium text-foreground mb-4 tracking-tight">Thank you!</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We've received your enquiry. Our compliance team will be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Share your details and we'll create a tailored compliance plan for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 lg:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`bg-white border-border/40 ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="Your company"
                  value={form.company || ""}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className={`bg-white border-border/40 ${errors.company ? "border-destructive" : ""}`}
                />
                {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`bg-white border-border/40 ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`bg-white border-border/40 ${errors.phone ? "border-destructive" : ""}`}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-foreground mb-1.5 block">Service Needed *</Label>
              <Select onValueChange={(v) => handleChange("service", v)}>
                <SelectTrigger className={`bg-white border-border/40 ${errors.service ? "border-destructive" : ""}`}>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message (optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your e-commerce business..."
                rows={4}
                value={form.message || ""}
                onChange={(e) => handleChange("message", e.target.value)}
                className="resize-none bg-white border-border/40"
              />
            </div>

            <Button type="submit" size="lg" className="w-full h-12 text-base font-medium rounded-xl">
              <Send className="w-4 h-4 mr-2" />
              Submit Enquiry
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
