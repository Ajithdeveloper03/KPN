import React from "react";
import type { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import dynamic from 'next/dynamic';
const WhyKPNSection = dynamic(() => import("@/components/WhyKPNSection"));
const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const AreasWeServeSection = dynamic(() => import("@/components/AreasWeServeSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));
const QuoteModal = dynamic(() => import("@/components/QuoteModal"));


import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Roofing Shed Construction Company in India | KPN Roofing Shed",
  description: "Top-rated roofing shed construction company in India. We specialize in industrial, commercial, and residential roofing sheds. Get a free quote today!",
  alternates: {
    canonical: "https://kpnroofingsheds.com",
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
                "@id": "https://kpnroofingsheds.com/#localbusiness",
                "name": "KPN Roofing Shed",
                "url": "https://kpnroofingsheds.com/",
                "description": "KPN Roofing Shed provides roofing shed construction solutions for industrial, agricultural, residential, warehouse, factory, animal husbandry and sports turf applications across India.",
                "image": "https://kpnroofingsheds.com/images/logo.jpg",
                "logo": "https://kpnroofingsheds.com/images/logo.jpg",
                "telephone": "+91-9788770786",
                "email": "kpnroofingsheds@gmail.com",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Plot No. 151 E, 5th Cross W, South Extension, Amman Nagar, Pappakurichi Kattur",
                  "addressLocality": "Tiruchirappalli",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "620019",
                  "addressCountry": "IN"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "sameAs": [
                  "https://www.instagram.com/kpnroofingshed/",
                  "https://www.facebook.com/kpnroofingshed",
                  "https://www.youtube.com/@kpnroofingshedindia"
                ]
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
      <TestimonialsSection />
      <StatsSection />
      
      <WhyKPNSection />
      <ComparisonSection />
      <ProcessSection />
      <AreasWeServeSection />
      <FAQSection />
      {/* <IntegrationSection /> */}
      <CTASection />
      
      <ScrollToTop />
      <QuoteModal />
    </>
  );
}
