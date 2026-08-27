import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "src/app/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/page.tsx",
  },
  title: 'Cow & Dairy Farm Shed Contractors India | KPN Roofing Shed',
  description: 'KPN builds cow and dairy farm sheds across India with proper ventilation, milking areas, fodder storage and weather-resistant roofing. Get a free quote.',
  keywords: 'dairy farm shed contractors India, cow shed construction India',
};

export default function CowDairyFarmShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
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
                "name": "Cow / Dairy Farm Shed",
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
            "name": "Cow Dairy Farm Shed",
            "description": "Durable cow dairy farm shed construction solutions designed to provide a safe, well-ventilated and practical shelter for dairy cattle.",
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
            "serviceType": "Cow Dairy Farm Shed Construction"
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
                "name": "What type of shed is best for a cow or dairy farm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A steel-framed shed with proper ventilation, non-slip flooring, and suitable areas for feeding and milking works well for many dairy farms. The final design depends on herd size, farm layout, and operational requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What height is suitable for a dairy farm shed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A height of around 12–16 feet suits many dairy farms. Larger commercial units may require additional height depending on ventilation and cooling requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What warranty does KPN provide on dairy farm sheds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KPN provides a 10-year warranty on pipes and roofing sheets, with repair support according to the applicable warranty terms."
                }
              },
              {
                "@type": "Question",
                "name": "Does KPN build cow and dairy farm sheds outside Tamil Nadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. KPN Roofing Shed builds cow and dairy farm sheds across India, subject to site visit and project scope."
                }
              }
            ]
          })
        }}
      />
      {/* ---------------- 1. Hero Section (Fully Transparent Content) ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/animal4.webp" 
            alt="cow and dairy farm shed India — KPN" 
            fill sizes="100vw" 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full mt-20 text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            Agriculture & Animal Husbandry
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Cow & Dairy Farm Shed <br />
            
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link href="/services" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Cow & Dairy Farm Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 1.5 Intro Section ---------------- */}
        <section className="py-6 lg:py-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-8 leading-tight">
                Ventilated Dairy Shed Construction with <span className="font-serif  text-[#e67e22]">KPN Roofing</span>
              </h2>
              <div className="text-lg text-gray-600 mb-10 leading-relaxed space-y-4 font-medium">
                <p>KPN Roofing Shed designs and builds cow sheds and dairy farm sheds across India for comfortable animal housing, efficient feeding, hygienic milking, and better farm operations. Each shed is planned according to herd size, breed type, milking system, ventilation requirements, and future expansion needs.</p>
                <p>The layout can include animal housing areas, calf pens, milking parlours, feeding areas, fodder storage, and proper waste and drainage zones.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteButton className="bg-[#d35400] hover:bg-[#e67e22] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 text-center text-lg inline-flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </QuoteButton>
                <a href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="bg-[#2d3436] hover:bg-[#1a1e1f] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg hover:-translate-y-1 cursor-pointer">
                  <MessageCircle size={24} /> WhatsApp Us
                </a>
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
                    
                    <p className="text-lg font-medium text-gray-200">The final quotation depends on shed size, steel quantity, roofing type, flooring, and milking parlour requirements, provided after a site visit.</p>
                  </div>
                  <hr className="border-white/10" />
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Payment Terms</p>
                    <p className="text-lg font-medium text-gray-200">50% advance, remainder in installments as materials arrive.</p>
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
                    10-year warranty on pipes and roofing sheets, with free repair support as per applicable warranty terms.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <MapPin size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Pan-India Coverage</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    We deliver and construct premium dairy farm shed projects across the entire country.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all sm:col-span-2">
                  <Wrench size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Optimal Design</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Steel-framed sheds suitable for cow, buffalo, and mixed dairy farms. Roof height generally 12–16 feet, with larger heights for commercial units depending on cooling needs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- 3. Dairy Farm Shed Layout & Functional Areas ---------------- */}
        <section className="py-6 lg:py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Specialization</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Dairy Farm Shed <span className="font-serif  text-[#3498db]">Functional Areas</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">A well-planned dairy farm shed can be divided into different areas according to the farm's daily operations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Animal Housing / Loafing Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  The main herd area provides space for resting and free movement. Proper spacing, non-slip flooring, and cross-ventilation help create a safer and more comfortable environment for the animals.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Calf Pen</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  A separate calf pen provides protection for newborn calves with suitable warmth, reduced drafts, and easy access for monitoring.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Milking Parlour</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  The milking parlour requires a clean and well-lit area with suitable flooring, drainage, and ventilation to support hygienic milking operations.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Feeding Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  The feeding area should provide sufficient space for feeding troughs while allowing easy movement of fodder and water.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Fodder Storage Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  A dry and weather-protected storage area helps protect fodder from rain, moisture, and pests.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Waste & Drainage Zone</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Proper slope and drainage channels help move slurry and waste away from the shed, reducing moisture, odour, and hygiene-related problems.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- 4. Ventilation & Lighting ---------------- */}
        <section className="py-6 lg:py-8 bg-[#f0f4f8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Airflow</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Dairy Shed <span className="font-serif  text-[#3498db]">Ventilation & Lighting</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Ventilation is an important part of dairy shed planning because cows are sensitive to heat stress, which can affect milk yield. KPN can plan suitable ventilation and lighting features based on the size and requirements of the dairy facility.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Ridge ventilation & Turbo ventilators",
                "Exhaust and cooling fans for large commercial units",
                "Open-side cladding with mesh & Side ventilation gaps",
                "Natural daylight panels & Clearstory windows",
                "Air circulation openings",
                "Separate ventilation provisions for calf pens and milking parlours"
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

        {/* ---------------- 4. How to Choose (Vertical Timeline) ---------------- */}
        <section className="py-6 lg:py-8 bg-[#2d3436] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">How to Choose the <span className="font-serif  text-[#e67e22]">Right Shed</span></h2>
              <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">Consider the following before starting your cow or dairy farm shed project:</p>
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
              
              <div className="space-y-16 md:space-y-24 relative">
                {[
                  { step: "01", title: "Herd Size", desc: "Determine the current and expected herd size", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                  { step: "02", title: "Space & Flooring", desc: "Plan sufficient space for comfortable animal movement and provide non-slip flooring", color: "text-[#f39c12]", bg: "bg-[#f39c12]" },
                  { step: "03", title: "Ventilation Setup", desc: "Provide proper ventilation and natural daylight to reduce heat buildup", color: "text-[#3498db]", bg: "bg-[#3498db]" },
                  { step: "04", title: "Milking Parlour", desc: "Include a suitable milking parlour if required", color: "text-[#e74c3c]", bg: "bg-[#e74c3c]" },
                  { step: "05", title: "Fodder Storage", desc: "Plan a dedicated fodder storage area", color: "text-[#9b59b6]", bg: "bg-[#9b59b6]" },
                  { step: "06", title: "Proper Drainage", desc: "Plan proper waste and drainage channels", color: "text-[#2ecc71]", bg: "bg-[#2ecc71]" },
                  { step: "07", title: "Future Expansion", desc: "Select the shed structure and allow space for future herd expansion", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                ].map((item, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Node on the Line */}
                    <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 md:-translate-x-1/2 rounded-full border-4 border-[#2d3436] shadow-xl flex items-center justify-center z-10" style={{ backgroundColor: '#ffffff' }}>
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

        {/* ---------------- 5. Unique Permits & Approvals Layout ---------------- */}
        <section className="py-6 lg:py-8 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">Permits & Approvals <br/><span className="font-serif  text-gray-500">What You Need to Know</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Cow and dairy farm shed requirements can vary depending on your location, land type, farm size, building structure, and local authority regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">KPN can guide you on the applicable requirements.</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">We help you understand any approvals that may be needed for your project.</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/images/services/animal.webp" alt="dairy farm shed — KPN" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d35400]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[80%]">
                <FileText className="text-[#d35400] mb-3" size={32} />
                <p className="font-bold text-[#2d3436]">Expert Guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 6. Unique Timeline / How Long Layout ---------------- */}
        <section className="py-6 lg:py-8 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Timeline</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How Long Does a <br/><span className="font-serif  text-gray-500">Dairy Farm Shed Take?</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                The completion time depends on shed size, structural design, flooring, milking parlour requirements, and site conditions.
              </p>
              <div className="bg-[#eef5f9] border border-[#3498db]/20 rounded-2xl p-6 flex items-center gap-6">
                <div className="bg-[#3498db] text-white w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2d3436]">Standard Timeline</h4>
                  <p className="text-gray-600 font-medium text-lg mt-1">Most standard dairy sheds are completed within 3–5 weeks after design approval, depending on shed size and site conditions. KPN provides a project-specific timeline based on the final design and site requirements.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/images/aniamal2.webp" alt="cow shed roofing shed — KPN Roofing Shed" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#3498db]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* ---------------- 6.5 Why KPN Is Different ---------------- */}
        <section className="py-6 lg:py-8 bg-[#fffdfa] border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6">Why KPN Is <span className="font-serif  text-[#e67e22]">Different</span></h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">
              
              {/* Left Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Dairy-Specific Layout Planning</h3>
                  <p className="text-gray-600 font-medium">The shed layout can be planned around herd size, animal movement, feeding, milking, and fodder storage requirements.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Ventilation-Focused Design</h3>
                  <p className="text-gray-600 font-medium">Ridge ventilation, turbo ventilators, side ventilation, and other airflow options can be considered according to the project requirements.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Pan-India Service</h3>
                  <p className="text-gray-600 font-medium">KPN Roofing Shed provides cow and dairy farm shed services across India, subject to site visit and project scope.</p>
                </div>
              </div>
              
              {/* Center Image */}
              <div className="w-full lg:w-1/3 relative h-[600px] lg:h-[800px] rounded-[3rem] overflow-hidden shadow-2xl z-0">
                <Image src="/images/animal1.webp" alt="Why KPN" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#e67e22]/20 mix-blend-multiply"></div>
              </div>
              
              {/* Right Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Complete Farm Functionality</h3>
                  <p className="text-gray-600 font-medium">KPN can plan different functional areas including animal housing, calf pens, milking parlours, feeding areas, fodder storage, and drainage zones.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Future Expansion Planning</h3>
                  <p className="text-gray-600 font-medium">The structural layout can be planned with future herd expansion in mind, helping reduce the need for major structural changes later.</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ---------------- 7. FAQ (Minimalist Accordion) ---------------- */}
        <section className="py-6 lg:py-8 bg-[#faf9f6]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#2d3436] text-center mb-16">Frequently Asked <span className="font-serif  text-[#e67e22]">Questions</span></h2>
            
            <div className="space-y-6">
              {[
                { q: "What type of shed is best for a cow or dairy farm?", a: "A steel-framed shed with proper ventilation, non-slip flooring, and suitable areas for feeding and milking works well for many dairy farms. The final design depends on herd size, farm layout, and operational requirements." },
                { q: "What height is suitable for a dairy farm shed?", a: "A height of around 12–16 feet suits many dairy farms. Larger commercial units may require additional height depending on ventilation and cooling requirements." },
                
                { q: "What warranty does KPN provide on dairy farm sheds?", a: "KPN provides a 10-year warranty on pipes and roofing sheets, with repair support according to the applicable warranty terms." },
                { q: "Does KPN build cow and dairy farm sheds outside Tamil Nadu?", a: "Yes. KPN Roofing Shed builds cow and dairy farm sheds across India, subject to site visit and project scope." }
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

        {/* ---------------- 8. High Impact CTA ---------------- */}
        <section className="py-6 lg:py-8 text-center text-white relative overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image src="/images/animal1.webp" alt="cow shed — KPN" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a <span className="font-serif  font-medium text-[#f39c12]">Cow or Dairy Farm Shed?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-12 max-w-3xl mx-auto">
              Talk to KPN Roofing Shed — get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <QuoteButton className="w-full sm:w-auto bg-[#f39c12] text-[#111] font-bold text-xl py-4 px-12 rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(243,156,18,0.4)] mb-3 flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </QuoteButton>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white font-bold text-xl py-4 px-12 rounded-full transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a href="tel:+919788770786" className="w-full sm:w-auto border-2 border-white hover:border-[#f39c12] text-white hover:text-[#f39c12] font-bold text-xl py-4 px-12 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer">
                  <Phone size={24} /> Call Now
                </a>
              </div>
            </div>
            
            <p className="text-gray-300 font-medium text-lg">
              <span className="text-white font-bold">50% advance to start — no hidden costs.</span> 10-year warranty on pipes and roofing sheets.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
