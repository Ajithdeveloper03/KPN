"use client";
import { openQuoteModal } from "@/components/QuoteModal";
import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  React.useEffect(() => {
    const handleTheme = (e: any) => setIsNightMode(e.detail === "night");
    window.addEventListener("themeChange", handleTheme);
    return () => window.removeEventListener("themeChange", handleTheme);
  }, []);

  const toggleTheme = () => {
    const newMode = isNightMode ? "morning" : "night";
    setIsNightMode(!isNightMode);
    window.dispatchEvent(new CustomEvent("themeChange", { detail: newMode }));
  };

  return (
    <header className={`absolute top-0 left-0 w-full z-[100] py-6 border-b border-transparent transition-colors ${isNightMode ? 'bg-transparent' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] w-full mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 no-underline">
          <Image
            src="/kpnroofingshed/images/logo.jpg"
            alt="KPN Roofing Shed Logo"
            width={92}
            height={72}
            className="rounded-xl shadow-lg"
            priority
          />

        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0 items-center">
            <li><a href="#" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${isNightMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-black'}`}>Home</a></li>
            <li><a href="#about" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${isNightMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-black'}`}>About Us</a></li>
            
            {/* Services Dropdown */}
            <li className="relative group">
              <a href="#services" className={`no-underline text-[15px] font-bold transition-colors duration-300 flex items-center gap-1 pb-6 -mb-6 ${isNightMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-black'}`}>
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </a>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 overflow-hidden z-[100] border border-slate-100">
                <ul className="flex flex-col list-none m-0 p-2">
                  <li><a href="#services" className="block px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#00a3e0] rounded-lg transition-colors">Industrial Sheds</a></li>
                  <li><a href="#services" className="block px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#00a3e0] rounded-lg transition-colors">Agricultural Sheds</a></li>
                  <li><a href="#services" className="block px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#00a3e0] rounded-lg transition-colors">Home & Recreational</a></li>
                </ul>
              </div>
            </li>

            <li><a href="#gallery" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${isNightMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-black'}`}>Gallery</a></li>
            <li><a href="#blog" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${isNightMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-black'}`}>Blog</a></li>
            <li><a href="#contact" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${isNightMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-black'}`}>Contact</a></li>
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <button 
            onClick={toggleTheme}
            className={`flex items-center justify-center p-2 rounded-full border-2 transition-colors ${isNightMode ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'}`}
            title="Toggle Morning/Night Mode"
          >
            {isNightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="tel:+919876543210" className={`hidden md:inline-flex items-center border-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${isNightMode ? 'bg-transparent border-white text-white hover:bg-white hover:text-black' : 'bg-white border-white text-slate-900 hover:bg-transparent hover:text-slate-900'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 align-middle"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call Now
          </a>
          <button onClick={() => openQuoteModal()} className="hidden sm:block bg-[#ee0000] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-[#cc0000] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(249,92,25,0.3)] shadow-[0_4px_14px_rgba(249,92,25,0.4)]">
            Get Free Quote
          </button>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden relative z-[110] p-1 ${isNightMode ? 'text-white' : 'text-slate-900'}`}>
             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-[105] transition-transform duration-300 flex flex-col pt-28 px-8 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-6 list-none m-0 p-0">
          <li><a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Home</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">About Us</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Services</a></li>
          <li><a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Gallery</a></li>
          <li><a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Blog</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Contact</a></li>
        </ul>
        <div className="mt-10">
          <button onClick={() => { openQuoteModal(); setIsMobileMenuOpen(false); }} className="w-full bg-[#ee0000] text-white px-5 py-4 rounded-full text-lg font-bold">
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
