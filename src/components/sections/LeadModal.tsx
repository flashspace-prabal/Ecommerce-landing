import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
          {/* Gradient background overlay — blue to orange with grain */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{
              background: "linear-gradient(165deg, #3B82F6 0%, #6366F1 30%, #D97706 70%, #EA580C 100%)",
            }}
            onClick={() => setOpen(false)}
          >
            {/* Grain texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          </motion.div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 grid w-full max-w-[680px] overflow-hidden rounded-2xl shadow-2xl md:grid-cols-[2fr_3fr]"
            style={{ backgroundColor: "#FBF8F5" }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-black/5"
              style={{ color: "#2D2D2A" }}
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
                  {/* Badge */}
                  <span
                    className="mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                    style={{
                      backgroundColor: "#F0EDE8",
                      color: "#35503f",
                    }}
                  >
                    Instant Compliance
                  </span>

                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      color: "#2D2D2A",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    Join 5,000+ Successful Sellers
                  </h3>
                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "#5A5A55" }}
                  >
                    Get our exclusive{" "}
                    <span className="font-semibold" style={{ color: "#2D2D2A" }}>
                      'E-commerce Expansion Roadmap'
                    </span>{" "}
                    PDF and start scaling today.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className="mb-1.5 block text-xs font-medium"
                        style={{ color: "#2D2D2A" }}
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        maxLength={100}
                        required
                        className="flex h-10 w-full rounded-lg px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-[#3D3D39]/20"
                        style={{
                          backgroundColor: "#F5F2ED",
                          border: "1px solid #E5E2DD",
                          color: "#2D2D2A",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="mb-1.5 block text-xs font-medium"
                        style={{ color: "#2D2D2A" }}
                      >
                        WhatsApp Number
                      </label>
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-10 items-center rounded-lg px-3 text-sm"
                          style={{
                            backgroundColor: "#F5F2ED",
                            border: "1px solid #E5E2DD",
                            color: "#5A5A55",
                          }}
                        >
                          +91
                        </span>
                        <input
                          value={phone}
                          onChange={(e) => {
                            const v = e.target.value.replace(/\D/g, "");
                            if (v.length <= 10) setPhone(v);
                          }}
                          placeholder="9876543210"
                          type="tel"
                          maxLength={10}
                          required
                          className="flex h-10 w-full rounded-lg px-3 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-[#3D3D39]/20"
                          style={{
                            backgroundColor: "#F5F2ED",
                            border: "1px solid #E5E2DD",
                            color: "#2D2D2A",
                          }}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!name.trim() || phone.length < 10}
                      className="w-full h-12 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50"
                      style={{ backgroundColor: "#3D3D39" }}
                    >
                      GET MY FREE ROADMAP
                    </button>

                    <p
                      className="text-[11px] text-center"
                      style={{ color: "#5A5A55" }}
                    >
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      color: "#2D2D2A",
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    You're In!
                  </h3>
                  <p className="text-sm" style={{ color: "#5A5A55" }}>
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
