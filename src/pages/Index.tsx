import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import HeroSection from "@/components/HeroSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesSection from "@/components/ServicesSection";
import WheelServicesSection from "@/components/WheelServicesSection";
import AlignmentVideoSection from "@/components/AlignmentVideoSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import GallerySection from "@/components/GallerySection";
import BrandsSection from "@/components/BrandsSection";
import LocalSeoSection from "@/components/LocalSeoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import BusinessHoursSection from "@/components/BusinessHoursSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import SeoContentSection from "@/components/SeoContentSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { SITE_URL, buildBreadcrumbSchema, injectJsonLd, restoreHomeMetadata } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    restoreHomeMetadata();
    const cleanup = injectJsonLd(
      "home-breadcrumb-jsonld",
      buildBreadcrumbSchema([{ name: "Home", url: SITE_URL }]),
    );
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <VideoShowcaseSection />
        <ServicesSection />
        <WheelServicesSection />
        <AlignmentVideoSection />
        <DifferentialsSection />
        <GallerySection />
        <BrandsSection />
        <LocalSeoSection />
        <TestimonialsSection />
        <QuoteFormSection />
        <BusinessHoursSection />
        <FAQSection />
        <SeoContentSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
