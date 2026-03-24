import { motion } from "framer-motion";
import { Star } from "lucide-react";

const previews = [
  {
    quote: "Flash Space set up our multi-state VPOB in under 10 days. Now we sell in 12 states with zero compliance issues.",
    name: "Priya Sharma",
    title: "Founder, LuxeCart",
  },
  {
    quote: "Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 states to 18 in two months.",
    name: "Rahul Mehta",
    title: "CEO, UrbanBazaar",
  },
  {
    quote: "They fixed our GST registration and set us up properly so listing suspensions never happened again.",
    name: "Anita Desai",
    title: "Founder, CraftNest India",
  },
];

export const TestimonialPreview = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">
            Trusted by Sellers Across India
          </h2>
          <p className="text-muted-foreground text-sm">See what our clients are saying.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border/40 p-6 flex flex-col justify-between shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-5 flex-1">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
