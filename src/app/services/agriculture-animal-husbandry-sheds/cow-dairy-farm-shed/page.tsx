import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check, Wind, Droplets, Home, ArrowRight, Crosshair, Layout, Settings, Layers, Minimize2, Move } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/",
  },
  title: 'Dairy Farm Shed Contractors India | KPN Roofing Sheds',
  description: 'Dairy shed contractors across India — high-ridge roofline for airflow, non-slip flooring & milking parlour-integrated layouts. Custom design in 24–48 hrs.',
  keywords: 'Dairy Farm Shed Contractors India, Cow Shed Solutions India, Cattle Shed Builders India',
};

export default function CowDairyFarmShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      {/* ---------------- Schemas ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/#webpage",
          "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/",
          "name": "Dairy Farm Shed Contractors India | KPN Roofing Shed",
          "description": "Custom cow and dairy shed construction across Tamil Nadu and North India, designed around herd comfort and milking workflow.",
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
            "@type": "VideoObject",
            "name": "Cow & Dairy Farm Shed Construction by KPN Roofing Shed",
            "description": "Visual overview of KPN Roofing Shed's dairy farm and cow shed construction solutions.",
            "thumbnailUrl": "https://kpnroofingsheds.com/images/animal4.webp",
            "uploadDate": "2023-01-01T08:00:00+08:00",
            "contentUrl": "https://kpnroofingsheds.com/images/cow.mp4"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kpnroofingsheds.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://kpnroofingsheds.com/services/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Agriculture & Animal Husbandry Sheds",
                "item": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Cow & Dairy Farm Shed",
                "item": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/#service",
            "name": "Dairy Farm Shed Contractors India",
            "description": "Custom cow and dairy shed construction across Tamil Nadu and North India, designed around herd comfort and milking workflow.",
            "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/",
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
            "serviceType": "Cow Dairy Farm Shed Construction",
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
                "name": "What is the minimum shed size you build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1440 sq.ft in Tamil Nadu and 2400 sq.ft in other states."
                }
              },
              {
                "@type": "Question",
                "name": "Which is better — tie-stall or free-stall layout?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your herd size and milking method. Free-stall suits larger herds with machine milking; tie-stall works well for smaller herds with manual milking."
                }
              },
              {
                "@type": "Question",
                "name": "Why is roof height important for a dairy shed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A higher ridge height can support better natural airflow and ventilation within the barn. The appropriate height depends on shed width, layout, climate, and site conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Can the shed be built with a milking parlour connection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — the layout can be planned with a direct connection to a milking parlour and Bulk Milk Cooler (BMC) area."
                }
              },
              {
                "@type": "Question",
                "name": "Do you build outside Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — KPN serves clients pan-India, with strong existing demand from Maharashtra, Telangana, and Karnataka."
                }
              },
              {
                "@type": "Question",
                "name": "How long does construction take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically 3–5 weeks depending on shed size and site conditions."
                }
              }
            ]
          })
        }}
      />
      
      {/* ---------------- 1. Hero Section ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/animal4.webp" 
            alt="Green-and-white animal shed with mesh ventilation walls at dusk" 
            fill sizes="100vw" 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/60 sm:bg-black/70 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full mt-20 text-center">
          {/* <span className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            Dairy Farm Shed Contractors India
          </span> */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Dairy Farm Shed Contractors India — Cow Shed Solutions Built for <br />
            <span className="text-[#f39c12] font-serif font-normal italic">Hygiene & Airflow.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Custom cow and dairy shed construction across Tamil Nadu and North India, designed around herd comfort and milking workflow.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link id="page-Link-125" href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link id="page-Link-126" href="/services/" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Cow & Dairy Farm Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 2. Intro Section ---------------- */}
        <section className="py-6 lg:py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Optimal Environment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-6 leading-tight">
                Designed for <span className="font-serif text-[#e67e22]">Hygiene & Yield</span>
              </h2>
              <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4 font-medium">
                <p>A well-planned dairy shed supports better airflow, easier cleaning, and a more comfortable environment for the herd, all of which matter for day-to-day milk hygiene.</p>
                <p>At KPN Roofing Sheds, our cow and dairy shed designs are built around a high-ridge roofline for natural airflow, non-slip sloped flooring for easier wash-down, and layouts planned around the milking parlour so feeding, milking, and waste-clearance routes can follow a practical workflow.</p>
                <p>Given the daily wash-downs and slurry exposure a dairy shed sees, we use Apollo-brand galvanized steel for the frame, selected for durability in a moisture-exposed dairy environment.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton className="bg-[#d35400] hover:bg-[#e67e22] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 text-center text-lg inline-flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </QuoteButton>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <video 
                src="/images/cow.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e67e22]/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>
        
        {/* ---------------- 3. Specifications & Pricing ---------------- */}
        <section className="py-6 lg:py-12 px-6 max-w-7xl mx-auto border-t border-orange-900/10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Highlight Box */}
            <div className="w-full lg:w-5/12">
              <div className="bg-gradient-to-br from-[#2c3e50] to-[#1a252f] rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d35400]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
                  Specifications & Pricing
                </h2>
                <div className="space-y-8 relative z-10">
                  <div>
                    <p className="text-lg font-medium text-gray-200">Pricing depends on herd size, barn layout (tie-stall or free-stall), and flooring specification.</p>
                  </div>
                  <hr className="border-white/10" />
                  <div>
                    <p className="text-[#f39c12] text-sm font-semibold uppercase tracking-wider mb-2">Minimum Project Size</p>
                    <p className="text-xl font-bold text-white mb-1">1440 sq.ft <span className="text-base font-normal text-gray-300">(Tamil Nadu)</span></p>
                    <p className="text-xl font-bold text-white">2400 sq.ft <span className="text-base font-normal text-gray-300">(Other States)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d3436] mb-6">Customized Quotation</h3>
                <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed">
                  Get a customized quote and shed design within 24–48 hours based on your herd count and site details.
                </p>
                <div className="flex flex-wrap gap-4">
                  <QuoteButton className="bg-[#f39c12] text-[#111] font-bold text-base py-4 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(243,156,18,0.4)] flex items-center justify-center cursor-pointer whitespace-nowrap">
                    Get a Free Quote
                  </QuoteButton>
                  <a id="page-a-127" href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold text-base py-4 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 cursor-pointer border-2 border-[#25D366] whitespace-nowrap">
                    <MessageCircle size={20} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- 4. Design & Construction Features ---------------- */}
        <section className="py-6 lg:py-12 bg-[#fffdfa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Craftsmanship</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Design & Construction <span className="font-serif text-[#e67e22]">Features</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {[
                { title: "Head-to-Head / Tail-to-Tail Barn Layout", desc: "Chosen based on herd size and shed width to optimize space and operational efficiency.", icon: <Layout /> },
                { title: "Free-Stall Cubicles", desc: "Dedicated and comfortable cubicles designed specifically for resting cows.", icon: <Shield /> },
                { title: "Slurry Gutter & Drainage System", desc: "Engineered drainage for efficient and hygienic daily waste clearance.", icon: <Droplets /> },
                { title: "High-Ridge Roofline", desc: "14–18 ft roof height engineered for maximum natural airflow and heat dissipation.", icon: <Wind /> },
                { title: "Non-Slip Sloped Flooring", desc: "Designed for animal safety while allowing easier cleaning and wash-down.", icon: <Layers /> }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-900/5 flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#fdf2e9] flex items-center justify-center text-[#d35400] shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2d3436] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 5. Tie-Stall vs Free-Stall Layout ---------------- */}
        <section className="py-6 lg:py-12 bg-[#f8f9fc] border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Layout Options</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Tie-Stall vs <span className="font-serif text-[#3498db]">Free-Stall Layout</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Which barn layout fits your herd depends on herd size and milking method.</p>
            </div>
            
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2d3436] text-white">
                    <th className="p-6 font-bold text-lg w-1/4">Factor</th>
                    <th className="p-6 font-bold text-lg w-1/3 border-l border-white/20 bg-[#3a4447]">Tie-Stall Layout</th>
                    <th className="p-6 font-bold text-lg w-auto border-l border-white/20 bg-[#3498db]">Free-Stall Layout</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 font-medium">
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Cow movement</td>
                    <td className="p-6 border-l border-gray-100">Restricted, fixed position</td>
                    <td className="p-6 border-l border-gray-100 bg-blue-50/50">Free movement within the barn</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Typical use</td>
                    <td className="p-6 border-l border-gray-100">Smaller herds, manual milking</td>
                    <td className="p-6 border-l border-gray-100 bg-blue-50/50">Larger herds, machine milking</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Cleaning</td>
                    <td className="p-6 border-l border-gray-100">Manual, per stall</td>
                    <td className="p-6 border-l border-gray-100 bg-blue-50/50">Easier with slurry gutter system</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Ventilation</td>
                    <td className="p-6 border-l border-gray-100">Moderate</td>
                    <td className="p-6 border-l border-gray-100 bg-blue-50/50">Higher — open layout needs good ridge airflow</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------------- 6. How to Choose the Right Dairy Shed ---------------- */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-[#9b59b6] font-bold tracking-widest uppercase text-sm mb-4 block">Guidance</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How to Choose the <br/><span className="font-serif text-[#9b59b6]">Right Dairy Shed</span></h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Herd Size</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Determines shed length, stall count, and barn layout type.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Milking Method</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Machine milking suits free-stall layouts better; manual milking works with tie-stall.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Region Climate</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Higher ridge height recommended for high-heat zones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">4</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Drainage Needs</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Slope and gutter placement depend on herd size and cleaning routine.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">5</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Cow Comfort & Space</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Stall dimensions, resting areas, and movement paths based on the herd and barn layout.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/animal2.webp" alt="Elevated cattle shed with a green-and-red slatted floor loading ramp" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#9b59b6]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 7. Why KPN for Your Dairy Shed ---------------- */}
        <section className="py-6 lg:py-12 bg-[#fffdfa] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6">Why KPN for Your <span className="font-serif text-[#e67e22]">Dairy Shed?</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">Steel Frame</h3>
                <p className="text-gray-600 font-medium">Steel frame resistant to daily wash-down and slurry moisture.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Wind size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">High-Ridge Roofline</h3>
                <p className="text-gray-600 font-medium">High-ridge roofline designs for better natural airflow.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Layout size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">Planned Layout</h3>
                <p className="text-gray-600 font-medium">Layout planned around milking parlour and BMC placement, not added as an afterthought.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">End-to-End Execution</h3>
                <p className="text-gray-600 font-medium">Design + construction handled end-to-end, quotation within 24–48 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Related Sheds (Internal Linking) ---------------- */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Explore More Animal Husbandry Sheds</h3>
            <p className="text-gray-600 font-medium mb-6">
              Expanding your farm beyond dairy? We also specialize in constructing elevated and well-ventilated <Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/" className="text-[#d35400] hover:underline">Goat Farm Sheds</Link> for optimal herd health, as well as advanced <Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/" className="text-[#d35400] hover:underline">Poultry Farm Sheds</Link> designed for both broiler and layer operations.
            </p>
          </div>
        </section>

        {/* ---------------- 8. FAQs ---------------- */}
        <section className="py-6 lg:py-12 bg-[#faf9f6]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#2d3436] text-center mb-16">Frequently Asked <span className="font-serif text-[#e67e22]">Questions</span></h2>
            
            <div className="space-y-6">
              {[
                { q: "What is the minimum shed size you build?", a: "1440 sq.ft in Tamil Nadu and 2400 sq.ft in other states." },
                { q: "Which is better — tie-stall or free-stall layout?", a: "It depends on your herd size and milking method. Free-stall suits larger herds with machine milking; tie-stall works well for smaller herds with manual milking." },
                { q: "Why is roof height important for a dairy shed?", a: "A higher ridge height can support better natural airflow and ventilation within the barn. The appropriate height depends on shed width, layout, climate, and site conditions." },
                { q: "Can the shed be built with a milking parlour connection?", a: "Yes — the layout can be planned with a direct connection to a milking parlour and Bulk Milk Cooler (BMC) area." },
                { q: "Do you build outside Tamil Nadu?", a: "Yes — KPN serves clients pan-India, with strong existing demand from Maharashtra, Telangana, and Karnataka." },
                { q: "How long does construction take?", a: "Typically 3–5 weeks depending on shed size and site conditions." }
              ].map((faq, i) => (
                <details name='faq' key={i} className="group border-b border-gray-200 pb-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-xl text-[#2d3436] list-none">
                    {faq.q}
                    <span className="transform transition-transform duration-300 group-open:-rotate-180 text-[#d35400]">
                      <ChevronDown size={24} />
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-500 font-medium leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 9. Call to Action ---------------- */}
        <section className="py-6 lg:py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/animal1.webp" alt="Interior walkway of an animal shed with green slatted flooring and mesh pens" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a dairy shed built around your herd and <span className="font-serif font-medium text-[#f39c12]">milking routine?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-3xl mx-auto">
              Get a suitable shed design and quotation within 24–48 hours.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <QuoteButton className="bg-[#f39c12] text-[#111] font-bold text-base py-3 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(243,156,18,0.4)] flex items-center justify-center cursor-pointer whitespace-nowrap">
                Get a Free Quote
              </QuoteButton>
              <a id="page-a-134" href="tel:+919788770786" className="border-2 border-white hover:border-[#f39c12] text-white hover:text-[#f39c12] font-bold text-base py-3 px-8 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                <Phone size={20} /> Call +91 97887 70786
              </a>
              <a id="page-a-133" href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold text-base py-3 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 cursor-pointer border-2 border-[#25D366] whitespace-nowrap">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
