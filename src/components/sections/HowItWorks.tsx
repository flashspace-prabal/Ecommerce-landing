import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Tell us about your e-commerce idea. We assess your needs and recommend the right licence and jurisdiction.",
    details: ["Product type & target market", "Mainland vs Free Zone analysis", "Budget & timeline planning"],
  },
  {
    step: "02",
    title: "Company Registration",
    description: "We handle trade licence, legal documentation, and government approvals — you focus on your products.",
    details: ["Trade licence application", "MOA & shareholder structure", "E-commerce activity codes"],
  },
  {
    step: "03",
    title: "Payments & Banking",
    description: "Corporate bank account and payment gateway setup so you can accept money from customers worldwide.",
    details: ["Corporate bank account opening", "Payment gateway integration", "Multi-currency support"],
  },
  {
    step: "04",
    title: "Launch & Sell",
    description: "VAT registration, logistics setup, and ongoing support — your store is live and compliant.",
    details: ["VAT registration & filing", "Logistics partner connection", "Ongoing compliance support"],
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm text-secondary/70 mb-4">
            <span className="text-secondary">+</span> How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] tracking-tight mb-5">
            From idea to live store
          </h2>
          <p className="text-secondary/60 text-base leading-relaxed max-w-xl mx-auto">
            A clear, four-step process to get your e-commerce business registered, funded, and selling.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl border border-secondary/10 bg-white/[0.06] backdrop-blur-sm p-8 lg:p-10 hover:border-secondary/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-secondary/70 text-[15px] leading-relaxed mb-5">{item.description}</p>
                  <ul className="grid sm:grid-cols-3 gap-2">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-secondary/55 text-sm">
                        <span className="w-1 h-1 rounded-full bg-secondary/30 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
