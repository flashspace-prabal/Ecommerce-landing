import { motion } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Setup",
    description: "VPOB & GST registration done in 7–14 business days per state.",
  },
  {
    icon: Shield,
    title: "100% Compliant",
    description: "Stay fully legal across all states — no penalties, no surprises.",
  },
  {
    icon: Clock,
    title: "24hr Support",
    description: "Dedicated compliance manager available when you need help.",
  },
  {
    icon: TrendingUp,
    title: "Scale Faster",
    description: "Unlock pan-India selling and recover lost TCS/TDS credits.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Why Sellers Choose FlashSpace
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Everything you need to sell compliantly across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border/40 p-6 text-center shadow-sm"
            >
              <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
