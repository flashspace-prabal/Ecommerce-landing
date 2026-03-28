import { AppLayout } from "@/components/layout/AppLayout";
import { HeroWithSearch } from "@/components/sections/HeroWithSearch";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { TrustedByFilmstrip } from "@/components/sections/TrustedPartners";

import { EcommerceServices } from "@/components/sections/EcommerceServices";
import { PricingSection } from "@/components/sections/PricingSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";

import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhatWeDo } from "@/components/sections/whatwedo";
import { Footer } from "@/components/layout/Footer";


const Index = () => {
  return (
    <AppLayout>
      <main>
        <HeroWithSearch />
        <TrustBanner />
        <WhatWeDo />
        <EcommerceServices />
        <PricingSection />
        <BenefitsGrid />
        
        <WhyChooseUs />
        
        <TrustedByFilmstrip />
        <ReviewsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      
    </AppLayout>
  );
};

export default Index;
