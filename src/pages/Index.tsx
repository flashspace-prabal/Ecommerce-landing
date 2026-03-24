import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { TrustBanner } from "@/components/sections/TrustBanner";

import { EcommerceServices } from "@/components/sections/EcommerceServices";
import { PricingSection } from "@/components/sections/PricingSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

import { ClientVoices } from "@/components/sections/ClientVoices";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <TrustBanner />
        
        <EcommerceServices />
        <PricingSection />
        <BenefitsSection />
        
        <ClientVoices />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </AppLayout>
  );
};

export default Index;
