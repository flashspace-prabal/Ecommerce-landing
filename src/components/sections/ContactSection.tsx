import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, MapPin, Plus, ChevronDown, Icon } from "lucide-react";
import { z } from "zod";
import contactImage from "@/assets/contact.png";


import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone } from "lucide-react";

const socialLinks = [
  { label: "Facebook",  href: "#", icon: Facebook  },
  { label: "LinkedIn",  href: "#", icon: Linkedin  },
  { label: "Twitter",   href: "#", icon: Twitter   },
  { label: "Instagram", href: "#", icon: Instagram },
];

/* ── COMMENTED OUT FOR FUTURE USE ──────────────────────────────────────────
// Left column content (heading + description + contacts + socials):
//
// <h2>Let's talk on something <span>great</span> together</h2>
// <p>Share your details and we'll create a tailored compliance plan for your business.</p>
//
// <a href="mailto:hello@flashspace.in">
//   <Mail /> hello@flashspace.in
// </a>
// <a href="tel:+918100888777">
//   <Phone /> +91 81008 88777
// </a>
//
// {socialLinks.map((social) => {
//   const Icon = social.icon;
//   return (
//     <a key={social.label} href={social.href} aria-label={social.label}
//        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center
//                   text-primary-foreground hover:bg-primary/80 transition-colors">
//       <Icon className="w-4 h-4" />
//     </a>
//   );
// })}
─────────────────────────────────────────────────────────────────────────── */

const formSchema = z.object({
  name:     z.string().trim().min(1, "Name is required"),
  mobile:   z.string().trim().min(1, "Mobile number is required"),
  email:    z.string().trim().email("Please enter a valid email"),
  service:  z.string().min(1, "Please select a service"),
  location: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "GST Compliance",
  "Business Compliance",
  "Mailing Address",
  "E-commerce Registration",
  "VPOB Setup",
];

export const ContactSection = () => {
  const [form, setForm]           = useState<Partial<FormData>>({});
  const [errors, setErrors]       = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-12"
          >
            <CheckCircle className="w-14 h-14 text-primary mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-primary mb-3 tracking-tight">
              Thank you!
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We've received your details. Our compliance team will reach out within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

        {/* ── LEFT — Full bleed image ── */}
        <div className="relative hidden lg:block">
          <img
            src={contactImage}
            alt="FlashSpace virtual office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* ── RIGHT — Heading + Form ── */}
        <div className="flex flex-col justify-center px-8 lg:px-12 py-16">

          {/* Heading above form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2
              className="text-3xl font-semibold text-foreground leading-snug"
            >
              Let's talk on something{" "}
              <span style={{ color: "#35503f" }}>great</span>{" "}
              together
            </h2>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >


              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                  Your Name
                </Label>
                <Input
                  placeholder="John Doe"
                  value={form.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                  Mobile
                </Label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.mobile || ""}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  className={errors.mobile ? "border-destructive" : ""}
                />
                {errors.mobile && (
                  <p className="text-xs text-destructive">{errors.mobile}</p>
                )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                Your Email
              </Label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={form.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>


            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-12 text-base font-normal rounded-xl mt-1"
              style={{ backgroundColor: "#35503f" }}
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
              
              
{/* Social Icons */}
<div className="flex justify-center items-center gap-3 mt-2">
  {socialLinks.map((social) => {
    const Icon = social.icon;
    return (
      <a
        key={social.label}
        href={social.href}
        aria-label={social.label}
        className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-80"
        style={{ backgroundColor: "#35503f" }}
      >
        <Icon className="w-4 h-4" />
      </a>
    );
  })}
</div>
          </motion.form>

          
        </div>
      </div>
    </section>
  );
};