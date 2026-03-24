import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const points = [
  {
    number: "01",
    title: "2,000+ Sellers Onboarded",
    description: "Trusted by e-commerce businesses of every size across India.",
  },
  {
    number: "02",
    title: "28+ States Covered",
    description: "VPOB addresses available in every major Indian state and UT.",
  },
  {
    number: "03",
    title: "End-to-End Compliance",
    description: "From registration to filings — we handle the full lifecycle.",
  },
  {
    number: "04",
    title: "Dedicated Support",
    description: "A named compliance manager for your account, not a ticket queue.",
  },
];

export const WhyFlashSpace = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Why Sellers Choose FlashSpace
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            We're not just another service provider — we're your compliance partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x-0 sm:divide-x divide-border/60">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-6 py-8 flex flex-col justify-between border-b sm:border-b-0 border-border/60 last:border-b-0"
            >
              <div>
                <span className="text-sm text-muted-foreground mb-3 block">{p.number}</span>
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
              <div className="mt-8">
                <button className="w-10 h-10 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
