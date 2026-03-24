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
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            No hidden fees. Choose what works for your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative bg-card rounded-3xl border p-6 flex flex-col h-full transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/40 shadow-lg scale-[1.02]"
                  : "border-border/40 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary text-primary-foreground px-4 py-1 rounded-full whitespace-nowrap">
                  Best Value
                </span>
              )}
              <h3 className="text-base font-bold text-foreground mb-3">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-2xl lg:text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-xs text-muted-foreground">{plan.priceSuffix}</span>
              </div>
              <p className="text-sm font-semibold text-foreground mt-4 mb-2">
                Coverage: {plan.coverage}
              </p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {plan.states.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full h-11"
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => scrollTo("#contact")}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
