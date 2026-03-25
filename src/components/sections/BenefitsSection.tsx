import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

import fastSetupImg from "@/assets/benefit-fast-setup.jpg";
import compliantImg from "@/assets/benefit-compliant.jpg";
import supportImg from "@/assets/benefit-support.jpg";
import scaleImg from "@/assets/benefit-scale.jpg";

const benefits = [
  {
    image: fastSetupImg,
    title: "Fast Setup",
    description: "VPOB & GST registration done in 7–14 business days per state.",
  },
  {
    image: compliantImg,
    title: "100% Compliant",
    description: "Stay fully legal across all states — no penalties, no surprises.",
  },
  {
    image: supportImg,
    title: "24hr Support",
    description: "Dedicated compliance manager available when you need help.",
  },
  {
    image: scaleImg,
    title: "Scale Faster",
    description: "Unlock pan-India selling and recover lost TCS/TDS credits.",
  },
];

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
    <section className="relative py-16 lg:py-28 overflow-hidden bg-[hsl(210,20%,22%)]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            Why Sellers Choose FlashSpace
          </h2>
          <p className="text-white/60 text-base max-w-md mx-auto">
            Everything you need to sell compliantly across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="relative flex items-start justify-center gap-5 lg:gap-8 min-h-[380px] lg:min-h-[440px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((benefitIndex, position) => {
              const b = benefits[benefitIndex];
              const isActive = position === 1;

              return (
                <motion.div
                  key={b.title}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1 : 0.85,
                    y: isActive ? 0 : 30,
                    zIndex: isActive ? 10 : 1,
                    rotate: isActive ? 0 : position === 0 ? -3 : 3,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
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
                  {/* Stacked white panels behind */}
                  <div className="absolute -bottom-2 left-3 right-3 h-full rounded-2xl bg-white/20 -z-10 rotate-2" />
                  <div className="absolute -bottom-1 left-2 right-2 h-full rounded-2xl bg-white/10 -z-20 -rotate-1" />

                  {/* Main card */}
                  <div className="rounded-2xl bg-card overflow-hidden shadow-xl">
                    {/* Image */}
                    <div className={`overflow-hidden ${isActive ? "h-[220px] lg:h-[260px]" : "h-[180px] lg:h-[220px]"}`}>
                      <img
                        src={b.image}
                        alt={b.title}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
                      />
                    </div>

                    {/* Text content — only on active card */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 py-5"
                        >
                          <h3 className="font-bold text-foreground text-lg lg:text-xl mb-2">
                            {b.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {b.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
