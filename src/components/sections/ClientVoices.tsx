import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const testimonials = [
  {
    quote: "We were stuck for weeks trying to get our payment gateway approved.",
    quoteHighlight: " Flash Space stepped in, sorted the paperwork, and we were processing orders within 10 days. Incredible.",
    name: "Priya Sharma",
    title: "Founder, LuxeCart",
  },
  {
    quote: "Setting up e-commerce in the UAE seemed impossibly complicated.",
    quoteHighlight: " Flash Space made it feel effortless — licence, bank account, payment gateway, all handled. We launched in under three weeks.",
    name: "Marcus Henriksen",
    title: "CEO, Nordic Goods MENA",
  },
  {
    quote: "As a first-time founder, I didn't know where to start.",
    quoteHighlight: " Their team walked me through every step — from choosing the right free zone to connecting with a logistics partner. I couldn't have done it alone.",
    name: "Fatima Al-Rashidi",
    title: "Founder, Souq Studio",
  },
];

export const ClientVoices = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-border/40" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-border/40" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l border-border/40" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-border/40" />

          <div className="px-10 lg:px-16 pt-16 pb-12 lg:pt-20 lg:pb-16 bg-background">
            <p className="text-sm mb-10 flex items-center gap-2 text-primary">
              <span>+</span> What our clients say
            </p>

            <div className="min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <blockquote className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.25] tracking-tight font-normal">
                    <span className="text-primary/50">"{testimonials[index].quote}</span>
                    <span className="text-primary">{testimonials[index].quoteHighlight}"</span>
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-end justify-between mt-12">
              <div>
                <p className="text-base font-medium text-primary">{testimonials[index].name}</p>
                <p className="text-sm mt-0.5 text-primary/70">{testimonials[index].title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center transition-colors hover:bg-accent text-primary" aria-label="Previous">
                  <ChevronsLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center transition-colors hover:bg-accent text-primary" aria-label="Next">
                  <ChevronsRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
