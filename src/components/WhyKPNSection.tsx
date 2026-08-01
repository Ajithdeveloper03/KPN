"use client";
import { openQuoteModal } from "@/components/QuoteModal";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Ruler, Hammer, Award, ArrowUpRight } from "lucide-react";

const Card = ({ icon: Icon, title, desc}: { icon: any, title: string, desc: string }) => (
  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-10 w-full max-w-[380px] border border-slate-100 flex flex-col items-start transition-transform hover:-translate-y-1">
    <div className="w-14 h-14 rounded-full bg-[#e5f6fd] flex items-center justify-center mb-6">
      <Icon size={24} className="text-[#00a3e0]" strokeWidth={2.5} />
    </div>
    <h3 className="font-bold text-[#1e2229] text-xl mb-3 leading-tight">{title}</h3>
    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
      {desc}
    </p>
    <button 
      onClick={() => openQuoteModal()}
      className="mt-auto flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-[#1e2229] font-bold text-sm hover:bg-[#00a3e0] hover:text-white hover:border-[#00a3e0] transition-all group"
    >
      Learn More
      <div className="bg-[#00a3e0] text-white rounded-full p-1 group-hover:bg-white group-hover:text-[#00a3e0] transition-colors">
        <ArrowUpRight size={14} strokeWidth={3} />
      </div>
    </button>
  </div>
);

export default function WhyKPNSection() {

  return (
    <section id="about" className="relative py-24 overflow-hidden min-h-[100dvh] flex flex-col justify-center">
      {/* Roofing background - night-bg for a dark blue atmospheric effect */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url(/kpnroofingshed/images/night-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#f5fbfe]/92" />
      </div>
      
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24" data-reveal="stagger">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#ccecfb] text-[#00a3e0] font-bold text-sm tracking-wide mb-4 border border-[#00a3e0]/20">
            <span className="w-2 h-2 rounded-full bg-[#00a3e0]"></span>
            Why KPN Is Different
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-[#1e2229] font-heading tracking-tight" data-reveal="text">
              Unmatched Structural Excellence
            </h2>
          </div>
        </div>

        {/* The Grid Layout with connecting lines */}
        <div className="relative" data-reveal="stagger">
          
          {/* Absolute Background connecting lines (CSS Brackets) exactly like the requested image layout */}
          <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
            {/* Left Side Tree Branch */}
            <div className="absolute top-[22%] bottom-[22%] left-[16%] right-[50%] border-y-[1.5px] border-r-[1.5px] border-[#00a3e0]/40 rounded-r-[3rem]" />
            {/* Right Side Tree Branch */}
            <div className="absolute top-[22%] bottom-[22%] left-[50%] right-[16%] border-y-[1.5px] border-l-[1.5px] border-[#00a3e0]/40 rounded-l-[3rem]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 items-center justify-items-center">
            
            {/* Left Column */}
            <div className="flex flex-col gap-12 lg:gap-16 w-full items-center lg:items-end z-10 relative">
              <Card 
                icon={ShieldCheck} 
                title="No Middleman" 
                desc="You deal directly with KPN, not a broker or dealer, so pricing and communication stay direct." 
              />
              <Card 
                icon={Ruler} 
                title="Own Engineers" 
                desc="Structural design is handled in-house by our 5 qualified engineers, not outsourced or templated." 
              />
            </div>

            {/* Center Column (Circular Node with Image) */}
            <div className="hidden lg:flex items-center justify-center relative z-20 w-full h-[300px]">
              {/* Outer soft glowing circle */}
              <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#d5f0fc] to-[#f0f9fd] flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,163,224,0.1)] border border-white/50 backdrop-blur-sm">
                {/* Inner circle with image */}
                <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-[0_15px_40px_rgba(0,163,224,0.15)] relative overflow-hidden border-4 border-white group">
                  <Image 
                    src="/kpnroofingshed/images/logo.jpg" 
                    alt="KPN Logo" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 lg:gap-16 w-full items-center lg:items-start z-10 relative">
              <Card 
                icon={Hammer} 
                title="Own Installation Team" 
                desc="No subcontracted labour; the same team that designs your shed also builds it." 
              />
              <Card 
                icon={Award} 
                title="Transparent Pricing" 
                desc="Quotes are itemized upfront with no hidden costs added later." 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
