import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";

const painPoints = [
  { pain: "Confusing UAE regulations for online businesses", solution: "We decode every rule — mainland, free zone, e-commerce licences — so you don't have to." },
  { pain: "Payment gateway approval takes weeks or gets rejected", solution: "We pre-qualify your application and liaise directly with gateway providers for fast approval." },
  { pain: "Bank account delays stall your launch", solution: "Our banking relationships and pre-prepared documentation cut opening times dramatically." },
  { pain: "VAT compliance is complex and risky", solution: "We register you, set up filing, and keep you compliant — penalties avoided from day one." },
  { pain: "Logistics & fulfilment are hard to figure out alone", solution: "We connect you with vetted warehousing and shipping partners across the GCC." },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="text-primary">+</span> Why You Need Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Launching e-commerce in the UAE<br />is harder than it looks
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most founders hit the same walls. We've already solved them.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-5">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="grid md:grid-cols-2 gap-4 md:gap-8 bg-card rounded-2xl border border-border/50 p-6 lg:p-8"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-destructive/60 mb-1">The Problem</p>
                  <p className="text-foreground font-medium text-[15px]">{item.pain}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/60 mb-1">Our Solution</p>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
