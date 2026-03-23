import { motion } from "framer-motion";
import heroCoworking from "@/assets/hero-coworking.jpg";

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Tell us about your e-commerce idea. We assess your needs and recommend the right licence and jurisdiction.",
    details: ["Product type & target market", "Mainland vs Free Zone analysis", "Budget & timeline planning"],
  },
  {
    step: "02",
    title: "Company Registration",
    desc: "We handle trade licence, legal documentation, and government approvals — you focus on your products.",
    details: ["Trade licence application", "MOA & shareholder structure", "E-commerce activity codes"],
  },
  {
    step: "03",
    title: "Payments & Banking",
    desc: "Corporate bank account and payment gateway setup so you can accept money from customers worldwide.",
    details: ["Corporate bank account opening", "Payment gateway integration", "Multi-currency support"],
  },
  {
    step: "04",
    title: "Launch & Sell",
    desc: "VAT registration, logistics setup, and ongoing support — your store is live and compliant.",
    details: ["VAT registration & filing", "Logistics partner connection", "Ongoing compliance support"],
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="py-20 lg:py-28">
            <div className="lg:sticky lg:top-24">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-sm text-secondary/80 mb-10"
              >
                <span className="text-secondary">+</span> How It Works
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={heroCoworking}
                  alt="E-commerce business setup in the UAE"
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-secondary leading-[1.15] mb-6 tracking-tight">
                From idea to<br />live store.
              </h2>
              <p className="text-secondary/60 text-base leading-relaxed max-w-md">
                A clear, four-step process to get your e-commerce business registered, funded, and selling.
              </p>
            </motion.div>

            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`py-8 ${i < steps.length - 1 ? "border-b border-secondary/15" : ""}`}
              >
                <div className="flex items-start gap-6">
                  <span className="text-secondary font-medium text-base shrink-0 pt-0.5">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-medium text-secondary mb-2">{item.title}</h3>
                    <p className="text-secondary/80 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <ul className="space-y-1.5">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-secondary/70 text-sm">
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
      </div>
    </section>
  );
};
