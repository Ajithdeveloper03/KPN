import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { Factory, ShieldCheck, Check, Plus, Minus, ArrowRight, Home, Settings, MapPin, Box, Droplets, CreditCard, PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Roofing Sheds India | Terrace & Car Parking Sheds',
  description: 'KPN builds terrace roofing sheds and car parking sheds across India. Durable, weatherproof structures backed by 10+ years of experience. Get a free quote.',
  keywords: 'home roofing sheds India, residential roofing shed construction, terrace shed contractors India, car parking shed India',
};

export default function HomeRoofingShedsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <PageHero 
        title="Home Roofing Sheds" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Home Roofing Sheds", href: "/services/home-roofing-sheds" }
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
                Home Roofing Sheds India — <br className="hidden xl:block"/>
                <span className="font-serif italic font-medium text-[#062088]">Terrace & Car Parking Sheds</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                KPN Roofing Shed designs and builds home roofing sheds across India, including terrace roofing sheds and car parking sheds. Every structure is engineered to protect your home from sun and rain while complementing your property&apos;s existing design, using high-quality steel and expert craftsmanship.
              </p>
            </div>

            {/* Right Side: Image Gallery */}
            <div className="w-full lg:w-1/2 flex items-center justify-center gap-2 md:gap-3 mt-16 lg:mt-0">
              
              {/* Image 1: Medium Height */}
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/kpnroofingshed/images/roofing.png" alt="Terrace roofing sheds India" fill className="object-cover" priority />
              </div>
              
              {/* Image 2: Long Height (Center) */}
              <div className="relative w-1/3 h-[240px] sm:h-[300px] md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border-2 md:border-4 border-white">
                <Image src="/kpnroofingshed/images/image3.jpeg" alt="Home roofing shed construction" fill className="object-cover" priority />
              </div>
              
              {/* Image 3: Medium Height */}
              <div className="relative w-1/3 h-[180px] sm:h-[220px] md:h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transform translate-y-4">
                <Image src="/kpnroofingshed/images/roofing2.png" alt="Car parking shed contractors India" fill className="object-cover" priority />
              </div>

            </div>

          </div>
          <div className="mt-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
             <div className="w-full md:w-1/3">
               <h3 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">Who Is <br/> <span className="font-serif italic font-medium text-[#ee0000]">This For?</span></h3>
             </div>
             <div className="w-full md:w-2/3 border-l-0 md:border-l border-slate-200 md:pl-12">
               <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 Looking to extend your terrace with a durable roofing shed? Need a car parking shed that can handle heavy rain and sun? KPN Roofing Shed builds home roofing structures for homeowners across India, with in-house engineers and transparent, upfront pricing.
               </p>
             </div>
          </div>
        </section>

        {/* ---------------- At a Glance Metrics ---------------- */}
        <section className="bg-[#f0f7ff] py-10 lg:py-12 relative overflow-hidden border-y border-blue-100">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="mb-12">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Overview
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Home Roofing Sheds <br/><span className="font-serif italic font-medium text-[#00a3e0]">at a Glance</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Metric 1 */}
              <div className="bg-[#222d58] p-8 rounded-[2rem] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    <PenTool strokeWidth={1.5} size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-4">Pricing</h4>
                  <ul className="space-y-3 text-blue-100 font-medium leading-relaxed text-sm">
                    <li className="flex items-start gap-2"><Check size={18} className="text-[#ffcc00] mt-0.5 shrink-0" /> <span>Starts at ₹140/sq.ft (standard ISI sheet)</span></li>
                    <li className="flex items-start gap-2"><Check size={18} className="text-[#ffcc00] mt-0.5 shrink-0" /> <span>₹500-520/sq.ft (Kerala tile model)</span></li>
                  </ul>
                </div>
              </div>
              
              {/* Metric 2 */}
              <div className="bg-[#6f1c1c] p-8 rounded-[2rem] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    <ShieldCheck strokeWidth={1.5} size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-4">Warranty</h4>
                  <ul className="space-y-3 text-red-100 font-medium leading-relaxed text-sm">
                    <li className="flex items-start gap-2"><Check size={18} className="text-white mt-0.5 shrink-0" /> <span>10-year guarantee on every shed</span></li>
                    <li className="flex items-start gap-2"><Check size={18} className="text-white mt-0.5 shrink-0" /> <span>Free repair support for covered damage</span></li>
                  </ul>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-[#005a8a] p-8 rounded-[2rem] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                    <CreditCard strokeWidth={1.5} size={24} />
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-4">Payment</h4>
                  <ul className="space-y-3 text-blue-100 font-medium leading-relaxed text-sm">
                    <li className="flex items-start gap-2"><Check size={18} className="text-[#ffcc00] mt-0.5 shrink-0" /> <span>50% advance to start</span></li>
                    <li className="flex items-start gap-2"><Check size={18} className="text-[#ffcc00] mt-0.5 shrink-0" /> <span>Remainder in installments as materials arrive</span></li>
                  </ul>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="bg-[#daaf01] p-8 rounded-[2rem] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-[#111] mb-6">
                    <MapPin strokeWidth={1.5} size={24} />
                  </div>
                  <h4 className="text-[#111] font-semibold text-xl mb-4">Coverage</h4>
                  <ul className="space-y-3 text-slate-800 font-medium leading-relaxed text-sm">
                    <li className="flex items-start gap-2"><Check size={18} className="text-[#ee0000] mt-0.5 shrink-0" /> <span>Pan-India home roofing shed projects</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- What We Build (2-Column Grid) ---------------- */}
        <section className="bg-[#fffcf0] py-10 lg:py-16 max-w-full px-6 border-b border-yellow-100">
          <div className="max-w-[1300px] mx-auto">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-10">
              <div>
                <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                  Shed Types
                </span>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                  What We <br/><span className="font-serif italic font-medium text-[#ffcc00]">Build</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Terrace Roofing Shed */}
              <div className="bg-white hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-6 pb-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group relative overflow-hidden">
                <div className="relative w-full h-[320px] rounded-[1.5rem] overflow-hidden mb-10">
                  <Image src="/kpnroofingshed/images/roofing.png" alt="Terrace Roofing Sheds" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="px-4 flex justify-between items-end relative z-10">
                  <div className="max-w-[85%] space-y-4">
                    <Home strokeWidth={1.2} size={48} className="text-[#ee0000]" />
                    <h3 className="text-3xl font-semibold text-[#111]">Terrace Roofing Shed</h3>
                    <p className="text-slate-500 font-medium leading-relaxed group-hover:text-[#111]/80 transition-colors">
                      KPN&apos;s terrace roofing sheds are built to extend usable space on your terrace while protecting it from sun and monsoon rain. Standard ISI sheet roofing is available for budget-friendly coverage, and a Kerala tile-style model is available for a more traditional, finished look. Every terrace shed is designed to match the slope, drainage, and structure of your existing home.
                    </p>
                  </div>
                </div>
                <button className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-[#ee0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45 z-20">
                  <ArrowRight strokeWidth={2} size={20} />
                </button>
              </div>

              {/* Car Parking Shed */}
              <div className="bg-[#fafafa] hover:bg-[#ffcc00] transition-colors duration-500 rounded-[2rem] p-6 pb-12 border border-slate-200 shadow-sm group relative overflow-hidden flex flex-col-reverse md:flex-col">
                <div className="px-4 max-w-[85%] space-y-4 mb-10 mt-10 md:mt-0 relative z-10">
                  <Box strokeWidth={1.2} size={48} className="text-[#062088] group-hover:text-[#111] transition-colors" />
                  <h3 className="text-3xl font-semibold text-[#111]">Car Parking Shed</h3>
                  <p className="text-slate-500 group-hover:text-[#111]/80 transition-colors font-medium leading-relaxed">
                    KPN designs and manufactures car parking sheds for homes, villas, apartments, and commercial properties. Available for single-car and multi-car parking, every structure is built with durable steel and weather-resistant roofing materials for long-lasting protection.
                  </p>
                </div>
                <div className="relative w-full h-[320px] rounded-[1.5rem] overflow-hidden">
                  <Image src="/kpnroofingshed/images/roofing3.png" alt="Car Parking Sheds" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <button className="absolute bottom-10 right-10 md:top-10 md:bottom-auto w-14 h-14 rounded-full bg-[#062088] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg group-hover:-rotate-45 z-20">
                  <ArrowRight strokeWidth={2} size={20} />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ---------------- How to Choose (Process Cards) ---------------- */}
        <section className="bg-white py-10 lg:py-16 border-b border-cyan-100 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-600 tracking-wide uppercase mb-8 inline-block">
                Buying Guide
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#111] leading-tight tracking-tight">
                How to Choose the <span className="font-serif italic font-medium text-[#062088]">Right Home Roofing Shed</span>
              </h2>
            </div>

            <div className="relative">
              {/* Background Strip */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[65%] bg-[#f8f9fa] rounded-[3rem] hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
                {[
                  { title: "Measure and Plan", desc: "Measure your terrace or parking area accurately before planning the shed size.", color: "#ee0000", bgLight: "#ffe6e6", icon: <PenTool size={36} /> },
                  { title: "Choose the Right Sheet Type", desc: "Standard ISI sheet for budget coverage, or the Kerala tile model for a finished look.", color: "#ffcc00", bgLight: "#fff9e6", icon: <Box size={36} /> },
                  { title: "Drainage & Ventilation", desc: "Plan for water drainage so rain doesn't pool, and consider ventilation if partially enclosed.", color: "#00a3e0", bgLight: "#e6f7ff", icon: <Droplets size={36} /> },
                  { title: "Match Existing Aesthetics", desc: "Match the roofing style and color to your home's existing structure.", color: "#062088", bgLight: "#e6e9f3", icon: <Home size={36} /> },
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
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#ee0000] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-[0_15px_30px_rgba(238,0,0,0.2)] hover:-translate-y-1 transition-transform">
                  Experience Quality
                </Link>
              </div>

              <div className="w-full lg:w-7/12 relative mt-16 lg:mt-0 mb-12 md:mb-0">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                  <Image src="/kpnroofingshed/images/hero-bg.png" alt="KPN Home Roofing" fill className="object-cover" />
                </div>
                
                {/* The Floating Checklist Block */}
                <div className="relative -mt-16 mx-4 md:absolute md:mx-0 md:mt-0 md:right-auto md:-bottom-10 md:-left-12 lg:-left-20 bg-[#ffcc00] rounded-3xl p-6 md:p-10 shadow-2xl border border-[#ffcc00]/50 z-20 md:w-[480px]">
                  <ul className="space-y-4 md:space-y-4">
                    {[
                      "No middleman — deal directly with KPN",
                      "Own engineers — 5 qualified in-house designers",
                      "Own installation team — no subcontracted labour",
                      "Transparent pricing — itemized quotes, no hidden costs",
                      "Warranty support — 10-year guarantee"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[#111] font-medium text-base md:text-lg leading-snug">
                        <Check size={20} strokeWidth={3} className="shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto w-full mt-20 md:mt-10">
              <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm overflow-hidden">
                <div className="grid grid-cols-3 bg-[#f8f9fa] border-b border-slate-200">
                  <div className="p-4 md:p-6 font-semibold text-lg text-slate-700">Feature</div>
                  <div className="p-4 md:p-6 font-bold text-lg text-[#062088] border-l border-slate-200">KPN Home Roofing</div>
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
                 What Our Home Roofing <span className="font-serif italic font-medium text-[#00a3e0]">Clients Say</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { name: "Priya", location: "Chennai", type: "Terrace Roofing Shed", text: "KPN installed a beautiful Kerala tile model shed on our terrace. The quality of work and the speed of execution were both top-notch. Highly recommended!" },
                { name: "Arvind", location: "Coimbatore", type: "Car Parking Shed", text: "The team designed a robust car parking shed for my two cars. The structure is extremely sturdy, and the transparent pricing meant no surprises." },
                { name: "Lakshmi", location: "Madurai", type: "Terrace Roofing Shed", text: "We wanted a budget-friendly option and went with the standard ISI sheet. The 10-year warranty gives us great peace of mind." }
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
            <div className="text-center text-slate-500 font-medium text-sm">
              Read more Google Reviews and YouTube Testimonials online.
            </div>
          </div>
        </section>

        {/* ---------------- Explore by Shed Type ---------------- */}
        <section className="bg-white py-10 lg:py-16 max-w-[1300px] mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111] tracking-tight">Explore by <span className="font-serif italic font-medium text-[#ee0000]">Shed Type</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Terrace Roofing Shed", link: "/services/terrace-roofing-shed" },
              { name: "Car Parking Shed", link: "/services/car-parking-shed" },
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
                <Image src="/kpnroofingshed/images/roofing.png" alt="FAQ Home Roofing Sheds" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            {/* Right Side: Accordion */}
            <div className="w-full lg:w-7/12 space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "What is the cost of a terrace roofing shed in India?", a: "A standard ISI sheet terrace shed starts at ₹140 per sq.ft. A Kerala tile-style model costs ₹500-520 per sq.ft." },
                { q: "Does KPN build car parking sheds?", a: "Yes. KPN builds car parking sheds sized for single or multiple vehicles, engineered for weatherproof, durable coverage." },
                { q: "How long does a home roofing shed take to complete?", a: "Timeline depends on the size of the terrace or parking area — smaller home roofing projects are typically completed faster than full farm or industrial sheds. Contact KPN for a project-specific timeline." },
                { q: "What warranty does KPN provide on home roofing sheds?", a: "KPN provides a 10-year guarantee, with free repair support for covered damage as per applicable warranty terms." },
                { q: "Does KPN build home roofing sheds outside Tamil Nadu?", a: "Yes. KPN delivers home roofing projects pan-India." }
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
            <Image src="/kpnroofingshed/images/hero-bg.png" alt="Home Roofing Sheds CTA" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#062088]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight leading-tight">
              Planning a terrace or <span className="font-serif italic font-medium text-[#ffcc00]">car parking shed?</span>
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
              Talk to KPN Roofing Shed — get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <Link href="/contact" className="w-full sm:w-auto bg-[#ffcc00] text-[#111] font-semibold text-lg py-3 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-md mb-3 flex items-center justify-center">
                  Get Free Quote
                </Link>
                <span className="text-xs text-blue-200/80 max-w-[240px] text-center leading-relaxed hidden sm:block">
                  50% advance to start — no hidden costs. 10-year guarantee on every roofing shed.
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
