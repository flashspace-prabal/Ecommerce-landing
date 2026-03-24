import { motion } from "framer-motion";
import { Plus } from "lucide-react";

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
    states: ["North + South", "+ West Bengal", "Assam", "Central India"],
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl overflow-hidden"
          style={{ border: "1px solid #e5e7eb" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`flex flex-col justify-between relative ${
                  i < plans.length - 1 ? "lg:border-r" : ""
                } ${i < 2 ? "sm:border-r lg:border-r-0" : ""} ${
                  i === 0 || i === 1 ? "sm:border-b lg:border-b-0" : ""
                } ${i === 2 ? "sm:border-b lg:border-b-0" : ""}`}
                style={{
                  borderColor: "#e5e7eb",
                  backgroundColor: plan.highlighted ? "hsla(142, 20%, 26%, 0.05)" : "transparent",
                }}
              >
                {/* Fix border-right for lg */}
                <style>{`
                  @media (min-width: 1024px) {
                    .pricing-col:not(:last-child) { border-right: 1px solid #e5e7eb; }
                    .pricing-col { border-bottom: none !important; }
                  }
                  @media (min-width: 640px) and (max-width: 1023px) {
                    .pricing-col:nth-child(odd) { border-right: 1px solid #e5e7eb; }
                    .pricing-col:nth-child(-n+2) { border-bottom: 1px solid #e5e7eb; }
                  }
                  @media (max-width: 639px) {
                    .pricing-col:not(:last-child) { border-bottom: 1px solid #e5e7eb; }
                  }
                `}</style>
                {/* Top: Header */}
                <div className="p-6 pb-0">
                  {plan.highlighted && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full mb-3">
                      Best Value
                    </span>
                  )}
                  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mb-4">
                    {plan.coverage}
                  </p>

                  {/* States in 2-col sub-grid */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {plan.states.map((s) => (
                      <span key={s} className="text-[11px] text-muted-foreground leading-tight">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Price + Button */}
                <div className="p-6 pt-8">
                  <div className="mb-4">
                    <span className="text-2xl lg:text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-[11px] text-muted-foreground ml-1">{plan.priceSuffix}</span>
                  </div>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="w-10 h-10 mx-auto flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    style={{ borderColor: "#e5e7eb", backgroundColor: "hsla(0,0%,0%,0.02)" }}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
