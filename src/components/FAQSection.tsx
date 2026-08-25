"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-12 md:py-16 overflow-hidden bg-[#fdfbf7]">
      {/* Roofing background — morning-bg for warm earthy light */}
      {/* <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
        <Image src="/images/image6.webp" alt="FAQ Background" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#062088]/80 mix-blend-multiply"></div>
      </div> */}
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">

        {/* Top Header */}
        <div className="text-center mb-16" data-reveal="stagger">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#e5f6fd] text-[#00a3e0] font-bold text-sm tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00a3e0]"></span>
            FAQ
          </div>
          <div className="overflow-hidden">
            <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-[#1e2229] font-heading tracking-tight" data-reveal="text">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto w-full flex flex-col gap-4" data-reveal="stagger">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[1.5rem] p-6 md:p-8 cursor-pointer transition-all duration-300 shadow-sm ${isOpen ? "bg-[#00a3e0] text-white" : "bg-[#e5f6fd] text-[#1e2229] hover:bg-[#e8f0e6]"
                  }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-base md:text-lg leading-snug">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? "border-white/50 text-white" : "border-[#1e2229]/30 text-[#1e2229]"
                    }`}>
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </div>
                </div>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className={`font-medium leading-relaxed text-sm md:text-base ${isOpen ? "text-white/90" : "text-[#1e2229]/70"
                      }`}>
                      <br />
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
