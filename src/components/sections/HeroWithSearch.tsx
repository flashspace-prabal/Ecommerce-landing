import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, X, CheckCircle } from "lucide-react";
import { useHeroFormTrigger } from "@/hooks/useHeroFormTrigger";
import heroIllustrated from "@/assets/hero-illustrated.jpg";

const services = ["GST Registration", "VPOB Setup", "Multi-State GST", "Not sure yet"];

export const HeroWithSearch = () => {
  const { formOpen, openForm, closeForm } = useHeroFormTrigger();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", phone: "", service: "" });
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus name input after form opens
  useEffect(() => {
    if (formOpen && !submitted) {
      const timer = setTimeout(() => nameInputRef.current?.focus(), 550);
      return () => clearTimeout(timer);
    }
  }, [formOpen, submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden pt-20 lg:pt-24 min-h-[600px] lg:min-h-[700px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroIllustrated} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 w-full px-4 lg:px-8 py-10 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left / Center content */}
            <motion.div
              layout
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={`flex flex-col ${formOpen ? "text-left lg:text-left" : "text-center lg:text-center lg:col-span-2"}`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
                <span
                  className="backdrop-blur-[1px] bg-white/15 rounded-lg px-3 py-1 inline"
                  style={{ color: "#35503F", textShadow: "0 0 12px rgba(255,255,255,0.7)" }}
                >
                  Start in One City.
                </span>
                <br />
                <span
                  className="backdrop-blur-[1px] bg-white/15 rounded-lg px-3 py-1 inline"
                  style={{ color: "#35503F", textShadow: "0 0 12px rgba(255,255,255,0.7)" }}
                >
                  Sell Across India.
                </span>
                <br />
                <span
                  className="backdrop-blur-[1px] bg-white/15 rounded-lg px-3 py-1 inline"
                  style={{ color: "#35503F", textShadow: "0 0 12px rgba(255,255,255,0.7)" }}
                >
                  Scale Without Limits.
                </span>
              </h1>

              <motion.p
                className="text-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-xl backdrop-blur-[1px] bg-white/15 rounded-xl px-4 py-3 inline-block"
                style={{
                  marginLeft: formOpen ? "0" : "auto",
                  marginRight: formOpen ? "auto" : "auto",
                }}
              >
                FlashSpace provides VPOB and APOB addresses accepted by Amazon, Flipkart, Meesho and Myntra. GST
                documents delivered in 3 to 7 working days. No physical office needed.
              </motion.p>

              {/* CTA — only visible in default state */}
              <AnimatePresence>
                {!formOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center lg:justify-center"
                  >
                    <Button size="lg" className="font-medium px-7 h-12" onClick={openForm}>
                      Get Your VPOB / APOB Address
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right — Form (slides in) */}
            <AnimatePresence>
              {formOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="lg:col-start-2"
                >
                  {submitted ? (
                    <div className="relative rounded-2xl overflow-hidden border border-white/40 shadow-2xl p-8 text-center backdrop-blur-md bg-black/30">
                      <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
                      <p className="text-white/70 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="relative rounded-2xl overflow-hidden border border-white/40 shadow-2xl p-5 lg:p-6 space-y-3 max-w-sm ml-auto backdrop-blur-md bg-black/30"
                    >
                      {/* Close button */}
                      <button
                        type="button"
                        onClick={closeForm}
                        className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                        aria-label="Close form"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>

                      <div className="relative z-10 space-y-3">
                        <h3 className="text-base font-normal text-white mb-0.5">Request a Free Callback</h3>
                        <p className="text-xs text-white/70 mb-2">Our experts respond within 2 hours.</p>

                        <div>
                          <Label htmlFor="hero-name" className="text-xs font-normal text-white/90 mb-1 block">
                            Full Name
                          </Label>
                          <Input
                            id="hero-name"
                            ref={nameInputRef}
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="bg-white/90"
                          />
                        </div>
                        <div>
                          <Label htmlFor="hero-email" className="text-xs font-normal text-white/90 mb-1 block">
                            Email
                          </Label>
                          <Input
                            id="hero-email"
                            type="email"
                            placeholder="you@company.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            className="bg-white/90"
                          />
                        </div>
                        <div>
                          <Label htmlFor="hero-business" className="text-xs font-normal text-white/90 mb-1 block">
                            Business Name
                          </Label>
                          <Input
                            id="hero-business"
                            placeholder="Your business"
                            value={form.business}
                            onChange={(e) => setForm({ ...form, business: e.target.value })}
                            required
                            className="bg-white/90"
                          />
                        </div>
                        <div>
                          <Label htmlFor="hero-phone" className="text-xs font-normal text-white/90 mb-1 block">
                            Phone
                          </Label>
                          <Input
                            id="hero-phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            required
                            className="bg-white/90"
                          />
                        </div>
                        <div>
                          <Label className="text-xs font-normal text-white/90 mb-1 block">Service Needed</Label>
                          <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                            <SelectTrigger className="bg-white/90">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>
                                  {s}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <Button type="submit" className="w-full h-10 font-medium" size="default">
                          Request Callback
                        </Button>
                        <p className="text-[11px] text-white/50 text-center">
                          By submitting, you agree to our Privacy Policy.
                        </p>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
