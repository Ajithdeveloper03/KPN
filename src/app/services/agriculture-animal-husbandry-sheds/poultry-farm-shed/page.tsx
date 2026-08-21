import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check, Wind, Egg, Feather } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: 'Poultry Farm Shed Manufacturers India | KPN Roofing Shed',
  description: 'KPN builds poultry farm sheds across India for broiler, layer and breeder farms with proper ventilation, durable roofing and in-house engineering. Get a free quote.',
  keywords: 'poultry farm shed manufacturers India, poultry shed construction India',
};

export default function PoultryFarmShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/#service",
            "name": "Poultry Farm Shed",
            "description": "Durable poultry farm shed construction solutions designed for proper ventilation, protection and efficient poultry farming operations.",
            "url": "https://kpnroofingsheds.com/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/",
            "provider": {
              "@type": "Organization",
              "@id": "https://kpnroofingsheds.com/#organization",
              "name": "KPN Roofing Shed",
              "url": "https://kpnroofingsheds.com/",
              "logo": "https://kpnroofingsheds.com/images/logo.jpg"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Poultry Farm Shed Construction"
          })
        }}
      />
      {/* ---------------- 1. Hero Section (Fully Transparent Content) ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/poultry-banner-image.png" 
            alt="poultry farm shed India — KPN" 
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
            Poultry Farm Shed <br />
            <span className="text-[#f39c12] font-serif italic font-normal">Manufacturers India</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link href="/services" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Poultry Farm Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 1.5 Intro Section ---------------- */}
        <section className="py-12 lg:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-8 leading-tight">
                Broiler, Layer & Breeder Sheds with <span className="font-serif italic text-[#e67e22]">KPN Roofing</span>
              </h2>
              <div className="text-lg text-gray-600 mb-10 leading-relaxed space-y-4 font-medium">
                <p>KPN Roofing Shed designs and builds poultry farm sheds across India for broiler, layer, and breeder operations. Each shed is planned around bird capacity, rearing type, ventilation, temperature control, feed movement, and future expansion requirements.</p>
                <p>KPN provides steel and PEB poultry shed solutions with durable roofing, practical layouts, and ventilation options for small, medium, and large-scale poultry farms.</p>
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
              <Image src="/images/services/poultry-image-1.png" alt="poultry farm shed India — KPN" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e67e22]/20 to-transparent"></div>
            </div>
          </div>
        </section>
        
        {/* ---------------- 2. Specifications (Split Layout) ---------------- */}
        <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto border-b border-orange-900/10">
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
                    
                    <p className="text-lg font-medium text-gray-200">The final execution depends on shed size, bird capacity, roofing type, ventilation system, and site requirements.</p>
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
                    10-year warranty on pipes and roofing sheets, with free repair support for covered damage.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <MapPin size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Pan-India Coverage</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    We deliver and construct premium poultry farm shed projects across the entire country.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all sm:col-span-2">
                  <Wrench size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Optimal Design</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Typical roof height of 10–14 feet for most poultry sheds, with larger heights where airflow requirements demand it. Suitable for broiler, layer, and breeder farms.
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
                { title: "Bird-Capacity Planning", desc: "Shed dimensions and internal layout planned according to the number of birds, rearing type, and available farm area", icon: <MapPin /> },
                { title: "Proper Ventilation", desc: "Ridge ventilation, turbo ventilators, exhaust fans, side ventilation openings, and curtain-side cladding", icon: <Wind /> },
                { title: "Weather-Resistant Roofing", desc: "Planned to protect birds from sun, rain, and seasonal weather while supporting better temperature management", icon: <CheckCircle2 /> },
                { title: "Functional Internal Layout", desc: "For brooding, bird housing, feeding and watering lines, feed storage, egg collection, and waste/litter management", icon: <Wrench /> },
                { title: "Future Expansion", desc: "Shed layout and structural spacing planned to allow expansion when flock capacity increases", icon: <CheckCircle2 /> },
                { title: "Steel & PEB Options", desc: "Steel and PEB poultry shed solutions tailored specifically to broiler, layer, and breeder farms", icon: <Shield /> }
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

        {/* ---------------- 3.5 Broiler, Layer & Breeder Poultry Sheds ---------------- */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Specialization</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Broiler, Layer & Breeder <span className="font-serif italic text-[#3498db]">Sheds</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3498db] mb-6">
                  <Feather size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Broiler Shed</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Broiler sheds require open floor space, effective cross-ventilation, and practical feeding and watering arrangements. KPN plans the structure according to bird capacity and farm layout.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3498db] mb-6">
                  <Egg size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Layer Shed</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Layer sheds require suitable space for housing systems, lighting, feeding, and egg collection. The shed layout can be planned around the selected layer farming system.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#3498db] mb-6">
                  <Wind size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#2d3436] mb-4">Breeder Shed</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Breeder farms require controlled movement, feeding, ventilation, and operational access. KPN can customize the shed structure according to the farm's capacity and management requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- 4. Ventilation & Temperature Control ---------------- */}
        <section className="py-12 lg:py-20 bg-[#f0f4f8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Airflow</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Ventilation & <span className="font-serif italic text-[#3498db]">Temperature Control</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Proper airflow is important for managing heat, moisture, and ammonia inside a poultry shed. KPN can plan ventilation provisions including:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Ridge ventilation",
                "Turbo ventilators",
                "Exhaust fans for closed sheds",
                "Open-side curtain cladding",
                "Side ventilation openings",
                "Fogger or cooling-pad provisions"
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
        <section className="py-12 lg:py-16 bg-[#2d3436] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">How to Choose the <span className="font-serif italic text-[#e67e22]">Right Shed</span></h2>
              <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">Consider the following before starting your poultry farm shed project:</p>
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
                  { step: "01", title: "Determine Capacity", desc: "Determine the bird capacity before finalizing shed dimensions", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                  { step: "02", title: "Choose Shed Type", desc: "Choose the shed type based on broiler, layer, or breeder farming", color: "text-[#f39c12]", bg: "bg-[#f39c12]" },
                  { step: "03", title: "Roof Height", desc: "Plan sufficient roof height and ventilation for effective airflow", color: "text-[#3498db]", bg: "bg-[#3498db]" },
                  { step: "04", title: "Climate & Roofing", desc: "Consider the local climate when selecting roofing and ventilation systems", color: "text-[#e74c3c]", bg: "bg-[#e74c3c]" },
                  { step: "05", title: "Farm Layout", desc: "Plan feed storage and equipment areas separately from bird housing", color: "text-[#9b59b6]", bg: "bg-[#9b59b6]" },
                  { step: "06", title: "Drainage & Litter", desc: "Provide suitable drainage and litter-management arrangements", color: "text-[#2ecc71]", bg: "bg-[#2ecc71]" },
                  { step: "07", title: "Future Expansion", desc: "Keep future flock expansion in mind before finalizing the structural layout", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
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
        <section className="py-12 lg:py-20 px-6 max-w-7xl mx-auto border-b border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-[#d35400] font-bold tracking-widest uppercase text-sm mb-4 block">Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">Permits & Approvals <br/><span className="font-serif italic text-gray-500">What You Need to Know</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                Poultry farm shed requirements can vary depending on your location, land type, farm scale, and local authority regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">KPN can guide you on the applicable requirements.</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">We help you understand any approvals that may be needed for your project.</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/images/services/poultry-image-1.png" alt="poultry farm shed manufacturers India — KPN" fill sizes="100vw" className="object-cover" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How Long Does a <br/><span className="font-serif italic text-gray-500">Poultry Farm Shed Take?</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                The completion time depends on shed size, bird capacity, design, material requirements, ventilation systems, and site conditions.
              </p>
              <div className="bg-[#eef5f9] border border-[#3498db]/20 rounded-2xl p-6 flex items-center gap-6">
                <div className="bg-[#3498db] text-white w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2d3436]">Standard Timeline</h4>
                  <p className="text-gray-600 font-medium text-lg mt-1">Most standard poultry sheds may take around 2–4 weeks after design approval, depending on project size and site readiness. The final timeline is confirmed based on the specific project requirements.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/images/services/poultry-image-2.png" alt="poultry farm roofing shed — KPN Roofing Shed" fill sizes="100vw" className="object-cover" />
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
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Poultry-Specific Planning</h3>
                  <p className="text-gray-600 font-medium">The shed is planned around bird capacity, rearing type, ventilation, and farm operations rather than using a generic shed design.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Ventilation-Focused Design</h3>
                  <p className="text-gray-600 font-medium">Ventilation provisions such as ridge vents, turbo ventilators, exhaust fans, and curtain-side openings can be planned according to the shed requirements.</p>
                </div>
              </div>
              
              {/* Center Image */}
              <div className="w-full lg:w-1/3 relative h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl z-0">
                <Image src="/images/services/poultry-image-3.png" alt="Why KPN" fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#e67e22]/20 mix-blend-multiply"></div>
              </div>
              
              {/* Right Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Flexible Farm Layout</h3>
                  <p className="text-gray-600 font-medium">Space can be organized for bird housing, feeding, watering, brooding, feed storage, and other essential farm operations.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Expansion-Ready Structure</h3>
                  <p className="text-gray-600 font-medium">The shed layout can be planned with future flock expansion in mind, helping reduce major structural changes later.</p>
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
                { q: "What type of shed is best for a poultry farm?", a: "A steel-framed poultry shed with suitable ventilation and curtain-side cladding works well for many poultry farming applications. The final design depends on bird capacity, rearing type, climate, and farm requirements." },
                { q: "What is the ideal height for a poultry farm shed?", a: "A height of around 10–14 feet suits many standard poultry sheds. Larger commercial or tunnel-ventilated sheds may require different heights based on airflow and structural requirements." },
                
                { q: "What warranty does KPN provide on poultry farm sheds?", a: "KPN provides a 10-year warranty on pipes and roofing sheets, with free repair support for covered damage as per the applicable warranty terms." },
                { q: "Does KPN build poultry farm sheds outside Tamil Nadu?", a: "Yes. KPN Roofing Shed undertakes poultry farm shed projects across India, subject to site conditions and project requirements." }
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
            <Image src="/images/services/poultry-image-2.png" alt="poultry farm shed manufacturers India — KPN" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a <span className="font-serif italic font-medium text-[#f39c12]">Poultry Farm Shed?</span>
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
              <span className="text-white font-bold">50% advance to start — no hidden costs.</span> 10-year warranty on pipes and roofing sheets with repair support as per applicable warranty terms.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
