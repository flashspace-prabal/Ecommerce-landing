import { motion } from "framer-motion";

const reviews = [
  { name: "Vikram P.", role: "Freelance Web Developer", text: "I've Been Using Advisory For Years Now, And I Can't Imagine Managing My Finances Without It. From Tracking Expenses To Creating Budgets, It Has Simplified Every Aspect Of My Financial Life. Thank You For Such An Amazing Tool!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  { name: "Sneha R.", role: "Manager at GlobeSync", text: "Advisory Has Been A Game-Changer For Our Business. With Its Comprehensive Financial Management Tools, We've Been Able To Streamline Our Processes And Make More Informed Decisions. The Customer Support Team Is Also Top-Notch.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format" },
  { name: "Amit K.", role: "CEO, Beta Technologies", text: "As Someone Who Is New To Investing, Advisory Has Been An Invaluable Resource For Me. Its Investment Management Tools Have Helped Me Understand My Portfolio Better And Optimize My Investments For Better Returns. I Couldn't Be Happier With The Results!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
];

export const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Our users love how Flash Space simplifies their processes and streamlines operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border/40 p-6 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{r.text}</p>
              <div className="flex items-center gap-3">
                <img src={r.image} alt={r.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
