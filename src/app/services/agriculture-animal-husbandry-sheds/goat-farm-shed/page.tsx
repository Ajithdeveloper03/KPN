import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check, Wind, Droplets, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Goat Farm Shed Construction India | KPN Roofing Shed',
  description: 'KPN builds goat farm sheds across India with proper ventilation, durable roofing, and practical farm layouts. 10-year warranty. Get a free quote.',
  keywords: 'goat farm shed construction India, goat shed manufacturers India',
};

export default function GoatFarmShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      
      {/* ---------------- 1. Hero Section (Fully Transparent Content) ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/kpnroofingshed/images/hero-bg.png" 
            alt="goat farm shed India — KPN" 
            fill 
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
            Goat Farm Shed <br />
            
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link href="/services" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Goat Farm Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 1.5 Intro Section ---------------- */}
        <section className="py-12 lg:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-8 leading-tight">
                Durable & Well-Ventilated Goat Sheds with <span className="font-serif italic text-[#e67e22]">KPN Roofing</span>
              </h2>
              <div className="text-lg text-gray-600 mb-10 leading-relaxed space-y-4 font-medium">
                <p>KPN Roofing Shed designs and builds goat farm sheds across India for dairy goat, meat goat, and breeding farms. Each shed is planned according to herd size, breed type, feeding requirements, ventilation, drainage, and future expansion needs.</p>
                <p>A properly designed goat shed helps provide better airflow, protection from heat and rain, comfortable animal movement, and easier feeding and cleaning. KPN also provides solutions for kid pens, feeding areas, fodder storage, and other supporting farm requirements.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#d35400] hover:bg-[#e67e22] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 text-center text-lg inline-flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </Link>
                <a href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="bg-[#2d3436] hover:bg-[#1a1e1f] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg hover:-translate-y-1 cursor-pointer">
                  <MessageCircle size={24} /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/kpnroofingshed/images/image2.jpeg" alt="goat farm shed India — KPN" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e67e22]/20 to-transparent"></div>
            </div>
          </div>
        </section>
        
        {/* ---------------- 2. Specifications & Pricing (Split Layout) ---------------- */}
        <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto border-b border-orange-900/10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Highlight Pricing Box */}
            <div className="w-full lg:w-5/12">
              <div className="bg-gradient-to-br from-[#2c3e50] to-[#1a252f] rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d35400]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
                  Specifications <span className="font-serif italic text-[#e67e22]">&</span> Pricing
                </h2>
                <div className="space-y-8 relative z-10">
                  <div>
                    <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Project Pricing</p>
                    <p className="text-lg font-medium text-gray-200">Final dimensions and structural specifications are determined based on herd size, farm layout, production type, site conditions, and project requirements.</p>
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
                    10-year warranty on pipes and roofing sheets, with repair support as per applicable warranty terms.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <MapPin size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Pan-India Coverage</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    We deliver and construct premium goat farm shed projects across the entire country.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all sm:col-span-2">
                  <Wrench size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Space Planning & Flooring</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    10–15 sq.ft per adult goat with frame spacing around 3–4 metres. Elevated slatted flooring available 2–3 feet above ground, with a typical roof height of 10–14 feet.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- 3. Design & Construction Features ---------------- */}
        <section className="py-12 lg:py-20 bg-[#fffdfa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Craftsmanship</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Design & Construction <span className="font-serif italic text-[#e67e22]">Features</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Steel Structural Framing", desc: "Steel structural framing planned around herd size and site conditions", icon: <Wrench /> },
                { title: "Weather-Resistant Roofing", desc: "To protect the herd from heat, rain, and seasonal weather conditions", icon: <CheckCircle2 /> },
                { title: "Elevated Slatted Flooring", desc: "Elevated slatted flooring option for better hygiene and easier cleaning", icon: <Shield /> },
                { title: "Future Expansion", desc: "Future expansion planning built into the structural layout for herd growth", icon: <MapPin /> },
                { title: "Optimized Space", desc: "Space planning approximately 10–15 sq.ft per adult goat", icon: <CheckCircle2 /> },
                { title: "Sturdy Layout", desc: "Frame spacing approximately 3–4 metres for robust structural integrity", icon: <Shield /> }
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

        {/* ---------------- 3.5 Goat Farm Shed Layout & Functional Areas ---------------- */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Specialization</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Goat Farm Shed <span className="font-serif italic text-[#3498db]">Functional Areas</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">A goat farm shed can be divided into different areas depending on the farm's operation and herd management requirements.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-[#f8f9fa] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-blue-500 mb-6 relative z-10">
                  <Home size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4 relative z-10">Animal Housing Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                  The main housing area provides space for the herd with suitable floor planning, ventilation, and comfortable movement. Elevated slatted flooring can also be considered.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-[#fffdfa] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-orange-500 mb-6 relative z-10">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4 relative z-10">Kid Pen</h3>
                <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                  A separate kid pen can provide newborn goats with additional protection, easier monitoring, and a more controlled environment.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-[#f0fdf4] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-green-500 mb-6 relative z-10">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4 relative z-10">Feeding Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                  The feeding area is planned with sufficient space for troughs, water access, fodder movement, and easy handling of the herd.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-[#fefce8] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-yellow-600 mb-6 relative z-10">
                  <FileText size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4 relative z-10">Fodder Storage Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                  A dry and weather-protected storage area helps protect fodder and feed from rain, moisture, and pests.
                </p>
              </div>

              {/* Box 5 */}
              <div className="bg-[#faf5ff] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-500 mb-6 relative z-10">
                  <Droplets size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4 relative z-10">Milking & Handling Area</h3>
                <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                  For dairy goat farms, a dedicated area can be planned for milking, health checks, and animal handling.
                </p>
              </div>

              {/* Box 6 */}
              <div className="bg-[#f1f5f9] p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-500 mb-6 relative z-10">
                  <Wind size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4 relative z-10">Waste & Drainage Zone</h3>
                <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                  Proper floor slope and drainage planning help move waste and water away from the animal housing area, supporting better hygiene.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- 4. Ventilation & Lighting ---------------- */}
        <section className="py-12 lg:py-20 bg-[#f0f4f8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Airflow</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Goat Shed <span className="font-serif italic text-[#3498db]">Ventilation & Lighting</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Good ventilation is an important part of goat farm shed planning because goats can be affected by excessive heat and humidity. Proper ventilation can improve airflow, reduce heat and moisture buildup, and create a more comfortable environment for goats.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Ridge ventilation",
                "Turbo ventilators",
                "Exhaust fans for larger commercial units",
                "Open-side mesh cladding",
                "Side ventilation gaps",
                "Natural daylight panels or clearstory windows"
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

        {/* ---------------- 4.5 Common Uses ---------------- */}
        <section className="py-12 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Versatility</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Common Uses of <span className="font-serif italic text-[#e67e22]">Goat Farm Sheds</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Dairy goat farming",
                "Meat goat farming",
                "Breeding and stud farms",
                "Small-scale and individual farmer sheds",
                "Commercial livestock farms",
                "Customized goat sheds"
              ].map((use, i) => (
                <div key={i} className="bg-[#fffdfa] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-900/5 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#d35400] shrink-0">
                    <Home size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#2d3436]">{use}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 4. How to Choose (Vertical Timeline) ---------------- */}
        <section className="py-12 lg:py-16 bg-[#2d3436] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">How to Choose the <span className="font-serif italic text-[#e67e22]">Right Shed</span></h2>
              <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">Consider the following before starting your goat farm shed project:</p>
            </div>

            <div className="relative">
              {/* Single Continuous SVG Wavy Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-64 md:-translate-x-1/2 z-0 opacity-70"
                   style={{
                     maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
                   }}>
                <svg className="w-full h-full" viewBox="0 0 256 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M128 0 C350 166, -94 333, 128 500 C350 666, -94 833, 128 1000" 
                    stroke="#f39c12" 
                    strokeWidth="16" 
                    fill="none" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
              
              <div className="space-y-12 md:space-y-16 relative">
                {[
                  { step: "01", title: "Herd Size", desc: "Determine the current and expected herd size before finalizing shed dimensions", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                  { step: "02", title: "Space Planning", desc: "Plan adequate space for adult goats, kids, feeding, and movement", color: "text-[#f39c12]", bg: "bg-[#f39c12]" },
                  { step: "03", title: "Slatted Flooring", desc: "Consider elevated slatted flooring where suitable for hygiene and easier cleaning", color: "text-[#3498db]", bg: "bg-[#3498db]" },
                  { step: "04", title: "Ventilation Setup", desc: "Plan ventilation based on the local climate and shed orientation", color: "text-[#e74c3c]", bg: "bg-[#e74c3c]" },
                  { step: "05", title: "Proper Drainage", desc: "Provide proper drainage to prevent water and waste accumulation", color: "text-[#9b59b6]", bg: "bg-[#9b59b6]" },
                  { step: "06", title: "Fodder Storage", desc: "Include separate fodder storage if required", color: "text-[#2ecc71]", bg: "bg-[#2ecc71]" },
                  { step: "07", title: "Future Expansion", desc: "Keep future herd expansion in mind while planning the structural layout", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                ].map((item, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Node on the Line */}
                    <div className="absolute left-4 md:left-1/2 w-12 h-12 -translate-x-[8px] md:-translate-x-1/2 rounded-full border-4 border-[#2d3436] shadow-xl flex items-center justify-center z-10" style={{ backgroundColor: '#ffffff' }}>
                      <div className={`w-4 h-4 rounded-full ${item.bg}`}></div>
                    </div>

                    {/* Left/Right Empty Space for Desktop */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Content Box */}
                    <div className="w-full md:w-1/2 pl-20 md:pl-0 flex justify-start">
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
        <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">Permits & Approvals <br/><span className="font-serif italic text-gray-500">What You Need to Know</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Goat farm shed requirements can vary depending on the location, land type, farm size, building structure, and local authority regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">KPN can guide you on the applicable requirements.</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">We help you understand any approvals that may be needed for your project.</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/kpnroofingshed/images/image3.jpeg" alt="goat farm shed manufacturers India — KPN" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d35400]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[80%]">
                <FileText className="text-[#d35400] mb-3" size={32} />
                <p className="font-bold text-[#2d3436]">Expert Guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 6. Unique Timeline / How Long Layout ---------------- */}
        <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Timeline</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How Long Does a <br/><span className="font-serif italic text-gray-500">Goat Farm Shed Take?</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                The completion time depends on the shed size, structural design, flooring requirements, material availability, and site conditions.
              </p>
              <div className="bg-[#eef5f9] border border-[#3498db]/20 rounded-2xl p-6 flex items-center gap-6">
                <div className="bg-[#3498db] text-white w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2d3436]">Standard Timeline</h4>
                  <p className="text-gray-600 font-medium text-lg mt-1">Standard goat farm shed projects may be completed in approximately 2–3 weeks after design approval, while larger or more complex projects may require additional time. KPN provides a project-specific timeline based on the final design and site requirements.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/kpnroofingshed/images/image7.jpeg" alt="goat farm roofing shed — KPN Roofing Shed" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#3498db]/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* ---------------- 6.5 Why KPN Is Different ---------------- */}
        <section className="py-12 lg:py-20 bg-[#fffdfa] border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6">Why KPN Is <span className="font-serif italic text-[#e67e22]">Different</span></h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative">
              
              {/* Left Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Goat-Specific Shed Planning</h3>
                  <p className="text-gray-600 font-medium">The shed layout is planned around herd size, goat type, feeding requirements, ventilation, movement, and future expansion.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Better Ventilation Planning</h3>
                  <p className="text-gray-600 font-medium">Ridge ventilation, turbo ventilators, mesh cladding, daylight panels, and other options can be incorporated based on the farm's requirements.</p>
                </div>
              </div>
              
              {/* Center Image */}
              <div className="w-full lg:w-1/3 relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl z-0">
                <Image src="/kpnroofingshed/images/image5.jpeg" alt="Why KPN" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#e67e22]/20 mix-blend-multiply"></div>
              </div>
              
              {/* Right Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Hygiene-Focused Layout</h3>
                  <p className="text-gray-600 font-medium">Elevated flooring, suitable drainage, and dedicated waste-management areas can help make cleaning and farm maintenance easier.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Flexible Farm Layouts</h3>
                  <p className="text-gray-600 font-medium">KPN can plan sheds for dairy, meat, and breeding goat farms, including animal housing, kid pens, feeding areas, fodder storage, and handling spaces.</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ---------------- 7. FAQ (Minimalist Accordion) ---------------- */}
        <section className="py-12 lg:py-20 bg-[#faf9f6]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-[#2d3436] text-center mb-16">Frequently Asked <span className="font-serif italic text-[#e67e22]">Questions</span></h2>
            
            <div className="space-y-6">
              {[
                { q: "What type of shed is best for a goat farm?", a: "A steel-framed goat farm shed with suitable ventilation, practical floor planning, and elevated slatted flooring where required can work well for many goat farms. The final design depends on herd size, farm type, climate, and site conditions." },
                { q: "What is the suitable height for a goat farm shed?", a: "A roof height of around 10–14 feet is suitable for many goat farm sheds. Larger commercial farms may require different heights depending on ventilation, shed size, and structural requirements." },
                { q: "How much does a goat farm shed cost in India?", a: "The cost depends on shed size, structural design, steel quantity, roofing material, flooring, and site requirements. KPN provides a project-specific quotation after understanding the farm requirements and site conditions." },
                { q: "What warranty does KPN provide on goat farm sheds?", a: "KPN provides a 10-year warranty on pipes and roofing sheets, with repair support for covered issues as per the applicable warranty terms." },
                { q: "Does KPN build goat farm sheds outside Tamil Nadu?", a: "Yes. KPN Roofing Shed undertakes goat farm shed projects across India, subject to site conditions and project requirements." }
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
        <section className="py-12 lg:py-16 text-center text-white relative overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image src="/kpnroofingshed/images/hero-bg.png" alt="goat farm shed — KPN" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a <span className="font-serif italic font-medium text-[#f39c12]">Goat Farm Shed?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 font-medium mb-12 max-w-3xl mx-auto">
              Talk to KPN Roofing Shed — get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <Link href="/contact" className="w-full sm:w-auto bg-[#f39c12] text-[#111] font-bold text-xl py-4 px-12 rounded-full transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(243,156,18,0.4)] mb-3 flex items-center justify-center cursor-pointer">
                  Get Free Quote
                </Link>
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
