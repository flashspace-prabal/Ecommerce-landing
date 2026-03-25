import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const benefits = [
  {
    icon: Zap,
    title: "Fast Setup",
    description: "VPOB & GST registration done in 7–14 business days per state.",
  },
  {
    icon: Shield,
    title: "100% Compliant",
    description: "Stay fully legal across all states — no penalties, no surprises.",
  },
  {
    icon: Clock,
    title: "24hr Support",
    description: "Dedicated compliance manager available when you need help.",
  },
  {
    icon: TrendingUp,
    title: "Scale Faster",
    description: "Unlock pan-India selling and recover lost TCS/TDS credits.",
  },
];

// We cycle through 4 items but always show 3 visible cards
function getVisibleIndices(active: number) {
  const total = benefits.length;
  const left = (active - 1 + total) % total;
  const right = (active + 1) % total;
  return [left, active, right];
}

export const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isMobile = useIsMobile();

  const effectiveActive = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const visible = getVisibleIndices(effectiveActive);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3500);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const handleHover = (idx: number) => {
    stopTimer();
    setHoveredIndex(idx);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
    setActiveIndex(effectiveActive);
    startTimer();
  };

  // Mobile touch/swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      stopTimer();
      if (diff < 0) setActiveIndex((prev) => (prev + 1) % benefits.length);
      else setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
      startTimer();
    }
  };

  return (
    <section className="relative py-16 lg:py-28 overflow-hidden" style={{ background: "hsl(48, 40%, 96%)" }}>
      {/* Watermark background pattern */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -30deg,
            transparent,
            transparent 80px,
            transparent 80px
          )`,
        }}
      >
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 overflow-hidden"
          style={{
            fontSize: "3.5rem",
            fontWeight: 900,
            letterSpacing: "0.15em",
            lineHeight: 1.2,
            color: "hsl(var(--primary))",
            transform: "rotate(-15deg) scale(1.5)",
            transformOrigin: "center",
            whiteSpace: "nowrap",
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i}>FLASHSPACE</span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-3">
            Why Sellers Choose FlashSpace
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Everything you need to sell compliantly across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="relative flex items-center justify-center gap-4 lg:gap-6 min-h-[340px] lg:min-h-[380px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((benefitIndex, position) => {
              const b = benefits[benefitIndex];
              const isActive = position === 1; // middle card is active

              return (
                <motion.div
                  key={b.title}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1 : 0.88,
                    y: isActive ? 0 : 24,
                    zIndex: isActive ? 10 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28, duration: 0.5 }}
                  onMouseEnter={() => handleHover(benefitIndex)}
                  onMouseLeave={handleLeave}
                  className={`
                    relative cursor-pointer flex-shrink-0
                    ${isActive
                      ? "w-[280px] sm:w-[300px] lg:w-[320px]"
                      : "w-[200px] sm:w-[220px] lg:w-[240px] hidden sm:block"
                    }
                  `}
                >
                  {/* White base panel */}
                  <div
                    className={`
                      rounded-2xl bg-card shadow-lg border border-border/30
                      transition-shadow duration-300
                      ${isActive ? "shadow-xl" : "shadow-md"}
                    `}
                    style={{ minHeight: isActive ? 280 : 180 }}
                  >
                    {/* Stacked panel effect behind */}
                    <div className="absolute -bottom-2 left-3 right-3 h-4 rounded-b-2xl bg-card/60 border border-border/20 -z-10" />
                    <div className="absolute -bottom-4 left-6 right-6 h-4 rounded-b-2xl bg-card/30 border border-border/10 -z-20" />

                    <div className="p-6 lg:p-8 flex flex-col items-center text-center">
                      {/* Dark icon holder */}
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-md">
                        <b.icon className="w-6 h-6 text-secondary" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-bold text-foreground tracking-tight mb-2 transition-all duration-300 ${
                          isActive ? "text-xl lg:text-2xl" : "text-sm lg:text-base"
                        }`}
                      >
                        {b.title}
                      </h3>

                      {/* Description — only on active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-muted-foreground leading-relaxed max-w-[250px]"
                          >
                            {b.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {benefits.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopTimer();
                setActiveIndex(i);
                setHoveredIndex(null);
                startTimer();
              }}
              className={`
                rounded-full transition-all duration-300
                ${effectiveActive === i
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
