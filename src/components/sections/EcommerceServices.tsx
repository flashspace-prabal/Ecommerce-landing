import { motion } from "framer-motion";
import {
  Building2,
  CreditCard,
  Landmark,
  FileText,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Setup",
    subtitle: "Mainland / Free Zone",
    description: "Full company registration — choose between mainland for local market access or free zones for 100% ownership and zero tax.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Setup",
    subtitle: "Stripe, Telr, PayTabs & more",
    description: "We handle the entire payment gateway application process so you can accept online payments from day one.",
  },
  {
    icon: Landmark,
    title: "Bank Account Opening",
    subtitle: "UAE corporate accounts",
    description: "Guided corporate bank account opening with leading UAE banks — documentation, meetings, and approvals handled end to end.",
  },
  {
    icon: FileText,
    title: "VAT Registration",
    subtitle: "Tax compliance sorted",
    description: "Mandatory VAT registration, filing setup, and ongoing compliance so your e-commerce store stays on the right side of the law.",
  },
  {
    icon: Truck,
    title: "Logistics & Shipping",
    subtitle: "Fulfilment guidance",
    description: "Connect with trusted logistics partners for warehousing, last-mile delivery, and cross-border shipping across the GCC.",
  },
];

export const EcommerceServices = () => {
  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="text-primary">+</span> What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-5 tracking-tight">
            Everything your e-commerce<br />business needs to launch
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            One partner. Every service. From licence to logistics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-card rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-xs font-medium text-primary/70 mb-3 uppercase tracking-wider">{service.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
