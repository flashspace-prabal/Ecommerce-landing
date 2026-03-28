import { motion } from "framer-motion";
import rocketImg from "@/assets/benefit-rocket.png";
import savingsImg from "@/assets/benefit-savings.png";
import indiaImg from "@/assets/benefit-india.png";

const benefits = [
  {
    image: rocketImg,
    title: "Instant Market Entry",
    description: "Get your virtual office and GST registration in record time.",
    bg: "from-[#fef8c3] to-[#35503f]/20",
  },
  {
    image: savingsImg,
    title: "90% Cost Reduction",
    description: "Eliminate physical office overheads with our streamlined virtual compliance.",
    bg: "from-[#35503f]/10 to-[#fef8c3]",
  },
  {
    image: indiaImg,
    title: "All India Reach",
    description: "Store inventory in any state and sell across every pincode in India.",
    bg: "from-[#fef8c3] via-[#35503f]/10 to-[#fef8c3]",
  },
];

export const BenefitsGrid = () => {
  return (
    <section className="bg-card py-10 border-b border-border">
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
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
            >
              {/* Full card gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${b.bg}`} />

              {/* Illustration fills the full card */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </motion.div>

              {/* Glass content — pinned to bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 m-3 rounded-xl p-4"
                style={{
                  background: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.45)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
              >
                <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                  {b.title}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};