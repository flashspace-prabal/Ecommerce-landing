import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroWatercolorBg from "@/assets/hero-watercolor-bg.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Phone } from "lucide-react";
import { CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const services = [
  "GST Registration",
  "VPOB Setup",
  "Multi-State GST",
  "E-commerce Compliance",
  "TDS/TCS Handling",
  "Not sure yet",
];

export const HeroWithSearch = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", phone: "", service: "" });

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full overflow-hidden pt-20 lg:pt-24">
      <img
        src={heroWatercolorBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 w-full px-4 lg:px-8 py-6 lg:py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left — Text */}
            <motion.div
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5">
                Start & Scale Your<br />
                E-commerce Business{" "}
                <span className="text-primary">Across India</span>
              </h1>
              <motion.p
                custom={0.25}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
              >
                From GST registration to multi-state compliance — sell across India without legal or tax risks.
              </motion.p>
              <motion.div
                custom={0.4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="font-medium px-7 h-12"
                  onClick={() => scrollTo("#contact")}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-medium px-7 h-12"
                  onClick={() => scrollTo("#contact")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — Form Card */}
            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {submitted ? (
                <div className="bg-card rounded-2xl border border-border/50 p-8 text-center shadow-sm">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border/50 p-7 lg:p-8 space-y-4 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">Request a Free Callback</h3>
                  <p className="text-sm text-muted-foreground mb-4">Our experts respond within 2 hours.</p>

                  <div>
                    <Label htmlFor="hero-name" className="text-xs font-medium text-foreground mb-1 block">Full Name</Label>
                    <Input
                      id="hero-name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-email" className="text-xs font-medium text-foreground mb-1 block">Email</Label>
                    <Input
                      id="hero-email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-business" className="text-xs font-medium text-foreground mb-1 block">Business Name</Label>
                    <Input
                      id="hero-business"
                      placeholder="Your business"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-phone" className="text-xs font-medium text-foreground mb-1 block">Phone</Label>
                    <Input
                      id="hero-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-foreground mb-1 block">Service Needed</Label>
                    <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full h-11 font-medium" size="lg">
                    Request Callback
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
