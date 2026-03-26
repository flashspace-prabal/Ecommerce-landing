import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fastSetupImg from "@/assets/benefit-fast-setup.jpg";
import compliantImg from "@/assets/benefit-compliant.jpg";
import supportImg from "@/assets/benefit-support.jpg";
import scaleImg from "@/assets/benefit-scale.jpg";

const benefits = [
  {
    image: fastSetupImg,
    title: "Fast Setup",
    description:
      "VPOB & GST registration done in 7–14 business days per state. We handle all paperwork, government filings, and documentation so you can focus on growing your business.",
  },
  {
    image: compliantImg,
    title: "100% Compliant",
    description:
      "Stay fully legal across all states — no penalties, no surprises. Our compliance experts ensure every registration meets the latest regulatory requirements.",
  },
  {
    image: supportImg,
    title: "24hr Support",
    description:
      "Dedicated compliance manager available whenever you need help. Get instant answers on GST queries, filing deadlines, and state-specific requirements round the clock.",
  },
  {
    image: scaleImg,
    title: "Scale Faster",
    description:
      "Unlock pan-India selling and recover lost TCS/TDS credits. Expand to every major marketplace across all 28 states without operational bottlenecks.",
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
    }, 5000);
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
    <section className="relative py-16 lg:py-28 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
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
          className="relative flex items-center justify-center gap-8 lg:gap-14 min-h-[400px] lg:min-h-[500px]"
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    scale: isActive ? 1 : 0.85,
                    y: isActive ? 0 : 16,
                    zIndex: isActive ? 10 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onMouseEnter={() => handleHover(benefitIndex)}
                  onMouseLeave={handleLeave}
                  className={`
                    relative cursor-pointer flex-shrink-0
                    ${isActive
                      ? "w-[300px] sm:w-[340px] lg:w-[380px]"
                      : "w-[220px] sm:w-[250px] lg:w-[280px] hidden sm:block"
                    }
                  `}
                >
                  {/* Card — no border radius */}
                  <div className="relative bg-white shadow-xl overflow-hidden">
                    <div className="p-3 pb-0">
                      <div className="overflow-hidden">
                        <img
                          src={b.image}
                          alt={b.title}
                          loading="lazy"
                          width={640}
                          height={640}
                          className="w-full aspect-square object-cover transition-transform duration-700 ease-out"
                          style={{ transform: isActive ? "scale(1.04)" : "scale(1)" }}
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
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="px-5 pt-4 pb-5"
                        >
                          <h3 className="font-bold text-foreground text-lg lg:text-xl mb-1.5">
                            {b.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {b.description}
                          </p>
                        </motion.div>
                      ) : (
                        <div className="h-3" />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
