import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Vikram P.", role: "Freelance Web Developer", text: "I've been using Flash Space for years now, and I can't imagine managing my workspace without it. From tracking expenses to creating budgets, it has simplified every aspect of my business life. Thank you for such an amazing tool!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format" },
  { name: "Sneha R.", role: "Manager at GlobeSync", text: "Flash Space has been a game-changer for our business. With its comprehensive workspace management tools, we've been able to streamline our processes and make more informed decisions. The customer support team is also top-notch.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format" },
  { name: "Amit K.", role: "CEO, Beta Technologies", text: "As someone who is new to scaling e-commerce, Flash Space has been an invaluable resource for me. Its compliance tools have helped me understand my requirements better and optimize operations for better returns. I couldn't be happier!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format" },
  { name: "Priya D.", role: "Founder, LuxeCart", text: "Flash Space set up our multi-state VPOB in under 10 days. Now we sell in 12 states with zero compliance issues. The team is incredibly responsive and professional.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format" },
  { name: "Rahul M.", role: "COO, UrbanBazaar", text: "Managing GST across multiple states felt impossible as a solo founder. Flash Space handled everything — VPOB, filings, TDS recovery. We scaled from 3 states to 18 in two months.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format" },
];

function getVisibleIndices(active: number) {
  const total = reviews.length;
  const left = (active - 1 + total) % total;
  const right = (active + 1) % total;
  return [left, active, right];
}

export const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const next = () => {
    stopTimer();
    setActiveIndex((i) => (i + 1) % reviews.length);
    startTimer();
  };

  const prev = () => {
    stopTimer();
    setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
    startTimer();
  };

  const visible = getVisibleIndices(activeIndex);

  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      stopTimer();
      if (diff < 0) setActiveIndex((p) => (p + 1) % reviews.length);
      else setActiveIndex((p) => (p - 1 + reviews.length) % reviews.length);
      startTimer();
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            What Our Clients Are Saying
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Our users love how Flash Space simplifies their processes and streamlines operations.
          </p>
        </div>

        <div
          className="relative flex items-center justify-center gap-6 lg:gap-10 min-h-[300px] lg:min-h-[340px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((reviewIndex, position) => {
              const r = reviews[reviewIndex];
              const isActive = position === 1;

              return (
                <motion.div
                  key={r.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.85,
                    y: isActive ? 0 : 12,
                    zIndex: isActive ? 10 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`
                    flex-shrink-0
                    ${isActive
                      ? "w-[320px] sm:w-[400px] lg:w-[480px]"
                      : "w-[200px] sm:w-[240px] lg:w-[280px] hidden sm:block"
                    }
                  `}
                >
                  <div className="bg-card rounded-2xl border border-border/40 p-6 lg:p-8 shadow-sm text-center">
                    <img
                      src={r.image}
                      alt={r.name}
                      className={`rounded-full object-cover mx-auto mb-3 ${
                        isActive ? "w-14 h-14" : "w-10 h-10"
                      }`}
                    />
                    <p className={`text-muted-foreground leading-relaxed mb-4 ${
                      isActive ? "text-base" : "text-xs line-clamp-3"
                    }`}>
                      "{r.text}"
                    </p>
                    <p className={`font-semibold text-foreground ${isActive ? "text-sm" : "text-xs"}`}>
                      {r.name}
                    </p>
                    {isActive && (
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
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
                onClick={() => { stopTimer(); setActiveIndex(i); startTimer(); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-primary" : "bg-border"}`}
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
