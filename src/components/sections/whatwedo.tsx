import { motion } from "framer-motion";
import collageImage from "@/assets/whatwedo-collage(1).png";

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Single image asset, no cropping, no manipulation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-start"
          >
            <img
              src={collageImage}
              alt="Virtual office spaces across India"
              className="max-h-[400px] w-full max-w-[520px] object-contain"
            />
          </motion.div>

          {/* RIGHT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            {/* Small label */}
            <p className="text-sm text-muted-foreground mb-3 tracking-wide">
              What we do
            </p>

            {/* Heading */}
            <h2
              className="text-3xl lg:text-4xl font-semibold text-[#35503f] mb-5 leading-snug tracking-tight"
            >
              One Address. Any State.
              <br />
              Sell Pan-India Without an Office.
            </h2>

            {/* Highlighted subheading */}
            <p
              className="text-base font-medium mb-4 leading-relaxed"
              style={{ color: "#35503f" }}
            >
              With{" "}
              <span className="font-bold">100+ locations across 28 states,</span>{" "}
              FlashSpace is India's leading virtual office provider for ecommerce sellers.
            </p>

            {/* First paragraph */}
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              We provide fully compliant VPOB and APOB addresses accepted by Amazon,
              Flipkart, Meesho and Myntra. Every address comes with NOC, Rent Agreement
              and Utility Bill everything your GST registration needs.
            </p>

            {/* Second paragraph */}
            <p className="text-muted-foreground text-base leading-relaxed">
              No physical office. No CA visits. No compliance risk. Just a verified
              address in any state, delivered to your inbox in 3 to 7 working days.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
