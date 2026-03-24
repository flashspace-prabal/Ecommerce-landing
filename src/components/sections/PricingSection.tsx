import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

const plans = [
  {
    name: "Tier 1 Cluster",
    price: "₹80,000",
    priceSuffix: "+GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Tamil Nadu", "West Bengal", "Maharashtra", "Karnataka", "Telangana"],
    highlighted: false,
  },
  {
    name: "North Cluster",
    price: "₹90,000",
    priceSuffix: "+GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Punjab", "Himachal Pradesh", "J&K", "Gujarat", "Rajasthan"],
    highlighted: false,
  },
  {
    name: "South Cluster",
    price: "₹75,000",
    priceSuffix: "+GST/yr",
    coverage: "6 States",
    states: ["Kerala", "Tamil Nadu", "Telangana", "Karnataka", "Maharashtra", "Andhra Pradesh"],
    highlighted: false,
  },
  {
    name: "All India Cluster",
    price: "₹2,40,000",
    priceSuffix: "+GST/yr",
    coverage: "20 States",
    states: ["North + South + West Bengal", "Assam + Central India"],
    highlighted: true,
  },
];

export const PricingSection = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            No hidden fees. Choose what works for your business.
          </p>
        </motion.div>

        {/* Top border */}
        <div className="border-t border-border/60" />

        {/* Grid container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col px-5 lg:px-6 py-8"
            >
              {/* Cluster name */}
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Coverage: {plan.coverage}
              </p>

              {/* State list */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.states.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-1" strokeWidth={2.5} />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-5">
                <span className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">{plan.price}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{plan.priceSuffix}</span>
              </div>

              {/* Plus button */}
              <button
                onClick={() => scrollTo("#contact")}
                className="group w-11 h-11 rounded-lg border border-border/60 flex items-center justify-center text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105"
                aria-label={`Select ${plan.name}`}
              >
                <Plus className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-border/60" />
      </div>
    </section>
  );
};