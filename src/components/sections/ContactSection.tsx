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

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  company: z.string().trim().min(1, "Company name is required"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().min(1, "Phone number is required"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const servicesNeeded = [
  "VPOB Setup",
  "Multi-State GST Registration",
  "GST Compliance & Filing",
  "TDS/TCS Handling",
  "Full E-commerce Compliance Package",
  "Not sure yet",
];

export const ContactSection = () => {
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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
      <section id="contact" className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-12"
          >
            <CheckCircle className="w-14 h-14 text-secondary mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-secondary mb-3 tracking-tight">Thank you!</h2>
            <p className="text-secondary/70 text-base leading-relaxed">
              We've received your details. Our compliance team will reach out within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-secondary/60 text-base max-w-md mx-auto">
            Share your details and we'll create a tailored compliance plan for your business.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-secondary/10 bg-white/[0.06] backdrop-blur-sm p-8 lg:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Full Name *</Label>
              <Input
                placeholder="Your name"
                value={form.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Company Name *</Label>
              <Input
                placeholder="Your company"
                value={form.company || ""}
                onChange={(e) => handleChange("company", e.target.value)}
                className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.company ? "border-destructive" : ""}`}
              />
              {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Email Address *</Label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={form.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Phone Number *</Label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone || ""}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 ${errors.phone ? "border-destructive" : ""}`}
              />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Service Needed *</Label>
            <Select onValueChange={(v) => handleChange("serviceNeeded", v)}>
              <SelectTrigger className={`bg-white/10 border-secondary/15 text-secondary ${errors.serviceNeeded ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {servicesNeeded.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceNeeded && <p className="text-xs text-destructive mt-1">{errors.serviceNeeded}</p>}
          </div>

          <div>
            <Label className="text-sm font-medium text-secondary/80 mb-1.5 block">Message (optional)</Label>
            <Textarea
              placeholder="Tell us about your e-commerce business..."
              rows={3}
              value={form.message || ""}
              onChange={(e) => handleChange("message", e.target.value)}
              className="bg-white/10 border-secondary/15 text-secondary placeholder:text-secondary/30 resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-12 text-base font-medium rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Send className="w-4 h-4 mr-2" />
            Submit Enquiry
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
