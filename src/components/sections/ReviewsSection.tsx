import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Vikram P.", rating: 5, text: "Seamless VPOB setup. We were selling in 8 new states within two weeks." },
  { name: "Sneha R.", rating: 5, text: "Their compliance team saved us from a massive GST penalty. Worth every rupee." },
  { name: "Amit K.", rating: 5, text: "Finally a service that actually understands e-commerce seller problems." },
  { name: "Deepa M.", rating: 4, text: "Great support and fast turnaround. Highly recommended for Amazon sellers." },
  { name: "Karan S.", rating: 5, text: "Recovered ₹1.2L in lost TCS credits in the first quarter itself." },
  { name: "Meera J.", rating: 5, text: "Professional, transparent, and reliable. Our go-to compliance partner." },
];

export const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-2">
            What Sellers Say
          </h2>
          <p className="text-muted-foreground text-sm">Real reviews from real businesses.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card rounded-xl border border-border/40 p-5 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${j < r.rating ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-3">"{r.text}"</p>
              <p className="text-xs font-semibold text-muted-foreground">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
