import React from "react";
import type { Metadata } from 'next';

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyKPNSection from "@/components/WhyKPNSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AreasWeServeSection from "@/components/AreasWeServeSection";
import FAQSection from "@/components/FAQSection";
import { faqs } from "@/data/faqs";
// import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";

import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/AboutSection";
import QuoteModal from "@/components/QuoteModal";

export const metadata: Metadata = {
  title: "Roofing Shed Construction Company in India | KPN Roofing Shed",
  description: "Top-rated roofing shed construction company in India. We specialize in industrial, commercial, and residential roofing sheds. Get a free quote today!",
  alternates: {
    canonical: "https://kpnroofingshed.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "name": "KPN Roofing Shed",
                "image": "https://kpnroofingshed.com/images/logo.jpg",
                "@id": "https://kpnroofingshed.com",
                "url": "https://kpnroofingshed.com",
                "telephone": "+91-9876543210", // Placeholder, user can update
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "India",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      
      <WhyKPNSection />
      <ComparisonSection />
      <ProcessSection />
      <TestimonialsSection />
      <AreasWeServeSection />
      <FAQSection />
      {/* <IntegrationSection /> */}
      <CTASection />
      
      <ScrollToTop />
      <QuoteModal />
    </>
  );
}
