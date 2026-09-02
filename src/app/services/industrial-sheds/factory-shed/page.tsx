import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, ArrowRight, Check, Box, Factory, Settings, Wind } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/services/industrial-sheds/factory-shed/",
  },
  title: 'Factory Shed Construction India | Industrial Shed Contractors | KPN',
  description: 'KPN builds factory sheds across India with steel and PEB structures, durable roofing, and in-house engineering. 10-year warranty. Get a free quote.',
  keywords: 'Factory Shed Contractors India',
};

export default function FactoryShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://kpnroofingsheds.com/services/industrial-sheds/factory-shed/#webpage",
          "url": "https://kpnroofingsheds.com/services/industrial-sheds/factory-shed/",
          "name": "Factory Shed Construction India | Industrial Shed Contractors | KPN",
          "description": "KPN builds factory sheds across India with steel and PEB structures, durable roofing, and in-house engineering. 10-year warranty. Get a free quote.",
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
                "name": "Industrial Sheds",
                "item": "https://kpnroofingsheds.com/services/industrial-sheds/"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Factory Shed",
                "item": "https://kpnroofingsheds.com/services/industrial-sheds/factory-shed/"
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
            "@id": "https://kpnroofingsheds.com/services/industrial-sheds/factory-shed/#service",
            "name": "Factory Shed",
            "description": "Durable factory shed construction solutions designed for manufacturing units, industrial facilities and production operations.",
            "url": "https://kpnroofingsheds.com/services/industrial-sheds/factory-shed/",
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
            "serviceType": "Factory Shed Construction",
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
      {/* ---------------- 1. Hero Section ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/factory7.webp" 
            alt="Factory Shed — KPN" 
            fill sizes="100vw" 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full mt-20 text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            Industrial Roofing Solutions
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Factory Shed <br />
            
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link id="page-Link-162" href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link id="page-Link-163" href="/services/industrial-sheds/" className="hover:text-white transition-colors">Industrial Sheds</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Factory Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 1.5 Intro Section ---------------- */}
        <section className="py-6 lg:py-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-8 leading-tight">
                Steel & PEB Industrial Sheds with <span className="font-serif text-[#e67e22] italic">KPN Roofing</span>
              </h2>
              <div className="text-lg text-gray-600 mb-10 leading-relaxed space-y-4 font-medium">
                <p>KPN Roofing Shed designs and builds factory sheds across India for manufacturing, production, storage, workshops, and industrial operations.</p>
                <p>Each factory shed is planned around your plot size, machinery layout, production flow, storage requirements, roof height, ventilation, and future expansion needs.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton className="bg-[#d35400] hover:bg-[#e67e22] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 text-center text-lg inline-flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </QuoteButton>
                <a id="page-a-164" href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="bg-[#2d3436] hover:bg-[#1a1e1f] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg hover:-translate-y-1 cursor-pointer">
                  <MessageCircle size={24} /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/services/factory6.webp" alt="Factory Shed India — KPN" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e67e22]/20 to-transparent"></div>
            </div>
          </div>
        </section>
        
        {/* ---------------- 2. Specifications (Split Layout) ---------------- */}
        <section className="py-6 lg:py-8 px-6 max-w-7xl mx-auto border-b border-orange-900/10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Highlight Box */}
            <div className="w-full lg:w-5/12">
              <div className="bg-gradient-to-br from-[#2c3e50] to-[#1a252f] rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d35400]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
                  Specifications
                </h2>
                <div className="space-y-8 relative z-10">
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Shed Width</p>
                    <p className="text-xl font-bold text-[#f1c40f]">Small: 20–40 ft | Medium: 40–60 ft | Large: 60+ ft</p>
                    <p className="text-gray-300 text-sm mt-1">Clear-span width based on footprint.</p>
                  </div>
                  <hr className="border-white/10" />
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Roof Height</p>
                    <p className="text-lg font-medium text-gray-200">Standard 20–30 feet; high-clearance 30–35 feet.</p>
                  </div>
                  <hr className="border-white/10" />
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Frame / Bay Spacing</p>
                    <p className="text-lg font-medium text-gray-200">Approximately 5–6 metres.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <Shield size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">10-Year Warranty</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    10-year warranty on pipes and roofing sheets, with free repair support for covered damage as per applicable terms.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <MapPin size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Pan-India Coverage</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    We deliver and construct premium factory shed projects across the entire country.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all sm:col-span-2">
                  <Wrench size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Project Execution</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Confirmed after site inspection, load calculation, and engineering design based on your custom requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- 3. Applications / Layouts ---------------- */}
        <section className="py-6 lg:py-8 overflow-hidden bg-[#fffdfa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 mb-24">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">Common Factory <span className="font-serif text-[#e67e22] italic">Applications</span></h2>
                <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                  <p>KPN factory sheds can be planned for different industrial requirements, including manufacturing units, engineering factories, and fabrication units.</p>
                  <p>The final shed design depends on the business operation, machinery, storage requirements, available plot area, and future expansion plans.</p>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                 <div className="absolute inset-0 bg-[#3498db]/20 rounded-3xl transform rotate-2 scale-105"></div>
                 <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl">
                   <Image src="/images/services/factory1.webp" alt="Factory Shed Applications" fill sizes="100vw" className="object-cover" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 3. Design & Construction Features ---------------- */}
        <section className="py-6 lg:py-8 bg-[#fffdfa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Craftsmanship</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Design & Construction <span className="font-serif text-[#e67e22] italic">Features</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Clear-Span Layouts", desc: "To provide usable floor space for production, machinery, storage, and movement", icon: <Box /> },
                { title: "Ventilation Systems", desc: "Including ridge ventilators, turbo ventilators, exhaust fans, and side louvers", icon: <Wind /> },
                { title: "Durable Roofing", desc: "Designed to protect materials, machinery, and finished goods from rain, dust, and moisture", icon: <Shield /> },
                { title: "Structural Framing", desc: "Designed around machinery dimensions, lifting equipment, overhead cranes, and maintenance access", icon: <CheckCircle2 /> },
                { title: "Flexible Roof Height", desc: "Based on the operational requirements of the factory", icon: <Wrench /> },
                { title: "Flexible Bay Spacing", desc: "Designed to suit heavy industrial equipment and machinery placement", icon: <CheckCircle2 /> }
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

        {/* ---------------- 4. Common Uses ---------------- */}
          <section className="py-6 lg:py-8 bg-[#f0f4f8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Versatility</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Industries <span className="font-serif text-[#3498db] italic">Served</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">KPN factory sheds can be planned for different industrial requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Manufacturing units",
                "Engineering factories",
                "Automobile units",
                "Machine workshops",
                "Assembly plants",
                "Packaging units"
              ].map((use, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-blue-900/5 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3498db] shrink-0">
                    <Check size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#2d3436]">{use}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 4. How to Choose (Curved Path Timeline) ---------------- */}
        <section className="py-6 lg:py-8 bg-[#2d3436] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">How to Choose the <span className="font-serif text-[#e67e22] italic">Right Shed</span></h2>
              <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">Choosing the right factory shed depends on your production requirements and available site conditions. Consider the following before construction:</p>
            </div>

            <div className="relative">
              {/* Curved SVG Wavy Pattern Line (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-48 -translate-x-1/2 z-0 opacity-70" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='192' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 0 C160 100 32 300 96 400' stroke='%23f39c12' stroke-width='32' fill='none' stroke-linecap='round' /%3E%3C/svg%3E")`,
                     backgroundRepeat: 'repeat-y',
                     backgroundPosition: 'center',
                     maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                   }}>
              </div>
              
              {/* Straight Line for Mobile */}
              <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-white/10 z-0"></div>
              
              <div className="space-y-16 md:space-y-24 relative z-10">
                {[
                  { step: "01", title: "Measure Area", desc: "Measure the available plot area and determine the required shed length, width, and height", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                  { step: "02", title: "Plan Layout", desc: "Plan the internal layout around raw material storage, production, finished goods storage, and dispatch", color: "text-[#f39c12]", bg: "bg-[#f39c12]" },
                  { step: "03", title: "Clear-Span Width", desc: "Choose the clear-span width based on machinery footprint and required working space", color: "text-[#3498db]", bg: "bg-[#3498db]" },
                  { step: "04", title: "Roof Height", desc: "Plan sufficient roof height for machinery, lifting equipment, ventilation, and maintenance access", color: "text-[#e74c3c]", bg: "bg-[#e74c3c]" },
                  { step: "05", title: "Lighting & Ventilation", desc: "Prioritize natural lighting and ventilation for continuous-operation work areas", color: "text-[#9b59b6]", bg: "bg-[#9b59b6]" },
                  { step: "06", title: "Loading Area", desc: "Plan a covered loading and unloading area for smoother material movement", color: "text-[#2ecc71]", bg: "bg-[#2ecc71]" },
                  { step: "07", title: "Future Expansion", desc: "Consider future machinery or production-line expansion before finalizing the shed dimensions", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                ].map((item, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Node on the Line */}
                    <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 md:-translate-x-1/2 rounded-full border-4 border-[#2d3436] shadow-xl flex items-center justify-center z-20" style={{ backgroundColor: '#ffffff' }}>
                      <div className={`w-4 h-4 rounded-full ${item.bg}`}></div>
                    </div>

                    {/* Left/Right Empty Space for Desktop */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 flex justify-start">
                      <div className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/10 transition-all shadow-xl group w-full max-w-lg ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                        <div className="flex items-center gap-6 mb-6">
                          <span className={`text-4xl md:text-5xl font-bold opacity-30 group-hover:opacity-100 transition-opacity ${item.color}`}>
                            {item.step}
                          </span>
                          <h4 className={`text-2xl font-bold text-white`}>{item.title}</h4>
                        </div>
                        <p className="text-gray-300 font-medium leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 5. Permits & Approvals ---------------- */}
        <section className="py-6 lg:py-8 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">Permits & Approvals <br/><span className="font-serif text-gray-500 italic">What You Need to Know</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Factory shed requirements can vary depending on the project location, plot type, building use, and local authority regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">KPN can guide you on the applicable requirements.</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">We help you understand any approvals that may be needed for your project.</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/images/services/factory2.webp" alt="Factory Shed Compliance India — KPN" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d35400]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[80%]">
                <FileText className="text-[#d35400] mb-3" size={32} />
                <p className="font-bold text-[#2d3436]">Expert Guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 6. Timeline Layout ---------------- */}
        <section className="py-6 lg:py-8 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Timeline</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How Long Does a <br/><span className="font-serif text-gray-500 italic">Factory Shed Take?</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                The completion time for a factory shed depends on the shed size, structural design, material requirements, site conditions, and project complexity.
              </p>
              <div className="bg-[#eef5f9] border border-[#3498db]/20 rounded-2xl p-6 flex items-center gap-6">
                <div className="bg-[#3498db] text-white w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2d3436]">Custom Timeline</h4>
                  <p className="text-gray-600 font-medium text-lg mt-1">KPN plans the fabrication and installation process according to the specific project requirements. The actual timeline may vary based on engineering requirements, material availability, site readiness, and installation conditions.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/images/services/factory4.webp" alt="Factory Shed — KPN" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#3498db]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* ---------------- 6.5 Why KPN Is Different ---------------- */}
        <section className="py-6 lg:py-8 bg-[#fffdfa] border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6">Why KPN Is <span className="font-serif text-[#e67e22] italic">Different</span></h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">
              
              {/* Left Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Production-Focused</h3>
                  <p className="text-gray-600 font-medium">Factory shed design is planned around production flow, machinery placement, storage requirements, loading areas, and future expansion.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Clear-Span Design</h3>
                  <p className="text-gray-600 font-medium">Wide clear-span layouts can provide more usable internal floor space for machinery, production activities, storage, and material movement.</p>
                </div>
              </div>
              
              {/* Center Image */}
              <div className="w-full lg:w-1/3 relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl z-0">
                <Image src="/images/services/factory6.webp" alt="Why KPN" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#e67e22]/20 mix-blend-multiply"></div>
              </div>
              
              {/* Right Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Ventilation & Lighting</h3>
                  <p className="text-gray-600 font-medium">Ridge ventilators, turbo ventilators, exhaust fans, side louvers, and clearstory windows can be incorporated.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">End-to-End Support</h3>
                  <p className="text-gray-600 font-medium">KPN supports the project from site inspection and engineering design through fabrication and final installation.</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ---------------- 7. FAQ ---------------- */}
        <section className="py-6 lg:py-8 bg-[#faf9f6]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#2d3436] text-center mb-16">Frequently Asked <span className="font-serif text-[#e67e22] italic">Questions</span></h2>
            
            <div className="space-y-6">
              {[
                { q: "What is a factory shed?", a: "A factory shed is a steel, PEB, or prefabricated industrial structure used for manufacturing, production, storage, workshops, and other industrial operations." },
                { q: "Which type of shed is suitable for a factory?", a: "Steel and PEB factory sheds are suitable for many industrial applications because they can provide flexible layouts, wide clear-span areas, and scope for future expansion. The appropriate structure depends on the site, machinery, production requirements, and project design." },
                { q: "What height is suitable for a factory shed?", a: "A standard factory shed may have a roof height of around 20–30 feet, while high-clearance requirements may extend to approximately 30–35 feet. The final height depends on machinery, ventilation, lifting equipment, storage, and operational requirements." },
                
                { q: "Does KPN provide factory shed construction across India?", a: "Yes. KPN Roofing Shed provides factory shed construction, industrial roofing, steel shed fabrication, and PEB shed installation services across India, subject to project requirements and site conditions." }
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

        {/* ---------------- 8. CTA ---------------- */}
        <section className="py-6 lg:py-8 text-center text-white relative overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/services/factory8.webp" alt="Factory Shed — KPN" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a <span className="font-serif font-medium text-[#f39c12] italic">Factory Shed?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-12 max-w-3xl mx-auto">
              Talk to KPN Roofing Shed — get a site visit, suitable shed design, and a project-specific quotation based on your factory requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <QuoteButton className="w-full sm:w-auto bg-[#f39c12] text-[#111] font-bold text-xl py-4 px-12 rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(243,156,18,0.4)] mb-3 flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </QuoteButton>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a id="page-a-165" href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white font-bold text-xl py-4 px-12 rounded-full transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a id="page-a-166" href="tel:+919788770786" className="w-full sm:w-auto border-2 border-white hover:border-[#f39c12] text-white hover:text-[#f39c12] font-bold text-xl py-4 px-12 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer">
                  <Phone size={24} /> Call Now
                </a>
              </div>
            </div>
            
            <p className="text-gray-300 font-medium text-lg">
              <span className="text-white font-bold">50% booking to start — transparent payment plan with no hidden costs.</span> 10-year warranty on pipes and roofing sheets.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
