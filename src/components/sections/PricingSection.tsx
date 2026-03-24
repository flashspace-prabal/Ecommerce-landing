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
    tint: "bg-blue-50/60",
  },
  {
    name: "North Cluster",
    price: "₹90,000",
    priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Punjab", "Himachal Pradesh", "J&K", "Gujarat", "Rajasthan"],
    highlighted: false,
    tint: "bg-amber-50/60",
  },
  {
    name: "South Cluster",
    price: "₹75,000",
    priceSuffix: " + GST/yr",
    coverage: "6 States",
    states: ["Kerala", "Tamil Nadu", "Telangana", "Karnataka", "Maharashtra", "Andhra Pradesh"],
    highlighted: false,
    tint: "bg-emerald-50/60",
  },
  {
    name: "All India Cluster",
    price: "₹2,40,000",
    priceSuffix: " + GST/yr",
    coverage: "20 States",
    states: ["North + South + West Bengal", "Assam + Central India"],
    highlighted: true,
    tint: "bg-primary/5",
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

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-3xl border p-6 flex flex-col h-full snap-center min-w-[280px] lg:min-w-0 transition-all duration-300 ${plan.tint} ${
                plan.highlighted
                  ? "border-primary border-2 shadow-xl shadow-primary/10 scale-[1.02] z-10"
                  : "border-border/40 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-primary text-primary-foreground px-4 py-1 rounded-full whitespace-nowrap">
                  Best Value
                </span>
              )}
              <h3 className="text-base font-bold text-foreground mb-3">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">{plan.price}</span>
                <span className="text-xs text-muted-foreground ml-1">{plan.priceSuffix}</span>
              </div>

              {/* Coverage pill */}
              <span className="inline-flex items-center self-start rounded-full bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 mb-3">
                {plan.coverage}
              </span>

              {/* States in 2-col grid */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6 flex-1">
                {plan.states.map((s) => (
                  <div key={s} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full h-11 ${
                  plan.highlighted
                    ? ""
                    : "bg-foreground/5 backdrop-blur-sm border border-border/60 text-foreground hover:bg-foreground/10"
                }`}
                variant={plan.highlighted ? "default" : "ghost"}
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
