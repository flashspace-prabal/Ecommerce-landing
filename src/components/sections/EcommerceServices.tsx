import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
  {
    title: "GST Registration & Compliance",
    description: "Complete GST registration, return filing, and ongoing compliance management so your e-commerce business stays fully legal.",
  },
  {
    title: "VPOB Setup",
    description: "Get a verified Virtual Place of Business address for GST registration in any state — the core requirement for multi-state selling.",
  },
  {
    title: "Multi-State GST Registration",
    description: "Register for GST in multiple states to unlock pan-India selling on Amazon, Flipkart, and other marketplaces without compliance gaps.",
  },
  {
    title: "E-commerce Compliance",
    description: "Stay compliant with marketplace-specific requirements — from TCS handling to listing documentation and seller verification.",
  },
];

export const EcommerceServices = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="what-we-do" className="py-10 bg-[#f5f5f0]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-3 tracking-tight">
            Everything your e-commerce<br className="hidden sm:block" />business needs to scale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            One partner. Every service. From GST to marketplace compliance.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -top-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-muted rounded-lg overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between p-7 bg-white hover:bg-[#fef8c3] transition-colors duration-300 border-r border-b border-muted last:border-r-0"
                style={{ minHeight: "280px" }}
              >
                {/* Top content */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Plus button at bottom */}
                <div className="mt-8">
                  <button
                    onClick={scrollToContact}
                    className="w-9 h-9 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-200"
                    aria-label="Contact us"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute -bottom-3 -left-3 text-muted-foreground/30 text-xl select-none">+</div>
          <div className="absolute -bottom-3 -right-3 text-muted-foreground/30 text-xl select-none">+</div>
        </div>
      </div>
    </section>
  );
};