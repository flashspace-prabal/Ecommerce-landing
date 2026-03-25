import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";


const plans = [
  {
    name: "Tier 1 Cluster",
    price: 80000,
    priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Tamil Nadu", "West Bengal", "Maharashtra", "Karnataka", "Telangana"],
    highlighted: false,
  },
  {
    name: "North Cluster",
    price: 90000,
    priceSuffix: " + GST/yr",
    coverage: "8 States",
    states: ["Delhi", "UP", "Haryana", "Punjab", "Himachal Pradesh", "J&K", "Gujarat", "Rajasthan"],
    highlighted: false,
  },
  {
    name: "South Cluster",
    price: 75000,
    priceSuffix: " + GST/yr",
    coverage: "6 States",
    states: ["Kerala", "Tamil Nadu", "Telangana", "Karnataka", "Maharashtra", "Andhra Pradesh"],
    highlighted: false,
  },
  {
    name: "All India Cluster",
    price: 240000,
    priceSuffix: " + GST/yr",
    coverage: "20 States",
    states: ["North + South + West Bengal", "Assam + Central India"],
    highlighted: true,
  },
];

const formatPrice = (price: number, annual: boolean) => {
  const val = annual ? Math.round(price * 0.6) : price;
  return `₹${val.toLocaleString("en-IN")}`;
};

export const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-wide border border-border rounded-full px-4 py-1.5 text-muted-foreground mb-5">
            Transparent &amp; Flexible
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
            Simple pricing,
            <br />
            maximum value
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-8">
            No hidden fees. Choose what works for your business.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 border border-border rounded-full px-5 py-2.5">
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                annual ? "bg-primary" : "bg-border"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-card shadow transition-transform duration-200 ${
                  annual ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-sm font-medium text-foreground">Annual Discount</span>
            {annual && (
              <span className="text-xs font-semibold text-primary bg-primary/10 rounded-md px-2 py-0.5">
                %40
              </span>
            )}
          </div>
        </motion.div>

        {/* Grid with border system */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-border/50 rounded-2xl overflow-visible">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative p-7 lg:p-8 flex flex-col h-full transition-all duration-300 ${
                plan.highlighted
                  ? "bg-card shadow-soft-lg z-10 lg:-my-4 lg:rounded-2xl lg:border lg:border-border/60"
                  : "bg-background border-r border-border/40 last:border-r-0"
              }`}
            >
              {/* Plan name */}
              <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border border-border/60 rounded-md px-3 py-1 w-fit mb-6">
                {plan.name}
              </span>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold text-foreground leading-none">
                  {formatPrice(plan.price, annual)}
                </span>
              </div>
              <span className="text-sm text-muted-foreground mb-6">{plan.priceSuffix}</span>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full h-11 rounded-lg mb-7"
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => scrollTo("#contact")}
              >
                Get Started
              </Button>

              {/* Coverage */}
              <p className="text-sm font-semibold text-foreground mb-3">
                Coverage: {plan.coverage}
              </p>

              {/* States */}
              <ul className="space-y-2.5 flex-1">
                {plan.states.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5 stroke-[1.5]" />
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
