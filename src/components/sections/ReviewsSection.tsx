import { motion } from "framer-motion";

const reviews = [
  { name: "Vikram P.", handle: "@vikramp", text: "Impressed by the professionalism and attention to detail.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  { name: "Sneha R.", handle: "@snehar", text: "A seamless experience from start to finish. Highly recommend!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format" },
  { name: "Amit K.", handle: "@amitk", text: "Reliable and trustworthy. Made our compliance so much easier!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
  { name: "Deepa M.", handle: "@deepam", text: "Great support and fast turnaround. Highly recommended for Amazon sellers.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format" },
  { name: "Karan S.", handle: "@karans", text: "Recovered ₹1.2L in lost TCS credits in the first quarter itself.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format" },
  { name: "Meera J.", handle: "@meeraj", text: "Professional, transparent, and reliable. Our go-to compliance partner.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format" },
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
          <p className="text-sm text-muted-foreground mb-2">Testimonial</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Transformative Client Experiences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col"
            >
              {/* Speech bubble */}
              <div className="bg-card rounded-2xl border border-border/40 p-6 shadow-sm flex-1 relative mb-4">
                <span className="text-4xl leading-none text-muted-foreground/30 font-serif block mb-3">"</span>
                <p className="text-sm text-foreground leading-relaxed">{r.text}</p>
              </div>
              {/* Avatar + name */}
              <div className="flex items-center gap-3 pl-2">
                <img src={r.image} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
