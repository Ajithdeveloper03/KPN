import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check, Wind, Layout, ThermometerSun } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/",
  },
  title: 'Poultry Shed Manufacturers India | KPN Roofing Sheds',
  description: 'Poultry shed manufacturers across India — East-West orientation, curtain-drop walls & deep litter/cage layout planning. Design quote in 24–48 hrs.',
  keywords: 'Poultry Shed Manufacturers India, Farm Infrastructure Solutions India',
};

export default function PoultryFarmShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/#webpage",
            "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/",
            "name": "Poultry Shed Manufacturers India | KPN Roofing Shed",
            "description": "Poultry shed manufacturers across India. Custom ventilation-first broiler and layer sheds built around airflow, orientation, and bird density. Get a free quote.",
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
                "name": "Poultry Farm Shed",
                "item": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/"
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
            "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/#service",
            "name": "Poultry Farm Shed",
            "description": "Poultry shed construction solutions designed for proper ventilation, protection and efficient poultry farming operations across India.",
            "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/",
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
            "serviceType": "Poultry Farm Shed Construction",
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
                "name": "Deep litter or cage system — which is better?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on whether the operation is broiler or layer. Deep litter is common for broilers; cage systems are common for layers due to higher stocking density."
                }
              },
              {
                "@type": "Question",
                "name": "Why does shed orientation matter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An East-West shed orientation can help reduce direct solar exposure on the longer sides of the building during the day, supporting better heat-management planning. Actual orientation should also consider the site, prevailing conditions, access, and surrounding structures."
                }
              },
              {
                "@type": "Question",
                "name": "Can the shed include fogger and cooling pad systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — fogger and cooling-pad provisions can be incorporated into the shed design, particularly where additional heat-management measures are required based on regional climate and shed configuration."
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
                  "text": "Typically 2–4 weeks depending on shed size and site conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How do you plan a poultry shed based on bird capacity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shed dimensions and internal layout are planned according to flock size, bird type, housing system, equipment requirements, and available site area. KPN can provide a customized shed design based on the client's flock capacity and site details."
                }
              }
            ]
          })
        }}
      />

      {/* ---------------- 1. Hero / H1 Section ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/poultry-2.webp" 
            alt="Deep-litter poultry shed with soil flooring amid coconut trees" 
            fill sizes="100vw" 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/60 sm:bg-black/70 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full mt-20 text-center">
          {/* <span className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            Agriculture & Animal Husbandry
          </span> */}
          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Poultry Shed Manufacturers India — <br />
            <span className="text-[#f39c12] font-serif font-normal">Ventilation-First Broiler & Layer Sheds</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-12 max-w-3xl mx-auto">
            Custom poultry shed construction across Tamil Nadu and North India, planned around airflow, orientation, and bird density.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link id="page-Link-142" href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link id="page-Link-143" href="/services/" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Poultry Farm Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 2. Intro Section ---------------- */}
        <section className="py-6 lg:py-12 bg-white overflow-hidden border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-8 leading-tight">
                Built Around <span className="font-serif text-[#e67e22]">Airflow & Heat Management</span>
              </h2>
              <div className="text-lg text-gray-600 mb-10 leading-relaxed space-y-4 font-medium">
                <p>Poultry shed performance can be affected by factors such as ammonia build-up in the litter and heat load from direct sun on the roof.</p>
                <p>At KPN Roofing Sheds, our poultry shed designs are planned around an East-West orientation to reduce direct sun exposure, curtain-drop side walls that can be adjusted for weather and airflow, and layout choices — deep litter or cage system — matched to whether the shed is for broilers or layers.</p>
                <p>The shed structure itself uses Apollo-brand steel, with roofing selected to suit the region's heat and rainfall pattern.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/services/poultry.webp" alt="Poultry shed under construction with brick end wall and soil flooring" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e67e22]/20 to-transparent"></div>
            </div>
          </div>
        </section>
        
        {/* ---------------- 3. Specifications & Pricing ---------------- */}
        <section className="py-6 lg:py-12 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#2c3e50] to-[#1a252f] rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden text-white flex flex-col md:flex-row gap-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d35400]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="md:w-1/2 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Specifications & Pricing</h2>
                <p className="text-lg font-medium text-gray-300 leading-relaxed">
                  Pricing depends on shed size, bird capacity, and system type (deep litter or cage).
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 text-gray-200">
                    <MapPin className="text-[#f39c12] shrink-0" />
                    <span><strong className="text-white">Tamil Nadu:</strong> Minimum 1440 sq.ft project size</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-200">
                    <MapPin className="text-[#f39c12] shrink-0" />
                    <span><strong className="text-white">Other States:</strong> Minimum 2400 sq.ft project size</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 relative z-10 flex flex-col justify-center bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-xl font-bold text-white mb-6 text-center">
                  Get a customized quote and shed design within 24–48 hours based on your flock size and site details.
                </p>
                <div className="flex justify-center">
                  <QuoteButton className="bg-[#d35400] hover:bg-[#e67e22] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 text-center text-lg">
                    Request Pricing
                  </QuoteButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 4. Design & Construction Features ---------------- */}
        <section className="py-6 lg:py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Design & Construction <span className="font-serif text-[#e67e22]">Features</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "East-West Orientation", desc: "Open-span orientation to reduce direct sun exposure", icon: <ThermometerSun /> },
                { title: "Adjustable Side Walls", desc: "Curtain-drop side walls for weather and airflow control", icon: <Wind /> },
                { title: "Brooder Ring Section", desc: "Dedicated section for day-old chick management", icon: <CheckCircle2 /> },
                { title: "Deep Litter or Cage", desc: "Configured based on broiler vs layer operation", icon: <Layout /> },
                { title: "Fogger & Cooling Pad", desc: "Line provided for peak-summer temperature control", icon: <Wind /> },
                { title: "Manure Pit", desc: "Manure pit with isolated access point for sanitation", icon: <Wrench /> }
              ].map((feature, i) => (
                <div key={i} className="bg-[#faf9f6] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-900/5 flex flex-col items-start gap-4">
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

        {/* ---------------- 5. Deep Litter vs Cage System ---------------- */}
        <section className="py-6 lg:py-12 bg-[#fffdfa] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-4">Deep Litter vs <span className="font-serif text-[#3498db]">Cage System</span></h2>
              <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
                Which system fits depends on whether the shed is for broilers or layers:
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#f0f4f8] text-[#2c3e50] font-bold text-lg border-b border-gray-200">
                    <th className="p-6 w-1/4">Factor</th>
                    <th className="p-6 w-3/8 border-l border-gray-200 text-[#d35400]">Deep Litter System</th>
                    <th className="p-6 w-3/8 border-l border-gray-200 text-[#3498db]">Cage System</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-bold text-gray-700">Typical use</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Commonly used for broiler operations</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Commonly used for layer operations</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-bold text-gray-700">Bird movement</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Birds move freely within the litter area</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Birds are housed within individual cage sections</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-bold text-gray-700">Manure handling</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Manure mixes with litter and is cleared periodically</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Manure can be collected separately below cage sections</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-gray-700">Ventilation focus</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Important for litter moisture and shed air quality</td>
                    <td className="p-6 text-gray-600 font-medium border-l border-gray-100">Important for airflow in higher-density housing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------------- 6. How to Choose the Right Poultry Shed ---------------- */}
        <section className="py-6 lg:py-12 bg-[#2d3436] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">How to Choose the <span className="font-serif text-[#e67e22]">Right Shed</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Broiler vs Layer", desc: "Determines whether to use a deep litter or cage system layout." },
                { title: "Flock Size", desc: "Determines shed length and bird density planning." },
                { title: "Region Climate", desc: "Fogger and cooling pad recommended for high-heat zones." },
                { title: "Ventilation Priority", desc: "Curtain-drop design and shed orientation become especially important in higher-density housing setups." },
                { title: "Bird Type & Age", desc: "Broiler, layer, breeder, and chick-rearing requirements can influence internal layout and equipment planning." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 7. Why KPN for Your Poultry Shed ---------------- */}
        <section className="py-6 lg:py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Why KPN for Your <span className="font-serif text-[#e67e22]">Poultry Shed</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#faf9f6] p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={32} className="text-[#d35400] mb-4" />
                <p className="text-gray-700 font-bold text-lg">East-West orientation planning built into the design, not an afterthought.</p>
              </div>
              <div className="bg-[#faf9f6] p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={32} className="text-[#d35400] mb-4" />
                <p className="text-gray-700 font-bold text-lg">End-to-end farm infrastructure handling — shed planning, structural construction, ventilation provisions, and layout finalized as one project, not separate vendors.</p>
              </div>
              <div className="bg-[#faf9f6] p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={32} className="text-[#d35400] mb-4" />
                <p className="text-gray-700 font-bold text-lg">Curtain-drop side walls for adjustable weather control.</p>
              </div>
              <div className="bg-[#faf9f6] p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={32} className="text-[#d35400] mb-4" />
                <p className="text-gray-700 font-bold text-lg">Layout matched to broiler or layer operation from the start.</p>
              </div>
              <div className="bg-[#faf9f6] p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <CheckCircle2 size={32} className="text-[#d35400] mb-4" />
                <p className="text-gray-700 font-bold text-lg">Design + construction handled end-to-end, quotation within 24–48 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Related Sheds (Internal Linking) ---------------- */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Explore More Animal Husbandry Sheds</h3>
            <p className="text-gray-600 font-medium mb-6">
              Expanding your agricultural operations? If you are also venturing into dairy or goat farming, we specialize in constructing high-quality <Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="text-[#d35400] hover:underline">Cow & Dairy Farm Sheds</Link> customized for herd size and feeding requirements. We also build elevated and well-ventilated <Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/" className="text-[#d35400] hover:underline">Goat Farm Sheds</Link> for optimal herd health.
            </p>
          </div>
        </section>

        {/* ---------------- 8. FAQ ---------------- */}
        <section className="py-6 lg:py-12 bg-[#faf9f6]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#2d3436] text-center mb-16">Frequently Asked <span className="font-serif text-[#e67e22]">Questions</span></h2>
            
            <div className="space-y-6">
              {[
                { q: "What is the minimum shed size you build?", a: "1440 sq.ft in Tamil Nadu and 2400 sq.ft in other states." },
                { q: "Deep litter or cage system — which is better?", a: "It depends on whether the operation is broiler or layer. Deep litter is common for broilers; cage systems are common for layers due to higher stocking density." },
                { q: "Why does shed orientation matter?", a: "An East-West shed orientation can help reduce direct solar exposure on the longer sides of the building during the day, supporting better heat-management planning. Actual orientation should also consider the site, prevailing conditions, access, and surrounding structures." },
                { q: "Can the shed include fogger and cooling pad systems?", a: "Yes — fogger and cooling-pad provisions can be incorporated into the shed design, particularly where additional heat-management measures are required based on regional climate and shed configuration." },
                { q: "Do you build outside Tamil Nadu?", a: "Yes — KPN serves clients pan-India, with strong existing demand from Maharashtra, Telangana, and Karnataka." },
                { q: "How long does construction take?", a: "Typically 2–4 weeks depending on shed size and site conditions." },
                { q: "How do you plan a poultry shed based on bird capacity?", a: "Shed dimensions and internal layout are planned according to flock size, bird type, housing system, equipment requirements, and available site area. KPN can provide a customized shed design based on the client's flock capacity and site details." }
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

        {/* ---------------- 9. High Impact CTA ---------------- */}
        <section className="py-6 lg:py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/services/poultry-2.webp" alt="Deep-litter poultry shed with soil flooring amid coconut trees" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a poultry shed built around airflow and <span className="font-serif font-medium text-[#f39c12]">flock density?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-3xl mx-auto">
              Get a suitable shed design and quotation within 24–48 hours.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <QuoteButton className="bg-[#f39c12] text-[#111] font-bold text-base py-3 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(243,156,18,0.4)] flex items-center justify-center cursor-pointer whitespace-nowrap">
                Get a Free Quote
              </QuoteButton>
              <a id="page-a-146" href="tel:+919788770786" className="border-2 border-white hover:border-[#f39c12] text-white hover:text-[#f39c12] font-bold text-base py-3 px-8 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                <Phone size={20} /> Call +91 97887 70786
              </a>
              <a id="page-a-145" href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white font-bold text-base py-3 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 cursor-pointer border-2 border-[#25D366] whitespace-nowrap">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
