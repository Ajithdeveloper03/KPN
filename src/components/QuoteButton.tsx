"use client";
import React from "react";
import { openQuoteModal } from "@/components/QuoteModal";

export default function QuoteButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button id="quotebutton-button-92" onClick={() => openQuoteModal()} 
      className={className || "bg-[#ee0000] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all whitespace-nowrap"}
    >
      {children || "Get Free Quote"}
    </button>
  );
}
