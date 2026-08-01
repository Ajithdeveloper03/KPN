"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="bg-[#f0f2f5] py-24">
      <div className="max-w-[1400px] w-full mx-auto px-6">

        <div className="text-center mb-16" data-reveal="stagger">
          <div className="overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e2229] tracking-tight font-heading" data-reveal="text">
              Why KPN?
            </h2>
          </div>
          <p className="mt-4 text-slate-500 font-medium text-lg max-w-[600px] mx-auto">
            See how our direct-to-customer approach compares to typical market practices.
          </p>
        </div>

        <div className="relative mt-20 max-w-[1000px] mx-auto" data-reveal="stagger">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            {/* Table Header */}
            <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr] bg-[#1e2229] text-white">
              <div className="p-6 md:p-8 font-bold text-lg border-r border-white/10">Feature</div>
              <div className="p-6 md:p-8 font-extrabold text-xl text-center bg-[#ee0000] text-white border-r border-white/10 relative overflow-hidden">
                <span className="relative z-10">KPN Roofing Shed</span>
              </div>
              <div className="p-6 md:p-8 font-bold text-lg text-center text-slate-300">Typical Market Practice</div>
            </div>

            {/* Table Body */}
            {[
              { label: "Who You Deal With", kpn: "Directly with KPN", other: "Often through a dealer/broker" },
              { label: "Structural Design", kpn: "In-house engineers", other: "Frequently outsourced" },
              { label: "Installation Team", kpn: "KPN's own crew", other: "Often subcontracted labour" },
              { label: "Pricing", kpn: "Itemized, transparent quote", other: "Pricing varies by contractor" },
              { label: "After-Sales Support", kpn: "Warranty-backed repair", other: "After-sales support varies by provider" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[1.5fr_1.5fr_1.5fr] border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 font-bold text-[#1e2229] flex items-center border-r border-slate-100">{row.label}</div>
                <div className="p-6 font-medium text-[#1e2229] flex items-center justify-center text-center border-r border-slate-100 bg-[#fff5f0]">
                  <CheckCircle2 className="text-[#ee0000] mr-2 shrink-0" size={20} />
                  {row.kpn}
                </div>
                <div className="p-6 font-medium text-slate-500 flex items-center justify-center text-center">
                  <XCircle className="text-slate-300 mr-2 shrink-0" size={20} />
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
