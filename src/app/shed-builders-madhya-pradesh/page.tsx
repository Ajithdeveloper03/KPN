import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Factory, Tractor, Home, Box, ShieldCheck, Check, Plus, Minus, ArrowRight, Droplets, Feather, Car, Dumbbell, MapPin, PhoneCall, Building2, Package, Phone, Ruler, Settings } from 'lucide-react';
import PageHero from '@/components/PageHero';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/shed-builders-madhya-pradesh/",
  },
  title: 'Shed Builders in Madhya Pradesh | Industrial & Farm Sheds | KPN',
  description: 'KPN Roofing Shed provides farm, industrial, warehouse, home and sports sheds in Madhya Pradesh. 13+ years, 1000+ projects. Get a quote.',
  keywords: 'Shed Builders in Madhya Pradesh, shed builders in Madhya Pradesh, industrial shed construction Madhya Pradesh, farm shed construction Madhya Pradesh, warehouse shed contractors Madhya Pradesh, roofing contractors Madhya Pradesh',
};

export default function MadhyaPradeshLocationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://kpnroofingsheds.com/shed-builders-madhya-pradesh/#webpage",
            "url": "https://kpnroofingsheds.com/shed-builders-madhya-pradesh/",
            "name": "Shed Builders in Madhya Pradesh | Industrial & Farm Sheds | KPN",
            "description": "KPN Roofing Shed builds industrial, farm, warehouse, home and sports sheds across Madhya Pradesh. 13+ years, 1000+ projects and 10-year warranty.",
            "isPartOf": {
              "@id": "https://kpnroofingsheds.com/#website"
            }
          })
        }}
      />

      <PageHero
        title="Shed Builders in Madhya Pradesh"
        bgImage="/images/terrace3.webp" breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shed Builders in Madhya Pradesh", href: "/shed-builders-madhya-pradesh/" }
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
                Shed Builders in <span className="font-serif font-medium text-[#062088] italic">Madhya Pradesh</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                KPN Roofing Shed provides custom-built roofing shed solutions across Madhya Pradesh for agricultural properties, industrial facilities, warehouses, homes and sports spaces.
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                From industrial areas around Indore and Pithampur to agricultural regions around Jabalpur and Rewa, shed requirements can vary depending on site conditions, intended use, available space and local weather. KPN plans each structure around these project-specific requirements rather than using a standard design.
              </p>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                With 13+ years of experience and 1000+ completed projects across India, KPN provides in-house engineering, Apollo-brand steel, transparent itemized quotations and its own installation team.
              </p>
            </div>

            <div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffcc00] rounded-bl-full opacity-20"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-bold text-[#111]">Looking for Shed Builders in Madhya Pradesh?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our services include goat farm sheds, dairy farm sheds, poultry farm sheds, factory sheds, garment and textile factory sheds, warehouse and godown sheds, terrace roofing sheds, car parking sheds, badminton court sheds and cricket turf sheds.
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
                Shed Construction Services in Madhya Pradesh
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#111]">
                Agricultural & Animal Husbandry <span className="font-serif font-medium text-slate-500 italic">Sheds</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                KPN designs agricultural sheds around the operational needs of the farm. These solutions are suitable for goat farms, dairy units, poultry operations and mixed agricultural properties across Madhya Pradesh.
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
                  Planned around herd size, available farm area, ventilation, feeding passages and waste drainage.
                </p>
              </div>

              {/* Dairy Shed - Center */}
              <div className="bg-gradient-to-b from-[#00a3e0] to-[#062088] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(6,32,136,0.2)] text-white hover:scale-105 transition-transform duration-500 relative group z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Droplets size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Dairy Farm Sheds</h4>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Planned around cattle count, milking access, animal movement, feed storage and water runoff.
                </p>
              </div>

              {/* Poultry Shed - Float Down */}
              <div className="bg-gradient-to-b from-[#ffcc00] to-[#d69900] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(255,204,0,0.2)] text-[#111] hover:translate-y-4 transition-transform duration-500 relative group lg:mt-6">
                <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#111] mb-6 group-hover:-scale-x-110 transition-transform duration-500 shadow-inner">
                  <Feather size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">Poultry Farm Sheds</h4>
                <p className="text-[#333] text-lg leading-relaxed font-medium">
                  Planned around bird density, shed orientation, temperature management and litter handling.
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
                Industrial & Warehouse Sheds
              </h3>
              <p className="text-[#a0a0a0] text-xl max-w-2xl font-medium leading-relaxed">
                For manufacturing and storage requirements, KPN plans shed structures around production workflow, machinery, storage capacity, roof height, ventilation and future expansion.
              </p>
              <QuoteButton className="inline-flex items-center justify-center gap-3 bg-white text-[#111] px-8 py-4 rounded-full font-bold hover:bg-[#ffcc00] transition-colors shadow-lg mt-4">
                Discuss Your Layout <ArrowRight size={20} />
              </QuoteButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:pl-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Factory sheds</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Garment & textile factory sheds</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Warehouse & godown sheds</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Workshop sheds</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-[#00a3e0]/20 text-[#00a3e0] flex items-center justify-center shrink-0"><Check size={20} /></div>
                  <span className="font-semibold text-lg text-white">Logistics-related structures</span>
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
                  Residential roofing solutions can provide additional covered space for homes and properties. Design considerations include existing terrace strength, roof slope, drainage, intended use, vehicle requirements and available plot width.
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
                    KPN also builds covered sports structures for schools, colleges, academies, clubs and residential communities. Design planning considers playing clearances, roof height, lighting provisions, practice-net dimensions and structural requirements.
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-4">KPN Shed Construction <br />Coverage in Madhya Pradesh</h2>
            <p className="text-xl text-slate-500 font-medium max-w-4xl mx-auto mb-8">
              We serve Madhya Pradesh and surrounding areas, subject to project requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Rewa'].map((area, i) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                { title: "Project-specific Engineering", desc: "Every structure is planned according to site conditions, dimensions, usage and structural requirements.", icon: <Ruler size={32} />, color: "text-[#ffcc00]", bg: "bg-yellow-50" },
                { title: "Direct Execution", desc: "KPN works directly with clients without brokers or subcontracted installation teams.", icon: <Settings size={32} />, color: "text-[#062088]", bg: "bg-blue-50" },
                { title: "Apollo-brand Steel", desc: "KPN uses Apollo-brand steel across its projects.", icon: <ShieldCheck size={32} />, color: "text-[#ee0000]", bg: "bg-red-50" },
                { title: "Transparent Quotations", desc: "Material, fabrication, delivery and installation components are clearly presented in the quotation.", icon: <Droplets size={32} />, color: "text-[#00a3e0]", bg: "bg-cyan-50" },
                { title: "Pan-India Experience", desc: "KPN has completed 1000+ projects across India and provides services across multiple regions.", icon: <Building2 size={32} />, color: "text-[#062088]", bg: "bg-blue-50" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-4`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#111] mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- How KPN Handles a Project (Stepped Horizontal Flow) ---------------- */}
        <section className="bg-white py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto px-6">

            <div className="text-center mb-12 max-w-3xl mx-auto">
              {/* <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-6 inline-block">
                Madhya Pradesh Service Areas
              </span>
              <p className="text-lg text-slate-600 mb-8">
                KPN undertakes shed construction across Madhya Pradesh, including Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar and Rewa, subject to project scope and site conditions.
              </p> */}
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-4">
                How to Plan a Shed in Madhya Pradesh
              </h2>
              <p className="text-xl text-slate-500 font-medium">A streamlined 6-step process from enquiry to complete installation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Share your requirement", desc: "Tell us whether you need a farm, factory, warehouse, residential or sports shed." },
                { title: "Share site details", desc: "Provide approximate dimensions and project location." },
                { title: "Site assessment", desc: "Site details are reviewed and a physical assessment is scheduled where required." },
                { title: "Design & engineering", desc: "Dimensions, roof slope, drainage, ventilation and structural requirements are planned." },
                { title: "Quotation", desc: "A detailed itemized quotation is provided." },
                { title: "Fabrication & installation", desc: "Materials are fabricated, dispatched and installed by the KPN team." }
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

        {/* ---------------- FAQs Section ---------------- */}
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
                { q: "Does KPN build sheds across Madhya Pradesh?", a: "Yes. KPN undertakes shed construction across Madhya Pradesh, including Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar, Rewa and surrounding areas, depending on project scope and site conditions." },
                { q: "What types of sheds does KPN build in Madhya Pradesh?", a: "KPN builds goat farm, dairy farm, poultry farm, factory, garment and textile factory, warehouse, godown, terrace roofing, car parking, badminton court and cricket turf sheds." },
                { q: "Can KPN design a shed according to my site?", a: "Yes. KPN plans each project around the site's dimensions, intended use, structural requirements, drainage, ventilation and other relevant conditions." },
                { q: "Does KPN provide shed construction quotations?", a: "Yes. KPN provides an itemized quotation covering materials, fabrication, delivery and installation." },
                { q: "What warranty is available for KPN projects?", a: "KPN provides a 10-year guarantee with free repair support for covered damage, subject to applicable terms." },
                { q: "Does KPN work outside Madhya Pradesh?", a: "Yes. KPN undertakes projects across India, with availability depending on project scope and site conditions." }
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
              Ready to Build Your Shed in Madhya Pradesh?
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
