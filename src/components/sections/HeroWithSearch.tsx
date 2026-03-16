import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Briefcase,
  Compass,
  FileText,
  CreditCard,
  Landmark,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBg from "@/assets/hero-dubai-skyline.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const jurisdictions = ["Mainland", "Free Zone", "Offshore", "KSA", "Qatar"];

const steps = [
  { icon: PhoneCall, title: "Free Consultation", description: "Speak with our experts at no cost" },
  { icon: Briefcase, title: "Business Setup Advisory", description: "Tailored guidance for your venture" },
  { icon: Compass, title: "Right Jurisdiction Selection", description: "Mainland, Free Zone, or Offshore" },
  { icon: FileText, title: "Trade License Application", description: "Swift processing & approvals" },
  { icon: CreditCard, title: "Visa & Emirates ID", description: "Residency visa initiation" },
  { icon: Landmark, title: "Corporate Bank Account", description: "Assisted bank account opening" },
];

export const HeroWithSearch = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dubai skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(142,20%,15%)]/70 via-[hsl(142,20%,15%)]/40 to-[hsl(142,20%,15%)]/80" />
      </div>

      {/* Hero content - left aligned */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 lg:pt-40 pb-16">
        <div className="container mx-auto">
          <div className="max-w-[650px]">
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[28px] sm:text-[38px] lg:text-[48px] font-medium tracking-[-0.03em] text-white leading-[1.15] mb-6"
            >
              Launch & Scale Your<br />
              <span className="italic">Business in the UAE</span>
            </motion.h1>

            <motion.div
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 sm:gap-3 mb-10 flex-wrap"
            >
              {jurisdictions.map((item, i) => (
                <span key={item} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-white/90 text-sm sm:text-base font-medium hover:text-white cursor-pointer transition-colors">
                    {item}
                  </span>
                  {i < jurisdictions.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Button
                size="lg"
                variant="white"
                className="font-semibold px-10 h-12 rounded-lg uppercase tracking-wider text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps carousel */}
      <StepsCarousel />
      </div>
    </section>
  );
};
