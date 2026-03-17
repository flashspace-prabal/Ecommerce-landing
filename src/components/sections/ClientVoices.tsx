import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Flash Space has transformed the way we operate. Their administrative support has freed up our team to focus on our core business, and their responsiveness is unmatched. I can't imagine running our operations without them!",
    name: "Arjun Mehta",
    title: "Founder, NovaTech Solutions",
  },
  {
    quote: "We explored three consultancies before choosing Flash Space. Their transparent pricing and hands-on support were unmatched. Truly a five-star experience from start to finish.",
    name: "Sarah Al-Khalifa",
    title: "CEO, Bloom Interiors",
  },
  {
    quote: "As a solo founder relocating from London, I needed a partner I could trust. Flash Space guided me through every step — visa, license, office, banking. Exceptional service.",
    name: "James Thornton",
    title: "Director, Thornton Capital",
  },
];

export const ClientVoices = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 lg:py-28" style={{ background: "#FDFBF7" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-border/40 bg-background p-10 lg:p-16 shadow-sm">
          {/* Corner marks */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-foreground/20 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-foreground/20 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-foreground/20 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-foreground/20 rounded-br-2xl" />

          {/* Label */}
          <p className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
            <span className="text-foreground">+</span> What our clients say
          </p>

          {/* Quote */}
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <blockquote className="text-2xl sm:text-3xl lg:text-[38px] font-medium text-foreground leading-[1.3] tracking-tight">
                  <span className="text-muted-foreground/50">"</span>
                  <span className="text-muted-foreground/50">
                    {testimonials[index].quote.split(".")[0]}.
                  </span>{" "}
                  {testimonials[index].quote.substring(testimonials[index].quote.indexOf(".") + 2)}
                  <span className="text-muted-foreground/50">"</span>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer: author left, arrows right */}
          <div className="flex items-end justify-between mt-10">
            <div>
              <p className="font-semibold text-foreground text-base">
                {testimonials[index].name}
              </p>
              <p className="text-muted-foreground text-sm mt-0.5">
                {testimonials[index].title}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground text-muted-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
