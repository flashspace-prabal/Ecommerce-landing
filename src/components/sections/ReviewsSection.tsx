import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Vikram P.", role: "Freelance Web Developer", text: "I've been using Flash Space for years now, and I can't imagine managing my workspace without it. From tracking expenses to creating budgets, it has simplified every aspect of my business life. Thank you for such an amazing tool!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  { name: "Sneha R.", role: "Manager at GlobeSync", text: "Flash Space has been a game-changer for our business. With its comprehensive workspace management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format" },
  { name: "Amit K.", role: "CEO, Beta Technologies", text: "As someone who is new to scaling e-commerce, Flash Space has been an invaluable resource for me. Its compliance tools have helped me understand my requirements better and optimize operations for better returns. I couldn't be happier!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
  { name: "Priya D.", role: "Founder, LuxeCart", text: "Flash Space set up our multi-state VPOB in under 10 days. Now we sell in 12 states with zero compliance issues. The team is incredibly responsive and professional.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format" },
  { name: "Rahul M.", role: "COO, UrbanBazaar", text: "Managing GST across multiple states felt impossible as a solo founder. Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 states to 18 in two months.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
];

export const ReviewsSection = () => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  }, []);

  const prev = () => {
    setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Our users love how Flash Space simplifies their processes and streamlines operations.
          </p>
        </div>

        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-card rounded-2xl border border-border/40 p-8 shadow-sm text-center"
            >
              <img
                src={reviews[index].image}
                alt={reviews[index].name}
                className="w-14 h-14 rounded-full object-cover mx-auto mb-4"
              />
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                "{reviews[index].text}"
              </p>
              <p className="text-sm font-semibold text-foreground">{reviews[index].name}</p>
              <p className="text-xs text-muted-foreground">{reviews[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground text-muted-foreground"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-border"}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground text-muted-foreground"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
