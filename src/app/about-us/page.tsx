import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import QuoteButton from "@/components/QuoteButton";
import AboutProcessSection from "@/components/AboutProcessSection";
import { 
  Building2, Tractor, Factory, Home, Activity, CheckCircle2, 
  MapPin, Rocket, ShieldCheck, HeartHandshake, Wrench, ChevronRight, Phone, MessageCircle, ArrowRight, Plus, Minus
} from "lucide-react";

export const metadata: Metadata = {
  title: "About KPN Roofing Shed — Trusted Roofing Company Since 2016 | KPN",
  description: "Learn about KPN Roofing Shed — a roofing shed construction company with 10+ years of experience building durable sheds for homes, farms, and industries across India.",
};

const faqs = [
  {
    question: "What does KPN Roofing Shed do?",
    answer: "KPN Roofing Shed provides roofing shed construction solutions for agricultural, industrial, residential, commercial, and sports-related requirements across India."
  },
  {
    question: "When was KPN Roofing Shed established?",
    answer: "KPN Roofing Shed was established in 2016 and has since worked on roofing shed projects across India."
  },
  {
    question: "What types of roofing sheds does KPN build?",
    answer: "KPN builds agricultural and animal husbandry sheds, industrial sheds, home roofing sheds, and sports turf sheds. These include goat farm sheds, dairy farm sheds, poultry sheds, factory sheds, warehouse sheds, terrace roofing sheds, car parking sheds, badminton court sheds, and cricket turf sheds."
  },
  {
    question: "Where does KPN Roofing Shed provide its services?",
    answer: "KPN Roofing Shed provides roofing shed construction services across India, with projects completed in multiple states."
  },
  {
    question: "Who founded KPN Roofing Shed?",
    answer: "KPN Roofing Shed was founded by Mr. P. M. Puniyamurthi (a) Gobi, who had experience as a Quality Engineer in a BHEL subcontracting company before establishing the company."
  }
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#00a3e0] selection:text-white flex flex-col font-sans">
      <PageHero 
        title="About KPN Roofing Shed" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" }
        ]} 
        bgImage="/images/services/industrial-banner-image.png"
      />

      <main className="flex-grow">
        
        {/* Introduction Section */}
        <section className="py-12 lg:py-16 max-w-[1400px] mx-auto px-6 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start" data-reveal="stagger">
              <span className="px-5 py-2 rounded-full bg-[#e5f6fd] text-sm font-bold text-[#00a3e0] tracking-wide uppercase inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00a3e0]"></span>
                Trusted Roofing Shed Solutions Across India
              </span>
              <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight leading-[1.15] text-[#1e2229]">
                Durable Roofing Solutions for Agricultural, Industrial, and Commercial Needs.
              </h2>
              <div className="space-y-6 text-lg text-[#525c6e] font-medium leading-relaxed">
                <p>
                  <strong className="text-[#1e2229]">Established in 2016</strong>, KPN Roofing Shed has developed its expertise in planning, fabricating, and installing different types of roofing structures over 10+ years. The company focuses on practical designs, quality construction, timely project execution, and customer-focused service.
                </p>
                <p>
                  From farm sheds and animal husbandry sheds to factory sheds, warehouse sheds, terrace roofing sheds, car parking sheds, and sports turf sheds, KPN provides roofing solutions designed around the specific requirements of each project.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" data-reveal="image">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <Image 
                  src="/images/services/industrial-banner-image.png" 
                  alt="KPN Roofing Shed Construction Site" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2229]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="bg-[#00a3e0] w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg text-white">
                    <Building2 size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-1">10+ Years of Excellence</h4>
                  <p className="text-white/80 font-medium">Delivering strong, durable roofing solutions pan-India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-white py-12 lg:py-16 relative border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-5/12 lg:w-1/3" data-reveal="image">
                <div className="relative w-full max-w-[400px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-[6px] border-white">
                  <Image 
                    src="/images/founder.png" 
                    alt="Mr. P. M. Puyamurthi Gobi - Founder of KPN Roofing Shed" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 lg:w-2/3 space-y-3 text-justify" data-reveal="stagger">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2229]">Meet Our Founder</h2>
                <div className="pb-4 border-b border-slate-200 text-left">
                  <h3 className="text-2xl font-bold text-[#00a3e0]">Mr. P. M. Puyamurthi (a) Gobi</h3>
                  <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm mt-1">Founder, KPN Roofing Shed</p>
                </div>
                <div className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed">
                  <p>
                    KPN Roofing Shed began its journey with a focus on providing reliable roofing solutions for different construction requirements.
                  </p>
                  <p>
                    Mr. Puniyamoorthi (a) Gobi founded KPN Roofing Shed in 2016 with a vision to provide reliable, high-quality roofing solutions across India. His background as a Quality Engineer at a BHEL subcontracting company gave him deep insights into engineering precision and construction quality — values that still guide KPN today.
                  </p>
                  <p>
                    Today, KPN has completed roofing shed projects across India, with work spanning multiple states including locations such as Maharashtra, UP, Karnataka, Telangana, alongside its core base in Tamil Nadu. The company combines technical planning, practical construction methods, and customer-oriented project execution to handle roofing projects of different sizes and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Grid */}
        <section className="py-12 lg:py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16" data-reveal="stagger">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e2229] mb-6">Our Roofing Shed Services</h2>
              <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
                KPN Roofing Shed provides roofing solutions across multiple sectors tailored to specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="stagger">
              {/* Service 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                <div className="w-16 h-16 bg-[#e5f6fd] text-[#00a3e0] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
                  <Tractor size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e2229] mb-4">Agriculture & Animal Husbandry</h3>
                <p className="text-slate-600 mb-6 flex-grow font-medium">Goat Farm Sheds, Dairy Farm Sheds, Poultry Farm Sheds, Cow Farm Sheds.</p>
                <Link href="/services/agriculture-animal-husbandry-sheds" className="inline-flex items-center text-[#00a3e0] font-bold hover:text-[#007ba8] transition-colors">
                  Explore Sheds <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                <div className="w-16 h-16 bg-[#e5f6fd] text-[#00a3e0] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
                  <Factory size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e2229] mb-4">Industrial Roofing Sheds</h3>
                <p className="text-slate-600 mb-6 flex-grow font-medium">Factory Sheds, Garment & Textile Sheds, Warehouse & Godown Sheds.</p>
                <Link href="/services/industrial-roofing-sheds" className="inline-flex items-center text-[#00a3e0] font-bold hover:text-[#007ba8] transition-colors">
                  Explore Sheds <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                <div className="w-16 h-16 bg-[#e5f6fd] text-[#00a3e0] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
                  <Home size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e2229] mb-4">Home Roofing Sheds</h3>
                <p className="text-slate-600 mb-6 flex-grow font-medium">Practical roofing solutions for residential properties including Terrace and Car Parking sheds.</p>
                <Link href="/services/home-roofing-sheds" className="inline-flex items-center text-[#00a3e0] font-bold hover:text-[#007ba8] transition-colors">
                  Explore Sheds <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
                <div className="w-16 h-16 bg-[#e5f6fd] text-[#00a3e0] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
                  <Activity size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e2229] mb-4">Sports Turf Sheds</h3>
                <p className="text-slate-600 mb-6 flex-grow font-medium">Covered sports structures designed for facilities like Badminton and Cricket turfs.</p>
                <Link href="/services/sports-turf-sheds" className="inline-flex items-center text-[#00a3e0] font-bold hover:text-[#007ba8] transition-colors">
                  Explore Sheds <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The KPN Advantage */}
        <section className="bg-white py-12 lg:py-16 border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Centered Header */}
            <div className="text-center mb-16" data-reveal="stagger">
              <span className="px-4 py-2 rounded-full bg-[#e5f6fd] text-[#00a3e0] text-sm font-bold tracking-wider uppercase mb-6 inline-block">
                The KPN Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e2229]">Why Choose KPN Roofing Shed?</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Left Column: 2 Features (Text Right) */}
              <div className="w-full space-y-12 order-2 lg:order-1" data-reveal="stagger">
                <div className="flex flex-col lg:flex-row lg:text-right gap-5 items-start lg:items-center justify-end">
                  <div className="order-2 lg:order-1 flex-1">
                    <h4 className="text-2xl font-bold mb-3 text-[#1e2229]">Practical Project Planning</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">Every roofing project begins with understanding the site, dimensions, structural requirements, and intended use before construction.</p>
                  </div>
                  <div className="order-1 lg:order-2 bg-[#f8f9fa] p-4 rounded-xl text-[#00a3e0] shrink-0 h-fit border border-slate-100">
                    <Wrench size={28} />
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row lg:text-right gap-5 items-start lg:items-center justify-end">
                  <div className="order-2 lg:order-1 flex-1">
                    <h4 className="text-2xl font-bold mb-3 text-[#1e2229]">Technical Expertise</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">KPN&apos;s experience in engineering and construction supports practical planning and execution of different roofing shed projects.</p>
                  </div>
                  <div className="order-1 lg:order-2 bg-[#f8f9fa] p-4 rounded-xl text-[#00a3e0] shrink-0 h-fit border border-slate-100">
                    <ShieldCheck size={28} />
                  </div>
                </div>
              </div>

              {/* Center Column: Image */}
              <div className="w-full order-1 lg:order-2" data-reveal="image">
                <div className="relative w-full max-w-[450px] mx-auto aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-[#f8f9fa]">
                  <Image src="/images/image5.jpeg" alt="KPN Advantage Industrial Shed" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004b87]/90 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <div className="w-14 h-14 bg-[#ffcc00] text-[#111] rounded-2xl flex items-center justify-center mb-4">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Uncompromising Quality</h3>
                      <p className="text-white/80 font-medium">Built right the first time, every time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Features (Text Left) */}
              <div className="w-full space-y-12 order-3 lg:order-3" data-reveal="stagger">
                <div className="flex gap-5 items-start lg:items-center">
                  <div className="bg-[#f8f9fa] p-4 rounded-xl text-[#00a3e0] shrink-0 h-fit border border-slate-100">
                    <CheckCircle2 size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 text-[#1e2229]">Quality-Focused Construction</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">The company focuses on durable construction and suitable roofing solutions based on the requirements of each project.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start lg:items-center">
                  <div className="bg-[#f8f9fa] p-4 rounded-xl text-[#00a3e0] shrink-0 h-fit border border-slate-100">
                    <HeartHandshake size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 text-[#1e2229]">End-to-End Project Execution</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">KPN handles the roofing project through the required stages, from planning and fabrication to installation and completion.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start lg:items-center">
                  <div className="bg-[#f8f9fa] p-4 rounded-xl text-[#00a3e0] shrink-0 h-fit border border-slate-100">
                    <MapPin size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 text-[#1e2229]">Pan-India Project Coverage</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">KPN Roofing Shed serves clients across India, with projects completed in multiple states.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Mission & Vision (Light Minimalist Layout) */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            
            {/* The divide-x creates the vertical line between columns on desktop, divide-y for mobile */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Mission Column */}
              <div className="flex flex-col items-center text-center p-8 md:p-12 lg:px-20 group" data-reveal="stagger">
                {/* Large Icon */}
                <div className="text-[#ee0000] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Rocket size={70} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h2 className="text-2xl font-black mb-6 tracking-wide uppercase">
                  <span className="text-[#1e2229]">Our</span> <span className="text-[#ee0000]">Mission</span>
                </h2>
                
                {/* Text Content */}
                <div className="space-y-4">
                  <p className="text-slate-600 font-medium leading-relaxed">
                    To provide valuable, high-quality roofing shed services through experienced professionals and timely project execution.
                  </p>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    KPN focuses on delivering practical roofing solutions while maintaining service quality and customer satisfaction throughout the project.
                  </p>
                </div>
              </div>

              {/* Vision Column */}
              <div className="flex flex-col items-center text-center p-8 md:p-12 lg:px-20 group" data-reveal="stagger">
                {/* Large Icon */}
                <div className="text-[#00a3e0] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Building2 size={70} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h2 className="text-2xl font-black mb-6 tracking-wide uppercase">
                  <span className="text-[#1e2229]">Our</span> <span className="text-[#00a3e0]">Vision</span>
                </h2>

                {/* Text Content */}
                <div className="space-y-4">
                  <p className="text-slate-600 font-medium leading-relaxed">
                    To become one of India&apos;s leading roofing shed companies by delivering reliable and innovative roofing solutions.
                  </p>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    The vision is centred on building long-term trust through reliable construction, technical expertise, and continuously improving roofing solutions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* From Planning to Installation (Horizontal Process Timeline) */}
        <AboutProcessSection />

        {/* Custom FAQ for About Page */}
        <section className="py-12 lg:py-16 bg-[#f8f9fa]">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-16" data-reveal="stagger">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e2229] mb-6">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6" data-reveal="stagger">
              {faqs.map((faq, index) => (
                <details name="faq" key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8 text-xl md:text-2xl font-bold text-[#1e2229]">
                    <span className="flex items-start gap-4">
                      <span className="text-[#00a3e0] text-3xl leading-none mt-[-4px]">Q.</span>
                      {faq.question}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-[#00a3e0] group-open:border-[#00a3e0] group-open:text-white group-hover:border-[#1e2229]">
                      <Plus size={20} className="block group-open:hidden" strokeWidth={1.5} />
                      <Minus size={20} className="hidden group-open:block" strokeWidth={2} />
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 md:pl-16 text-slate-600 font-medium leading-relaxed text-lg pt-2 opacity-0 group-open:opacity-100 transition-opacity duration-300">
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <Image src="/images/image7.jpeg" alt="Roofing Construction Site" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#004b87]/95 mix-blend-multiply"></div>
          </div>
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight" data-reveal="text">
              Ready to Build Your Roofing Shed?
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-3xl mx-auto mb-12" data-reveal="text">
              Whether you need an agricultural shed, industrial shed, home roofing shed, warehouse shed, or sports turf shed, KPN Roofing Shed can help you plan a roofing solution based on your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-6" data-reveal="stagger">
              <QuoteButton className="bg-[#ffcc00] text-[#111] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors inline-flex items-center gap-2">
                Get Free Quote <ArrowRight size={20} />
              </QuoteButton>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#25D366] transition-colors inline-flex items-center gap-2 shadow-lg">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
              <a href="tel:+919999999999" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#004b87] transition-colors inline-flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
