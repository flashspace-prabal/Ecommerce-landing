import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹1,499",
    period: "/month per state",
    description: "For sellers starting with 1–3 states",
    features: [
      "VPOB address in selected state",
      "GST registration assistance",
      "Monthly GST return filing",
      "TCS reconciliation",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹999",
    period: "/month per state",
    description: "For sellers scaling to 5+ states",
    features: [
      "Everything in Starter",
      "Bulk multi-state VPOB setup",
      "Dedicated compliance manager",
      "TDS/TCS recovery support",
      "Priority phone support",
      "Quarterly compliance audit",
    ],
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
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
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

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-2xl border p-7 lg:p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/40 shadow-lg scale-[1.02]"
                  : "border-border/40 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary text-primary-foreground px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
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
