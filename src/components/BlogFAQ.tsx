"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function BlogFAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 my-10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${
              isOpen
                ? "bg-white border-[#ee0000] shadow-[0_10px_30px_rgba(238,0,0,0.08)]"
                : "bg-[#f8f9fc] border-slate-200 hover:border-[#ee0000]/50 hover:shadow-sm"
            }`}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className={`font-bold text-lg m-0 transition-colors ${isOpen ? "text-[#ee0000]" : "text-[#111]"}`}>
                {faq.question}
              </h4>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isOpen ? "bg-[#ee0000] text-white rotate-180" : "bg-slate-200 text-slate-500"
                }`}
              >
                {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
              </div>
            </div>
            
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-slate-600 leading-relaxed m-0 text-[17px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
