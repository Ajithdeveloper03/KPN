"use client";

import React from "react";
import { ShieldCheck, Ruler, Hammer, Award, ArrowUpRight } from "lucide-react";

const Card = ({ icon: Icon, title, desc, setIsModalOpen }: { icon: any, title: string, desc: string, setIsModalOpen: (val: boolean) => void }) => (
  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-10 w-full max-w-[400px] border border-slate-100 flex flex-col items-start transition-transform hover:-translate-y-1">
    <div className="w-14 h-14 rounded-full bg-[#f0f5ee] flex items-center justify-center mb-6">
      <Icon size={24} className="text-[#4d6d53]" strokeWidth={2.5} />
    </div>
    <h3 className="font-bold text-[#14261c] text-xl mb-3 leading-tight">{title}</h3>
    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
      {desc}
    </p>
    <button 
      onClick={() => setIsModalOpen(true)}
      className="mt-auto flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-[#14261c] font-bold text-sm hover:bg-[#7a9d7d] hover:text-white hover:border-[#7a9d7d] transition-all group"
    >
      Learn More
      <div className="bg-[#7a9d7d] text-white rounded-full p-1 group-hover:bg-white group-hover:text-[#7a9d7d] transition-colors">
        <ArrowUpRight size={14} strokeWidth={3} />
      </div>
    </button>
  </div>
);

export default function WhyKPNSection({ setIsModalOpen }: { setIsModalOpen: (val: boolean) => void }) {


  return (
    <section id="about" className="bg-[#f0f5ee] py-24 relative overflow-hidden min-h-[100dvh] flex flex-col justify-center">
      
      {/* Background connecting lines (SVG) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none hidden lg:flex">
        <svg width="800" height="400" viewBox="0 0 800 400" className="opacity-40">
          {/* Top Left to Center */}
          <path d="M 100,100 L 400,200" stroke="#7a9d7d" strokeWidth="1.5" fill="none" />
          {/* Bottom Left to Center */}
          <path d="M 100,300 L 400,200" stroke="#7a9d7d" strokeWidth="1.5" fill="none" />
          {/* Top Right to Center */}
          <path d="M 700,100 L 400,200" stroke="#7a9d7d" strokeWidth="1.5" fill="none" />
          {/* Bottom Right to Center */}
          <path d="M 700,300 L 400,200" stroke="#7a9d7d" strokeWidth="1.5" fill="none" />
          
          {/* Vertical & Horizontal structure lines like the screenshot */}
          <path d="M 250,50 L 250,350" stroke="#7a9d7d" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 550,50 L 550,350" stroke="#7a9d7d" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          <path d="M 250,200 L 550,200" stroke="#7a9d7d" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#e3ece4] text-[#4d6d53] font-bold text-sm tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#83a686]"></span>
            Why KPN
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-[#14261c] font-heading tracking-tight">
            Unmatched Structural Excellence
          </h2>
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 items-center justify-items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 w-full items-center lg:items-end">
            <Card 
              icon={ShieldCheck} 
              title="Premium Apollo Steel" 
              desc="We strictly utilize branded Apollo steel for all structural frameworks, ensuring maximum durability and load-bearing capacities." 
            />
            <Card 
              icon={Ruler} 
              title="In-House Engineering" 
              desc="Every truss and joint is meticulously calculated and designed by our own structural engineers before any fabrication begins." 
            />
          </div>

          {/* Center Column (Circular Node) */}
          <div className="hidden lg:flex items-center justify-center relative z-20 w-full h-[300px]">
            {/* Outer soft glowing circle */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-[#dce8dd] to-[#f0f5ee] flex items-center justify-center shadow-[inset_0_0_50px_rgba(122,157,125,0.2)]">
              {/* Inner dark circle */}
              <div className="w-32 h-32 rounded-full bg-[#7a9d7d] flex items-center justify-center shadow-xl shadow-[#7a9d7d]/40">
                <ShieldCheck size={48} className="text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 w-full items-center lg:items-start">
            <Card 
              icon={Hammer} 
              title="KPN Expert Installation" 
              desc="No subcontractors. Our own trained crew handles the entire installation process, guaranteeing accountability from start to finish." 
            />
            <Card 
              icon={Award} 
              title="10-Year Warranty" 
              desc="We stand by our work. Every shed is handed over with a comprehensive 10-year structural guarantee and free first-year maintenance." 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
