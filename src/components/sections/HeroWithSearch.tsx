import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, X, CheckCircle } from "lucide-react";
import heroIllustrated from "@/assets/hero-section(1).png";
import { useHeroFormTrigger } from "@/hooks/useHeroFormTrigger";



const services = ["GST Registration", "VPOB Setup", "Multi-State GST", "Not sure yet"];

export const HeroWithSearch = () => {
  const { formOpen, openForm, closeForm } = useHeroFormTrigger();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", phone: "", service: "" });
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus name input after modal opens
  useEffect(() => {
    if (formOpen && !submitted) {
      const timer = setTimeout(() => nameInputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [formOpen, submitted]);


  // Lock body scroll when modal open
  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [formOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO SECTION — never moves, always centered ── */}
      <section id="hero" className="relative w-full overflow-hidden pt-20 lg:pt-24 min-h-[600px] lg:min-h-[700px]">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroIllustrated} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        {/* Content — always centered, never shifts */}
        <div className="relative z-10 w-full px-4 lg:px-8 py-10 lg:py-20">
          <div className="mx-auto w-full max-w-7xl flex flex-col items-center text-center">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
              <span
                className="backdrop-blur-[1px] bg-white/15 rounded-lg px-3 py-1 inline"
                style={{ color: "#35503F", textShadow: "0 0 12px rgba(255,255,255,0.7)" }}
              >
                Set Up in One City. <br />Sell Across India with VPOB.
              </span>
            </h1>

            <p className="text-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-xl backdrop-blur-[10px] bg-white/15 rounded-xl px-4 py-3">
              Get marketplace-approved VPOB & APOB addresses for Amazon, Flipkart, Meesho & Myntra
              with GST-ready documents in just 3–7 days. No physical office required.
            </p>

            <Button
              size="lg"
              className="font-medium px-7 h-12"
              onClick={openForm}
            >
              Get Your GST-Ready Address
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

          </div>
        </div>
      </section>

      {/* ── POPUP MODAL ── */}
      <AnimatePresence>
        {formOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60"
              onClick={closeForm}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={() => {
                    closeForm();
                    setSubmitted(false);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                    <Button className="mt-6 w-full" onClick={closeForm}>
                      Close
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Header */}
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        Get Your Virtual Office
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fill in details and we will help you get started quickly.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="modal-name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="modal-name"
                        ref={nameInputRef}
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="modal-email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="modal-email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="modal-phone" className="text-sm font-medium text-foreground">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="modal-phone"
                        type="tel"
                        placeholder="+918100888777"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>

                    {/* City */}
                    <div className="flex flex-col gap-1.5">
                      <Label className="text-sm font-medium text-foreground">
                        City for Virtual Office <span className="text-destructive">*</span>
                      </Label>
                      <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          {["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Other"].map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full h-11 text-base font-medium mt-2"
                      style={{ backgroundColor: "#35503f" }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Get Your Virtual Office
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};