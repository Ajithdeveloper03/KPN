import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Factory, Tractor, Droplets, Feather, Box, ShieldCheck, Check, Plus, Minus, ArrowRight, Warehouse, Home, Settings, MapPin } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: 'Industrial Shed Construction India | KPN Roofing Shed',
  description: 'KPN builds industrial sheds across India with heavy-gauge steel structures. In-house engineers, 10+ yrs experience, 10-year warranty. Get a free quote.',
  keywords: 'Industrial Shed Construction India, Steel Structure Company India',
};

export default function IndustrialShedPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <PageHero 
        title="Industrial Sheds" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Industrial Sheds", href: "/services/industrial-sheds" }
        ]} 
      />

      <main className="flex-grow">
        
        {/* ---------------- Intro Section ---------------- */}
        <section className="max-w-[1400px] mx-auto px-6 py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase">
                Our Vision
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#111] leading-[1.1] tracking-tight">
                Industrial Shed — <br className="hidden xl:block"/>
                <span className="font-serif italic font-medium text-[#062088]">Factory, Garment & Warehouse Sheds</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                KPN Roofing Shed provides industrial shed construction in India for factories, industrial units, workshops, and storage spaces. Every shed is designed and built to protect the structure and support daily operations for years, backed by heavy-gauge steel, in-house engineers, and a 10-year warranty.
              </p>
            </div>

            {/* Right Side: Image Gallery */}
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-2 md:gap-3 mt-16 lg:mt-0">
              
              {/* Image 1: Medium Height */}
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/kpnroofingshed/images/image4.jpeg" alt="Industrial Shed — KPN" fill className="object-cover" priority />
              </div>
              
              {/* Image 2: Long Height (Center) */}
              <div className="relative w-1/3 h-[240px] sm:h-[300px] md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border-2 md:border-4 border-white">
                <Image src="/kpnroofingshed/images/image9.jpeg" alt="Industrial Shed — KPN" fill className="object-cover" priority />
              </div>
              
              {/* Image 3: Medium Height */}
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/kpnroofingshed/images/image6.jpeg" alt="Industrial Shed — KPN" fill className="object-cover" priority />
              </div>

            </div>

          </div>
          <div className="mt-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3">
               <h3 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">Who Is <br/> <span className="font-serif italic font-medium text-[#ee0000]">This For?</span></h3>
             </div>
             <div className="w-full md:w-2/3 border-l-0 md:border-l border-slate-200 md:pl-12">
               <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 Are you planning a new factory, warehouse, workshop, or industrial unit? Whether you&apos;re expanding production, building a storage facility, or replacing an old roofing structure, KPN Roofing Shed delivers industrial shed solutions designed for durability, efficiency, and long-term performance.
               </p>
             </div>
          </div>
        </section>

        {/* ---------------- At a Glance Metrics ---------------- */}
        <section className="bg-[#f0f7ff] py-10 lg:py-12 relative overflow-hidden border-y border-blue-100">
          <div className="max-w-[1300px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Overview
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Industrial Sheds <br/><span className="font-serif italic font-medium text-[#00a3e0]">at a Glance</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metric 1 */}
              <div className="bg-[#222d58] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-8">
                  <ShieldCheck strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-white font-semibold text-2xl mb-6">Warranty & Support</h4>
                <ul className="space-y-4 text-blue-100 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ffcc00] mt-1 shrink-0" /> <span><strong className="text-white">Warranty:</strong> 10-year warranty on pipes and roofing sheets</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ffcc00] mt-1 shrink-0" /> <span><strong className="text-white">Repair support:</strong> free repair for covered damage, as per applicable warranty terms</span></li>
                </ul>
              </div>
              
              {/* Metric 2 */}
              <div className="bg-[#6f1c1c] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-8">
                  <Box strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-white font-semibold text-2xl mb-6">Payment & Site Visit</h4>
                <ul className="space-y-4 text-red-100 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Payment:</strong> 50% at booking, 45% during processing, 5% after completion</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Site visit:</strong> transparent charges — only the to-and-fro travel cost for the booking visit</span></li>
                </ul>
              </div>

              {/* Metric 3 */}
              <div className="bg-[#daaf01] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-[#111] mb-8">
                  <MapPin strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-[#111] font-semibold text-2xl mb-6">Coverage</h4>
                <ul className="space-y-4 text-slate-800 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ee0000] mt-1 shrink-0" /> <span><strong className="text-[#111]">Coverage:</strong> pan-India, from small factory units to large industrial sheds</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- What We Build (Table/Grid) ---------------- */}
        <section className="bg-white py-10 lg:py-16 border-b border-slate-200">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="mb-12 text-center">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-6 inline-block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111]">
                What We <span className="font-serif italic font-medium text-[#ee0000]">Build</span>
              </h2>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f8f9fa] border-b border-slate-200">
                <div className="p-6 font-semibold text-lg text-slate-700">What We Build</div>
                <div className="p-6 font-semibold text-lg text-slate-700 hidden md:block border-l border-slate-200">What It Covers</div>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { title: "Industrial Shed Construction", covers: "Factories, industrial units, workshops" },
                  { title: "Factory Shed Fabrication", covers: "Custom-built factory roofing structures" },
                  { title: "Warehouse & Godown Sheds", covers: "Storage racking, forklift access, loading docks" },
                  { title: "Steel Roofing Sheds", covers: "Heavy-gauge steel manufacturing" },
                  { title: "PEB Structures", covers: "Pre-Engineered Building solutions" }
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 hover:bg-slate-50 transition-colors">
                    <div className="p-6 text-[#111] font-semibold text-lg flex items-center gap-3">
                      <Check size={20} className="text-[#ee0000]" /> {item.title}
                    </div>
                    <div className="p-6 text-slate-600 font-medium md:border-l md:border-slate-100 flex items-center">
                      <span className="md:hidden font-semibold text-slate-400 mr-2 text-sm uppercase">Covers:</span>
                      {item.covers}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-lg text-slate-500 max-w-4xl mx-auto text-center font-medium leading-relaxed">
              Whether you&apos;re starting a new factory project or upgrading an old roofing structure, KPN engineers sheds around your site conditions and business requirements — backed by proper planning, quality materials, and skilled execution.
            </p>
          </div>
        </section>

        {/* ---------------- Factory Shed Solutions by Industry ---------------- */}
        <section className="bg-[#fffcf0] py-10 lg:py-16 max-w-full px-6 border-b border-yellow-100">
          <div className="max-w-[1300px] mx-auto">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                  Industries
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                  Factory Shed Solutions <br/><span className="font-serif italic font-medium text-[#ffcc00]">by Industry</span>
                </h2>
                <p className="text-lg text-slate-500 max-w-3xl font-medium leading-relaxed">
                  Different industries need different shed specifications. KPN engineers sheds around what your operations actually require.
                </p>
              </div>
              <QuoteButton className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#111] px-8 py-4 rounded-full font-semibold hover:bg-[#e6b800] transition-colors shadow-sm whitespace-nowrap">
                Explore Services <span className="w-2 h-2 rounded-full bg-black block ml-2"></span>
              </QuoteButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              
              {/* Column 1 (Normal) */}
              <div className="space-y-6 lg:space-y-10">
                
                {/* Garment & Textile */}
                <div className="bg-white hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-4 pb-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group relative">
                  <div className="relative w-full h-[300px] rounded-[1.5rem] overflow-hidden mb-10">
                    <Image src="/kpnroofingshed/images/image7.jpeg" alt="Garment and Textile unit shed interior" fill className="object-cover transition-transform duration-700" />
                  </div>
                  <div className="px-6 flex justify-between items-end">
                    <div className="max-w-[85%] space-y-4">
                      <Settings strokeWidth={1.2} size={42} className="text-[#ee0000]" />
                      <h3 className="text-2xl font-semibold text-[#111]">Garment & Textile Unit Sheds</h3>
                      <p className="text-slate-500 font-medium leading-relaxed group-hover:text-[#111]/80">
                        Garment and textile manufacturing needs consistent airflow, natural lighting, and dust-controlled roofing to protect fabric and machinery. KPN builds sheds with proper ventilation spacing and insulated sheeting suited for textile production floors.
                      </p>
                    </div>
                  </div>
                  <button className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#ee0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45">
                    <ArrowRight strokeWidth={2} size={20} />
                  </button>
                </div>
                
                {/* Chemical Unit */}
                <div className="bg-[#fafafa] hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-4 pt-10 border border-slate-200 shadow-sm group relative overflow-hidden">
                  <div className="px-6 max-w-[85%] space-y-4 mb-10">
                    <Factory strokeWidth={1.2} size={42} className="text-[#062088] group-hover:text-[#111] transition-colors" />
                    <h3 className="text-2xl font-semibold text-[#111]">Chemical Unit Sheds</h3>
                    <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                      KPN considers ventilation, corrosion resistance, and relevant site requirements when planning structures for chemical and process industries. Industrial-grade coated sheets and structural detailing are used to suit chemical-unit needs.
                    </p>
                  </div>
                  <div className="relative w-full h-[280px] rounded-[1.5rem] overflow-hidden">
                    <Image src="/kpnroofingshed/images/image9.jpeg" alt="Chemical unit shed exterior photo" fill className="object-cover transition-transform duration-700" />
                  </div>
                  <button className="absolute top-8 right-8 w-14 h-14 rounded-full bg-[#062088] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45 z-20">
                    <ArrowRight strokeWidth={2} size={20} />
                  </button>
                </div>

              </div>

              {/* Column 2 (Staggered Downward) */}
              <div className="space-y-6 lg:space-y-10 md:mt-24">
                
                {/* Packaging & Warehouse Sheds */}
                <div className="bg-white hover:bg-[#ffcc00] transition-all duration-500 rounded-[2rem] p-10 pt-16 border border-slate-100 hover:border-[#ffcc00] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(255,204,0,0.2)] group relative overflow-hidden">
                  <div className="max-w-[80%] space-y-6 relative z-10 mb-16">
                    <Warehouse strokeWidth={1.2} size={50} className="text-[#111]" />
                    <h3 className="text-3xl font-semibold text-[#111]">Packaging & Warehouse Sheds</h3>
                    <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                      Packaging units and warehouses need wide clear-span structures for storage racks, forklift movement, and loading dock access. KPN&apos;s warehouse shed construction focuses on maximum floor space, load-bearing strength, and weatherproof sealing to protect stored goods.
                    </p>
                  </div>
                  <div className="relative w-[120%] h-[350px] -ml-10 rounded-tr-[2rem] overflow-hidden">
                    <Image src="/kpnroofingshed/images/image2.jpeg" alt="Warehouse shed with racking photo" fill className="object-cover transition-transform duration-700" />
                  </div>
                  <button className="absolute top-10 right-10 w-14 h-14 rounded-full bg-[#111] group-hover:bg-white text-white group-hover:text-[#111] flex items-center justify-center hover:scale-110 transition-all shadow-lg group-hover:-rotate-45 z-20">
                    <ArrowRight strokeWidth={2} size={20} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ---------------- How to Choose (Process Cards) ---------------- */}
        <section className="bg-white py-10 lg:py-16 border-b border-cyan-100 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Process
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">
                How to Choose the <span className="font-serif italic font-medium text-[#062088]">Right Industrial Shed</span>
              </h2>
            </div>

            <div className="relative">
              {/* Background Strip */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[65%] bg-[#f8f9fa] rounded-[3rem] hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
                {[
                  { title: "Define your business requirements", desc: "Factory, warehouse, workshop, or storage all need different layouts.", color: "#ee0000", bgLight: "#ffe6e6", icon: <Factory size={36} /> },
                  { title: "Choose the right span & height", desc: "Based on machinery, racking, and vehicle movement needs, and consider future expansion.", color: "#ffcc00", bgLight: "#fff9e6", icon: <Box size={36} /> },
                  { title: "Plan ventilation & natural lighting", desc: "Affects worker comfort and energy costs.", color: "#00a3e0", bgLight: "#e6f7ff", icon: <Settings size={36} /> },
                  { title: "Select suitable roofing materials", desc: "Steel gauge and coating suited to your industry (e.g. corrosion-resistant for chemical units).", color: "#062088", bgLight: "#e6e9f3", icon: <Droplets size={36} /> },
                ].map((step, idx) => (
                  <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between relative overflow-hidden group min-h-[320px]">
                    
                    {/* Content */}
                    <div className="relative z-10 mb-12">
                      <h4 className="text-2xl font-semibold text-[#111] mb-5 leading-snug">{step.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Step Section */}
                    <div className="relative z-10 mt-auto flex items-center gap-3 text-slate-500 font-medium group-hover:text-[#111] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                        <ArrowRight size={18} />
                      </div>
                      <span className="uppercase tracking-wider text-sm font-semibold">Step 0{idx + 1}</span>
                    </div>

                    {/* Bottom Right Corner Elements */}
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

        {/* ---------------- Why KPN is Different ---------------- */}
        <section className="bg-white py-10 lg:py-16 border-b border-slate-200 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-16">
            
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-5/12 space-y-10 z-10">
                <span className="text-slate-500 font-medium tracking-wide uppercase text-sm">Specialized Features</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111] leading-[1.05]">
                  Why KPN is <br/> <span className="font-serif italic font-medium text-[#ee0000]">Different</span>
                </h2>
                <QuoteButton className="inline-flex items-center justify-center bg-[#ee0000] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-[0_15px_30px_rgba(238,0,0,0.2)] hover:-translate-y-1 transition-transform">
                  Standout Effortlessly
                </QuoteButton>
              </div>

              <div className="w-full lg:w-7/12 relative mt-16 lg:mt-0 mb-12 md:mb-0">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image src="/kpnroofingshed/images/hero-bg.png" alt="KPN Shed Infrastructure" fill className="object-cover" />
                </div>
                
                {/* The Floating Checklist Block */}
                <div className="relative -mt-16 mx-4 md:absolute md:mx-0 md:mt-0 md:right-auto md:-bottom-10 md:-left-12 lg:-left-20 bg-[#ffcc00] rounded-3xl p-6 md:p-10 shadow-2xl border border-[#ffcc00]/50 z-20 md:w-[480px]">
                  <ul className="space-y-4 md:space-y-6">
                    {[
                      "10-year warranty on pipes & sheets",
                      "Free repair support for covered damage",
                      "Transparent payment plan (50/45/5)",
                      "Only travel costs for booking visit"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[#111] font-medium text-lg leading-snug">
                        <Check size={20} strokeWidth={3} className="shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto w-full mt-10">
              <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
                <div className="grid grid-cols-3 bg-[#f8f9fa] border-b border-slate-200">
                  <div className="p-4 md:p-6 font-semibold text-lg text-slate-700">Feature</div>
                  <div className="p-4 md:p-6 font-bold text-lg text-[#062088] border-l border-slate-200">KPN Industrial Sheds</div>
                  <div className="p-4 md:p-6 font-semibold text-lg text-slate-500 border-l border-slate-200">Typical Contractors</div>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { feature: "Design", kpn: "In-house engineers", other: "Frequently outsourced" },
                    { feature: "Materials", kpn: "Apollo Steel", other: "Generic steel" },
                    { feature: "Installation", kpn: "Own installation team", other: "Often subcontracted" },
                    { feature: "Warranty", kpn: "10 years", other: "Often limited" },
                    { feature: "Payment", kpn: "Transparent, staged plan", other: "Varies by contractor" }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                      <div className="p-4 md:p-6 text-slate-700 font-semibold">{row.feature}</div>
                      <div className="p-4 md:p-6 text-[#111] font-bold md:border-l md:border-slate-100 flex items-center gap-2">
                         <Check size={16} className="text-[#25D366] hidden sm:block" /> {row.kpn}
                      </div>
                      <div className="p-4 md:p-6 text-slate-500 font-medium md:border-l md:border-slate-100">{row.other}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- Testimonials & Service Coverage ---------------- */}
        <section className="bg-[#f8f9fc] py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111]">
                 What Our Industrial <span className="font-serif italic font-medium text-[#00a3e0]">Clients Say</span>
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { name: "Ramesh", location: "Maharashtra", type: "Factory Shed", text: "The team built our factory shed precisely to our requirements. Excellent structural integrity and very transparent pricing." },
                { name: "Karthik", location: "Telangana", type: "Warehouse Shed", text: "KPN delivered our clear-span warehouse shed right on schedule. The rack spacing and height was perfectly calculated for our operations." },
                { name: "Suresh", location: "Karnataka", type: "Garment Unit Shed", text: "Ventilation was critical for our textile unit. KPN's engineers designed a fantastic setup that controls dust and maintains great airflow." }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <h5 className="text-[#111] font-bold text-lg">{testimonial.name}</h5>
                    <span className="text-slate-500 text-sm font-medium">{testimonial.location} — {testimonial.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Coverage Banner */}
            <div className="bg-[#062088] rounded-[2rem] p-10 md:p-16 shadow-lg relative overflow-hidden text-center max-w-4xl mx-auto">
              <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply">
                <Image src="/kpnroofingshed/images/night-bg.png" alt="Service Coverage Background" fill className="object-cover" />
              </div>
              <div className="relative z-10">
                <MapPin size={48} className="mx-auto text-[#ffcc00] mb-6" />
                <h3 className="text-3xl font-semibold text-white mb-6">Service Coverage</h3>
                <p className="text-blue-100 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                  KPN Roofing Shed provides factory and industrial roofing services all over India. From small factory units to large industrial sheds, projects are handled with a focus on quality, timely completion, and dependable support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Explore by Shed Type ---------------- */}
        <section className="bg-white py-10 lg:py-16 max-w-[1300px] mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111] tracking-tight">Explore by <span className="font-serif italic font-medium text-[#ee0000]">Shed Type</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Factory Shed", link: "/services/factory-shed" },
              { name: "Garment Factory Shed", link: "/services/garment-factory-shed" },
              { name: "Warehouse & Godown Shed", link: "/services/warehouse-shed" },
            ].map((shed, idx) => (
              <Link key={idx} href={shed.link} className="flex items-center justify-between p-6 bg-[#f8f9fc] rounded-2xl border border-slate-100 hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-colors group shadow-sm hover:shadow-md">
                <span className="font-semibold text-lg text-[#111]">{shed.name}</span>
                <ArrowRight size={20} className="text-[#ee0000] group-hover:text-[#111] transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* ---------------- Interactive Accordion FAQ ---------------- */}
        <section className="bg-[#f8f9fc] py-10 lg:py-12 border-b border-slate-200 overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Side: Typography & Image */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <div className="mb-12">
                <span className="text-slate-500 font-medium tracking-wide uppercase text-sm block mb-6">Our faq&apos;s</span>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#111] tracking-tight leading-[1.1]">
                  Frequently asked <br/> <span className="font-serif italic font-medium lowercase">questions!</span>
                </h2>
              </div>
              {/* Solid Image under the title */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg mt-auto">
                <Image src="/kpnroofingshed/images/image4.jpeg" alt="FAQ Industrial Sheds" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            
            {/* Right Side: Accordion */}
            <div className="w-full lg:w-7/12 space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "How much warranty does KPN Roofing Shed offer on factory sheds?", a: "KPN provides a 10-year warranty on pipes and roofing sheets for all factory and industrial shed projects." },
                { q: "What is the payment structure for a factory shed project?", a: "The payment plan is split into three stages: 50% at booking, 45% during processing, and the final 5% after work completion." },
                { q: "Does KPN Roofing Shed build sheds for specific industries like textiles or chemicals?", a: "Yes. KPN designs industry-specific sheds — ventilated, insulated roofing for garment and textile units; clear-span warehouse sheds for packaging and storage; and corrosion-resistant sheds built with relevant site requirements in mind for chemical units." },
                { q: "Does KPN Roofing Shed cover projects outside Tamil Nadu?", a: "Yes. KPN provides factory and industrial roofing services all over India, from small factory units to large industrial sheds." },
                { q: "What happens if my roofing shed gets damaged after installation?", a: "Free repair support is provided for covered damage, as per the applicable warranty terms." }
              ].map((faq, i) => (
                <details name='faq' key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8 text-xl font-semibold text-[#111]">
                    <span className="flex gap-4" itemProp="name"><span className="text-slate-400">0{i+1}.</span> {faq.q}</span>
                    <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-[#ee0000] group-open:border-[#ee0000] group-open:text-white group-hover:border-[#111]">
                      <Plus size={20} className="block group-open:hidden" strokeWidth={1.5} />
                      <Minus size={20} className="hidden group-open:block" strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 md:pl-16 text-slate-500 font-medium leading-relaxed text-lg pt-2 opacity-0 group-open:opacity-100 group-open:animate-fadeIn" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">{faq.a}</div>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* ---------------- High Impact CTA ---------------- */}
        <section className="py-12 lg:py-12 text-center text-white relative overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image src="/kpnroofingshed/images/hero-bg.png" alt="Industrial Sheds CTA" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#062088]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight leading-tight">
              Planning a factory or <span className="font-serif italic font-medium text-[#ffcc00]">industrial shed?</span>
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
              Talk to KPN Roofing Shed — get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <QuoteButton className="w-full sm:w-auto bg-[#ffcc00] text-[#111] font-semibold text-lg py-3 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md mb-3 flex items-center justify-center">
                  Get Free Quote
                </QuoteButton>
                <span className="text-xs text-blue-200/80 max-w-[240px] text-center leading-relaxed hidden sm:block">
                  10-year warranty on pipes and roofing sheets. Transparent, staged payment plan.
                </span>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white font-semibold text-lg py-3 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md flex items-center justify-center">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="w-full sm:w-auto flex flex-col items-center sm:self-start">
                <a href="tel:+919788770786" className="w-full sm:w-auto border border-blue-400 hover:border-white text-white font-semibold text-lg py-3 px-10 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center">
                  Call Now
                </a>
              </div>
            </div>
            
          </div>
        </section>

      </main>
    </div>
  );
}
