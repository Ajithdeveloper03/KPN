"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export const faqs = [
  {
    question: "Do you manufacture your own materials?",
    answer: "Yes, we handle all steel fabrication in-house at our Coimbatore facility using premium Apollo-brand steel. This ensures zero compromises on material quality and faster delivery."
  },
  {
    question: "Is there a structural warranty?",
    answer: "Absolutely. Every KPN shed comes with a 10-year structural guarantee, a 3-year replacement warranty on flooring, and completely free maintenance for the first year."
  },
  {
    question: "Do you use subcontractors for installation?",
    answer: "No. The entire installation is carried out by KPN’s own expert crew. From engineering to the final bolt, you are dealing with one accountable team."
  },
  {
    question: "How long does construction take?",
    answer: "A standard 5,000 sq.ft industrial shed is typically completed within 30 to 45 days. We provide a strict timeline before construction begins and stick to it."
  },
  {
    question: "Can I visit your fabrication facility?",
    answer: "Yes! We welcome clients to visit our Coimbatore manufacturing facility to inspect our fabrication processes and see our material quality firsthand."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#fbfdfa] py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f5ee] text-[#4d6d53] font-bold text-sm tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-[#83a686]"></span>
            FAQ
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-[#14261c] font-heading tracking-tight">
            Questions About KPN Roofing Shed
          </h2>
        </div>

        {/* 50/50 Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`rounded-[1.5rem] p-6 md:p-8 cursor-pointer transition-all duration-300 shadow-sm ${
                    isOpen ? "bg-[#7a9d7d] text-white" : "bg-[#f0f5ee] text-[#14261c] hover:bg-[#e8f0e6]"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-bold text-lg md:text-xl leading-snug">
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "border-white/50 text-white" : "border-[#14261c]/30 text-[#14261c]"
                    }`}>
                      {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                    </div>
                  </div>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className={`font-medium leading-relaxed text-sm md:text-base ${
                        isOpen ? "text-white/90" : "text-[#14261c]/70"
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[500px] lg:h-auto min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
              alt="KPN Roofing Shed completed project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
