import { motion } from "framer-motion";
import { Users, MapPin, FileCheck, Headphones } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "2,000+ Sellers Onboarded",
    description: "Trusted by e-commerce businesses of every size across India.",
  },
  {
    icon: MapPin,
    title: "28+ States Covered",
    description: "VPOB addresses available in every major Indian state and UT.",
  },
  {
    icon: FileCheck,
    title: "End-to-End Compliance",
    description: "From registration to filings — we handle the full lifecycle.",
  },
  {
    icon: Headphones,
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
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Why FlashSpace?
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            We're not just another service provider — we're your compliance partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border/40 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
