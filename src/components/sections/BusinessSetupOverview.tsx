import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, Globe, Ship, Stamp } from "lucide-react";

const setupTypes = [
  {
    icon: Landmark,
    title: "Mainland Setup",
    description: "Establish your business in the UAE mainland with full market access and government-backed licensing.",
    href: "#",
  },
  {
    icon: Globe,
    title: "Free Zone Setup",
    description: "100% foreign ownership, zero tax, and streamlined setup in any of the 40+ UAE free zones.",
    href: "#",
  },
  {
    icon: Ship,
    title: "Offshore Setup",
    description: "Register an offshore company for asset protection, international trading, and holding structures.",
    href: "#",
  },
  {
    icon: Stamp,
    title: "Visa Services",
    description: "Residence visas, investor visas, golden visas, and family sponsorship — handled end-to-end.",
    href: "#",
  },
];

export const BusinessSetupOverview = () => {
  return (
    <section id="business-setup" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Business Setup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Choose the right setup for your business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether it's mainland, free zone, or offshore — we guide you through every step of UAE company formation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {setupTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card rounded-2xl border border-border/50 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 px-0 group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
