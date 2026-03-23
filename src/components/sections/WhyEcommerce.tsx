import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldOff,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  PackageCheck,
  FileCheck2,
  BadgeCheck,
  TrendingUp,
  MoveRight,
} from "lucide-react";
import logisticsImg from "@/assets/india-ecommerce-logistics.png";

const ease = [0.16, 1, 0.3, 1] as const;

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ═══════════ HERO — Split Layout ═══════════ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              The Compliance Gap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
              Stop Losing Lakhs to{" "}
              <span className="text-primary">Compliance Gaps.</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Scaling on Amazon&nbsp;&&nbsp;Flipkart requires more than inventory — it requires a Multi-State GST (VPOB) strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-border/30">
              <img
                src={logisticsImg}
                alt="Indian e-commerce logistics — warehouse with packages and delivery"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Spacer before Impact Card */}
        <div className="mb-0" />

        {/* ═══════════ IMPACT CARD — Full Width Dark ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="rounded-3xl bg-foreground text-background overflow-hidden shadow-soft-lg"
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr] items-center">
            {/* The Ceiling */}
            <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-background/35 mb-3">
                The Ceiling
              </span>
              <span className="text-4xl lg:text-5xl font-bold text-background/30 tabular-nums tracking-tight">
                ₹3–5L
              </span>
              <span className="text-sm text-background/25 mt-1">/month</span>
              <p className="text-xs text-background/25 mt-3 max-w-[180px]">
                Stuck with single-state GST
              </p>
            </div>

            {/* Glowing Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center px-4">
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <ArrowRight className="w-10 h-10 text-primary" />
              </motion.div>
            </div>

            {/* The Scale */}
            <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                The Scale
              </span>
              <span className="text-5xl lg:text-7xl font-bold text-secondary tabular-nums tracking-tight">
                ₹15L+
              </span>
              <span className="text-sm text-secondary/60 mt-1">/month</span>
              <p className="text-xs text-background/40 mt-3 max-w-[200px]">
                Unlocked with Multi-State VPOB
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-background/10 px-8 py-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-10 py-4 rounded-2xl text-base font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-[0.97]"
            >
              Get Your VPOB Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
