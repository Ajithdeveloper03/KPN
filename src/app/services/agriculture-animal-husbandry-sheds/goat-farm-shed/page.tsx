import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check, Wind, Droplets, Home, ArrowRight, Crosshair, XCircle, Info, Layers, Layout, Settings, Ruler, PenTool } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/goat-farm-shed/",
  },
  title: 'Goat Farm Shed Builders India | KPN Roofing Sheds',
  description: 'Goat farm shed builders in India — elevated slatted flooring, cross-ventilation design & in-house flooring with warranty. Get a custom quote in 24–48 hrs.',
  keywords: 'Goat Farm Shed Builders India',
};

export default function GoatFarmShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      {/* ---------------- Schemas ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/goat-farm-shed/#webpage",
          "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/goat-farm-shed/",
          "name": "Goat Farm Shed Builders India | KPN Roofing Shed",
          "description": "Custom goat shed construction across Tamil Nadu and North India, engineered for herd health with elevated slatted flooring and proper ventilation.",
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
                "name": "Goat Farm Shed",
                "item": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/goat-farm-shed/"
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
            "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/goat-farm-shed/#service",
            "name": "Goat Farm Shed Builders India",
            "description": "Custom goat shed construction across Tamil Nadu and North India, engineered for herd health, elevated slatted flooring, and proper ventilation.",
            "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/goat-farm-shed/",
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
            "serviceType": "Goat Farm Shed Construction",
            "offers": {
              "@type": "Offer",
              "price": "599",
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
                "name": "What is the cost per sq.ft for a goat farm shed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rs 599/sq.ft for Basic, Rs 699/sq.ft for MS, and Rs 799/sq.ft for Premium specification, depending on flooring and roofing material."
                }
              },
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
                "name": "Why elevated slatted flooring instead of ground flooring?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It helps maintain a drier floor, supports better shed hygiene, and reduces the cleaning effort associated with waste accumulation."
                }
              },
              {
                "@type": "Question",
                "name": "Is the slatted flooring outsourced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No — it's manufactured in-house at our Coimbatore facility using virgin raw material (not recycled), and comes with a 3-year replacement plus 10-year warranty."
                }
              },
              {
                "@type": "Question",
                "name": "What warranty does the slatted mat carry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "3-year replacement warranty plus a 10-year overall warranty, with free repair support within the first year, as per applicable warranty terms."
                }
              },
              {
                "@type": "Question",
                "name": "How long does construction take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically 2–3 weeks depending on shed size and site conditions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you build outside Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — KPN serves clients pan-India, with strong existing demand from Maharashtra, Telangana, and Karnataka."
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
            src="/images/goat5.webp" 
            alt="Teal elevated goat shed on purple steel stilts with open flooring below" 
            fill sizes="100vw" 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/60 sm:bg-black/70 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-20 text-center">
          {/* <span className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            Goat Farm Shed Builders India
          </span> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Goat Farm Shed Builders India - Elevated, Ventilated, <br />
            <span className="text-[#f39c12] font-serif font-normal italic">Built to Last.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Custom goat shed construction across Tamil Nadu and North India, engineered for herd health, not just roofing.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link id="page-Link-130" href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link id="page-Link-131" href="/services/" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Goat Farm Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 2. Intro Section ---------------- */}
        <section className="py-6 lg:py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Moisture Management</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-6 leading-tight">
                Engineered for <span className="font-serif text-[#e67e22]">Herd Health</span>
              </h2>
              <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4 font-medium">
                <p>Effective moisture management is an important part of a well-designed goat farm shed, helping maintain a cleaner and drier environment for the herd.</p>
                <p>At KPN Roofing Sheds, our goat farm structures feature elevated slatted flooring with 2–3 ft ground clearance, a dedicated dry zone for kids, and natural cross-ventilation to support better airflow and help manage dampness and ammonia build-up.</p>
                <p>As trusted goat farm shed builders in India, we use Apollo-brand galvanized steel for a durable, corrosion-resistant structure designed to perform reliably through monsoon conditions across Tamil Nadu and North India.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton className="bg-[#d35400] hover:bg-[#e67e22] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 text-center text-lg inline-flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </QuoteButton>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/goat1.webp" alt="Elevated goat farm shed with green-and-white cladding amid coconut palms" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e67e22]/20 to-transparent"></div>
            </div>
          </div>
        </section>
        
        {/* ---------------- 3. Specifications & Pricing ---------------- */}
        <section className="py-6 lg:py-12 px-6 max-w-7xl mx-auto border-t border-orange-900/10">
          <div className="text-center mb-12">
            <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Transparent Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Shed Construction <span className="font-serif text-[#e67e22]">Tiers</span></h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Pricing is per sq.ft and scales with flooring and roofing specifications. <br/> <strong className="text-black">Minimum project size:</strong> 1440 sq.ft (Tamil Nadu), 2400 sq.ft (other states).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-100 text-gray-600 font-bold px-4 py-1 rounded-bl-xl text-sm">Economy</div>
              <h3 className="text-2xl font-bold text-[#2d3436] mb-2">Basic</h3>
              <div className="text-[#e67e22] text-4xl font-extrabold mb-6">Rs 599<span className="text-lg text-gray-500 font-medium">/sq.ft</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">Standard steel frame</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">GI sheet roofing</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">Ground-level flooring</span></li>
              </ul>
            </div>
            
            {/* MS Tier */}
            <div className="bg-gradient-to-b from-[#2c3e50] to-[#1a252f] rounded-3xl p-8 border border-[#34495e] shadow-2xl hover:-translate-y-2 transition-all relative transform md:scale-105 z-10 text-white">
              <div className="absolute top-0 right-0 bg-[#e67e22] text-white font-bold px-4 py-1 rounded-bl-xl text-sm shadow-md">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">MS (Mild Steel)</h3>
              <div className="text-[#f39c12] text-4xl font-extrabold mb-6">Rs 699<span className="text-lg text-gray-400 font-medium">/sq.ft</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" size={20}/> <span className="text-gray-200 font-medium">Reinforced MS frame</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" size={20}/> <span className="text-gray-200 font-medium">Upgraded roofing</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" size={20}/> <span className="text-gray-200 font-medium">Elevated slatted flooring option</span></li>
              </ul>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#e74c3c]/10 text-[#e74c3c] font-bold px-4 py-1 rounded-bl-xl text-sm">Best Protection</div>
              <h3 className="text-2xl font-bold text-[#2d3436] mb-2">Premium</h3>
              <div className="text-[#e67e22] text-4xl font-extrabold mb-6">Rs 799<span className="text-lg text-gray-500 font-medium">/sq.ft</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">Apollo-brand steel frame</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">Heat-reflective sheets</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">In-house slatted flooring</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20}/> <span className="text-gray-700 font-medium">10-yr warranty</span></li>
              </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Elevated Slatted Flooring Bay", desc: "Raised platform design with a dedicated drainage gap below for easy waste management.", icon: <Layers /> },
                { title: "Virgin-Material Slatted Floor", desc: "In-house manufactured virgin-material slatted flooring (not recycled) — 3-year replacement + 10-year warranty.", icon: <Shield /> },
                { title: "Kid Creep Area", desc: "Separate low-traffic zone for newborn kids, keeping them safe and away from adult movement.", icon: <Layout /> },
                { title: "Dry Roughage & Fodder Rack", desc: "Wall-mounted fodder racks to keep feed off the damp floor, minimizing waste and contamination.", icon: <Droplets /> },
                { title: "Cross-Ventilation Ridge", desc: "Purpose-built ridge design to control ammonia build-up, humidity, and improve airflow.", icon: <Wind /> },
                { title: "Predator-Proof Boundary", desc: "Detailed boundary reinforcement at the shed base to protect the herd from predators.", icon: <Crosshair /> }
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

        {/* ---------------- 5. Slatted Mat — Our In-House Specialty ---------------- */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#2d3436] rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#e67e22]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="lg:w-1/2 relative z-10 text-white">
                <span className="text-[#f39c12] font-bold tracking-widest uppercase text-sm mb-4 block">Quality Control</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Slatted Mat — <br/><span className="font-serif text-[#f39c12]">Our In-House Specialty</span></h2>
                <p className="text-gray-300 text-lg mb-8 font-medium leading-relaxed">
                  Our slatted flooring is manufactured in-house at our Coimbatore facility using virgin raw material, not recycled plastic.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" /> <span className="text-gray-200 font-medium text-lg">Made in-house at our Coimbatore facility</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" /> <span className="text-gray-200 font-medium text-lg">Virgin raw material, not recycled</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" /> <span className="text-gray-200 font-medium text-lg">Slotted design lets dung and urine pass through</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" /> <span className="text-gray-200 font-medium text-lg">Reduces cleaning effort compared to solid flooring</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" /> <span className="text-gray-200 font-medium text-lg">Backed by 3-year replacement + 10-year warranty</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="text-[#f39c12] shrink-0 mt-0.5" /> <span className="text-gray-200 font-medium text-lg">Free repair support within 1 year</span></li>
                </ul>
              </div>

              <div className="lg:w-1/2 w-full h-[400px] relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white/10">
                <Image src="/images/goat4.webp" alt="Goat farm slatted flooring installed inside KPN shed" fill sizes="100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 6. Ground Flooring vs KPN Elevated Slatted Flooring ---------------- */}
        <section className="py-6 lg:py-12 bg-[#f8f9fc] border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Comparison</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Ground Flooring vs <br/><span className="font-serif text-[#3498db]">KPN Elevated Slatted Flooring</span></h2>
            </div>
            
            <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2d3436] text-white">
                    <th className="p-6 font-bold text-lg w-1/4">Factor</th>
                    <th className="p-6 font-bold text-lg w-1/3 border-l border-white/20 bg-[#3a4447]">Traditional Ground Flooring</th>
                    <th className="p-6 font-bold text-lg w-auto border-l border-white/20 bg-[#e67e22]">KPN Elevated Slatted Flooring</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 font-medium">
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Moisture Management</td>
                    <td className="p-6 border-l border-gray-100"><span className="text-red-500 font-bold">High</span> — dung and urine pool at floor level</td>
                    <td className="p-6 border-l border-gray-100 bg-orange-50/50"><span className="text-green-600 font-bold">Low</span> — waste drops through slats, floor stays dry</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Cleaning Effort</td>
                    <td className="p-6 border-l border-gray-100">Manual daily scraping</td>
                    <td className="p-6 border-l border-gray-100 bg-orange-50/50">Minimal — self-draining design</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Material</td>
                    <td className="p-6 border-l border-gray-100">Bare ground / concrete</td>
                    <td className="p-6 border-l border-gray-100 bg-orange-50/50">In-house virgin-material slats, 3-yr replacement + 10-yr warranty</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-[#2d3436]">Ground Clearance</td>
                    <td className="p-6 border-l border-gray-100">None</td>
                    <td className="p-6 border-l border-gray-100 bg-orange-50/50">2–3 ft, allows airflow underneath</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------------- 7. How to Choose the Right Goat Shed ---------------- */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-[#9b59b6] font-bold tracking-widest uppercase text-sm mb-4 block">Guidance</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How to Choose the <br/><span className="font-serif text-[#9b59b6]">Right Goat Shed</span></h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Herd Size</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Determines the shed length and the number of pen divisions required.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Budget Tier</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Choose between Basic / MS / Premium based on flooring and roofing specifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Region Climate</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Heat-reflective sheets are recommended for high-heat zones; extra drainage slope is required for high-rainfall regions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-[#9b59b6] flex items-center justify-center shrink-0 font-bold text-xl">4</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2d3436] mb-1">Breeding vs Dairy Goats</h4>
                      <p className="text-gray-600 font-medium leading-relaxed">Breeding operations need more kid creep space; dairy goats need easier milking access.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/goat2.webp" alt="Elevated goat shed under construction next to high-rise apartments" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#9b59b6]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 8. Why KPN for Your Goat Farm Shed ---------------- */}
        <section className="py-6 lg:py-12 bg-[#fffdfa] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6">Why KPN for Your <span className="font-serif text-[#e67e22]">Goat Farm Shed?</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Layers size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">In-House Slatted Flooring</h3>
                <p className="text-gray-600 font-medium">Not outsourced — backed by 3-yr replacement + 10-yr warranty.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">Apollo-Brand Steel</h3>
                <p className="text-gray-600 font-medium">Apollo-brand steel and sheets used for long-term corrosion resistance.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">1000+ Sheds Built</h3>
                <p className="text-gray-600 font-medium">Pan-India service including North India with massive experience.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 mx-auto flex items-center justify-center text-[#d35400] mb-6">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d3436] mb-3">End-to-End Execution</h3>
                <p className="text-gray-600 font-medium">Design + construction handled entirely by us, quotation within 24–48 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Related Sheds (Internal Linking) ---------------- */}
        <section className="py-6 lg:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Explore More Animal Husbandry Sheds</h3>
            <p className="text-gray-600 font-medium mb-6">
              Expanding your farm? If you are also looking into dairy farming, we specialize in constructing high-quality <Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="text-[#d35400] hover:underline">Cow & Dairy Farm Sheds</Link> customized for herd size and feeding requirements. We also build advanced <Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/" className="text-[#d35400] hover:underline">Poultry Farm Sheds</Link> for broiler and layer operations.
            </p>
          </div>
        </section>

        {/* ---------------- 9. FAQs ---------------- */}
        <section className="py-6 lg:py-12 bg-[#faf9f6]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#2d3436] text-center mb-16">Frequently Asked <span className="font-serif text-[#e67e22]">Questions</span></h2>
            
            <div className="space-y-6">
              {[
                { q: "What is the cost per sq.ft for a goat farm shed?", a: "Rs 599/sq.ft for Basic, Rs 699/sq.ft for MS, and Rs 799/sq.ft for Premium specification, depending on flooring and roofing material." },
                { q: "What is the minimum shed size you build?", a: "1440 sq.ft in Tamil Nadu and 2400 sq.ft in other states." },
                { q: "Why elevated slatted flooring instead of ground flooring?", a: "It helps maintain a drier floor, supports better shed hygiene, and reduces the cleaning effort associated with waste accumulation." },
                { q: "Is the slatted flooring outsourced?", a: "No — it's manufactured in-house at our Coimbatore facility using virgin raw material (not recycled), and comes with a 3-year replacement plus 10-year warranty." },
                { q: "What warranty does the slatted mat carry?", a: "3-year replacement warranty plus a 10-year overall warranty, with free repair support within the first year, as per applicable warranty terms." },
                { q: "How long does construction take?", a: "Typically 2–3 weeks depending on shed size and site conditions." },
                { q: "Do you build outside Tamil Nadu?", a: "Yes — KPN serves clients pan-India, with strong existing demand from Maharashtra, Telangana, and Karnataka." }
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

        {/* ---------------- 10. Call to Action ---------------- */}
        <section className="py-6 lg:py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/goat6.webp" alt="Blue elevated goat shed with mesh walls surrounded by coconut trees" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight">
              Ready to build a goat shed that actually <span className="font-serif font-medium text-[#f39c12]">protects your herd?</span>
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
