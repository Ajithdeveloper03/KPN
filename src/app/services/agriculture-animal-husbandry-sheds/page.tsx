import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Factory, Tractor, Droplets, Feather, Box, ShieldCheck, Check, Plus, Minus, ArrowRight, ArrowUpRight } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/",
  },
  title: 'Agriculture & Animal Husbandry India | Goat, Dairy, Poultry & Cow Sheds — KPN Roofing Shed',
  description: 'KPN builds animal & agricultural sheds across India — goat, dairy, poultry, cow, and cattle sheds. 13+ yrs experience, 20-day completion. Get a free quote.',
  keywords: 'Agricultural Sheds India, Modern Farm Sheds India',
};

export default function AgricultureAnimalHusbandryPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/#webpage",
          "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/",
          "name": "Agriculture & Animal Husbandry India | Goat, Dairy, Poultry & Cow Sheds — KPN Roofing Shed",
          "description": "KPN builds animal & agricultural sheds across India — goat, dairy, poultry, cow, and cattle sheds. 13+ yrs experience, 20-day completion. Get a free quote.",
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
            "@type": "Service",
            "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/#service",
            "name": "Agriculture & Animal Husbandry Sheds",
            "description": "Agriculture and animal husbandry shed construction solutions for farms, livestock, cattle, poultry and other agricultural requirements.",
            "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/",
            "provider": {
              "@type": "Organization",
              "@id": "https://kpnroofingsheds.com/#organization",
              "name": "KPN Roofing Shed",
              "url": "https://kpnroofingsheds.com/",
              "logo": "https://kpnroofingsheds.com/images/logo.webp"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Agriculture & Animal Husbandry Shed Construction",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://kpnroofingsheds.com/contact/"
            }
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
                "name": "What is the minimum size for a farm shed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The minimum shed size is 1,440 sq.ft in Tamil Nadu and 2,400 sq.ft in other states."
                }
              },
              {
                "@type": "Question",
                "name": "Can KPN build a combined dairy and poultry shed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KPN can assess the farm layout and recommend separate or integrated structures based on ventilation, hygiene, and operational requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a farm shed take to complete?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 1,440 sq.ft shed is completed in 20 days; a 2400 sq.ft shed takes about 1 month."
                }
              },
              {
                "@type": "Question",
                "name": "Does KPN build farm sheds outside Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. KPN delivers agricultural and animal shed projects pan-India, with strong demand from Maharashtra, Telangana, and Karnataka."
                }
              }
            ]
          })
        }}
      />
      <PageHero  
        title="Agriculture & Animal Husbandry" 
         bgImage="/images/goat1.webp" breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Agriculture & Animal Husbandry", href: "/services/agriculture-animal-husbandry-sheds" }
        ]} 
      />

      <main className="flex-grow">
        
        {/* ---------------- Intro Section ---------------- */}
        <section className="max-w-[1400px] mx-auto px-6 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#111] leading-[1.1] tracking-tight">
                Agriculture & Animal Husbandry India — <br className="hidden xl:block"/>
                <span className="font-serif font-medium text-[#062088] italic">Goat, Dairy, Poultry & Cow Sheds</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                KPN Roofing Shed builds animal and agricultural sheds across India, engineered around airflow, drainage, and animal comfort — not just a roof over the herd. From single-unit goat shelters to full dairy and poultry setups, every structure uses Apollo-brand steel and an in-house, Coimbatore-manufactured flooring line backed by a 10-year guarantee.
              </p>
            </div>

            {/* Right Side: Image Gallery */}
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-2 md:gap-3 mt-16 lg:mt-0">
              
              {/* Image 1: Medium Height */}
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/images/goat1.webp" alt="Goat Shed" fill sizes="100vw" className="object-cover" priority />
              </div>
              
              {/* Image 2: Long Height (Center) */}
              <div className="relative w-1/3 h-[240px] sm:h-[300px] md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border-2 md:border-4 border-white">
                <Image src="/images/animal3.webp" alt="Dairy Shed" fill sizes="100vw" className="object-cover" priority />
              </div>
              
              {/* Image 3: Medium Height */}
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/images/animal4.webp" alt="Poultry Shed" fill sizes="100vw" className="object-cover" priority />
              </div>

            </div>

          </div>
          <div className="mt-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3">
               <h3 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">Who Is <br/> <span className="font-serif font-medium text-[#ee0000] italic">This For?</span></h3>
             </div>
             <div className="w-full md:w-2/3 border-l-0 md:border-l border-slate-200 md:pl-12">
               <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 Are you a farmer looking to expand your livestock operation? A dairy owner needing a hygienic, well-ventilated cow shed? Or a poultry farmer looking for well-designed broiler or layer sheds? KPN Roofing Shed designs animal sheds for different farm types, with in-house engineering, and a 10-year guarantee.
               </p>
             </div>
          </div>
        </section>


        {/* ---------------- At a Glance Metrics ---------------- */}
        <section className="bg-[#f0f7ff] py-6 lg:py-8 relative overflow-hidden border-y border-blue-100">
          <div className="max-w-[1300px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Overview
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Agriculture & Animal Husbandry <br/><span className="font-serif font-medium text-[#00a3e0] italic">at a Glance</span></h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Metric 1 - Blue */}
              <div className="bg-[#062088] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-8">
                  <Factory strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-white font-semibold text-2xl mb-6">Scale & Time</h4>
                <ul className="space-y-4 text-blue-100 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Minimum size:</strong> 1440 sq.ft in Tamil Nadu, 2400 sq.ft in other states</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Timeline:</strong> 6 days for a 1440 sq.ft shed, 1 month for 2400 sq.ft</span></li>
                </ul>
              </div>

              {/* Metric 2 - Red */}
              <div className="bg-[#751919] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white mb-8">
                  <ShieldCheck strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-white font-semibold text-2xl mb-6">Coverage & Warranty</h4>
                <ul className="space-y-4 text-red-100 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Warranty:</strong> 10-year guarantee, 3-year replacement warranty on flooring</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Project coverage:</strong> pan-India, with strong demand from Maharashtra, Telangana, and Karnataka</span></li>
                </ul>
              </div>

              {/* Metric 3: Flooring At a Glance - Yellow */}
              <div className="bg-[#ffcc00] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-[#111] mb-8">
                  <Box strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-[#111] font-semibold text-2xl mb-6">Slatted Floor Mat</h4>
                <ul className="space-y-4 text-[#111] font-medium leading-relaxed text-[15px]">
                  <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-[#ee0000] mt-2 shrink-0"></div> <span>Manufactured in-house at KPN's own facility in Coimbatore.</span></li>
                  <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-[#ee0000] mt-2 shrink-0"></div> <span>Made from virgin raw material, not recycled plastic.</span></li>
                  <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-[#ee0000] mt-2 shrink-0"></div> <span>Suitable across goat, dairy/cow, and poultry shed types.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* ---------------- Detailed Shed Types (Masonry/Staggered Grid) ---------------- */}
        <section className="bg-[#fffcf0] py-6 lg:py-8 max-w-full px-6 border-b border-yellow-100">
          <div className="max-w-[1300px] mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Agricultural Sheds & <span className="font-serif font-medium italic">Modern Farm Sheds</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-3xl font-medium leading-relaxed">
                KPN designs agricultural sheds and modern farm sheds suited to Indian farm sizes — from a small backyard setup to a large commercial operation. Every structure is engineered with ventilated roofing and corrosion-resistant frames, built to handle years of heavy farm use with minimal maintenance.
              </p>
            </div>
            <QuoteButton className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#111] px-8 py-4 rounded-full font-semibold hover:bg-[#e6b800] transition-colors shadow-sm whitespace-nowrap">
              Explore Services <span className="w-2 h-2 rounded-full bg-black block ml-2"></span>
            </QuoteButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Column 1 (Normal) */}
            <div className="space-y-6 lg:space-y-10">
              
              {/* Goat Shed - White Card */}
              <div className="bg-white hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-4 pb-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group relative">
                <div className="relative w-full h-[300px] rounded-[1.5rem] overflow-hidden mb-10">
                  <Image src="/images/goat4.webp" alt="goat farm shed roofing India" fill sizes="100vw" className="object-cover transition-transform duration-700" />
                </div>
                <div className="px-6 flex justify-between items-end">
                  <div className="max-w-[80%] space-y-4">
                    <Tractor strokeWidth={1.2} size={42} className="text-[#ee0000]" />
                    <h3 className="text-2xl font-semibold text-[#111]">Goat Farm Shed Builders</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      KPN designs raised-floor and ground-level shed options with proper spacing, ventilation, and predator-proof boundaries.
                    </p>
                  </div>
                </div>
                <Link id="page-Link-135" href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/" className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#ee0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45">
                  <ArrowRight strokeWidth={2} size={20} />
                </Link>
              </div>

              {/* Poultry - Hover Yellow Card */}
              <div className="bg-white hover:bg-[#ffcc00] transition-all duration-500 rounded-[2rem] p-10 pt-16 border border-slate-100 hover:border-[#ffcc00] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(255,204,0,0.2)] group relative overflow-hidden">
                <div className="max-w-[80%] space-y-6 relative z-10 mb-16">
                  <Feather strokeWidth={1.2} size={50} className="text-[#111]" />
                  <h3 className="text-3xl font-semibold text-[#111]">Poultry Shed Manufacturers</h3>
                  <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                    We build broiler and layer sheds with controlled ventilation and insulated roofing, maintaining perfect temperature conditions.
                  </p>
                </div>
                <div className="relative w-full h-[250px] rounded-[1.5rem] overflow-hidden">
                  <Image src="/images/animal1.webp" alt="poultry shed manufacturers" fill sizes="100vw" className="object-cover transition-transform duration-700" />
                </div>
                <Link id="page-Link-136" href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/" className="absolute top-10 right-10 w-14 h-14 rounded-full bg-[#111] group-hover:bg-white text-white group-hover:text-[#111] flex items-center justify-center hover:scale-110 transition-all shadow-lg group-hover:-rotate-45 z-20">
                  <ArrowRight strokeWidth={2} size={20} />
                </Link>
              </div>

            </div>

            {/* Column 2 (Staggered Downward) */}
            <div className="space-y-6 lg:space-y-10 md:mt-24">
              
              {/* Dairy Shed - White Card */}
              <div className="bg-white hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group relative">
                <div className="max-w-[80%] space-y-6 mb-12">
                  <Droplets strokeWidth={1.2} size={42} className="text-[#00a3e0] group-hover:text-[#111] transition-colors" />
                  <h3 className="text-2xl font-semibold text-[#111]">Dairy Farm Shed Contractors</h3>
                  <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                    Cow shed solutions with wide bays and roofing designed to improve airflow. Milking areas and calf pens integrated seamlessly.
                  </p>
                </div>
                <div className="relative w-full h-[250px] rounded-[1.5rem] overflow-hidden">
                  <Image src="/images/animal2.webp" alt="cow shed with milking area India" fill sizes="100vw" className="object-cover transition-transform duration-700" />
                </div>
                <Link id="page-Link-137" href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="absolute top-10 right-10 w-14 h-14 rounded-full bg-[#00a3e0] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45 z-20">
                  <ArrowRight strokeWidth={2} size={20} />
                </Link>
              </div>

              {/* Cattle Shed - Light Gray Card */}
              <div className="bg-[#fafafa] hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-4 pt-10 border border-slate-200 shadow-sm group relative overflow-hidden">
                <div className="px-6 max-w-[85%] space-y-4 mb-10">
                  <Box strokeWidth={1.2} size={42} className="text-[#062088] group-hover:text-[#111] transition-colors" />
                  <h3 className="text-2xl font-semibold text-[#111]">Cattle Shed Builders</h3>
                  <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                    Our cattle shed solutions are designed as open-sided or enclosed structures based on herd size and local climate, with flooring built to handle heavy foot traffic without wearing down or becoming slippery.
                  </p>
                </div>
                <div className="relative w-full h-[280px] rounded-[1.5rem] overflow-hidden">
                  <Image src="/images/animal5.webp" alt="cattle shed builders" fill sizes="100vw" className="object-cover transition-transform duration-700" />
                </div>
                <Link id="page-Link-138" href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="absolute top-8 right-8 w-14 h-14 rounded-full bg-[#062088] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45 z-20">
                  <ArrowRight strokeWidth={2} size={20} />
                </Link>
              </div>
            </div>

          </div>

          {/* Farm Infrastructure Solutions (Full Width Card) */}
          <div className="mt-8 lg:mt-12 bg-[#111] rounded-[2rem] p-10 md:p-16 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/images/animal6.webp" alt="Farm Infrastructure Background" fill sizes="100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 z-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/70"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-2/3 space-y-6">
                <Factory strokeWidth={1.5} size={42} className="text-[#ffcc00]" />
                <h3 className="text-3xl md:text-4xl font-semibold text-white">Farm Infrastructure Solutions</h3>
                <p className="text-blue-100 font-medium leading-relaxed text-lg max-w-3xl">
                  Beyond individual sheds, KPN provides complete farm infrastructure solutions — combining livestock housing, storage, and utility structures into one coordinated build, so farm owners deal with a single contractor instead of coordinating multiple vendors.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex justify-start lg:justify-end">
                 <QuoteButton className="inline-flex items-center justify-center gap-3 bg-[#ffcc00] text-[#111] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all shadow-md whitespace-nowrap">
                   Explore Infrastructure <ArrowRight size={20} />
                 </QuoteButton>
              </div>
            </div>
          </div>
          
          </div>
        </section>


        {/* ---------------- Features Checklist & Image (Ref: Image 3) ---------------- */}
        <section className="bg-white py-6 lg:py-8 border-b border-slate-200 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
            
            <div className="w-full lg:w-5/12 space-y-10 z-10">
              <span className="text-slate-500 font-medium tracking-wide uppercase text-sm">Specialized Features</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111] leading-[1.05]">
                Why KPN is <br/> <span className="font-serif font-medium text-[#ee0000] italic">Different</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                We remove the middleman and rely on our own qualified engineers and installation teams. This ensures unmatched speed and quality.
              </p>
              <QuoteButton className="inline-flex items-center justify-center bg-[#ee0000] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-[0_15px_30px_rgba(238,0,0,0.2)] hover:-translate-y-1 transition-transform">
                Standout Effortlessly
              </QuoteButton>
            </div>

            <div className="w-full lg:w-7/12 relative mt-16 lg:mt-0 mb-12 md:mb-0">
              {/* The "Laptop" replacement: A large crisp image of a shed */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image src="/images/goat5.webp" alt="KPN Shed Infrastructure" fill sizes="100vw" className="object-cover" />
              </div>
              
              {/* The Floating Checklist Block */}
              <div className="relative -mt-16 mx-4 md:absolute md:mx-0 md:mt-0 md:right-auto md:-bottom-10 md:-left-12 lg:-left-20 bg-[#ffcc00] rounded-3xl p-6 md:p-10 shadow-2xl border border-[#ffcc00]/50 z-20 md:w-[450px]">
                <ul className="space-y-6">
                  {[
                    "No middleman — deal directly",
                    "In-house qualified engineers",
                    "Own installation team (no subs)",
                    
                    "6 days for 1440 sq.ft shed",
                    "10-year structural guarantee"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[#111] font-medium text-lg">
                      <Check size={20} strokeWidth={3} className="shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>


        {/* ---------------- How to Choose (Clean Cards with Custom Corner Design) ---------------- */}
        <section className="bg-white py-6 lg:py-8 border-b border-cyan-100 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Process
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">
                How to Choose the <span className="font-serif font-medium text-[#062088] italic">Right Shed</span> <br/>for Your Farm
              </h2>
            </div>

            <div className="relative">
              {/* Background Strip (mimicking the faint background block from screenshot) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[65%] bg-[#f8f9fa] rounded-[3rem] hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
                {[
                  { title: "Identify your animal type", desc: "Goat, dairy, poultry, or cattle? Each requires different ventilation and layout.", color: "#ee0000", bgLight: "#ffe6e6", icon: <Tractor size={36} /> },
                  { title: "Calculate flock size", desc: "Shed size should be planned based on the number of animals or birds and space required.", color: "#ffcc00", bgLight: "#fff9e6", icon: <Box size={36} /> },
                  { title: "Choose the flooring", desc: "Raised-floor systems suit goat farming, while dairy needs heavy-use durable flooring.", color: "#00a3e0", bgLight: "#e6f7ff", icon: <Factory size={36} /> },
                  { title: "Plan drainage & features", desc: "Effective drainage keeps the shed dry. Feeding lanes and milking areas can be incorporated.", color: "#062088", bgLight: "#e6e9f3", icon: <Droplets size={36} /> },
                ].map((step, idx) => (
                  <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between relative overflow-hidden group min-h-[320px]">
                    
                    {/* Content */}
                    <div className="relative z-10 mb-12">
                      <h4 className="text-2xl font-semibold text-[#111] mb-5 leading-snug">{step.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Step / Read More Section */}
                    <div className="relative z-10 mt-auto flex items-center gap-3 text-slate-500 font-medium group-hover:text-[#111] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                        <ArrowRight size={18} />
                      </div>
                      <span className="uppercase tracking-wider text-sm font-semibold">Step 0{idx + 1}</span>
                    </div>

                    {/* Bottom Right Corner Elements (Ref: Screenshot Design) */}
                    <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: step.bgLight }}></div>
                    <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-inner" style={{ backgroundColor: step.color }}>
                      <div className="text-white transform -translate-x-3 -translate-y-3">
                        {step.icon}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ---------------- Comparison Table Redesign (Connector UI) ---------------- */}
        <section className="bg-[#fff5f5] py-6 lg:py-8 max-w-full px-6 border-b border-red-100">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <span className="px-5 py-2 rounded-full border border-red-200 text-sm font-medium text-red-600 tracking-wide uppercase mb-6 inline-block bg-white shadow-sm">
                Mapping
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#111] tracking-tight">Which Shed <span className="font-serif font-medium text-[#ee0000] italic">Do You Need?</span></h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {[
                { type: "Goat Farming", solution: "Goat Farm Shed", icon: <Tractor size={28} />, color: "#ee0000", bgLight: "#ffe6e6" },
                { type: "Dairy Farming", solution: "Dairy / Cow Shed", icon: <Droplets size={28} />, color: "#00a3e0", bgLight: "#e6f7ff" },
                { type: "Poultry Farming", solution: "Broiler / Layer Shed", icon: <Feather size={28} />, color: "#ffcc00", bgLight: "#fff9e6" },
                { type: "Cattle Farming", solution: "Cattle Shed", icon: <Factory size={28} />, color: "#062088", bgLight: "#e6e9f3" },
                { type: "Mixed Farming", solution: "Integrated Farm Infrastructure", icon: <Box size={28} />, color: "#475569", bgLight: "#f1f5f9" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group gap-6 md:gap-0">
                  
                  {/* Left: Farm Type */}
                  <div className="flex items-center gap-6 w-full md:w-5/12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: item.bgLight, color: item.color }}>
                      {item.icon}
                    </div>
                    <span className="text-xl md:text-2xl font-medium text-slate-600 group-hover:text-[#111] transition-colors">{item.type}</span>
                  </div>

                  {/* Middle: Connection line / Arrow */}
                  <div className="hidden md:flex flex-grow items-center justify-center px-4">
                    <div className="h-px bg-slate-200 w-full relative">
                      <ArrowRight size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 group-hover:text-[#111] group-hover:translate-x-6 transition-all duration-500" />
                    </div>
                  </div>
                  
                  {/* Mobile Arrow */}
                  <div className="md:hidden">
                    <ArrowRight size={24} className="text-slate-300" />
                  </div>

                  {/* Right: Shed Solution */}
                  <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                    <div className="px-8 py-4 rounded-full font-semibold text-lg md:text-xl w-full md:w-auto text-center transition-transform duration-300 group-hover:-translate-y-1 border" style={{ backgroundColor: item.bgLight, color: item.color, borderColor: 'transparent' }}>
                      {item.solution}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Our In-House Slatted Floor Mat Section ---------------- */}
        <section className="bg-white py-6 lg:py-8 border-b border-slate-200 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <span className="px-5 py-2 rounded-full border border-green-200 bg-green-50 text-sm font-medium text-green-700 tracking-wide uppercase inline-block">
                Premium Flooring
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#111] leading-tight tracking-tight">
                Our In-House <span className="font-serif font-medium text-[#00a3e0] italic">Slatted Floor Mat</span><br/>
                <span className="text-2xl text-slate-500 font-sans mt-2 block">Manufactured in Coimbatore</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                KPN Roofing Shed manufactures its own slatted floor mats in-house at its Coimbatore facility, using <strong className="text-[#111]">virgin raw material</strong> rather than recycled plastic. Designed for animal sheds, these mats support better drainage, hygiene, and ventilation compared with conventional flooring options.
              </p>
              
              <div className="pt-4 space-y-4">
                <h4 className="text-xl font-bold text-[#111] mb-4">Why Slatted Flooring Matters</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600 font-medium text-lg">
                    <Check size={24} className="text-[#00a3e0] shrink-0 mt-0.5" />
                    <span>Waste and urine drain through the slats instead of collecting on the surface, keeping the shed drier and easier to clean.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium text-lg">
                    <Check size={24} className="text-[#00a3e0] shrink-0 mt-0.5" />
                    <span>Reduces direct contact between animals and accumulated waste, supporting better hygiene and hoof/leg health.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium text-lg">
                    <Check size={24} className="text-[#00a3e0] shrink-0 mt-0.5" />
                    <span>Improves ventilation from below, which helps regulate shed temperature in hot months.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-medium text-lg">
                    <Check size={24} className="text-[#00a3e0] shrink-0 mt-0.5" />
                    <span>Made from virgin raw material (not recycled plastic), giving the flooring more consistent strength and durability.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Images */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center gap-4 sm:gap-6 lg:pl-8">
              <div className="w-1/2 relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl transform translate-y-8">
                <div className="shiny-hover w-full h-full">
                  <Image src="/images/mate1.webp" alt="Slatted Floor Mat Coimbatore" fill sizes="100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
              <div className="w-1/2 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl transform -translate-y-8">
                <div className="shiny-hover w-full h-full">
                  <Image src="/images/mate2.webp" alt="Floor Mat Detail" fill sizes="100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>
            </div>

          </div>
        </section>
        
        {/* ---------------- Explore by Shed Type ---------------- */}
        {/* <section className="bg-white py-6 lg:py-8 max-w-[1300px] mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111] tracking-tight">Explore by <span className="font-serif font-medium text-[#ee0000] italic">Shed Type</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Goat Farm Shed", link: "/services/goat-farm-shed" },
              { name: "Dairy Farm Shed", link: "/services/dairy-farm-shed" },
              { name: "Poultry Shed", link: "/services/poultry-shed" },
              { name: "Cow / Cattle Shed", link: "/services/cattle-shed" },
            ].map((shed, idx) => (
              <Link id="page-Link-139" key={idx} href={shed.link} className="flex items-center justify-between p-6 bg-[#f8f9fc] rounded-2xl border border-slate-100 hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-colors group shadow-sm hover:shadow-md">
                <span className="font-semibold text-lg text-[#111]">{shed.name}</span>
                <ArrowRight size={20} className="text-[#ee0000] group-hover:text-[#111] transition-colors" />
              </Link>
            ))}
          </div>
        </section> */}

        {/* ---------------- Interactive Accordion FAQ ---------------- */}
        <section className="bg-[#f8f9fc] py-6 lg:py-8 border-b border-slate-200 overflow-hidden">
          <div className="max-w-[1000px] mx-auto px-6">
            
            <div className="text-center mb-16">
              <span className="text-slate-500 font-medium tracking-wide uppercase text-sm block mb-4">Our faq&apos;s</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#111] tracking-tight leading-[1.1]">
                Frequently asked <span className="font-serif font-medium lowercase italic">questions!</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                { q: "What is the minimum size for a farm shed?", a: "The minimum shed size is 1,440 sq.ft in Tamil Nadu and 2,400 sq.ft in other states." },
                { q: "Can KPN build a combined dairy and poultry shed?", a: "KPN can assess the farm layout and recommend separate or integrated structures based on ventilation, hygiene, and operational requirements." },
                { q: "How long does a farm shed take to complete?", a: "A 1440 sq.ft shed is completed in 6 days; a 2400 sq.ft shed takes about 1 month." },
                { q: "Does KPN build farm sheds outside Tamil Nadu?", a: "Yes. KPN delivers agricultural and animal shed projects pan-India, with strong demand from Maharashtra, Telangana, and Karnataka." },
                { q: "What flooring does KPN use in animal sheds?", a: "KPN manufactures its own slatted floor mats in-house at its Coimbatore facility, using virgin raw material. The flooring comes with a 3-year replacement warranty and a 10-year guarantee, and helps with drainage, hygiene, and ventilation in the shed." }
              ].map((faq, i) => (
                <details name='faq' key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8 text-xl font-semibold text-[#111]">
                    <span className="flex gap-4"><span className="text-slate-400">0{i+1}.</span> {faq.q}</span>
                    <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-[#ee0000] group-open:border-[#ee0000] group-open:text-white group-hover:border-[#111]">
                      <Plus size={20} className="block group-open:hidden" strokeWidth={1.5} />
                      <Minus size={20} className="hidden group-open:block" strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 md:pl-16 text-slate-500 font-medium leading-relaxed text-lg pt-2 opacity-0 group-open:opacity-100 group-open:animate-fadeIn">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* ---------------- High Impact CTA ---------------- */}
        <section className="py-6 lg:py-8 text-center text-white relative overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/goat6.webp" alt="Agriculture Sheds CTA" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#062088]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight leading-tight">
              Planning a shed for <span className="font-serif font-medium text-[#ffcc00] italic">your farm?</span>
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
              Talk to KPN Roofing Shed — get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <QuoteButton className="w-full sm:w-auto bg-[#ffcc00] text-[#111] font-semibold text-lg py-3 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md mb-3 flex items-center justify-center">
                  Get Free Quote
                </QuoteButton>
                
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a id="page-a-140" href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white font-semibold text-lg py-3 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md flex items-center justify-center">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a id="page-a-141" href="tel:+919788770786" className="w-full sm:w-auto border border-blue-400 hover:border-white text-white font-semibold text-lg py-3 px-10 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center">
                  Call Now
                </a>
              </div>
            </div>
            
            <p className="text-blue-200 font-medium">
              <span className="text-white font-medium">50% advance to start</span> — no hidden costs. Projects completed in as little as 6 days.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
