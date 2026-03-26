import { motion } from "framer-motion";
import { MapPin, Zap, ShieldCheck, HeartHandshake, ArrowRight, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* Card 1 — All India Coverage */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-5 rounded-2xl border border-border/50 bg-card p-6 lg:p-8 flex flex-col justify-center min-h-[170px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <MapPin className="w-4 h-4" /> All India Coverage
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              20+ States.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              VPOB addresses available across major Indian states and UTs — unlock pan-India selling on Amazon, Flipkart, and all major marketplaces.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 1b — Dedicated Support */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.04 }}
            className="lg:col-span-7 rounded-2xl border border-border/50 bg-card p-6 lg:p-8 flex flex-col justify-center min-h-[170px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <ShieldCheck className="w-4 h-4" /> Dedicated Manager
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              1:1 Support.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A dedicated compliance manager assigned to your account — handling all communication with government authorities on your behalf.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 2 — Fast GST Approval (top right) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="lg:col-span-5 rounded-2xl border border-border/50 bg-card p-6 lg:p-8 flex flex-col justify-center min-h-[170px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <Zap className="w-4 h-4" /> Quick Approval
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              &lt;3 Day GST.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Get your GST registration approved in under 3 days. We handle all paperwork, filings, and government coordination.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Start Now <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 3 — CTA center (yellow) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.16 }}
            className="lg:col-span-4 rounded-2xl bg-secondary p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[170px]"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-snug">
              Built for E-commerce Sellers in India
            </h3>
            <Button
              size="lg"
              className="rounded-full px-8 gap-2"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Card 4 — Affordable Pricing (bottom right small) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.24 }}
            className="lg:col-span-3 rounded-2xl border border-border/50 bg-card p-6 flex flex-col justify-center min-h-[170px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <IndianRupee className="w-4 h-4" /> Pricing
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              Affordable Prices.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transparent, no-hidden-fee pricing. VPOB addresses at the most competitive rates in the market.
            </p>
          </motion.div>

          {/* Card 5 — End-to-End Compliance (bottom wide) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.12 }}
            className="lg:col-span-7 rounded-2xl border border-border/50 bg-card p-6 lg:p-8 flex flex-col justify-center min-h-[160px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <HeartHandshake className="w-4 h-4" /> Full Support
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              End‑to‑End Support.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              From VPOB address setup to GST registration — we handle the entire process so you can start selling faster.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 6 — 98% Approval Rate (bottom right) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 rounded-2xl border border-border/50 bg-card p-6 lg:p-8 flex flex-col justify-center min-h-[160px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <ShieldCheck className="w-4 h-4" /> Compliance
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              98% Approved.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              98% GST, VPOB & COI approval rate. Trusted by 5,000+ e-commerce sellers across 47+ industries.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
