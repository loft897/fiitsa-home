"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import StickyMobileCTA from "@/components/marketing/StickyMobileCTA";

export default function HomeClient() {
  return (
    <MarketingLayout>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <StickyMobileCTA />
    </MarketingLayout>
  );
}
