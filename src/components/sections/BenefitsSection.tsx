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
    <section className="relative py-16 lg:py-28 overflow-hidden bg-[hsl(210,25%,25%)]">
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
          <p className="text-white/50 text-base max-w-md mx-auto">
            Everything you need to sell compliantly across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="relative flex items-start justify-center gap-6 lg:gap-10 min-h-[380px] lg:min-h-[480px] pt-4"
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
                    rotate: isActive ? 0 : position === 0 ? -5 : 5,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  onMouseEnter={() => handleHover(benefitIndex)}
                  onMouseLeave={handleLeave}
                  className={`
                    relative cursor-pointer flex-shrink-0
                    ${isActive
                      ? "w-[260px] sm:w-[280px] lg:w-[300px]"
                      : "w-[200px] sm:w-[220px] lg:w-[240px] hidden sm:block"
                    }
                  `}
                >
                  {/* Tilted white panel behind (visible on all cards) */}
                  <div
                    className="absolute rounded-xl bg-white/80 shadow-md"
                    style={{
                      inset: "-6px",
                      transform: isActive ? "rotate(3deg)" : "rotate(4deg)",
                      zIndex: -1,
                    }}
                  />

                  {/* Main white card */}
                  <div className="relative rounded-xl bg-white shadow-2xl overflow-hidden">
                    {/* Padded image area (polaroid frame) */}
                    <div className="p-2.5">
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={b.image}
                          alt={b.title}
                          loading="lazy"
                          width={512}
                          height={512}
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                    </div>

                    {/* Text — only on active card */}
                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pt-2 pb-5"
                        >
                          <h3 className="font-bold text-foreground text-lg lg:text-xl mb-1.5">
                            {b.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {b.description}
                          </p>
                        </motion.div>
                      ) : (
                        <div className="h-2.5" />
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
