import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Factory, Tractor, Home, Box, ShieldCheck, Check, Plus, Minus, 
  ArrowRight, Droplets, Feather, Car, Dumbbell, MapPin, PhoneCall, 
  Building2, Package, Phone, MessageSquare, Wrench, FileText, 
  Truck, CheckCircle2, Compass, Layers, Sparkles, CloudRain
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import QuoteButton from '@/components/QuoteButton';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/shed-construction-services-up/",
  },
  title: 'Shed Construction Services UP | Industrial & Farm Sheds — KPN',
  description: 'KPN Roofing Shed provides shed construction services across Uttar Pradesh for industrial, farm, commercial, and sports projects. 13+ years, 1000+ projects. Get a quote.',
  keywords: 'shed construction services UP, industrial shed builders Noida, roofing shed contractors Lucknow, shed construction Kanpur',
};

export default function UttarPradeshLocationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://kpnroofingsheds.com/shed-construction-services-up/#webpage",
            "url": "https://kpnroofingsheds.com/shed-construction-services-up/",
            "name": "Shed Construction Services UP | Industrial & Farm Sheds — KPN",
            "description": "KPN Roofing Shed provides shed construction services across Uttar Pradesh for industrial, farm, commercial, and sports projects. 13+ years, 1000+ projects. Get a quote.",
            "isPartOf": {
              "@id": "https://kpnroofingsheds.com/#website"
            }
          })
        }}
      />

      <PageHero
        title="Shed Construction Services in Uttar Pradesh"
        bgImage="/images/factory-2.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Uttar Pradesh", href: "/shed-construction-services-up/" }
        ]}
      />

      <main className="flex-grow">
        {/* ---------------- 1. Hero Overview & Intro ---------------- */}
        <section className="max-w-[1400px] mx-auto px-6 py-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-300 bg-white text-sm font-bold text-[#ee0000] tracking-wide uppercase shadow-sm">
                <MapPin size={16} /> Industrial, Farm, Home &amp; Sports Sheds
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#111] leading-[1.15] tracking-tight">
                Shed Construction Services in <span className="font-serif font-medium text-[#062088] italic">Uttar Pradesh</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                Uttar Pradesh has a strong agricultural and dairy sector, alongside major industrial hubs around Noida, Ghaziabad, Kanpur, and Agra.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
                KPN Roofing Shed brings over 13 years of construction experience with 1000+ completed projects across India. Whether it is a dairy or goat farm shed, an industrial warehouse, a large covered terrace, or sports turf roofing for a recreation facility, KPN provides in-house engineering, Apollo-brand steel, transparent pricing, and our own trained installation crew with zero subcontracting.
              </p>

              <div className="w-full bg-[#f0f4ff] border-l-4 border-[#062088] p-5 rounded-r-2xl space-y-2">
                <p className="text-xl font-bold text-[#062088]">
                  No middlemen. No subcontracting. No guesswork.
                </p>
                <p className="text-slate-700 font-medium leading-relaxed">
                  Every structure is engineered around your specific site layout, soil conditions, dimensions, and operational requirements.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#ffcc00] rounded-bl-full opacity-25"></div>
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Sparkles size={14} className="text-[#ee0000]" /> Outstation Projects (Min 2,400 sq.ft)
                  </div>
                  <h3 className="text-2xl font-bold text-[#111]">Uttar Pradesh Project Snapshot</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Custom-designed sheds for farms, factories, warehouses, large properties, and sports facilities across UP.
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
                Shed Construction Services in Uttar Pradesh
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#111]">
                1. Agricultural &amp; Farm <span className="font-serif font-medium text-[#062088] italic">Sheds</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
                UP has a strong agricultural and dairy sector, with farm and livestock sheds planned around herd size, ventilation, drainage, access, and site requirements.
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
                    Herd size, farm area, cross-ventilation, feeding passages, and waste drainage
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
                    Cattle count, milking access, movement corridors, feed storage, and water runoff
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
                    Bird density, shed orientation, temperature management, and litter handling
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
                <span className="font-bold text-[#111]">Ideal for:</span> Goat farms, dairy units, poultry setups, and mixed agricultural holdings.
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

        {/* ---------------- 3. Industrial & Warehouse Sheds in Noida & UP ---------------- */}
        <section className="bg-[#111] py-8 lg:py-12 text-white relative">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase">
                <Factory size={16} className="text-[#ffcc00]" /> Commercial &amp; Industrial
              </div>
              <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                2. Industrial &amp; Warehouse Sheds in{' '}
                <span className="text-[#ffcc00]">Noida &amp; Uttar Pradesh</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                UP&apos;s manufacturing and commercial corridors — including Noida, Ghaziabad, Kanpur, and Agra — require functional, durable covered space for production, textiles, leather processing, and warehousing.
              </p>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl max-w-xl">
                <div className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <span className="font-bold text-white">Ideal for:</span> Manufacturing facilities, textile and leather factories, warehouses, logistics hubs, and workshops.
                </div>
                <div className="flex flex-wrap items-center gap-2 font-bold text-sm text-[#ffcc00] mt-3">
                  <span>➜ Explore:</span>
                  <Link href="/services/industrial-sheds/factory-shed/" className="underline hover:text-white">Factory Shed</Link>
                  <span>|</span>
                  <Link href="/services/industrial-sheds/garment-factory-shed/" className="underline hover:text-white">Garment Factory Shed</Link>
                  <span>|</span>
                  <Link href="/services/industrial-sheds/warehouse-godown-shed/" className="underline hover:text-white">Warehouse &amp; Godown Shed</Link>
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
                      Production floor area, machinery footprint, clear roof height, ventilation, and expansion room
                    </p>
                  </div>
                </div>
              </div>

              {/* Garment & Textile Sheds */}
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#333] rounded-xl flex items-center justify-center text-[#00a3e0] group-hover:scale-110 group-hover:bg-[#00a3e0] group-hover:text-white transition-all shrink-0">
                    <Package size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xl text-white">Garment &amp; Textile Sheds</h4>
                      <Link href="/services/industrial-sheds/garment-factory-shed/" className="text-xs uppercase font-bold text-[#00a3e0] hover:underline inline-flex items-center gap-1">
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Workflow planning, natural lighting, roof clearance, air circulation, and worker comfort
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
                      <h4 className="font-bold text-xl text-white">Warehouse &amp; Godown Sheds</h4>
                      <Link href="/services/industrial-sheds/warehouse-godown-shed/" className="text-xs uppercase font-bold text-[#ee0000] hover:underline inline-flex items-center gap-1">
                        Explore <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mt-2 mb-1">What We Plan Around</div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Storage volume, pallet movement, loading docks, aisle spacing, and heavy vehicle access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 4. Commercial & Large Residential Roofing + Sports Turf ---------------- */}
        <section className="bg-[#f0f7ff] py-8 lg:py-12 border-b border-blue-100">
          <div className="max-w-[1400px] mx-auto px-6 space-y-6">
            
            {/* Commercial & Large Residential Roofing Card */}
            <div className="bg-white rounded-[2.5rem] p-2 md:p-3 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden group">
              <div className="bg-[#062088] rounded-[2rem] p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-white/5 transform rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Home size={200} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 relative z-10">3. Commercial &amp; Large Residential Roofing</h3>
                <p className="text-blue-200 text-lg leading-relaxed relative z-10 mb-4">
                  UP&apos;s climate — hot summers, humid monsoons, and winter chills — requires well-drained, structurally sound roofing for large estates. This category is structured for large residential and commercial properties (such as villa layouts, farmhouses, and commercial complexes) rather than a single small terrace or car port.
                </p>
                <div className="text-blue-100 text-sm font-semibold relative z-10 mb-4">
                  <span className="text-white font-bold">Ideal for:</span> Farmhouses, villa communities, gated townships, and multi-vehicle commercial parking (minimum 2,400 sq.ft for outstation UP projects).
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
                        Existing terrace load capacity, slope, drainage, intended use, and aesthetic finish
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
                        Vehicle capacity, plot width, driveway turning radius, single or multi-bay coverage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports Turf Banner */}
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
                        Clear playing height, boundary clearances, side space, and non-glare lighting provisions
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
                        Practice net dimensions, pitch length, bowler run-up area, and structural frame stability
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
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111] tracking-tight">4. Sports Turf Sheds</h3>
                  <p className="text-slate-100 text-lg leading-relaxed max-w-lg">
                    KPN builds covered sports facilities for schools, colleges, sports academies, residential communities, and clubs across UP.
                  </p>
                  <div className="text-slate-100 text-sm font-semibold">
                    <span className="text-white font-bold">Ideal for:</span> Sports academies, educational institutions, recreational clubs, and private turf facilities.
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
                <span className="font-bold text-[#111]">Note:</span> For outstation projects across Uttar Pradesh, KPN undertakes projects starting from a minimum area of <span className="font-bold text-[#062088]">2,400 sq.ft</span> to ensure efficient logistics and deployment.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- 5. Uttar Pradesh Project Snapshot Table ---------------- */}
        <section className="bg-[#f8f9fa] py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-8">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#062088] tracking-widest uppercase mb-4 inline-block bg-white shadow-sm">
                Fast Facts &amp; Specifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                Uttar Pradesh Project <span className="font-serif italic text-[#062088]">Snapshot</span>
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
                        Lucknow, Kanpur, Agra, Varanasi, Noida, Ghaziabad, and locations across UP
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Layers size={18} className="text-[#062088]" /> Shed Categories
                      </td>
                      <td className="py-4 px-6 text-slate-800">
                        Agricultural, Industrial, Commercial &amp; Large Residential Roofing Sheds, Sports Turf
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
                        50% advance, balance in staged installments as materials arrive on site
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Compass size={18} className="text-[#062088]" /> Engineering
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold text-[#062088]">
                        In-house engineering team
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Wrench size={18} className="text-[#ee0000]" /> Installation
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold text-[#ee0000]">
                        KPN&apos;s own installation crew — never subcontracted
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Box size={18} className="text-amber-600" /> Steel Standard
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">
                        Apollo-brand steel used consistently, subject to project specs
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50/50">
                      <td className="py-4 px-6 font-bold text-[#111] flex items-center gap-2">
                        <Sparkles size={18} className="text-purple-600" /> Minimum Project Size
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">
                        2,400 sq.ft (for outstation UP projects)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 6. Why UP Clients Choose KPN ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#ee0000] tracking-widest uppercase mb-4 inline-block bg-[#f8f9fa] shadow-sm">
                Our Proven Advantage
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111]">
                Why UP Clients <span className="font-serif italic text-[#062088]">Choose KPN</span>
              </h2>
              <p className="text-lg text-slate-500 font-normal mt-3">
                Backed by 13+ years of experience, Apollo steel, in-house engineers, and dedicated outstation project coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Direct Engagement — No Middlemen", 
                  desc: "You work directly with KPN from concept to delivery. No brokers, no middlemen markups, and clear single-point accountability.",
                  icon: <ShieldCheck size={28} />,
                  bg: "bg-red-50",
                  color: "text-[#ee0000]",
                  hoverBorder: "hover:border-[#ee0000]"
                },
                { 
                  title: "Planned for UP's Climate & Drainage Conditions", 
                  desc: "Structures incorporate calculated roof slopes, guttering, and drainage planning suited to local rainfall, humidity, and seasonal temperature conditions.",
                  icon: <CloudRain size={28} />,
                  bg: "bg-blue-50",
                  color: "text-[#062088]",
                  hoverBorder: "hover:border-[#062088]"
                },
                { 
                  title: "In-House Engineering", 
                  desc: "Every structure is engineered from scratch based on actual site dimensions, soil bearing capacity, and planned equipment layout.",
                  icon: <Compass size={28} />,
                  bg: "bg-cyan-50",
                  color: "text-[#00a3e0]",
                  hoverBorder: "hover:border-[#00a3e0]"
                },
                { 
                  title: "Factory-Precision Fabrication", 
                  desc: "Centralized, automated fabrication at our Tamil Nadu facility supports consistent structural precision and finish before materials are transported and professionally installed at your UP site.",
                  icon: <Building2 size={28} />,
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
                  title: "Itemized, Transparent Quotes", 
                  desc: "Clear commercial proposals detailing materials, fabrication, freight, and installation without hidden costs.",
                  icon: <FileText size={28} />,
                  bg: "bg-blue-50",
                  color: "text-[#062088]",
                  hoverBorder: "hover:border-[#062088]"
                },
                { 
                  title: "Dedicated Installation Crew", 
                  desc: "Our own trained installation crew handles on-site assembly, ensuring quality control throughout.",
                  icon: <Wrench size={28} />,
                  bg: "bg-cyan-50",
                  color: "text-[#00a3e0]",
                  hoverBorder: "hover:border-[#00a3e0]"
                }
              ].map((item, i) => (
                <div key={i} className={`bg-[#f8f9fa] border border-slate-200 rounded-3xl p-7 flex flex-col items-center justify-center text-center hover:shadow-xl ${item.hoverBorder} transition-all group min-h-[280px] ${i === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
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

        {/* ---------------- 7. How a UP Project Works ---------------- */}
        <section className="bg-[#f8f9fa] py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#062088] tracking-widest uppercase mb-4 inline-block bg-white shadow-sm">
                Execution Workflow
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
                How a UP <span className="font-serif italic text-[#062088]">Project Works</span>
              </h2>
              <p className="text-lg text-slate-500 font-normal">
                A transparent, step-by-step approach ensuring speed, quality, and complete clarity for outstation projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 pt-6">
              {[
                { 
                  step: "Step 1",
                  title: "Requirement", 
                  desc: "Share your shed type, approximate area, and site location in UP (outstation projects start from 2,400 sq.ft minimum)." 
                },
                { 
                  step: "Step 2",
                  title: "Site Assessment", 
                  desc: "Initial assessment via photos, architectural drawings, and video review; on-site visits scheduled as project scope requires." 
                },
                { 
                  step: "Step 3",
                  title: "Engineering", 
                  desc: "Structural design team calculates dimensions, material specs, trusses, roof slopes, and drainage provisions." 
                },
                { 
                  step: "Step 4",
                  title: "Quotation", 
                  desc: "You receive an itemized commercial quotation including fabrication, freight to UP, and on-site erection." 
                },
                { 
                  step: "Step 5",
                  title: "Fabrication & Dispatch", 
                  desc: "Steel members are precision-cut and fabricated at our central facility, then dispatched to your site in UP." 
                },
                { 
                  step: "Step 6",
                  title: "Installation", 
                  desc: "KPN's crew arrives on site to manage assembly, alignment, roofing sheets, and final handover." 
                }
              ].map((item, i) => (
                <div key={i} className="relative bg-white border border-slate-200 rounded-[2rem] p-8 pt-12 shadow-sm hover:bg-[#ffcc00] hover:border-[#ffcc00] transition-colors group">
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 text-7xl font-black text-slate-200 group-hover:text-white/50 transition-colors select-none pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className="text-xs uppercase font-bold tracking-widest text-[#062088] group-hover:text-[#111] mb-1 relative z-10">{item.step}</div>
                  <h4 className="text-2xl font-bold text-[#111] mb-4 relative z-10">{item.title}</h4>
                  <p className="text-slate-600 group-hover:text-slate-800 font-medium text-lg relative z-10 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 8. Questions to Clarify Before Planning Your Shed ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-slate-300 text-xs font-bold text-[#ee0000] tracking-widest uppercase mb-4 inline-block bg-[#f8f9fa] shadow-sm">
                Planning Considerations
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
                Questions to Clarify Before <span className="font-serif italic text-[#062088]">Planning Your Shed</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Providing clear details on these points ensures an accurate quotation and structural plan:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {[
                { label: "Primary Use", detail: "Farm, factory, warehouse, sports turf, or commercial roofing?" },
                { label: "Available Footprint", detail: "Site length, width, and clear height requirements (minimum area of 2,400 sq.ft for outstation UP projects)." },
                { label: "Soil & Drainage Profile", detail: "Soil condition and rainwater runoff paths, especially in low-lying plots." },
                { label: "Site Ingress & Logistics", detail: "Approach road widths for heavy transport trailers carrying long-span structural steel." },
                { label: "Utility Access", detail: "Availability of water and three-phase power during installation." },
                { label: "Future Expansion", detail: "Whether your design needs provision for future modular extensions." },
              ].map((q, i) => (
                <div key={i} className="bg-[#f8f9fa] border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-[#062088] transition-colors">
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

        {/* ---------------- 9. Coverage Area in Uttar Pradesh ---------------- */}
        <section className="bg-[#f8f9fa] py-8 lg:py-10 border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <MapPin size={40} className="mx-auto text-[#ee0000] mb-3" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111] mb-3">
              KPN Shed Construction Coverage in <span className="font-serif italic text-[#062088]">Uttar Pradesh</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-3xl mx-auto mb-6">
              We undertake shed construction across major industrial corridors, agricultural belts, and cities across UP.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Noida', 'Ghaziabad', 
                'Meerut', 'Aligarh', 'Bareilly', 'Moradabad', 'Saharanpur', 
                'Gorakhpur', 'Prayagraj', 'Jhansi', 'Mathura', 'Firozabad'
              ].map((city, i) => (
                <div key={i} className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-base font-semibold hover:bg-[#ffcc00] hover:border-[#ffcc00] hover:text-[#111] transition-colors shadow-sm">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 10. Frequently Asked Questions — Uttar Pradesh ---------------- */}
        <section className="bg-white py-8 lg:py-12 border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center mb-8">
              <span className="text-slate-500 font-medium tracking-wide uppercase text-xs block mb-2">Uttar Pradesh Guide</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#111] tracking-tight leading-[1.1]">
                Frequently Asked <span className="font-serif font-medium text-[#ee0000] italic">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { 
                  q: "1. Does KPN provide shed construction services in UP?", 
                  a: "Yes. KPN undertakes eligible shed construction projects across Uttar Pradesh, including Noida, Ghaziabad, Lucknow, Kanpur, Agra, Varanasi, and surrounding belts, subject to site feasibility and our 2,400 sq.ft minimum outstation project size." 
                },
                { 
                  q: "2. What types of sheds do you construct in Uttar Pradesh?", 
                  a: "We build goat farm sheds, dairy sheds, poultry units, factory setups, textile/garment sheds, warehouses, large terrace covers, multi-bay parking, badminton courts, and cricket turf sheds." 
                },
                { 
                  q: "3. Are KPN sheds engineered for UP's weather conditions?", 
                  a: "Yes. Trusses, purlins, roof pitches, and gutter systems are planned around UP's monsoon drainage requirements, humidity, and seasonal heat conditions." 
                },
                { 
                  q: "4. How long does a shed project take in UP?", 
                  a: "Exact project schedules are finalized during quotation based on shed size, fabrication requirements, transport logistics, and site readiness." 
                },
                { 
                  q: "5. What warranty coverage is offered on UP projects?", 
                  a: "KPN provides a 10-year guarantee with free repair support for covered damage, subject to standard warranty terms." 
                },
                { 
                  q: "6. Does KPN undertake projects outside Uttar Pradesh?", 
                  a: "Yes. Beyond UP, KPN builds across India, including neighbouring states, subject to site conditions, logistics, and minimum footprint criteria." 
                },
                { 
                  q: "7. How is shed construction cost calculated in UP?", 
                  a: "Pricing depends on clear span, roof height, structural requirements, sheet material, site foundation needs, and transport logistics." 
                },
                { 
                  q: "8. What makes KPN different from local fabricators in UP?", 
                  a: "KPN operates with in-house structural engineering, factory-controlled precision fabrication, Apollo-brand steel, itemized transparency, and our own installation team — with zero subcontracting." 
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

        {/* ---------------- 11. Planning a Shed in Uttar Pradesh? (Bottom CTA Banner) ---------------- */}
        <section className="bg-[#ffcc00] py-8 lg:py-12 text-center border-t border-yellow-400">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111] mb-4 tracking-tight">
              Planning a Shed in Uttar Pradesh?
            </h2>
            <p className="text-lg md:text-xl text-justify text-slate-900 font-medium mb-3 max-w-3xl mx-auto leading-relaxed">
              From farm sheds planned around local soil and monsoon drainage conditions to factory roofs, warehouses, terrace covers, car parking, and sports turf, KPN plans every UP project around your site&apos;s requirements, structural needs, climate, and logistics — not a generic template.
            </p>
            <p className="text-lg md:text-xl text-[#062088] text-start font-bold mb-6 max-w-3xl mx-auto">
              Get a free site assessment and a transparent, itemized quote — outstation projects start from a minimum area of 2,400 sq.ft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <QuoteButton className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-transform hover:-translate-y-1 shadow-xl">
                <PhoneCall size={20} /> Get Free Quote
              </QuoteButton>
              <a 
                href="https://wa.me/919788770786?text=Hi%20KPN%20Roofing%20Shed%2C%20I%20am%20planning%20a%20shed%20project%20in%20Uttar%20Pradesh" 
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
