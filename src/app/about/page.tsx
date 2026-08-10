import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import QuoteButton from "@/components/QuoteButton";
import { Check, ShieldCheck, Factory, Users, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | KPN Roofing Shed",
  description: "Learn about KPN Roofing Shed, India's leading roofing shed contractors with 13+ years of experience and over 600 successful projects.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <PageHero 
        title="About KPN Roofing Shed" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" }
        ]} 
      />

      <main className="flex-grow">
        
        {/* Story Section */}
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                Building India's <br/> <span className="font-serif italic font-medium text-[#ee0000]">Strongest Structures</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                For over 13 years, KPN Roofing Shed has been at the forefront of industrial, agricultural, and sports infrastructure in India. What started as a small fabrication unit has evolved into a premier contracting firm that has successfully delivered over 600 projects pan-India.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We believe in eliminating middlemen. By utilizing our in-house engineering team and our dedicated installation crew, we guarantee transparent pricing, zero delays, and unparalleled quality control.
              </p>
              
              <div className="pt-6 grid grid-cols-2 gap-8 border-t border-slate-200">
                <div>
                  <h3 className="text-4xl font-bold text-[#062088] mb-2">13+</h3>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#062088] mb-2">600+</h3>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Projects Delivered</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image src="/kpnroofingshed/images/image1.jpeg" alt="KPN Construction Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="bg-[#ee0000] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Factory size={32} />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2">In-House Manufacturing</h4>
                  <p className="text-white/80 font-medium">Premium Apollo Steel and precision engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#121316] py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
            <Image src="/kpnroofingshed/images/night-bg.png" alt="Texture" fill className="object-cover" />
          </div>
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="px-5 py-2 rounded-full border border-white/20 text-sm font-medium text-slate-300 tracking-wide uppercase mb-8 inline-block backdrop-blur-sm">
                Why Us
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Our Core <span className="font-serif italic font-medium text-[#00a3e0]">Principles</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck size={32} />, title: "10-Year Warranty", desc: "Every shed we build comes with a comprehensive 10-year structural guarantee. We build it once, and we build it right.", color: "text-[#25D366]" },
                { icon: <Target size={32} />, title: "Absolute Transparency", desc: "No hidden costs, no surprise materials. We provide an itemized quote so you know exactly what you are paying for.", color: "text-[#ffcc00]" },
                { icon: <Users size={32} />, title: "No Middlemen", desc: "From drafting to installation, our in-house team handles everything. This ensures accountability at every single stage.", color: "text-[#00a3e0]" }
              ].map((value, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className={`mb-6 ${value.color}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <Image src="/kpnroofingshed/images/image7.jpeg" alt="CTA Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#062088]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent"></div>
          
          <div className="max-w-[1000px] mx-auto px-6 relative z-20 text-center text-white">
            <h2 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
              Ready to build <span className="font-serif italic font-medium text-[#ffcc00] block mt-2">something great?</span>
            </h2>
            <p className="text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
              Our engineering team is ready to analyze your site and provide a transparent, no-obligation quotation within 24 hours.
            </p>
            <QuoteButton className="bg-[#ffcc00] text-[#111] px-10 py-5 rounded-full font-bold text-lg hover:-translate-y-1 hover:bg-[#e6b800] hover:shadow-2xl hover:shadow-[#ffcc00]/20 transition-all inline-flex items-center gap-3">
              Get Free Quotation <ArrowRight size={20} />
            </QuoteButton>
          </div>
        </section>
        
      </main>
    </div>
  );
}
