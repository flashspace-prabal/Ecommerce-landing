import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { TrustBanner } from "@/components/sections/TrustBanner";

import { EcommerceServices } from "@/components/sections/EcommerceServices";
import { PricingSection } from "@/components/sections/PricingSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { LeadModal } from "@/components/sections/LeadModal";

const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <TrustBanner />
        
        <EcommerceServices />
        <PricingSection />
        <BenefitsGrid />
        <BenefitsSection />
        
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      <LeadModal />
    </AppLayout>
  );
};

export default Index;
