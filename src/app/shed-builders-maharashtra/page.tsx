import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Factory, Tractor, Home, Box, ShieldCheck, Check, Plus, Minus, ArrowRight, Droplets, Feather, Car, Dumbbell, MapPin, PhoneCall, Building2, Package, Phone, Ruler, Settings } from 'lucide-react';
import PageHero from '@/components/PageHero';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Shed Contractors in Maharashtra | Industrial & Farm Sheds | KPN",
  description: "KPN Roofing Shed provides industrial, farm, warehouse, home and sports sheds across Maharashtra. 13+ years, 1000+ projects and 10-year warranty.",
  alternates: {
    canonical: "https://kpnroofingsheds.com/shed-builders-maharashtra/"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KPN Roofing Shed",
  "description": "KPN Roofing Shed provides industrial, farm, warehouse, home and sports sheds across Maharashtra. 13+ years, 1000+ projects and 10-year warranty.",
  "url": "https://kpnroofingsheds.com/shed-builders-maharashtra/",
  "isPartOf": {
    "@id": "https://kpnroofingsheds.com/#website"
  }
};

export default function BangaloreLocationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <PageHero
        title="Shed Contractors in Maharashtra"
        bgImage="/images/factory-2.webp" breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shed Contractors in Maharashtra", href: "/shed-builders-maharashtra/" }
        ]}
      />

      <main className="flex-grow">

        {/* ---------------- Intro Section ---------------- */}
        <section className="max-w-[1400px] mx-auto px-6 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="flex flex-col items-start text-left space-y-4">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase">
                Location Focus
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#111] leading-[1.1] tracking-tight">
                Shed Contractors in <span className="font-serif font-medium text-[#062088] italic">Maharashtra</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                KPN Roofing Shed provides custom roofing shed construction across Maharashtra for industrial facilities, farms, warehouses, homes, parking areas and sports facilities.
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                Different regions and industries across Maharashtra can have different shed requirements. KPN plans each project around the intended use, available site area, structural requirements, drainage, ventilation and operational needs.
              </p>
            </div>

            <div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcc00] rounded-bl-full opacity-20"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-bold text-[#111]">Need Shed Contractors in Maharashtra?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our services include goat farm sheds, dairy farm sheds, poultry farm sheds, factory sheds, garment and textile factory sheds, warehouse and godown sheds, terrace roofing sheds, car parking sheds, badminton court sheds and cricket turf sheds.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    KPN has 13+ years of experience and 1000+ completed projects across India, with in-house engineering, Apollo-brand steel, transparent quotations and its own installation team.
                  </p>
                  <p className="text-slate-600 font-semibold">
                    Get a customised shed solution based on your project size, usage, structural requirements and budget.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                      <ShieldCheck size={18} className="text-[#062088]" />
                      <span className="text-sm font-semibold">13+ Years Exp</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                      <Building2 size={18} className="text-[#ee0000]" />
                      <span className="text-sm font-semibold">1000+ Projects</span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex gap-4 flex-col sm:flex-row">
                    <QuoteButton className="flex-1 flex justify-center items-center gap-2 bg-[#ffcc00] text-[#111] px-6 py-4 rounded-full font-bold hover:bg-[#e6b800] transition-colors shadow-sm">
                      <PhoneCall size={20} /> Get a Free Quote
                    </QuoteButton>
                    <Link href="/contact" className="flex-1 flex justify-center items-center gap-2 bg-[#111] text-white px-6 py-4 rounded-full font-bold hover:bg-black transition-colors shadow-sm">
                      <Phone size={20} /> Talk to KPN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Farm & Animal Husbandry Sheds (Staggered Floating Cards) ---------------- */}
        <section className="bg-white py-10 lg:py-16 border-y border-slate-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[#f8f9fa]/50 -skew-y-3 transform origin-top-left -z-10"></div>

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-sm font-bold text-[#ee0000] tracking-widest uppercase mb-4 inline-block bg-white shadow-sm">
                Shed Construction Services in Bangalore
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#111]">
                Agricultural & Farm Shed Construction in <span className="font-serif font-medium text-slate-500 italic">Maharashtra</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                KPN provides farm and animal-husbandry shed solutions for agricultural properties across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">

              {/* Goat Shed - Float Up */}
              <div className="bg-gradient-to-b from-[#ee0000] to-[#b30000] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(238,0,0,0.2)] text-white hover:-translate-y-4 transition-transform duration-500 relative group lg:-mt-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <Tractor size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Goat Farm Sheds</h4>
                <p className="text-red-100 text-lg leading-relaxed">
                  Designed around herd size, farm area, ventilation, feeding passages, waste management and drainage.
                </p>
              </div>

              {/* Dairy Shed - Center */}
              <div className="bg-gradient-to-b from-[#00a3e0] to-[#062088] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(6,32,136,0.2)] text-white hover:scale-105 transition-transform duration-500 relative group z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Droplets size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Dairy Farm Sheds</h4>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Planned around cattle count, milking access, movement areas, feed storage and water runoff.
                </p>
              </div>

              {/* Poultry Shed - Float Down */}
              <div className="bg-gradient-to-b from-[#ffcc00] to-[#d69900] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(255,204,0,0.2)] text-[#111] hover:translate-y-4 transition-transform duration-500 relative group lg:mt-6">
                <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#111] mb-6 group-hover:-scale-x-110 transition-transform duration-500 shadow-inner">
                  <Feather size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Poultry Farm Sheds</h4>
                <p className="text-[#333] text-lg leading-relaxed font-medium">
                  Planned around bird density, orientation, temperature management, litter handling and operational flow.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ---------------- Industrial & Warehouse Sheds (Dark Minimalist Grid) ---------------- */}
        <section className="bg-[#111] py-12 lg:py-20 text-white relative">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase">
                <Factory size={16} className="text-[#ffcc00]" /> Commercial
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                Industrial & Warehouse Shed Construction
              </h3>
              <p className="text-[#a0a0a0] text-xl max-w-2xl font-medium leading-relaxed">
                KPN provides roofing structures for manufacturing, textile, warehousing, logistics and workshop requirements. Planning can consider production-floor requirements, machinery footprint, storage volume, loading bays, aisle spacing, roof height, ventilation and access roads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:pl-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Factory sheds</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Garment and textile factory sheds</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Warehouse sheds</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Godown sheds</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Workshop sheds</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- Residential & Sports (Horizontal Split Layout) ---------------- */}
        <section className="bg-[#f0f7ff] py-10 lg:py-16 border-b border-blue-100">
          <div className="max-w-[1400px] mx-auto px-6 space-y-8">

            {/* Residential Card */}
            <div className="bg-white rounded-[2.5rem] p-2 md:p-3 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden group">
              <div className="bg-[#062088] rounded-[2rem] p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-white/5 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                  <Home size={200} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 relative z-10">Residential Roofing & Car Parking Sheds</h3>
                <p className="text-blue-200 text-lg leading-relaxed relative z-10 mb-4">
                  For residential properties, KPN provides:
                </p>
                <ul className="text-blue-200 text-lg leading-relaxed relative z-10 space-y-2 mb-6 ml-4 list-disc">
                  <li>Terrace roofing sheds</li>
                  <li>Car parking sheds</li>
                </ul>
                <p className="text-blue-200 text-lg leading-relaxed relative z-10">
                  The design is based on existing terrace strength, drainage, intended use, vehicle requirements, plot width and driveway access.
                </p>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center items-start gap-6">
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 lg:p-6 flex items-center gap-5 hover:border-[#062088] transition-colors">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#062088]"><Home size={28} /></div>
                  <span className="text-xl lg:text-2xl font-bold text-[#111]">Terrace roofing sheds</span>
                </div>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 lg:p-6 flex items-center gap-5 hover:border-[#062088] transition-colors">
                  <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#062088]"><Car size={28} /></div>
                  <span className="text-xl lg:text-2xl font-bold text-[#111]">Car parking sheds</span>
                </div>
              </div>
            </div>

            {/* Sports Turf Banner - Unique Design */}
            <div className="bg-slate-500 rounded-[2.5rem] p-8 lg:p-12 shadow-xl relative overflow-hidden group border border-slate-200 mt-8">
              <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-bl from-[#00a3e0]/5 to-transparent"></div>
              <div className="absolute -bottom-10 -left-10 text-slate-200/60 transform rotate-12 group-hover:scale-110 transition-transform duration-1000">
                <Dumbbell size={250} />
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
                  <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00a3e0] hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-[#00a3e0]/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#00a3e0]"><Check size={24} /></div>
                    <span className="text-xl font-bold text-[#111]">Badminton court sheds</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00a3e0] hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-[#00a3e0]/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#00a3e0]"><Check size={24} /></div>
                    <span className="text-xl font-bold text-[#111]">Cricket turf sheds</span>
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111] tracking-tight">Sports Turf Sheds</h3>
                  <p className="text-slate-100 text-lg leading-relaxed max-w-lg">
                    KPN builds covered sports facilities for schools, colleges, academies, clubs and residential communities. Solutions include planning for clearances, roof height, lighting, playing space and structural requirements.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- Need the Right Shed CTA ---------------- */}
        <section className="bg-slate-900 py-16 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need the Right Shed for Your Project?</h2>
            <p className="text-xl text-slate-300 font-medium mb-10 max-w-3xl mx-auto">
              From industrial and warehouse sheds to farm, home and sports roofing solutions, KPN Roofing Shed provides end-to-end shed construction support.
            </p>
            <QuoteButton className="inline-flex items-center justify-center gap-2 bg-[#ffcc00] text-[#111] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e6b800] transition-transform hover:-translate-y-1 shadow-xl">
              <ArrowRight size={20} /> Request a Free Project Consultation
            </QuoteButton>
          </div>
        </section>

        {/* ---------------- Coverage Area (Pill Grid) ---------------- */}
        <section className="bg-white py-10 lg:py-16 border-b border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <MapPin size={40} className="mx-auto text-[#ee0000] mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-4">KPN Shed Construction <br />Coverage in Maharashtra</h2>
            <p className="text-xl text-slate-500 font-medium max-w-4xl mx-auto mb-8">
              We serve Mumbai, Pune, Nagpur, Nashik, Thane, Aurangabad, Kolhapur and surrounding areas across Maharashtra, subject to project requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Kolhapur'].map((area, i) => (
                <div key={i} className="bg-[#f8f9fa] border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#ffcc00] hover:border-[#ffcc00] hover:text-[#111] transition-colors shadow-sm">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Why Choose KPN (Minimalist Grid) ---------------- */}
        <section className="bg-[#fafafa] py-10 lg:py-16 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                Why Choose <span className="font-serif italic text-[#062088]">KPN Roofing Shed?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { title: "13+ years of experience", icon: <ShieldCheck size={32} />, color: "text-[#ffcc00]", bg: "bg-yellow-50" },
                { title: "1000+ completed projects across India", icon: <Building2 size={32} />, color: "text-[#062088]", bg: "bg-blue-50" },
                { title: "In-house engineering", icon: <Ruler size={32} />, color: "text-[#ee0000]", bg: "bg-red-50" },
                { title: "Apollo-brand steel", icon: <ShieldCheck size={32} />, color: "text-[#00a3e0]", bg: "bg-cyan-50" },
                { title: "Own installation team", icon: <Settings size={32} />, color: "text-[#062088]", bg: "bg-blue-50" },
                { title: "Transparent, itemized quotations", icon: <Droplets size={32} />, color: "text-[#ffcc00]", bg: "bg-yellow-50" },
                { title: "No middlemen or subcontracted installation", icon: <Settings size={32} />, color: "text-[#ee0000]", bg: "bg-red-50" },
                { title: "Coastal humidity (Mumbai/Konkan) vs dry heat (Vidarbha)", icon: <Droplets size={32} />, color: "text-[#00a3e0]", bg: "bg-cyan-50" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-4`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#111]">{benefit.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- How KPN Handles a Project (Stepped Horizontal Flow) ---------------- */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto px-6">

            <div className="text-center mb-12 max-w-3xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-4">
                How KPN Handles a Maharashtra Shed Project
              </h2>
              <p className="text-xl text-slate-500 font-medium">A streamlined 6-step process from enquiry to complete installation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Requirement", desc: "Share your shed type, approximate dimensions and location." },
                { title: "Site assessment", desc: "KPN reviews available site information and arranges a physical assessment where required." },
                { title: "Engineering", desc: "The team plans dimensions, roof slope, drainage, ventilation and structural requirements." },
                { title: "Quotation", desc: "You receive a detailed quotation based on the project requirements." },
                { title: "Fabrication & dispatch", desc: "Materials are fabricated and dispatched to the project site." },
                { title: "Installation", desc: "KPN's installation team completes the shed construction." }
              ].map((step, i) => (
                <div key={i} className="relative bg-[#f8f9fa] border border-slate-200 rounded-[2rem] p-8 pt-12 hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-colors group">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 text-7xl font-black text-slate-200 group-hover:text-white/50 transition-colors">
                    0{i + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-[#111] mb-4 relative z-10">{step.title}</h4>
                  <p className="text-slate-600 group-hover:text-slate-800 font-medium text-lg relative z-10 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-10 lg:py-16">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-slate-500 font-medium tracking-wide uppercase text-sm block mb-2">Learn More</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#111] tracking-tight leading-[1.1]">
                Frequently Asked <span className="font-serif font-medium text-[#ee0000] italic">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Does KPN provide shed construction across Maharashtra?", a: "Yes. KPN undertakes shed projects across Maharashtra, including Mumbai, Pune, Nagpur, Nashik, Thane, Aurangabad and Kolhapur, subject to project scope and site conditions." },
                { q: "What types of sheds does KPN build in Maharashtra?", a: "KPN builds goat farm, dairy farm, poultry farm, factory, garment and textile factory, warehouse, godown, terrace roofing, car parking, badminton court and cricket turf sheds." },
                { q: "Does KPN build industrial sheds in Maharashtra?", a: "Yes. KPN provides factory, garment and textile factory, warehouse, godown and workshop shed solutions for industrial and commercial requirements." },
                { q: "Can KPN construct farm sheds in Maharashtra?", a: "Yes. KPN provides goat, dairy and poultry farm shed construction based on the farm's operational and site requirements." },
                { q: "Does KPN build sheds in Pune and Mumbai?", a: "KPN's Maharashtra service coverage includes Pune and Mumbai along with other listed cities, with project availability depending on site conditions and scope." },
                { q: "Can KPN design a shed specifically for my site?", a: "Yes. KPN uses an in-house engineering approach and plans structures according to site dimensions, intended use, soil conditions, wind-load considerations, drainage and ventilation requirements." },
                { q: "What warranty is provided on KPN shed projects?", a: "KPN provides a 10-year guarantee with free repair support for covered damage, subject to applicable terms." },
                { q: "Does KPN undertake projects outside Maharashtra?", a: "Yes. KPN undertakes projects across India, depending on project scope and site conditions." }
              ].map((faq, i) => (
                <details name='faq' key={i} className="group bg-[#f8f9fa] rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8 text-xl font-semibold text-[#111]">
                    <span className="flex gap-4 pr-4">{faq.q}</span>
                    <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-[#ee0000] group-open:border-[#ee0000] group-open:text-white group-hover:border-[#111]">
                      <Plus size={20} className="block group-open:hidden" strokeWidth={1.5} />
                      <Minus size={20} className="hidden group-open:block" strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 md:pl-8 text-slate-600 font-medium leading-relaxed text-lg pt-2 opacity-0 group-open:opacity-100 group-open:animate-fadeIn">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="bg-[#ffcc00] py-10 lg:py-16 text-center border-t border-yellow-400">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4 tracking-tight">
              Ready to Build Your Shed in Maharashtra?
            </h2>
            <p className="text-lg text-slate-800 font-medium mb-8 max-w-2xl mx-auto">
              Share your project requirements with KPN Roofing Shed and our team can help you plan the right roofing solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButton className="inline-flex items-center justify-center gap-3 bg-[#111] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-transform hover:-translate-y-1 shadow-xl">
                <PhoneCall size={24} /> Get a Quote Today
              </QuoteButton>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#111] px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-transform hover:-translate-y-1 shadow-xl border border-slate-100">
                <Phone size={24} /> Contact KPN Roofing Shed
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
