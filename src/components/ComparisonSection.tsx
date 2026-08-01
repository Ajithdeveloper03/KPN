"use client";

import React from "react";
import { ShieldCheck, Users, Check, X } from "lucide-react";

export default function ComparisonSection() {
  const comparisonData = [
    { label: "Who You Deal With", kpn: "Directly with KPN", other: "Often through a dealer/broker" },
    { label: "Structural Design", kpn: "In-house engineers", other: "Frequently outsourced" },
    { label: "Installation Team", kpn: "KPN's own crew", other: "Often subcontracted labour" },
    { label: "Pricing", kpn: "Itemized, transparent quote", other: "Pricing varies by contractor" },
    { label: "After-Sales Support", kpn: "Warranty-backed repair", other: "Varies by provider" }
  ];

  return (
    <section id="comparison" className="bg-[#fdfdfd] py-24">
      <div className="max-w-[1200px] w-full mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16" data-reveal="stagger">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-[#1e2229] tracking-tight font-heading leading-snug">
            KPN Roofing Shed – <span className="text-[#00a3e0]">Your Best Choice</span> for <br className="hidden md:block" /> Quality & Transparency
          </h2>
        </div>

        <div className="relative mt-12 w-full mx-auto" data-reveal="stagger">
          <div className="bg-white rounded-[2rem] shadow-[0_10px_60px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden text-left">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b-2 border-slate-100 items-end">
              
              <div className="p-6 md:p-8 font-bold text-xl md:text-2xl text-slate-800">
                Features
              </div>
              
              {/* Winner Column Header */}
              <div className="p-6 md:p-8 font-extrabold text-xl md:text-2xl text-slate-800 bg-[#f4fbfe] flex flex-col gap-4 border-r border-l border-white">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00a3e0]">
                  <ShieldCheck size={32} strokeWidth={2.5} />
                </div>
                KPN Roofing
              </div>
              
              {/* Loser Column Header */}
              <div className="p-6 md:p-8 font-bold text-xl md:text-2xl text-slate-700 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-slate-500 bg-slate-100">
                  <Users size={32} />
                </div>
                Local Contractors
              </div>
              
            </div>

            {/* Table Body Rows */}
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/50">
                
                {/* Feature Label */}
                <div className="p-6 md:px-8 md:py-6 font-bold text-base md:text-lg text-slate-800 flex items-center">
                  {row.label}
                </div>
                
                {/* KPN Column (Winner) */}
                <div className="p-6 md:px-8 md:py-6 text-slate-800 bg-[#f4fbfe] flex items-center font-bold text-base md:text-lg border-r border-l border-white">
                  <Check className="text-[#34d399] mr-3 shrink-0" size={24} strokeWidth={3} />
                  {row.kpn}
                </div>
                
                {/* Other Column */}
                <div className="p-6 md:px-8 md:py-6 text-slate-500 flex items-center font-medium text-base md:text-lg">
                  <span className="mr-3 shrink-0 text-slate-300">
                    <X size={24} strokeWidth={2.5} />
                  </span>
                  {row.other}
                </div>
                
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
