import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a UAE trade licence to sell online?",
    answer: "Yes. Any business selling products or services online to UAE customers needs a valid trade licence with e-commerce activity codes. We handle the full application process for you.",
  },
  {
    question: "Which jurisdiction is best for e-commerce — mainland or free zone?",
    answer: "It depends on your target market. Mainland gives you unrestricted access to the UAE market, while free zones offer 100% foreign ownership and tax benefits. Our team will recommend the best fit based on your products and goals.",
  },
  {
    question: "How long does it take to get a payment gateway approved?",
    answer: "Payment gateway approval typically takes 5–15 business days depending on the provider. We pre-qualify your application and submit complete documentation to avoid delays and rejections.",
  },
  {
    question: "Can I run my e-commerce business remotely?",
    answer: "Many free zones allow remote incorporation. However, you'll need to visit the UAE for Emirates ID and visa processing. We coordinate everything so your visit is as short as possible.",
  },
  {
    question: "What are the costs involved in setting up an e-commerce business?",
    answer: "Costs vary by jurisdiction, visa requirements, and add-on services. A basic free zone e-commerce setup starts from around AED 8,500. Use our cost calculator for a detailed estimate tailored to your needs.",
  },
  {
    question: "Do you help with Shopify, WooCommerce, or custom stores?",
    answer: "We focus on the legal and operational setup — company registration, payment gateways, bank accounts, and compliance. For store development, we can refer you to trusted tech partners in our network.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-primary">+</span> FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-foreground leading-[1.15] tracking-tight mb-5">
              Common questions<br />about e-commerce setup.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Have a different question? Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                  <AccordionTrigger className="text-left text-foreground font-medium text-base lg:text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
