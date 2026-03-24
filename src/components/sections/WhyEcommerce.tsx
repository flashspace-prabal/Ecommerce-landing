import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const ease = [0.16, 1, 0.3, 1] as const;

export const WhyEcommerce = () => {
  return (
    <section
      id="why-us"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, hsl(0 0% 97%) 0%, hsl(142 15% 95%) 100%)",
      }}
    >
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-primary/8 text-primary border border-primary/15 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              The Compliance Gap
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.05]">
              Stop Losing Lakhs to{" "}
              <span className="text-primary">Compliance Gaps.</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-md" style={{ lineHeight: 1.7 }}>
              Scaling on Amazon&nbsp;&&nbsp;Flipkart requires more than
              inventory — it requires a Multi-State GST (VPOB) strategy.
            </p>

            <div className="pt-2">
              <Button size="lg" className="rounded-full px-8">
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative"
          >
            {/* Floating card with large soft shadow */}
            <div
              className="rounded-2xl overflow-hidden bg-card border border-border/40"
              style={{
                boxShadow:
                  "0 25px 80px -12px hsla(142, 20%, 26%, 0.12), 0 8px 24px -8px hsla(142, 20%, 26%, 0.08)",
              }}
            >
              <img
                src={logisticsImg}
                alt="Indian e-commerce logistics — warehouse with packages and delivery"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Glassmorphism badge overlay */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="absolute -bottom-5 -left-4 sm:-left-6"
            >
              <div
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border/50"
                style={{
                  background: "hsla(0, 0%, 100%, 0.85)",
                  backdropFilter: "blur(16px)",
                  boxShadow:
                    "0 12px 40px -8px hsla(142, 20%, 26%, 0.1), 0 4px 12px -4px hsla(0, 0%, 0%, 0.04)",
                }}
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    GST Compliant
                  </p>
                  <p className="text-xs text-muted-foreground">Verified ✓</p>
                </div>
              </div>
            </motion.div>

            {/* Top-right floating check badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7, ease }}
              className="absolute -top-3 -right-3 sm:-right-5"
            >
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50"
                style={{
                  background: "hsla(0, 0%, 100%, 0.9)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px -6px hsla(0, 0%, 0%, 0.08)",
                }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">
                  MCA Approved
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
