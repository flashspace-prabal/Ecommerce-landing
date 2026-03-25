import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Tier 1 Cluster",
    price: "₹80,000",
    priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Tamil Nadu", "West Bengal", "Maharashtra", "Karnataka", "Telangana"],
    highlighted: false,
  },
  {
    name: "North Cluster",
    price: "₹90,000",
    priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Punjab", "Himachal Pradesh", "J&K", "Gujarat", "Rajasthan"],
    highlighted: false,
  },
  {
    name: "South Cluster",
    price: "₹75,000",
    priceSuffix: " + GST/yr",
    coverage: "6 States",
    states: ["Kerala", "Tamil Nadu", "Telangana", "Karnataka", "Maharashtra", "Andhra Pradesh"],
    highlighted: false,
  },
  {
    name: "All India Cluster",
    price: "₹2,40,000",
    priceSuffix: " + GST/yr",
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
    <section id="pricing" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            No hidden fees. Choose what works for your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 flex flex-col h-full transition-all duration-300 ${
                plan.highlighted
                  ? "border-2 border-primary shadow-glow bg-card ring-1 ring-primary/10"
                  : "border border-border/60 bg-card shadow-soft"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-5 py-1 rounded-full whitespace-nowrap">
                  Best Value
                </span>
              )}

              {/* Header */}
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-5">
                <span className="text-3xl lg:text-4xl font-bold text-foreground leading-none">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-0.5">{plan.priceSuffix}</span>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full h-11 mb-6 rounded-lg"
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => scrollTo("#contact")}
              >
                Get Started
              </Button>

              {/* Divider */}
              <div className="border-t border-border/60 mb-5" />

              {/* Coverage label */}
              <p className="text-sm font-semibold text-foreground mb-3">
                Coverage: {plan.coverage}
              </p>

              {/* State list */}
              <ul className="space-y-2.5 flex-1">
                {plan.states.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
