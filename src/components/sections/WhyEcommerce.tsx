import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Award,
  HeadphonesIcon,
} from "lucide-react";

const painPoints = [
  { pain: "Confusing UAE regulations for online businesses", solution: "We decode every rule — mainland, free zone, e-commerce licences — so you don't have to." },
  { pain: "Payment gateway approval takes weeks or gets rejected", solution: "We pre-qualify your application and liaise directly with gateway providers for fast approval." },
  { pain: "Bank account delays stall your launch", solution: "Our banking relationships and pre-prepared documentation cut opening times dramatically." },
  { pain: "VAT compliance is complex and risky", solution: "We register you, set up filing, and keep you compliant — penalties avoided from day one." },
  { pain: "Logistics & fulfilment are hard to figure out alone", solution: "We connect you with vetted warehousing and shipping partners across the GCC." },
];

const advantages = [
  { icon: Zap, title: "Launch in Under 3 Weeks", description: "While others take months, our streamlined process gets your e-commerce business licensed and selling fast." },
  { icon: Clock, title: "One Team, Every Service", description: "No juggling multiple agencies. Licence, bank, payments, VAT, logistics — all handled under one roof." },
  { icon: Users, title: "E-commerce Specialists", description: "Our advisors specialise in online retail. We understand activity codes, payment flows, and platform integrations." },
  { icon: Award, title: "2,000+ Businesses Launched", description: "We've helped thousands of founders navigate UAE business setup. Your success is backed by proven expertise." },
  { icon: HeadphonesIcon, title: "Ongoing Support Post-Launch", description: "We don't disappear after setup. Renewals, compliance, scaling — we're here for the long run." },
];

export const WhyEcommerce = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Pain Points */}
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

        <div className="max-w-4xl mx-auto space-y-5 mb-24">
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

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="text-primary">+</span> What We Bring to the Table
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Why e-commerce founders<br />choose Flash Space
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card rounded-2xl border border-border/50 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
