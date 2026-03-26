import { motion } from "framer-motion";
import { Users, Zap, Eye, HeartHandshake, ArrowRight } from "lucide-react";
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

          {/* Card 1 — UAE Experts (tall left) */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-5 sm:row-span-2 rounded-2xl border border-border/50 bg-card p-8 lg:p-10 flex flex-col justify-end min-h-[320px] lg:min-h-[420px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              <Users className="w-4 h-4" /> Local Expertise
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-3">
              UAE Experts.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Our team has deep expertise in UAE regulations, free zones, and mainland licensing — so you don't have to.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 2 — Fast Setup (top right) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="lg:col-span-7 rounded-2xl border border-border/50 bg-card p-8 lg:p-10 flex flex-col justify-center min-h-[200px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <Zap className="w-4 h-4" /> Quick Setup
            </span>
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">
              3‑Day Setup.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Get your trade license in as little as 3 days. We handle the paperwork while you focus on your business.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Start Now <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 3 — CTA center (yellow) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.16 }}
            className="lg:col-span-4 rounded-2xl bg-secondary p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[200px]"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-snug">
              Built for Entrepreneurs<br />in the UAE
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

          {/* Card 4 — Transparent Pricing (bottom right small) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.24 }}
            className="lg:col-span-3 rounded-2xl border border-border/50 bg-card p-8 flex flex-col justify-center min-h-[200px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <Eye className="w-4 h-4" /> Pricing
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              100% Clear.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              No hidden fees. Clear, upfront pricing for every service.
            </p>
          </motion.div>

          {/* Card 5 — End-to-End Support (bottom wide) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.12 }}
            className="lg:col-span-7 rounded-2xl border border-border/50 bg-card p-8 lg:p-10 flex flex-col justify-center min-h-[180px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <HeartHandshake className="w-4 h-4" /> Full Support
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              End‑to‑End Support.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              From choosing your jurisdiction to opening a bank account, we support you at every stage of your journey.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground cursor-pointer hover:gap-2.5 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Card 6 — Compliance (bottom right) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 rounded-2xl border border-border/50 bg-card p-8 lg:p-10 flex flex-col justify-center min-h-[180px]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              <Eye className="w-4 h-4" /> Compliance
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
              100% Compliant.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GST & MCA approved across all Indian states. We ensure your business meets every regulatory requirement.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
