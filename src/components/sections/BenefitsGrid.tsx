import { motion } from "framer-motion";
import rocketImg from "@/assets/benefit-rocket.svg";
import savingsImg from "@/assets/benefit-savings.svg";
import indiaImg from "@/assets/benefit-india.svg";

const benefits = [
  {
    image: rocketImg,
    title: "Instant Market Entry",
    description:
      "Get your virtual office and GST registration in record time.",
  },
  {
    image: savingsImg,
    title: "90% Cost Reduction",
    description:
      "Eliminate physical office overheads with our streamlined virtual compliance.",
  },
  {
    image: indiaImg,
    title: "All India Reach",
    description:
      "Store inventory in any state and sell across every pincode in India.",
  },
];

export const BenefitsGrid = () => {
  return (
    <section className="bg-card py-16 lg:py-24 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Maximize Your E-commerce Growth
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            We handle the complexity so you can focus on the sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg aspect-square flex flex-col items-center justify-center"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                <img src={b.image} alt={b.title} className="h-full w-full object-contain" loading="lazy" width={80} height={80} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
