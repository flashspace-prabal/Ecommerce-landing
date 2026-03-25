import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24hr Support",
    description:
      "Dedicated compliance manager available when you need help.",
  },
  {
    icon: TrendingUp,
    title: "Scale Faster",
    description:
      "Unlock pan-India selling and recover lost TCS/TDS credits.",
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description:
      "VPOB & GST registration done in 7–14 business days per state.",
  },
];

export const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const handleFocus = (idx: number) => {
    stopTimer();
    setActiveIndex(idx);
  };

  const handleLeave = () => {
    startTimer();
  };

  // Mobile swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      stopTimer();
      if (diff < 0)
        setActiveIndex((prev) => (prev + 1) % benefits.length);
      else
        setActiveIndex(
          (prev) => (prev - 1 + benefits.length) % benefits.length
        );
      startTimer();
    }
  };

  return (
    <section
      className="relative py-16 lg:py-28 overflow-hidden"
      style={{ background: "#FAF9F7" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Why Sellers Choose FlashSpace
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto italic">
            Everything you need to sell compliantly across India.
          </p>
        </motion.div>

        {/* Cards row */}
        <div
          className="relative flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 min-h-[320px] lg:min-h-[380px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseLeave={handleLeave}
        >
          {benefits.map((b, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={b.title}
                onMouseEnter={() => handleFocus(idx)}
                className="relative cursor-pointer"
                animate={{
                  scale: isActive ? 1 : 0.85,
                  y: isActive ? 0 : 16,
                  zIndex: isActive ? 10 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26,
                }}
              >
                {/* Rear panel (white description panel) */}
                <motion.div
                  className="absolute rounded-2xl bg-card border border-border/20"
                  animate={{
                    width: isActive ? "100%" : "85%",
                    height: isActive ? "100%" : "70%",
                    opacity: isActive ? 1 : 0.5,
                    x: isActive ? 10 : 4,
                    y: isActive ? 12 : 6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                  }}
                  style={{
                    boxShadow: isActive
                      ? "0 8px 32px -8px hsl(var(--foreground) / 0.10)"
                      : "0 4px 16px -6px hsl(var(--foreground) / 0.06)",
                    minHeight: isActive ? 260 : 140,
                  }}
                >
                  {/* Description text — only on active rear panel */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                        className="absolute bottom-0 left-0 right-0 p-5 pt-0"
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {b.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Front panel (icon + title) */}
                <motion.div
                  className="relative rounded-2xl bg-card border border-border/30 flex flex-col items-center text-center"
                  animate={{
                    width: isActive ? 240 : 160,
                    minHeight: isActive ? 200 : 140,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                  }}
                  style={{
                    boxShadow: isActive
                      ? "0 12px 40px -10px hsl(var(--foreground) / 0.14)"
                      : "0 6px 20px -8px hsl(var(--foreground) / 0.08)",
                  }}
                >
                  <div className="p-6 lg:p-8 flex flex-col items-center">
                    {/* Icon holder */}
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-md">
                      <b.icon className="w-6 h-6 text-secondary" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold text-foreground tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-lg lg:text-xl"
                          : "text-sm lg:text-base"
                      }`}
                    >
                      {b.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {benefits.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopTimer();
                setActiveIndex(i);
                startTimer();
              }}
              className={`
                rounded-full transition-all duration-300
                ${
                  activeIndex === i
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-primary/25 hover:bg-primary/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
