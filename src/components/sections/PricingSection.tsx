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
    <section id="pricing" className="py-16 lg:py-24 bg-background">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col"
            >
              {/* Badge above card for highlighted */}
              {plan.highlighted && (
                <div className="flex justify-center mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-primary text-primary-foreground px-5 py-1.5 rounded-full">
                    Best Value
                  </span>
                </div>
              )}

              <div
                className={`relative bg-card rounded-2xl border flex flex-col h-full transition-all duration-300 overflow-hidden ${
                  plan.highlighted
                    ? "border-primary shadow-xl ring-1 ring-primary/20 lg:-mt-4 lg:mb-4"
                    : "border-border/50 shadow-sm"
                }`}
              >
                {/* Header area */}
                <div className="p-6 pb-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground ml-0.5">{plan.priceSuffix}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">
                    Coverage: {plan.coverage}
                  </p>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className={`w-full h-11 rounded-xl font-semibold ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                    onClick={() => scrollTo("#contact")}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Divider */}
                <div className="border-t border-border/40 mx-6" />

                {/* Features list */}
                <ul className="p-6 pt-4 space-y-2.5 flex-1">
                  {plan.states.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
