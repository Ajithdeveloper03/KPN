"use client";

import React, { useState } from "react";

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyKPNSection from "@/components/WhyKPNSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AreasWeServeSection from "@/components/AreasWeServeSection";
import FAQSection, { faqs } from "@/components/FAQSection";
// import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";

import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/AboutSection";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
