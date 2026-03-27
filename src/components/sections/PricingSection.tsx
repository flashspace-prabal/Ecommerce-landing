import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "tier1",
    name: "Tier 1 Cluster",
    // price: 80000,
    // priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Tamil Nadu", "West Bengal", "Maharashtra", "Karnataka", "Telangana"],
  },
  {
    id: "north",
    name: "North Cluster",
    // price: 90000,
    // priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Punjab", "Himachal Pradesh", "J&K", "Gujarat", "Rajasthan"],
  },
  {
    id: "south",
    name: "South Cluster",
    // price: 75000,
    // priceSuffix: " + GST/yr",
    coverage: "6 States",
    states: ["Kerala", "Tamil Nadu", "Telangana", "Karnataka", "Maharashtra", "Andhra Pradesh"],
  },
  {
    id: "allindia",
    name: "All India Cluster",
    // price: 240000,
    // priceSuffix: " + GST/yr",
    coverage: "20 States",
    states: ["North + South + West Bengal", "Assam + Central India"],
  },
];

// const formatPrice = (price: number) => {
//   return `₹${price.toLocaleString("en-IN")}`;
// };

export const PricingSection = () => {
  const [selectedId, setSelectedId] = useState("allindia");

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
            Simple pricing,
            <br />
            maximum value
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            No hidden fees. Choose what works for your business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => {
            const isActive = selectedId === plan.id;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedId(plan.id)}
                className={`relative rounded-2xl border overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "border-primary shadow-lg scale-[1.02] z-10"
                    : "border-border/60 bg-card hover:border-border hover:shadow-sm"
                }`}
              >
                {/* Gradient overlay on active card — top half */}
                {isActive && (
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-secondary/35 to-transparent pointer-events-none rounded-t-2xl" />
                )}

                <div className="relative p-6 lg:p-7 flex flex-col flex-1">
                  {/* Chip */}
                  <span
                    className={`inline-block text-[11px] font-medium uppercase tracking-widest rounded-md px-3 py-1 w-fit mb-5 ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    {plan.name}
                  </span>

                  {/* Price */}
                  {/* <div className="mb-1">
                    <span className="text-3xl lg:text-4xl font-bold text-foreground leading-none">
                      {formatPrice(plan.price)}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground mb-5">
                    {plan.priceSuffix}
                  </span> */}

                  {/* Coverage */}
                  <p className="text-sm font-semibold text-foreground mb-3">Coverage: {plan.coverage}</p>

                  {/* States list */}
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.states.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 stroke-[1.5]" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="w-full h-11 rounded-lg"
                    variant={isActive ? "default" : "outline"}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollTo("#contact");
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
