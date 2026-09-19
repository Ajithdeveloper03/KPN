import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Factory, Tractor, Home, Box, ShieldCheck, Check, Plus, Minus, 
  ArrowRight, Droplets, Feather, Car, Dumbbell, MapPin, PhoneCall, 
  Building2, Package, Phone, MessageSquare, Wrench, FileText, 
  Truck, CheckCircle2, Compass, Layers, Sparkles
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import QuoteButton from '@/components/QuoteButton';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/shed-construction-company-tamil-nadu/",
  },
  title: 'Shed Construction Company in Tamil Nadu | KPN Roofing Shed',
  description: 'KPN Roofing Shed provides shed construction services across Tamil Nadu for industrial, farm, home, and sports projects. 13+ years, 1000+ projects. Get a quote.',
  keywords: 'shed construction company Tamil Nadu, shed builders Trichy, industrial shed builders Coimbatore, shed construction Madurai',
};

export default function TamilNaduLocationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://kpnroofingsheds.com/shed-construction-company-tamil-nadu/#webpage",
            "url": "https://kpnroofingsheds.com/shed-construction-company-tamil-nadu/",
            "name": "Shed Construction Company in Tamil Nadu | KPN Roofing Shed",
            "description": "KPN Roofing Shed provides shed construction services across Tamil Nadu for industrial, farm, home, and sports projects. 13+ years, 1000+ projects. Get a quote.",
            "isPartOf": {
              "@id": "https://kpnroofingsheds.com/#website"
            }
          })
        }}
      />

      <PageHero
        title="Shed Construction Company in Tamil Nadu"
        bgImage="/images/animal1.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tamil Nadu", href: "/shed-construction-company-tamil-nadu/" }
        ]}
      />

      <main className="flex-grow">
        {/* ---------------- 1. Hero Overview & Intro ---------------- */}
        <section className="max-w-[1400px] mx-auto px-6 py-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-300 bg-white text-sm font-bold text-[#ee0000] tracking-wide uppercase shadow-sm">
                <MapPin size={16} /> Local Engineering, Faster Delivery
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#111] leading-[1.15] tracking-tight">
                Shed Construction Company in <span className="font-serif font-medium text-[#062088] italic">Tamil Nadu</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                Tamil Nadu has a strong agricultural sector alongside major industrial hubs around Chennai, Coimbatore, Madurai, Salem, and Tirupur.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                KPN Roofing Shed is based in Trichy, Tamil Nadu, with 13+ years of experience and 1000+ completed projects across India. KPN undertakes shed construction projects across Tamil Nadu for farms, factories, warehouses, homes, and sports facilities, with in-house engineering, Apollo-brand steel, transparent pricing, and its own trained installation crew with no subcontracting.
              </p>

              <div className="w-full bg-[#f0f4ff] border-l-4 border-[#062088] p-5 rounded-r-2xl space-y-2">
                <p className="text-xl font-bold text-[#062088]">
                  No middlemen. No subcontracting. No guesswork.
                </p>
                <p className="text-slate-700 font-medium leading-relaxed">
                  Every shed is planned around your specific site, purpose, dimensions, and budget — not a generic template.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#ffcc00] rounded-bl-full opacity-25"></div>
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Sparkles size={14} className="text-[#ee0000]" /> Trichy Headquarters
                  </div>
                  <h3 className="text-2xl font-bold text-[#111]">Tamil Nadu Project Snapshot</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Custom-designed sheds for farms, factories, warehouses, homes, and sports turf across all districts of Tamil Nadu.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <ShieldCheck size={20} className="text-[#062088] shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Experience</div>
                        <div className="text-sm font-bold text-[#111]">13+ Years</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <Building2 size={20} className="text-[#ee0000] shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Delivered</div>
                        <div className="text-sm font-bold text-[#111]">1000+ Projects</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <Layers size={20} className="text-[#00a3e0] shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Steel Quality</div>
                        <div className="text-sm font-bold text-[#111]">Apollo-Brand</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <CheckCircle2 size={20} className="text-[#ffcc00] shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Guarantee</div>
                        <div className="text-sm font-bold text-[#111]">10-Year Warranty</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex gap-3 flex-col sm:flex-row">
                    <QuoteButton className="flex-1 flex justify-center items-center gap-2 bg-[#ffcc00] text-[#111] px-6 py-4 rounded-full font-bold hover:bg-[#e6b800] transition-colors shadow-sm">
                      <PhoneCall size={18} /> Get Free Quote
                    </QuoteButton>
                    <Link href="/contact" className="flex-1 flex justify-center items-center gap-2 bg-[#111] text-white px-6 py-4 rounded-full font-bold hover:bg-black transition-colors shadow-sm">
                      <Phone size={18} /> Talk to KPN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 2. Agricultural & Farm Sheds (Floating Cards) ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-y border-slate-200 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#ee0000] tracking-widest uppercase mb-4 inline-block bg-[#f8f9fa] shadow-sm">
                Shed Construction Services in Tamil Nadu
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#111]">
                Agricultural & Farm <span className="font-serif font-medium text-[#062088] italic">Sheds</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
                Tamil Nadu has a strong dairy, poultry, and agricultural sector, with farm and animal sheds planned around herd size, ventilation, drainage, access, and site requirements. Each project is custom-designed — never mass-produced.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 mb-6">
              {/* Goat Shed - Float Up */}
              <div className="bg-gradient-to-b from-[#ee0000] to-[#b30000] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(238,0,0,0.2)] text-white hover:-translate-y-3 transition-transform duration-500 relative group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Tractor size={32} />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-red-200">Shed Type</span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">Goat Farm Sheds</h4>
                  <div className="text-xs uppercase font-bold tracking-widest text-red-200 mb-1">What We Plan Around</div>
                  <p className="text-red-100 text-base leading-relaxed">
                    Herd size, farm area, cross-ventilation, feeding passages, waste drainage.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20">
                  <Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                    Explore Goat Farm Shed <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Dairy Shed - Center */}
              <div className="bg-gradient-to-b from-[#00a3e0] to-[#062088] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(6,32,136,0.2)] text-white hover:scale-105 transition-transform duration-500 relative group z-10 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <Droplets size={32} />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-blue-200">Shed Type</span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">Dairy Farm Sheds</h4>
                  <div className="text-xs uppercase font-bold tracking-widest text-blue-200 mb-1">What We Plan Around</div>
                  <p className="text-blue-100 text-base leading-relaxed">
                    Cattle count, milking access, movement zones, feed storage, water runoff.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20">
                  <Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="inline-flex items-center gap-2 text-white font-bold hover:underline">
                    Explore Dairy Farm Shed <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Poultry Shed - Float Down */}
              <div className="bg-gradient-to-b from-[#ffcc00] to-[#d69900] rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(255,204,0,0.2)] text-[#111] hover:translate-y-3 transition-transform duration-500 relative group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#111] mb-6 group-hover:-scale-x-110 transition-transform duration-500 shadow-inner">
                    <Feather size={32} />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-800">Shed Type</span>
                  <h4 className="text-2xl font-bold mt-1 mb-3">Poultry Farm Sheds</h4>
                  <div className="text-xs uppercase font-bold tracking-widest text-slate-800 mb-1">What We Plan Around</div>
                  <p className="text-[#333] text-base leading-relaxed font-medium">
                    Bird density, shed orientation, temperature control, litter management.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-black/10">
                  <Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/" className="inline-flex items-center gap-2 text-[#111] font-bold hover:underline">
                    Explore Poultry Farm Shed <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Ideal For & Quick Links */}
            <div className="bg-[#f8f9fa] border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-slate-700 font-medium">
                <span className="font-bold text-[#111]">Ideal for:</span> Goat farms, dairy units, poultry operations, and mixed agricultural properties.
              </div>
              <div className="flex flex-wrap items-center gap-2 font-bold text-sm text-[#062088]">
                <span>➜ Explore:</span>
                <Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed/" className="underline hover:text-[#ee0000]">Goat Farm Shed</Link>
                <span>|</span>
                <Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/" className="underline hover:text-[#ee0000]">Dairy Farm Shed</Link>
                <span>|</span>
                <Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/" className="underline hover:text-[#ee0000]">Poultry Farm Shed</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 3. Industrial & Warehouse Sheds (Dark Minimalist Grid) ---------------- */}
        <section className="bg-[#111] py-8 lg:py-12 text-white relative">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase">
                <Factory size={16} className="text-[#ffcc00]" /> Commercial & Industrial
              </div>
              <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                Industrial & Warehouse Sheds in 
                <span className="text-[#ffcc00]">Coimbatore, Chennai & Tamil Nadu</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                Tamil Nadu&apos;s industrial belt — including Chennai, Coimbatore, Tirupur, and Hosur — needs robust, functional covered spaces for manufacturing, textile and engineering units, and storage. KPN delivers project-specific shed solutions based on site requirements.
              </p>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl max-w-xl">
                <div className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <span className="font-bold text-white">Ideal for:</span> Manufacturing units, textile and engineering factories, warehouses, godowns, workshops, logistics hubs.
                </div>
                <div className="flex flex-wrap items-center gap-2 font-bold text-sm text-[#ffcc00] mt-3">
                  <span>➜ Explore:</span>
                  <Link href="/services/industrial-sheds/factory-shed/" className="underline hover:text-white">Factory Shed</Link>
                  <span>|</span>
                  <Link href="/services/industrial-sheds/garment-factory-shed/" className="underline hover:text-white">Garment Factory Shed</Link>
                  <span>|</span>
                  <Link href="/services/industrial-sheds/warehouse-godown-shed/" className="underline hover:text-white">Warehouse & Godown Shed</Link>
                </div>
              </div>

              <div>
                <QuoteButton className="inline-flex items-center justify-center gap-3 bg-white text-[#111] px-8 py-4 rounded-full font-bold hover:bg-[#ffcc00] transition-colors shadow-lg">
                  Discuss Your Layout <ArrowRight size={20} />
                </QuoteButton>
              </div>
            </div>

            <div className="space-y-4">
              <div className="mb-2"><span className="text-slate-300 font-semibold text-lg">Project-Specific Industrial Solutions:</span></div>
              
              {/* Factory Sheds */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#333] rounded-xl flex items-center justify-center text-[#ffcc00] group-hover:scale-110 group-hover:bg-[#ffcc00] group-hover:text-[#111] transition-all shrink-0">
                    <Factory size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xl text-white">Factory Sheds</h4>
                      <Link href="/services/industrial-sheds/factory-shed/" className="text-xs uppercase font-bold text-[#ffcc00] hover:underline inline-flex items-center gap-1">
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Production floor area, machinery footprint, roof height, ventilation, expansion room.
                    </p>
                  </div>
                </div>
              </div>

              {/* Garment & Textile Factory Sheds */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#333] rounded-xl flex items-center justify-center text-[#00a3e0] group-hover:scale-110 group-hover:bg-[#00a3e0] group-hover:text-white transition-all shrink-0">
                    <Package size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xl text-white">Garment & Textile Factory Sheds</h4>
                      <Link href="/services/industrial-sheds/garment-factory-shed/" className="text-xs uppercase font-bold text-[#00a3e0] hover:underline inline-flex items-center gap-1">
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Workflow, lighting, roof clearance, air circulation, worker comfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Warehouse & Godown Sheds */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#333] rounded-xl flex items-center justify-center text-[#ee0000] group-hover:scale-110 group-hover:bg-[#ee0000] group-hover:text-white transition-all shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xl text-white">Warehouse & Godown Sheds</h4>
                      <Link href="/services/industrial-sheds/warehouse-godown-shed/" className="text-xs uppercase font-bold text-[#ee0000] hover:underline inline-flex items-center gap-1">
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Storage volume, pallet movement, loading bays, aisle spacing, access roads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 4. Residential & Sports (Horizontal Split Layout) ---------------- */}
        <section className="bg-[#f0f7ff] py-8 lg:py-12 border-b border-blue-100">
          <div className="max-w-[1400px] mx-auto px-6 space-y-6">
            
            {/* Residential Card */}
            <div className="bg-white rounded-[2.5rem] p-2 md:p-3 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden group">
              <div className="bg-[#062088] rounded-[2rem] p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-white/5 transform rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Home size={200} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 relative z-10">Home Roofing Sheds</h3>
                <p className="text-blue-200 text-lg leading-relaxed relative z-10 mb-4">
                  Tamil Nadu&apos;s climate — coastal humidity, inland heat, and the northeast monsoon — makes properly planned, ventilated roofing a practical addition for any home. As our home state, KPN can take on Tamil Nadu residential projects starting from a smaller 1,440 sq.ft minimum, without the higher outstation threshold that applies elsewhere.
                </p>
                <div className="text-blue-100 text-sm font-semibold relative z-10 mb-4">
                  <span className="text-white font-bold">Ideal for:</span> Independent homes, apartments, gated communities, and residential parking areas.
                </div>
                <div className="flex flex-wrap items-center gap-2 font-bold text-sm text-[#ffcc00] relative z-10">
                  <span>➜ Explore:</span>
                  <Link href="/services/home-roofing-sheds/terrace-roofing-shed/" className="underline hover:text-white">Terrace Roofing Shed</Link>
                  <span>|</span>
                  <Link href="/services/home-roofing-sheds/car-parking-shed/" className="underline hover:text-white">Car Parking Shed</Link>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center items-start gap-6">
                {/* Terrace Roofing Shed Item */}
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 lg:p-6 hover:border-[#062088] transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#062088]">
                      <Home size={28} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#111]">Terrace Roofing Sheds</span>
                        <Link href="/services/home-roofing-sheds/terrace-roofing-shed/" className="text-xs font-bold text-[#062088] hover:underline uppercase inline-flex items-center gap-1">
                          View <ArrowRight size={12} />
                        </Link>
                      </div>
                      <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Existing terrace strength, slope, drainage, intended use. Kerala tile-style finish available.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Car Parking Shed Item */}
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 lg:p-6 hover:border-[#062088] transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#062088]">
                      <Car size={28} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#111]">Car Parking Sheds</span>
                        <Link href="/services/home-roofing-sheds/car-parking-shed/" className="text-xs font-bold text-[#062088] hover:underline uppercase inline-flex items-center gap-1">
                          View <ArrowRight size={12} />
                        </Link>
                      </div>
                      <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Number of vehicles, plot width, driveway access, single or multi-bay layouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports Turf Banner - Unique Design */}
            <div className="bg-slate-500 rounded-[2.5rem] p-8 lg:p-12 shadow-xl relative overflow-hidden group border border-slate-200 mt-6">
              <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-bl from-[#00a3e0]/5 to-transparent"></div>
              <div className="absolute -bottom-10 -left-10 text-slate-200/60 transform rotate-12 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                <Dumbbell size={250} />
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
                  {/* Badminton Court */}
                  <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00a3e0] hover:shadow-md transition-all">
                    <div>
                      <div className="w-12 h-12 bg-[#00a3e0]/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#00a3e0] mb-3">
                        <Check size={24} />
                      </div>
                      <span className="text-xl font-bold text-[#111] block mb-2">Badminton Court Sheds</span>
                      <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">What We Plan Around</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Playing area clearances, roof height, side space, lighting provisions.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <Link href="/services/sports-turf-sheds/badminton-court-shed/" className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] hover:underline inline-flex items-center gap-1">
                        Explore Court Shed <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Cricket Turf */}
                  <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#00a3e0] hover:shadow-md transition-all">
                    <div>
                      <div className="w-12 h-12 bg-[#00a3e0]/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 text-[#00a3e0] mb-3">
                        <Check size={24} />
                      </div>
                      <span className="text-xl font-bold text-[#111] block mb-2">Cricket Turf Sheds</span>
                      <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">What We Plan Around</div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Practice net dimensions, pitch length, bowling run-up, structural durability.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <Link href="/services/sports-turf-sheds/cricket-turf-shed/" className="text-xs font-bold uppercase tracking-wider text-[#00a3e0] hover:underline inline-flex items-center gap-1">
                        Explore Turf Shed <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 order-1 lg:order-2">
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111] tracking-tight">Sports Turf Sheds</h3>
                  <p className="text-slate-100 text-lg leading-relaxed max-w-lg">
                    KPN builds covered sports facilities for schools, colleges, sports academies, residential communities, and clubs across Tamil Nadu. Solutions include planning for clearances, roof height, lighting, playing space and structural requirements.
                  </p>
                  <div className="text-slate-100 text-sm font-semibold">
                    <span className="text-white font-bold">Ideal for:</span> Schools, colleges, sports academies, residential communities, clubs.
                  </div>
                  <div className="flex flex-wrap items-center gap-2 font-bold text-sm text-[#ffcc00]">
                    <span>➜ Explore:</span>
                    <Link href="/services/sports-turf-sheds/badminton-court-shed/" className="underline hover:text-white">Badminton Court Shed</Link>
                    <span>|</span>
                    <Link href="/services/sports-turf-sheds/cricket-turf-shed/" className="underline hover:text-white">Cricket Turf Shed</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Note about minimum area */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#ffcc00] text-[#111] flex items-center justify-center shrink-0 font-black text-lg">
                !
              </div>
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                <span className="font-bold text-[#111]">Note:</span> As KPN&apos;s home state, Tamil Nadu projects start from a minimum area of <span className="font-bold text-[#062088]">1,440 sq.ft</span> — lower than the 2,400 sq.ft minimum that applies to outstation projects elsewhere in India.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- 5. Tamil Nadu Project Snapshot Table ---------------- */}
        <section className="bg-[#f8f9fa] py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-8">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#062088] tracking-widest uppercase mb-4 inline-block bg-white shadow-sm">
                Fast Facts & Specifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                Tamil Nadu Project <span className="font-serif italic text-[#062088]">Snapshot</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#062088] text-white">
                      <th className="py-5 px-6 font-extrabold text-base uppercase tracking-wider w-1/3">Aspect</th>
                      <th className="py-5 px-6 font-extrabold text-base uppercase tracking-wider w-2/3">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <MapPin size={18} className="text-[#ee0000]" /> Service Area
                      </td>
                      <td className="py-4 px-6 text-slate-800">
                        Chennai, Coimbatore, Madurai, Salem, Tirupur, Trichy, and across Tamil Nadu
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Layers size={18} className="text-[#062088]" /> Shed Categories
                      </td>
                      <td className="py-4 px-6 text-slate-800">
                        Agricultural, Industrial, Home Roofing, Sports Turf
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <ShieldCheck size={18} className="text-[#00a3e0]" /> Experience
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">
                        13+ years
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Building2 size={18} className="text-[#ffcc00]" /> Projects Completed
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">
                        1000+ across India
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-emerald-600" /> Warranty
                      </td>
                      <td className="py-4 px-6 text-slate-800">
                        10-year guarantee with free repair support (terms apply)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <FileText size={18} className="text-indigo-600" /> Payment Structure
                      </td>
                      <td className="py-4 px-6 text-slate-800">
                        50% advance, balance in installments as materials reach site
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Compass size={18} className="text-[#062088]" /> Engineering
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold text-[#062088]">
                        In-house team — no outsourcing
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Wrench size={18} className="text-[#ee0000]" /> Installation
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold text-[#ee0000]">
                        KPN&apos;s own crew — not subcontracted
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Box size={18} className="text-amber-600" /> Steel
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">
                        Apollo-brand — consistent quality
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 6. Why Tamil Nadu Clients Choose KPN ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#ee0000] tracking-widest uppercase mb-4 inline-block bg-[#f8f9fa] shadow-sm">
                Our Proven Advantage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111]">
                Why Tamil Nadu Clients <span className="font-serif italic text-[#062088]">Choose KPN</span>
              </h2>
              <p className="text-lg text-slate-500 font-normal mt-3">
                Backed by 13+ years of experience, Apollo steel, in-house engineers, and our home base right here in Tamil Nadu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Direct — No Middlemen", 
                  desc: "You work directly with KPN, with clear communication from enquiry to installation and no middlemen.",
                  icon: <ShieldCheck size={28} />,
                  bg: "bg-red-50",
                  color: "text-[#ee0000]",
                  hoverBorder: "hover:border-[#ee0000]"
                },
                { 
                  title: "Local Presence & Easier Coordination", 
                  desc: "As a Trichy-based company, KPN can coordinate Tamil Nadu projects with shorter travel distances and easier local communication.",
                  icon: <MapPin size={28} />,
                  bg: "bg-blue-50",
                  color: "text-[#062088]",
                  hoverBorder: "hover:border-[#062088]"
                },
                { 
                  title: "In-House Engineering — No Templates", 
                  desc: "Each project is planned around the site, intended use, dimensions, and structural requirements rather than a one-size-fits-all approach.",
                  icon: <Compass size={28} />,
                  bg: "bg-cyan-50",
                  color: "text-[#00a3e0]",
                  hoverBorder: "hover:border-[#00a3e0]"
                },
                { 
                  title: "Easy Site Visits", 
                  desc: "Being based in Tamil Nadu makes local site assessments and project coordination easier to arrange.",
                  icon: <Truck size={28} />,
                  bg: "bg-amber-50",
                  color: "text-amber-600",
                  hoverBorder: "hover:border-[#ffcc00]"
                },
                { 
                  title: "Apollo-Brand Steel", 
                  desc: "Apollo-brand steel is used consistently across projects, subject to project specifications.",
                  icon: <Box size={28} />,
                  bg: "bg-red-50",
                  color: "text-[#ee0000]",
                  hoverBorder: "hover:border-[#ee0000]"
                },
                { 
                  title: "Transparent, Itemized Pricing", 
                  desc: "You get a quote that breaks down everything — materials, fabrication, delivery, installation. No surprise costs.",
                  icon: <FileText size={28} />,
                  bg: "bg-blue-50",
                  color: "text-[#062088]",
                  hoverBorder: "hover:border-[#062088]"
                },
                { 
                  title: "Own Installation Team", 
                  desc: "Our team builds what we design. That means quality control, accountability, and consistency from concept to completion.",
                  icon: <Wrench size={28} />,
                  bg: "bg-cyan-50",
                  color: "text-[#00a3e0]",
                  hoverBorder: "hover:border-[#00a3e0]"
                },
                { 
                  title: "Pan-India Experience, Local Roots", 
                  desc: "KPN brings experience from 1000+ projects across India, with the same focus on structured planning, quality materials, transparent pricing, and professional installation — backed by being based right here in Tamil Nadu.",
                  icon: <Building2 size={28} />,
                  bg: "bg-amber-50",
                  color: "text-amber-600",
                  hoverBorder: "hover:border-[#ffcc00]"
                }
              ].map((item, i) => (
                <div key={i} className={`bg-[#f8f9fa] border border-slate-200 rounded-3xl p-7 flex flex-col items-center justify-center text-center hover:shadow-xl ${item.hoverBorder} transition-all group min-h-[280px]`}>
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shrink-0`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#111] mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 7. How a Tamil Nadu Project Works ---------------- */}
        <section className="bg-[#f8f9fa] py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#062088] tracking-widest uppercase mb-4 inline-block bg-white shadow-sm">
                Execution Workflow
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
                How a Tamil Nadu <span className="font-serif italic text-[#062088]">Project Works</span>
              </h2>
              <p className="text-lg text-slate-500 font-normal">
                A transparent, step-by-step approach ensuring speed, quality, and complete clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pt-6">
              {[
                { 
                  title: "Enquiry", 
                  desc: "Call, WhatsApp, or fill the form — share your shed type, approximate size, and Tamil Nadu location. Projects start from a 1,440 sq.ft minimum area." 
                },
                { 
                  title: "Site Assessment", 
                  desc: "Being based in Tamil Nadu, we can typically schedule an in-person site visit faster than for outstation projects." 
                },
                { 
                  title: "Design & Engineering", 
                  desc: "Our team plans dimensions, materials, roof slope, and drainage based on your specific site conditions." 
                },
                { 
                  title: "Quotation", 
                  desc: "You get a detailed, itemized quote — no generic rates." 
                },
                { 
                  title: "Fabrication & Dispatch", 
                  desc: "Materials are fabricated and dispatched according to project requirements, with Tamil Nadu projects benefiting from shorter local transport distances." 
                },
                { 
                  title: "Installation", 
                  desc: "Our own crew completes the on-site installation according to the approved project plan." 
                }
              ].map((step, i) => (
                <div key={i} className="relative bg-white border border-slate-200 rounded-[2rem] p-8 pt-12 shadow-sm hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-colors group">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 text-7xl font-black text-slate-200 group-hover:text-white/50 transition-colors select-none pointer-events-none">
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

        {/* ---------------- 8. Questions to Ask Before Planning Your Shed ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#ee0000] tracking-widest uppercase mb-4 inline-block bg-[#f8f9fa] shadow-sm">
                Planning Considerations
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
                Questions to Ask Before <span className="font-serif italic text-[#062088]">Planning Your Shed</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Having clarity on these points helps us give you a sharper quote and a better structure:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {[
                { label: "Primary use", detail: "Farm, factory, warehouse, parking, sports, or home?" },
                { label: "Available area", detail: "Plot or terrace dimensions (Tamil Nadu projects start from a 1,440 sq.ft minimum)" },
                { label: "Soil conditions", detail: "Affects foundation planning" },
                { label: "Site elevation", detail: "Relevant for drainage and roof-slope planning during monsoon" },
                { label: "Water access on site", detail: "Relevant for construction logistics" },
                { label: "Site access", detail: "Road condition and access for material delivery and installation" },
                { label: "Future expansion", detail: "Will you need to extend later?" },
              ].map((q, i) => (
                <div key={i} className={`bg-[#f8f9fa] border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-[#062088] transition-colors ${i === 6 ? 'md:col-span-2' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#062088] flex items-center justify-center shrink-0 font-bold">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111] mb-1">{q.label}</h4>
                    <p className="text-slate-600 text-base">{q.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f0f7ff] border border-blue-200 rounded-2xl p-6 text-center">
              <p className="text-slate-700 font-bold text-lg">
                Share as much as you can — the more we know about your site, the sharper the quote and structural plan.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- 9. Coverage Area in Tamil Nadu ---------------- */}
        <section className="bg-[#f8f9fa] py-8 lg:py-10 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <MapPin size={40} className="mx-auto text-[#ee0000] mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-3">
              KPN Shed Construction Coverage in <span className="font-serif italic text-[#062088]">Tamil Nadu</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-3xl mx-auto mb-6">
              We undertake shed construction across all major industrial clusters, agricultural belts, and residential towns across Tamil Nadu.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Trichy', 'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tirupur', 
                'Erode', 'Vellore', 'Thanjavur', 'Hosur', 'Dindigul', 'Tirunelveli', 
                'Karur', 'Namakkal', 'Pudukkottai', 'Perambalur', 'Ariyalur', 'Cuddalore'
              ].map((city, i) => (
                <div key={i} className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-base font-semibold hover:bg-[#ffcc00] hover:border-[#ffcc00] hover:text-[#111] transition-colors shadow-sm">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 10. Frequently Asked Questions — Tamil Nadu ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-8">
              <span className="text-slate-500 font-medium tracking-wide uppercase text-xs block mb-2">Tamil Nadu Guide</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#111] tracking-tight leading-[1.1]">
                Frequently Asked <span className="font-serif font-medium text-[#ee0000] italic">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { 
                  q: "1. Does KPN build sheds in all parts of Tamil Nadu?", 
                  a: "Yes. KPN undertakes shed construction projects across Chennai, Coimbatore, Madurai, Salem, Tirupur, Trichy, and other parts of Tamil Nadu, subject to project scope and site conditions." 
                },
                { 
                  q: "2. What types of sheds do you build in Tamil Nadu?", 
                  a: "Goat farm, dairy farm, poultry farm, factory, garment/textile factory, warehouse, godown, terrace roofing, car parking, badminton court, and cricket turf sheds." 
                },
                { 
                  q: "3. Can KPN sheds handle Tamil Nadu's climate?", 
                  a: "Yes. We use Apollo-brand steel with roofing and structural planning suited to Tamil Nadu's climate, proper roof slopes, gutters, and drainage systems — planned around monsoon drainage, humidity, and seasonal heat conditions." 
                },
                { 
                  q: "4. How long does a typical shed project take in Tamil Nadu?", 
                  a: "Tamil Nadu projects can benefit from shorter local travel and logistics. For example, a 1,440 sq.ft shed can be completed in as little as 6 days, depending on site readiness, design, material requirements, and project specifications. KPN confirms the project-specific schedule during quotation." 
                },
                { 
                  q: "5. Is there a warranty on Tamil Nadu projects?", 
                  a: "Yes. KPN provides a 10-year guarantee with free repair support for covered damage (terms apply)." 
                },
                { 
                  q: "6. Do you serve areas outside Tamil Nadu?", 
                  a: "Yes. Beyond Tamil Nadu, KPN undertakes projects across India, subject to project scope, minimum area requirements, and site logistics." 
                },
                { 
                  q: "7. How much does a shed cost in Tamil Nadu?", 
                  a: "The cost of a shed in Tamil Nadu depends on the shed type, size, structural requirements, roofing material, site conditions, and installation requirements. KPN provides project-specific quotations after reviewing the required dimensions and site details." 
                },
                { 
                  q: "8. What makes KPN different for a Tamil Nadu project specifically?", 
                  a: "KPN is based in Trichy, Tamil Nadu, while also bringing experience from 1000+ projects across India. Tamil Nadu projects start from a minimum area of 1,440 sq.ft compared with the 2,400 sq.ft minimum for outstation projects, with in-house engineering, Apollo-brand steel, transparent pricing, and KPN's own installation crew." 
                }
              ].map((faq, i) => (
                <details name="faq" key={i} className="group bg-[#f8f9fa] rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8 text-lg md:text-xl font-bold text-[#111]">
                    <span className="flex gap-4 pr-4">{faq.q}</span>
                    <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-[#ee0000] group-open:border-[#ee0000] group-open:text-white group-hover:border-[#111]">
                      <Plus size={20} className="block group-open:hidden" strokeWidth={1.5} />
                      <Minus size={20} className="hidden group-open:block" strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 md:pl-8 text-slate-600 font-normal leading-relaxed text-base md:text-lg pt-2 opacity-0 group-open:opacity-100 group-open:animate-fadeIn">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 11. Planning a Shed in Tamil Nadu? (Bottom CTA Banner) ---------------- */}
        <section className="bg-[#ffcc00] py-8 lg:py-12 text-center border-t border-yellow-400">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] mb-4 tracking-tight">
              Planning a Shed in Tamil Nadu?
            </h2>
            <p className="text-lg md:text-xl text-justify text-slate-900 font-medium mb-3 max-w-3xl mx-auto leading-relaxed">
              From farm sheds and factory roofs to warehouses, terrace covers, car parking, and sports turf, KPN plans every Tamil Nadu project around your site&apos;s requirements, structural needs, and climate — with the added advantage of being based right here.
            </p>
            <p className="text-lg md:text-xl text-[#062088] text-start font-bold mb-6 max-w-3xl mx-auto">
              Get a free site assessment and a transparent, itemized quote — Tamil Nadu projects start from a minimum area of 1,440 sq.ft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <QuoteButton className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-transform hover:-translate-y-1 shadow-xl">
                <PhoneCall size={20} /> Get Free Quote
              </QuoteButton>
              <a 
                href="https://wa.me/919788770786?text=Hi%20KPN%20Roofing%20Shed%2C%20I%20am%20planning%20a%20shed%20project%20in%20Tamil%20Nadu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20ba59] transition-transform hover:-translate-y-1 shadow-xl"
              >
                <MessageSquare size={20} /> Chat on WhatsApp
              </a>
              <a 
                href="tel:+919788770786" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#111] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-transform hover:-translate-y-1 shadow-xl border border-slate-200"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>

            <p className="text-sm font-semibold text-slate-800 tracking-wide">
              Share your shed type, location, and approximate size to get started.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
