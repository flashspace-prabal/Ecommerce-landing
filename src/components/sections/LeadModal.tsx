import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import modalImg from "@/assets/lead-modal-entrepreneur.jpg";

const STORAGE_KEY = "flashspace_lead_modal_shown";

export const LeadModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 10) return;
    setSubmitted(true);
    setTimeout(() => setOpen(false), 2000);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 grid w-full max-w-2xl overflow-hidden bg-card shadow-2xl md:grid-cols-[2fr_3fr]"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left – Image */}
            <div className="hidden md:block">
              <img
                src={modalImg}
                alt="Successful entrepreneur"
                className="h-full w-full object-cover"
                loading="lazy"
                width={640}
                height={800}
              />
            </div>

            {/* Right – Form */}
            <div className="flex flex-col justify-center p-6 sm:p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Join 5,000+ Successful Sellers
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Get our exclusive{" "}
                    <span className="font-semibold text-foreground">
                      'E-commerce Expansion Roadmap'
                    </span>{" "}
                    PDF and start scaling today.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        maxLength={100}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">
                        WhatsApp Number
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="flex h-10 items-center rounded-md border border-input bg-muted px-3 text-sm text-muted-foreground">
                          +91
                        </span>
                        <Input
                          value={phone}
                          onChange={(e) => {
                            const v = e.target.value.replace(/\D/g, "");
                            if (v.length <= 10) setPhone(v);
                          }}
                          placeholder="9876543210"
                          type="tel"
                          maxLength={10}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={!name.trim() || phone.length < 10}
                    >
                      GET MY FREE ROADMAP
                    </Button>

                    <p className="text-[11px] text-muted-foreground text-center">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    You're In!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Check your WhatsApp for the roadmap PDF.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
