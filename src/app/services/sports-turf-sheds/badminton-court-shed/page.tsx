import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Calendar, Wrench, FileText, ChevronDown, Phone, MessageCircle, MapPin, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Badminton Court Shed Contractors India | KPN Roofing Shed',
  description: 'KPN builds badminton court sheds pan-India with Apollo Brand Steel, in-house engineers, and a 10-year guarantee. Get a free quote.',
  keywords: 'badminton court shed contractors India, badminton court roofing India',
};

export default function BadmintonCourtShedPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2d3436] font-sans selection:bg-[#d35400] selection:text-white">
      
      {/* ---------------- 1. Hero Section (Fully Transparent Content) ---------------- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/kpnroofingshed/images/hero-bg.png" 
            alt="badminton court shed India — KPN" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full mt-20 text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-white/30 text-white text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            Sports Turf Sheds
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Badminton Court Shed <br />
            <span className="text-[#f39c12] font-serif italic font-normal">Contractors India</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link href="/services" className="hover:text-white transition-colors">Services</Link>
             <span>/</span>
             <span className="text-[#f39c12]">Badminton Court Shed</span>
          </div>
        </div>
      </section>

      <main>
        
        {/* ---------------- 1.5 Intro Section ---------------- */}
        <section className="py-12 lg:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-8 leading-tight">
                Weatherproof, All-Season Court Roofing with <span className="font-serif italic text-[#e67e22]">KPN Roofing</span>
              </h2>
              <div className="text-lg text-gray-600 mb-10 leading-relaxed space-y-4 font-medium">
                <p>KPN Roofing Shed designs and builds badminton court sheds across India, engineered for consistent, weatherproof playing conditions throughout the year. The structures are designed specifically for badminton play, with appropriate roof height, structural clearance, ventilation, drainage, and glare-conscious roofing.</p>
                <p>KPN uses Apollo Brand Steel and in-house structural engineering to create badminton court roofing solutions for sports academies, clubs, schools, colleges, apartment complexes, and private facility owners.</p>
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
              <Image src="/kpnroofingshed/images/image2.jpeg" alt="badminton court shed India — KPN" fill className="object-cover" />
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
                    <p className="text-lg font-medium text-gray-200">Pricing depends on the number and size of courts, span and structural clearance, roof height, roofing material, site location and accessibility, ground conditions, and lighting/ventilation/flooring requirements.</p>
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
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">10-Year Guarantee</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    With free repair support for covered damage, as per applicable warranty terms.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <MapPin size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Pan-India Coverage</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    We deliver and construct premium badminton court shed projects across the entire country.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-900/5 hover:shadow-xl hover:-translate-y-1 transition-all sm:col-span-2">
                  <Wrench size={36} className="text-[#d35400] mb-5" />
                  <h3 className="text-xl font-bold text-[#2d3436] mb-3">Complete Solutions</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Apollo Brand Steel framing for minimal-column spans and uninterrupted play, plus KPN's in-house manufactured flooring line for durable court surfaces.
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
                { title: "Column-Free Design", desc: "Column-free or minimal-column design for an uninterrupted playing area and better movement around the court", icon: <MapPin /> },
                { title: "Proper Roof Height", desc: "Proper roof height & clearance planned specifically for badminton play, allowing sufficient space for shuttlecock movement", icon: <Wrench /> },
                { title: "Glare-Controlled Lighting", desc: "Roofing material selected to let in natural light while reducing glare, shadows, and reflections", icon: <Shield /> },
                { title: "Weatherproof Roofing", desc: "To protect the court from sun, rain, and monsoon conditions year-round", icon: <CheckCircle2 /> },
                { title: "Planned Drainage", desc: "Drainage planning around the court so rainwater is directed away from the playing surface", icon: <CheckCircle2 /> },
                { title: "Ventilation & Lighting", desc: "Ventilation & lighting provisions planned for airflow during long sessions and mounting points for lighting fixtures", icon: <CheckCircle2 /> }
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

        {/* ---------------- 4. Common Uses ---------------- */}
        <section className="py-12 lg:py-20 bg-[#f0f4f8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#3498db] font-bold tracking-widest uppercase text-sm mb-4 block">Versatility</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436]">Who Can Use a <span className="font-serif italic text-[#3498db]">Badminton Court Shed?</span></h2>
              <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">The final shed design depends on the number of courts, available space, structural requirements, and intended usage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Sports academies and coaching centres",
                "Badminton clubs",
                "Schools and colleges",
                "Apartment complexes",
                "Private badminton courts",
                "Residential and recreational sports facilities"
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
        <section className="py-16 lg:py-24 bg-[#2d3436] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">How to Choose the <span className="font-serif italic text-[#e67e22]">Right Shed</span></h2>
              <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">Consider the following before starting your badminton court shed project:</p>
            </div>

            <div className="relative">
              {/* Curved SVG Wavy Pattern Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-48 md:-translate-x-1/2 z-0 opacity-70" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='192' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 0 C160 100 32 300 96 400' stroke='%23f39c12' stroke-width='32' fill='none' stroke-linecap='round' /%3E%3C/svg%3E")`,
                     backgroundRepeat: 'repeat-y',
                     backgroundPosition: 'center',
                     maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                   }}>
              </div>
              
              <div className="space-y-16 md:space-y-24 relative">
                {[
                  { step: "01", title: "Number of Courts", desc: "Confirm the number of courts and available space", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
                  { step: "02", title: "Height & Clearance", desc: "Plan sufficient roof height and structural clearance for badminton play", color: "text-[#f39c12]", bg: "bg-[#f39c12]" },
                  { step: "03", title: "Roofing Material", desc: "Choose roofing material that balances weather protection and natural lighting", color: "text-[#3498db]", bg: "bg-[#3498db]" },
                  { step: "04", title: "Glare Control", desc: "Consider glare and reflections that may affect players", color: "text-[#e74c3c]", bg: "bg-[#e74c3c]" },
                  { step: "05", title: "Plan Drainage", desc: "Plan drainage before finalizing the court and shed layout", color: "text-[#9b59b6]", bg: "bg-[#9b59b6]" },
                  { step: "06", title: "Ventilation", desc: "Include ventilation requirements for better airflow", color: "text-[#2ecc71]", bg: "bg-[#2ecc71]" },
                  { step: "07", title: "Lighting & Site", desc: "Plan lighting mounting points during structural design and check site accessibility before construction", color: "text-[#e67e22]", bg: "bg-[#e67e22]" },
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
                Badminton court shed requirements can vary depending on your location, plot type, building conditions, and local authority regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">KPN can guide you on the applicable requirements.</span></li>
                <li className="flex items-start gap-4"><CheckCircle2 className="text-[#e67e22] shrink-0 mt-1" /> <span className="text-lg font-medium text-gray-700">We help you understand any approvals that may be needed for your project.</span></li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/kpnroofingshed/images/image3.jpeg" alt="badminton court shed contractors India — KPN" fill className="object-cover" />
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8">How Long Does a <br/><span className="font-serif italic text-gray-500">Badminton Court Shed Take?</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                The completion time depends on the court size, number of courts, span design, material requirements, and site conditions.
              </p>
              <div className="bg-[#eef5f9] border border-[#3498db]/20 rounded-2xl p-6 flex items-center gap-6">
                <div className="bg-[#3498db] text-white w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                  <Calendar size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2d3436]">Custom Timeline</h4>
                  <p className="text-gray-600 font-medium text-lg mt-1">KPN plans the fabrication and installation process according to the specific project requirements. A project-specific timeline can be provided after the site visit and design assessment.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/kpnroofingshed/images/image7.jpeg" alt="badminton court roofing shed — KPN Roofing Shed" fill className="object-cover" />
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
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Badminton-Specific Structural Planning</h3>
                  <p className="text-gray-600 font-medium">Roof height, span, and structural clearance are planned specifically for badminton play rather than adapting a generic roofing structure.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Player-Friendly Roofing Design</h3>
                  <p className="text-gray-600 font-medium">Roofing materials can be selected to provide natural light while reducing glare and reflections that may interfere with play.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-mr-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Monsoon-Ready Drainage</h3>
                  <p className="text-gray-600 font-medium">Site-specific drainage planning helps keep rainwater away from the court and playing surface during heavy monsoon conditions.</p>
                </div>
              </div>
              
              {/* Center Image */}
              <div className="w-full lg:w-1/3 relative h-[600px] lg:h-[800px] rounded-[3rem] overflow-hidden shadow-2xl z-0">
                <Image src="/kpnroofingshed/images/image5.jpeg" alt="Why KPN" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#e67e22]/20 mix-blend-multiply"></div>
              </div>
              
              {/* Right Features */}
              <div className="w-full lg:w-1/3 space-y-6 z-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Complete Project Coordination</h3>
                  <p className="text-gray-600 font-medium">KPN's crew handles design, fabrication, and on-site installation, reducing handoffs between different vendors.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform relative lg:-ml-12">
                  <h3 className="text-2xl font-bold text-[#2d3436] mb-3">Transparent Project Pricing</h3>
                  <p className="text-gray-600 font-medium">KPN provides an itemized quotation upfront based on the project requirements, helping clients understand the expected project cost before construction begins.</p>
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
                { q: "Does KPN Roofing Shed build badminton court sheds?", a: "Yes. KPN Roofing Shed designs and builds badminton court sheds across India for sports academies, clubs, schools, colleges, apartment complexes, and private facility owners." },
                { q: "What is the cost of a badminton court shed in India?", a: "The cost depends on factors such as court size, number of courts, span design, roof height, roofing material, site location, and additional requirements such as lighting or ventilation. KPN provides a customized quotation based on the project requirements." },
                { q: "Can a badminton court shed be built for an existing court?", a: "Yes. KPN can design a badminton court shed around an existing or newly planned court by considering the available layout, required clearance, roof height, drainage, and structural conditions." },
                { q: "What warranty does KPN provide on badminton court sheds?", a: "KPN provides a 10-year structural guarantee along with free repair support for covered damage, as per the applicable warranty terms." },
                { q: "Does KPN build badminton court sheds outside Tamil Nadu?", a: "Yes. KPN Roofing Shed undertakes badminton court shed projects across India for schools, colleges, sports academies, clubs, apartment complexes, and private sports facilities." }
              ].map((faq, i) => (
                <details key={i} className="group border-b border-gray-200 pb-6 cursor-pointer">
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
        <section className="py-16 lg:py-24 text-center text-white relative overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <Image src="/kpnroofingshed/images/hero-bg.png" alt="badminton court shed contractors India — KPN" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[#d35400]/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
              Planning a <span className="font-serif italic font-medium text-[#f39c12]">Badminton Court Shed?</span>
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
              <span className="text-white font-bold">50% advance to start — no hidden costs.</span> 10-year guarantee on every roofing shed.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
