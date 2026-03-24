import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Tier 1 Cluster",
    price: "₹80,000",
    priceSuffix: "+ GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Tamil Nadu", "West Bengal", "Maharashtra", "Karnataka", "Telangana"],
    highlighted: false,
  },
  {
    name: "North Cluster",
    price: "₹90,000",
    priceSuffix: "+ GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Punjab", "Himachal Pradesh", "J&K", "Gujarat", "Rajasthan"],
    highlighted: false,
  },
  {
    name: "South Cluster",
    price: "₹75,000",
    priceSuffix: "+ GST/yr",
    coverage: "6 States",
    states: ["Kerala", "Tamil Nadu", "Telangana", "Karnataka", "Maharashtra", "Andhra Pradesh"],
    highlighted: false,
  },
  {
    name: "All India Cluster",
    price: "₹2,40,000",
    priceSuffix: "+ GST/yr",
    coverage: "20 States",
    states: ["North + South", "West Bengal", "Assam", "Central India"],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col h-full p-6 ${
                plan.highlighted
                  ? "bg-primary/[0.04] border-2 border-primary rounded-2xl z-10 shadow-md"
                  : "bg-card border border-border/40 shadow-sm"
              } ${
                !plan.highlighted && i === 0 ? "rounded-l-2xl lg:border-r-0" : ""
              } ${
                !plan.highlighted && i === 1 ? "lg:border-r-0" : ""
              } ${
                !plan.highlighted && i === 3 ? "rounded-r-2xl" : ""
              } ${
                !plan.highlighted && i === 2 ? "lg:border-r-0" : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold bg-primary text-primary-foreground px-4 py-0.5 rounded-full whitespace-nowrap tracking-wide">
                  Best Value
                </span>
              )}

              <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase opacity-80">
                {plan.name}
              </h3>

              <div className="mb-1">
                <span className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">{plan.price}</span>
              </div>
              <span className="text-[11px] text-muted-foreground/60 font-medium mb-5 block">{plan.priceSuffix}</span>

              <p className="text-xs font-semibold text-foreground mb-3">
                Coverage: {plan.coverage}
              </p>

              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6 flex-1">
                {plan.states.map((s) => (
                  <div key={s} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CircleCheck className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

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