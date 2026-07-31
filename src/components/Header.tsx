"use client";
import React from "react";
import Image from "next/image";

export default function Header({ setIsModalOpen }: { setIsModalOpen: (val: boolean) => void }) {
  return (
    <header className="absolute top-0 left-0 w-full z-[100] py-6 bg-transparent border-b border-transparent">
      <div className="max-w-[1400px] w-full mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 no-underline">
          <Image
            src="/images/logo.jpg"
            alt="KPN Roofing Shed Logo"
            width={52}
            height={52}
            className="rounded-xl shadow-lg"
            priority
          />
          <span className="text-2xl font-extrabold text-white tracking-tight font-heading">
            KPN <span className="text-kpn-cyan">Roofing Shed</span>
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li><a href="#services" className="text-slate-200 no-underline text-[15px] font-semibold transition-colors duration-300 hover:text-white">Our Services</a></li>
            <li><a href="#about" className="text-slate-200 no-underline text-[15px] font-semibold transition-colors duration-300 hover:text-white">Why KPN</a></li>
            <li><a href="#process" className="text-slate-200 no-underline text-[15px] font-semibold transition-colors duration-300 hover:text-white">Our Process</a></li>
            <li><a href="#faqs" className="text-slate-200 no-underline text-[15px] font-semibold transition-colors duration-300 hover:text-white">FAQs</a></li>
            <li><a href="#contact" className="text-slate-200 no-underline text-[15px] font-semibold transition-colors duration-300 hover:text-white">Contact</a></li>
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <a href="tel:+919876543210" className="hidden md:inline-flex items-center bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-white hover:text-slate-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 align-middle"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call Now
          </a>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#f95c19] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-[#e04c10] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(249,92,25,0.3)] shadow-[0_4px_14px_rgba(249,92,25,0.4)]">
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
