
import React from "react";
import type { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import dynamic from 'next/dynamic';
const ClientLogos = dynamic(() => import("@/components/ClientLogos"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
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
  title: "Roofing Shed Construction in India | KPN Roofing Shed",
  description: "Top-rated roofing shed construction in India. We specialize in industrial, commercial, and residential roofing sheds. Get a free quote today!",
  keywords: "Roofing Shed Construction Company India, Best Roofing Shed Contractors India, Steel Structure Company India",
  alternates: {
    canonical: "https://kpnroofingsheds.com/",
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
            "@type": "WebPage",
            "@id": "https://kpnroofingsheds.com/#webpage",
            "url": "https://kpnroofingsheds.com/",
            "name": "Roofing Shed Construction in India | KPN Roofing Shed",
            "description": "Top-rated roofing shed construction in India. We specialize in industrial, commercial, and residential roofing sheds. Get a free quote today!",
            "isPartOf": {
              "@id": "https://kpnroofingsheds.com/#website"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": [
              "LocalBusiness",
              "RoofingContractor"
            ],
            "@id": "https://kpnroofingsheds.com/#localbusiness",
            "name": "KPN Roofing Shed",
            "url": "https://kpnroofingsheds.com/",
            "image": "https://kpnroofingsheds.com/images/logo.webp",
            "logo": {
              "@type": "ImageObject",
              "url": "https://kpnroofingsheds.com/images/logo.webp"
            },
            "description": "KPN Roofing Shed provides roofing shed construction solutions for industrial, agricultural, residential, warehouse, factory, animal husbandry and sports turf applications across India.",
            "telephone": "+91-9788770786",
            "email": "kpnroofingshed555@gmail.com",
            "priceRange": "Contact for pricing",
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
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does KPN Roofing Shed build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KPN builds industrial and factory sheds, warehouses, agricultural and animal sheds (goat, dairy, poultry, cattle), and home structures like terrace sheds and car parking shades, across India."
                }
              },
              {
                "@type": "Question",
                "name": "How long does KPN take to complete a shed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 1440 sq.ft shed is completed in 20 days. A 2400 sq.ft shed takes about 1 month."
                }
              },
              {
                "@type": "Question",
                "name": "What warranty does KPN provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KPN's in-house flooring comes with a 3-year replacement warranty and a 10-year guarantee, plus free repair for any damage within the first year."
                }
              },
              {
                "@type": "Question",
                "name": "Does KPN build sheds outside Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. KPN delivers projects pan-India, with strong demand from Maharashtra, UP, Telangana, and Karnataka."
                }
              }
            ]
          })
        }}
      />

      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      
      <StatsSection />
      <TestimonialsSection />
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
