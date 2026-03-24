import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export const HeroWithSearch = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center bg-background">

      <div className="relative z-10 w-full px-6 lg:px-12 py-32 lg:py-40">
        <div className="container mx-auto text-center">
          <div className="max-w-[720px] mx-auto">
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[26px] sm:text-[36px] lg:text-[48px] font-medium tracking-[-0.03em] text-foreground leading-[1.15] mb-6"
            >
              Start & Scale Your E-commerce<br />
              Business Across India —{" "}
              <span className="italic text-primary">Without GST Headaches</span>
            </motion.h1>

            <motion.p
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-[600px]"
            >
              From GST registration to multi-state compliance, we help you sell across India without legal or tax risks.
            </motion.p>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12 rounded-lg uppercase tracking-wider text-sm transition-all duration-300"
                onClick={() => scrollTo("#contact")}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Start Your Business
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium px-8 h-12 rounded-lg uppercase tracking-wider text-sm border-border text-foreground hover:bg-muted transition-all duration-300"
                onClick={() => scrollTo("#contact")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
