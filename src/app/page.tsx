
import React from "react";
import Link from "next/link";
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

import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Roofing Shed Construction in India | KPN Roofing Shed",
  description: "Top-rated roofing shed construction in India. We specialize in industrial, commercial, and residential roofing sheds. Get a free quote today!",
  keywords: "Roofing Shed Construction Company India, Best Roofing Shed Contractors India, Steel Structure Company India",
  alternates: {
    canonical: "https://www.kpnroofingsheds.com/",
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
            "@id": "https://www.kpnroofingsheds.com/#webpage",
            "url": "https://www.kpnroofingsheds.com/",
            "name": "Roofing Shed Construction in India | KPN Roofing Shed",
            "description": "Top-rated roofing shed construction in India. We specialize in industrial, commercial, and residential roofing sheds. Get a free quote today!",
            "isPartOf": {
              "@id": "https://www.kpnroofingsheds.com/#website"
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
            "@id": "https://www.kpnroofingsheds.com/#localbusiness",
            "name": "KPN Roofing Shed",
            "url": "https://www.kpnroofingsheds.com/",
            "image": "https://www.kpnroofingsheds.com/images/logo.webp",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.kpnroofingsheds.com/images/logo.webp"
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
       {/* SEO Contextual Links for Animal Husbandry Sheds */}
      <section className="bg-slate-50 py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2229]">Expert Animal Husbandry Shed Construction</h2>
            <p className="text-slate-600 font-medium text-lg mt-4 max-w-2xl mx-auto">Discover our specialized infrastructure solutions designed for herd health, ventilation, and structural durability across India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Dairy Shed */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-[#1e2229] mb-4">
                <Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="hover:text-[#ee0000] transition-colors">
                  Dairy Farm Sheds
                </Link>
              </h3>
              <p className="text-slate-600 font-medium text-base mb-6 flex-grow">
                We design and construct ventilated cow and dairy farm sheds based on herd size, feeding requirements, drainage and future expansion.
              </p>
              <Link 
                href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/"
                className="inline-block bg-white text-[#ee0000] border-2 border-[#ee0000] hover:bg-[#ee0000] hover:text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300"
              >
                Explore Cow Dairy Farm Sheds
              </Link>
            </div>

            {/* Goat Shed */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-[#1e2229] mb-4">
                <Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/" className="hover:text-[#ee0000] transition-colors">
                  Goat Farm Sheds
                </Link>
              </h3>
              <p className="text-slate-600 font-medium text-base mb-6 flex-grow">
                Elevated slatted-floor goat farm sheds engineered for moisture management, disease prevention, and high-density flock rearing.
              </p>
              <Link 
                href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/"
                className="inline-block bg-white text-[#ee0000] border-2 border-[#ee0000] hover:bg-[#ee0000] hover:text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300"
              >
                Explore Goat Farm Sheds
              </Link>
            </div>

            {/* Poultry Shed */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-[#1e2229] mb-4">
                <Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/" className="hover:text-[#ee0000] transition-colors">
                  Poultry Farm Sheds
                </Link>
              </h3>
              <p className="text-slate-600 font-medium text-base mb-6 flex-grow">
                Custom layer and broiler sheds focused on east-west orientation, airflow optimization, and deep litter or cage system layouts.
              </p>
              <Link 
                href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/"
                className="inline-block bg-white text-[#ee0000] border-2 border-[#ee0000] hover:bg-[#ee0000] hover:text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300"
              >
                Explore Poultry Farm Sheds
              </Link>
            </div>

          </div>
        </div>
      </section>
      <CTASection />
      
      <ScrollToTop />
    </>
  );
}
