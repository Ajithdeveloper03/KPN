"use client";
import { openQuoteModal } from "@/components/QuoteModal";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Ruler, Hammer, Award, ArrowUpRight, Clock, Shield } from "lucide-react";

const Card = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative w-full max-w-[380px] border border-slate-100 flex flex-col items-start transition-transform hover:-translate-y-1 overflow-hidden">
    
    {/* Content */}
    <div className="relative z-10 w-full flex flex-col items-start h-full">
      <div className="w-14 h-14 rounded-full bg-[#e5f6fd] transition-colors duration-500 flex items-center justify-center mb-6">
        <Icon size={24} className="text-[#00a3e0] transition-colors duration-500" strokeWidth={2.5} />
      </div>
      <h3 className="font-bold text-[#1e2229] transition-colors duration-500 text-xl mb-3 leading-tight">{title}</h3>
      <p className="text-slate-500 transition-colors duration-500 font-medium text-sm leading-relaxed mb-6">
        {desc}
      </p>
      <button
        onClick={() => openQuoteModal()}
        className="mt-auto flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-[#1e2229] font-bold text-sm hover:bg-[#00a3e0] hover:text-white hover:border-[#00a3e0] transition-all group-button"
      >
        Learn More
        <div className="bg-[#00a3e0] text-white rounded-full p-1 transition-colors">
          <ArrowUpRight size={14} strokeWidth={3} />
        </div>
      </button>
    </div>
  </div>
);

export default function WhyKPNSection() {

  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden flex flex-col justify-center transition-colors duration-700 bg-[#e7f0f4]">

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24" data-reveal="stagger">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide mb-4 border transition-colors duration-700 bg-white/70 text-[#00a3e0] border-[#00a3e0]/20">
            <span className="w-2 h-2 rounded-full bg-[#00a3e0]"></span>
            Why KPN Is Different
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(32px,5vw,48px)] font-bold font-heading tracking-tight transition-colors duration-700 text-[#1e2229]" data-reveal="text">
              Unmatched Structural Excellence
            </h2>
          </div>
        </div>

        {/* The Grid Layout with connecting lines */}
        <div className="relative" data-reveal="stagger">

          {/* Absolute Background connecting lines (Animated SVG) */}
          <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none transition-opacity duration-700 opacity-100">
            <style>{`
              @keyframes dash-move {
                to {
                  stroke-dashoffset: -48;
                }
              }
              .animate-dash-line {
                animation: dash-move 2s linear infinite;
              }
            `}</style>

            {/* Left Side Tree Branch */}
            <div className="absolute top-[10%] bottom-[10%] left-[16%] right-[50%] overflow-hidden">
              <svg width="100%" height="100%" className="absolute inset-0">
                <rect x="-100" y="3" width="calc(100% + 97px)" height="calc(100% - 6px)" rx="48" fill="none" stroke="#00a3e0" strokeOpacity="0.4" strokeWidth="5" strokeDasharray="12 12" className="animate-dash-line" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00a3e0" strokeOpacity="0.4" strokeWidth="5" strokeDasharray="12 12" className="animate-dash-line" />
              </svg>
            </div>
            
            {/* Right Side Tree Branch */}
            <div className="absolute top-[10%] bottom-[10%] left-[50%] right-[16%] overflow-hidden">
              <svg width="100%" height="100%" className="absolute inset-0">
                <rect x="3" y="3" width="calc(100% + 100px)" height="calc(100% - 6px)" rx="48" fill="none" stroke="#00a3e0" strokeOpacity="0.4" strokeWidth="5" strokeDasharray="12 12" className="animate-dash-line" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00a3e0" strokeOpacity="0.4" strokeWidth="5" strokeDasharray="12 12" className="animate-dash-line" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 items-center justify-items-center">

            {/* Left Column */}
            <div className="flex flex-col gap-12 lg:gap-16 w-full items-center lg:items-end z-10 relative py-8">
              <Card
                icon={ShieldCheck}
                title="No Middleman"
                desc="You deal directly with KPN, not a broker or dealer, so communication stays direct."
              />
              <Card
                icon={Ruler}
                title="Own Engineers"
                desc="Structural design is handled in-house by our 5 qualified engineers, not outsourced or templated."
              />
              <Card
                icon={Hammer}
                title="Own Installation Team"
                desc="No subcontracted labour; the same team that designs your shed also builds it, so accountability doesn't get lost between vendors."
              />
            </div>

            {/* Center Column (Circular Node with Image) */}
            <div className="hidden lg:flex items-center justify-center relative z-20 w-full h-[300px]">
              {/* Outer soft glowing circle - Animated infinite rotation */}
              <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#d5f0fc] via-[#f0f9fd] to-[#bde6fa] flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,163,224,0.1)] border-[5px] border-dotted border-[#00a3e0] backdrop-blur-sm animate-[spin_15s_linear_infinite]">
                {/* Inner circle with image - Reverse spin to keep image upright */}
                <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-[0_15px_40px_rgba(0,163,224,0.15)] relative overflow-hidden border-4 border-white animate-[spin_15s_linear_infinite_reverse]">
                  <Image
                    src="/images/logo.webp"
                    alt="KPN Logo"
                    fill sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-12 lg:gap-16 w-full items-center lg:items-start z-10 relative py-8">
              <Card
                icon={Award}
                title="Clear Process"
                desc="Quotes are itemized upfront with no hidden costs added later."
              />
              <Card
                icon={Clock}
                title="Quick Completion"
                desc="6 days for a 1440 sq.ft shed, 1 month for 2400 sq.ft, without cutting corners on quality."
              />
              <Card
                icon={Shield}
                title="Warranty Support"
                desc="10-year guarantee and 3-year replacement warranty on flooring, with free repair for damage in the first year."
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
