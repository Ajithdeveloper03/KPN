import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Activity, Trophy, ShieldCheck, Check, Plus, Minus, ArrowRight, MapPin, Box, Settings, Map } from 'lucide-react';
import QuoteButton from '@/components/QuoteButton';

export const metadata: Metadata = {
  title: 'Sports Turf Sheds India | Badminton & Cricket Turf Sheds | KPN',
  description: 'KPN builds badminton court sheds and cricket turf sheds across India. Durable, weatherproof structures backed by 10+ years of experience. Get a free quote.',
  keywords: 'Sports Turf Construction India, Sports Shed Contractors India, Badminton Court Shed India, Cricket Turf Construction India',
};

export default function SportsTurfShedsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <PageHero  
        title="Sports Turf Sheds" 
         bgImage="/images/services/sports-turf-main-banner.png" breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Sports Turf Sheds", href: "/services/sports-turf-sheds" }
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
                Sports Turf Sheds — <br className="hidden xl:block"/>
                <span className="font-serif italic font-medium text-[#062088]">Badminton Court & Cricket Turf Sheds</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                KPN Roofing Shed designs and builds sports turf sheds across India, including badminton court sheds and cricket turf sheds. Every structure is engineered for all-season performance using Apollo Brand Steel, in-house engineering, and durable weatherproof roofing systems.
              </p>
            </div>

            {/* Right Side: Image Gallery */}
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-2 md:gap-3 mt-16 lg:mt-0">
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/images/services/sports-turf-main-banner.png" alt="Sports Turf Shed" fill className="object-cover" priority />
              </div>
              <div className="relative w-1/3 h-[240px] sm:h-[300px] md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border-2 md:border-4 border-white">
                <Image src="/images/services/sports-turf-1-section-1-image.png" alt="Badminton Court Shed India" fill className="object-cover" priority />
              </div>
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/images/services/sports-turf-1-section-2-image.png" alt="Cricket Turf Construction India" fill className="object-cover" priority />
              </div>
            </div>

          </div>
          <div className="mt-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3">
               <h3 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">Who Is <br/> <span className="font-serif italic font-medium text-[#ee0000]">This For?</span></h3>
             </div>
             <div className="w-full md:w-2/3 border-l-0 md:border-l border-slate-200 md:pl-12">
               <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 Planning a badminton court that needs cover from sun and rain? Building a cricket turf that stays playable through the monsoon? KPN Roofing Shed builds sports turf sheds for academies, schools, colleges, sports clubs, apartment complexes, and private facility owners across India, backed by in-house engineers, transparent pricing, and a 10-year guarantee.
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
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Sports Turf <br/><span className="font-serif italic font-medium text-[#00a3e0]">at a Glance</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metric 1 */}
              <div className="bg-[#222d58] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-8">
                  <ShieldCheck strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-white font-semibold text-2xl mb-6">Warranty & Support</h4>
                <ul className="space-y-4 text-blue-100 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ffcc00] mt-1 shrink-0" /> <span><strong className="text-white">Warranty:</strong> 10-year guarantee on structure</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ffcc00] mt-1 shrink-0" /> <span><strong className="text-white">Repair support:</strong> free repair support for covered damage, as per applicable warranty terms</span></li>
                </ul>
              </div>
              
              {/* Metric 2 */}
              <div className="bg-[#6f1c1c] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-8">
                  <Box strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-white font-semibold text-2xl mb-6">Payment</h4>
                <ul className="space-y-4 text-red-100 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Advance:</strong> 50% advance</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-white mt-1 shrink-0" /> <span><strong className="text-white">Milestones:</strong> remainder in installments as materials arrive</span></li>
                </ul>
              </div>

              {/* Metric 3 */}
              <div className="bg-[#daaf01] p-10 rounded-[2rem] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-[#111] mb-8">
                  <MapPin strokeWidth={1.5} size={28} />
                </div>
                <h4 className="text-[#111] font-semibold text-2xl mb-6">Coverage</h4>
                <ul className="space-y-4 text-slate-800 font-medium leading-relaxed">
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ee0000] mt-1 shrink-0" /> <span><strong className="text-[#111]">Coverage:</strong> Pan-India sports turf shed projects</span></li>
                  <li className="flex items-start gap-3"><Check size={20} className="text-[#ee0000] mt-1 shrink-0" /> <span><strong className="text-[#111]">Facilities:</strong> academies, clubs, apartment complexes, schools, colleges, and private sports facilities</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Shed Types ---------------- */}
        <section className="bg-[#fffcf0] py-10 lg:py-16 max-w-full px-6 border-b border-yellow-100">
          <div className="max-w-[1300px] mx-auto">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                  Shed Types
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                  Sports Turf Solutions <br/><span className="font-serif italic font-medium text-[#ffcc00]">by Sport</span>
                </h2>
                <p className="text-lg text-slate-500 max-w-3xl font-medium leading-relaxed">
                  Engineered for all-season performance with durable weatherproof roofing systems and proper structural clearances.
                </p>
              </div>
              <QuoteButton className="inline-flex items-center gap-3 bg-[#ffcc00] text-[#111] px-8 py-4 rounded-full font-semibold hover:bg-[#e6b800] transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                Get Free Quote <span className="w-2 h-2 rounded-full bg-black block ml-2"></span>
              </QuoteButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              
              {/* Badminton */}
              <div className="bg-white hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-4 pb-10 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group relative">
                <div className="relative w-full h-[300px] rounded-[1.5rem] overflow-hidden mb-10">
                  <Image src="/images/services/sports-turf-main-banner.png" alt="Badminton Court Shed" fill className="object-cover transition-transform duration-700" />
                </div>
                <div className="px-6 flex justify-between items-end">
                  <div className="max-w-[85%] space-y-4">
                    <Activity strokeWidth={1.2} size={42} className="text-[#ee0000]" />
                    <h3 className="text-2xl font-semibold text-[#111]">Badminton Court Shed</h3>
                    <p className="text-slate-500 font-medium leading-relaxed group-hover:text-[#111]/80">
                      KPN&apos;s badminton court sheds are engineered for consistent playing conditions with weatherproof roofing, adequate playing height, and proper structural clearance for comfortable year-round play. Suitable for academies, clubs, schools, colleges, and private courts.
                    </p>
                  </div>
                </div>
                <QuoteButton className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-[#ee0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45">
                  <ArrowRight strokeWidth={2} size={20} />
                </QuoteButton>
              </div>
              
              {/* Cricket */}
              <div className="bg-[#fafafa] hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-4 pt-10 border border-slate-200 shadow-sm group relative overflow-hidden flex flex-col justify-end">
                <div className="px-6 max-w-[85%] space-y-4 mb-10">
                  <Trophy strokeWidth={1.2} size={42} className="text-[#062088] group-hover:text-[#111] transition-colors" />
                  <h3 className="text-2xl font-semibold text-[#111]">Cricket Turf Shed</h3>
                  <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                    KPN&apos;s cricket turf sheds are built to keep practice nets and turf pitches playable through the monsoon and peak summer heat, with durable steel framing designed for large column-free spans. Suitable for cricket academies, schools, colleges, and private practice facilities.
                  </p>
                </div>
                <div className="relative w-full h-[280px] rounded-[1.5rem] overflow-hidden">
                  <Image src="/images/services/sports-turf-main-banner.png" alt="Cricket Turf Shed" fill className="object-cover transition-transform duration-700" />
                </div>
                <QuoteButton className="absolute top-8 right-8 w-14 h-14 rounded-full bg-[#062088] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45 z-20">
                  <ArrowRight strokeWidth={2} size={20} />
                </QuoteButton>
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
                How to Choose the <span className="font-serif italic font-medium text-[#062088]">Right Sports Turf Shed</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[65%] bg-[#f8f9fa] rounded-[3rem] hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
                {[
                  { title: "Sport & Dimensions", desc: "Confirm the sport and standard court or pitch dimensions.", color: "#ee0000", bgLight: "#ffe6e6", icon: <Map size={28} /> },
                  { title: "Roof Height", desc: "Plan adequate roof height and structural clearance.", color: "#ffcc00", bgLight: "#fff9e6", icon: <Activity size={28} /> },
                  { title: "Roofing Materials", desc: "Choose roofing materials that provide natural light and weather protection.", color: "#00a3e0", bgLight: "#e6f7ff", icon: <Settings size={28} /> },
                  { title: "Drainage", desc: "Plan drainage and flooring compatibility.", color: "#062088", bgLight: "#e6e9f3", icon: <Box size={28} /> },
                  { title: "Future Expansion", desc: "Consider future expansion for additional courts or practice nets.", color: "#25D366", bgLight: "#e8f9ed", icon: <Plus size={28} /> },
                ].map((step, idx) => (
                  <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col relative overflow-hidden group min-h-[280px]">
                    
                    <div className="relative z-10 mb-6">
                      <h4 className="text-xl font-semibold text-[#111] mb-4 leading-snug">{step.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>

                    <div className="relative z-10 mt-auto flex items-center gap-3 text-slate-500 font-medium group-hover:text-[#111] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                        <ArrowRight size={14} />
                      </div>
                      <span className="uppercase tracking-wider text-xs font-semibold">Step 0{idx + 1}</span>
                    </div>

                    <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: step.bgLight }}></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-inner" style={{ backgroundColor: step.color }}>
                      <div className="text-white transform -translate-x-2 -translate-y-2">
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
                <QuoteButton className="inline-flex items-center justify-center bg-[#ee0000] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-[0_15px_30px_rgba(238,0,0,0.2)] hover:-translate-y-1 transition-transform cursor-pointer">
                  Standout Effortlessly
                </QuoteButton>
              </div>

              <div className="w-full lg:w-7/12 relative mt-16 lg:mt-0 mb-12 md:mb-0">
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image src="/images/services/sports-turf-main-banner.png" alt="KPN Shed Infrastructure" fill className="object-cover" />
                </div>
                
                <div className="relative -mt-16 mx-4 md:absolute md:mx-0 md:mt-0 md:right-auto md:-bottom-10 md:-left-12 lg:-left-20 bg-[#ffcc00] rounded-3xl p-6 md:p-10 shadow-2xl border border-[#ffcc00]/50 z-20 md:w-[480px]">
                  <ul className="space-y-4 md:space-y-6">
                    {[
                      "No middleman",
                      "In-house engineers",
                      "Own installation team",
                      "Transparent pricing",
                      "10-year guarantee",
                      "Free repair support for covered damage in the first year"
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
                  <div className="p-4 md:p-6 font-bold text-lg text-[#062088] border-l border-slate-200">KPN Sports Turf Sheds</div>
                  <div className="p-4 md:p-6 font-semibold text-lg text-slate-500 border-l border-slate-200">Typical Contractors</div>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { feature: "Design", kpn: "In-house engineers", other: "Frequently outsourced" },
                    { feature: "Materials", kpn: "Apollo Brand Steel", other: "Generic steel" },
                    { feature: "Installation", kpn: "Own installation team", other: "Often subcontracted" },
                    { feature: "Warranty", kpn: "10 years", other: "Often limited" },
                    { feature: "Pricing", kpn: "Transparent, itemized quote", other: "Varies by contractor" }
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

        {/* ---------------- Testimonials ---------------- */}
        <section className="bg-[#f8f9fc] py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111]">
                 What Our Sports Turf <span className="font-serif italic font-medium text-[#00a3e0]">Clients Say</span>
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    &quot;Our academy required a column-free design for uninterrupted play. KPN delivered perfectly, on time, and with transparent pricing.&quot;
                  </p>
                  <div>
                    <h5 className="text-[#111] font-bold text-lg">Sports Academy Director</h5>
                    <span className="text-slate-500 text-sm font-medium">Tamil Nadu — Badminton Court Shed</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    &quot;Monsoon practice used to be impossible. Thanks to KPN&apos;s cricket turf shed, our pitches are usable year-round.&quot;
                  </p>
                  <div>
                    <h5 className="text-[#111] font-bold text-lg">Cricket Club Manager</h5>
                    <span className="text-slate-500 text-sm font-medium">Karnataka — Cricket Turf Shed</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    &quot;The quality of materials and the speed of their in-house installation team was remarkable. Highly recommended!&quot;
                  </p>
                  <div>
                    <h5 className="text-[#111] font-bold text-lg">School Administrator</h5>
                    <span className="text-slate-500 text-sm font-medium">Maharashtra — Multi-sport Turf Shed</span>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* ---------------- Interactive Accordion FAQ ---------------- */}
        <section className="bg-white py-10 lg:py-12 border-b border-slate-200 overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            <div className="w-full lg:w-5/12 flex flex-col">
              <div className="mb-12">
                <span className="text-slate-500 font-medium tracking-wide uppercase text-sm block mb-6">Our faq&apos;s</span>
                <h2 className="text-4xl md:text-5xl font-semibold text-[#111] tracking-tight leading-[1.1]">
                  Frequently asked <br/> <span className="font-serif italic font-medium lowercase">questions!</span>
                </h2>
              </div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg mt-auto">
                <Image src="/images/services/sports-turf-main-banner.png" alt="FAQ Sports Turf Sheds" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "Does KPN Roofing Shed build badminton court sheds?", a: "Yes. KPN Roofing Shed designs and builds badminton court sheds engineered for weatherproof, all-season play. Every structure is planned with adequate roof height, structural clearance, and durable roofing materials to provide comfortable playing conditions." },
                { q: "Does KPN Roofing Shed build cricket turf sheds?", a: "Yes. KPN Roofing Shed builds cricket turf sheds for practice nets and cricket turf facilities. The structures are designed with durable steel framing and weatherproof roofing to help keep the playing area usable throughout the year." },
                { q: "What is the cost of a sports turf shed in India?", a: "The cost depends on factors such as the type of sport, project size, span, roofing materials, and site location. Contact KPN Roofing Shed for a free site visit and a customized quotation." },
                { q: "What warranty does KPN Roofing Shed provide on sports turf sheds?", a: "KPN Roofing Shed provides a 10-year guarantee on sports turf sheds, along with free repair support for covered damage, as per the applicable warranty terms." },
                { q: "Does KPN Roofing Shed build sports turf sheds outside Tamil Nadu?", a: "Yes. KPN Roofing Shed undertakes sports turf shed projects across India for schools, colleges, sports academies, clubs, apartment complexes, and private sports facilities." }
              ].map((faq, i) => (
                <details name='faq' key={i} className="group bg-[#f8f9fc] rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
        <section className="py-12 lg:py-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/services/sports-turf-main-banner.png" alt="Sports Turf Sheds CTA" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#062088]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight leading-tight">
              Planning a badminton court or <span className="font-serif italic font-medium text-[#ffcc00]">cricket turf shed?</span>
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
              Talk to KPN Roofing Shed — get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <QuoteButton className="w-full sm:w-auto bg-[#ffcc00] text-[#111] font-semibold text-lg py-4 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md flex items-center justify-center cursor-pointer">
                Get Free Quote
              </QuoteButton>
              <a href="https://wa.me/919788770786" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white font-semibold text-lg py-4 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md flex items-center justify-center">
                Chat on WhatsApp
              </a>
              <a href="tel:+919788770786" className="w-full sm:w-auto border-2 border-blue-400 hover:border-white text-white font-semibold text-lg py-3.5 px-10 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center">
                Call Now
              </a>
            </div>
            
            <p className="text-sm text-blue-200/80 font-medium">
              50% advance to start — no hidden costs. 10-year guarantee on every roofing shed.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
