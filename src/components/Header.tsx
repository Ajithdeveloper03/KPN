"use client";
import { openQuoteModal } from "@/components/QuoteModal";
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Tractor, Droplets, Feather, Factory, Shirt, Warehouse, Home, Car, Activity, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCommunityOpen, setIsMobileCommunityOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const forceNightModeStyles = !isHomePage || isNightMode;

  useEffect(() => {
    const handleTheme = (e: any) => setIsNightMode(e.detail === "night");
    window.addEventListener("themeChange", handleTheme);
    return () => window.removeEventListener("themeChange", handleTheme);
  }, []);

  const toggleTheme = () => {
    const newMode = isNightMode ? "morning" : "night";
    setIsNightMode(!isNightMode);
    window.dispatchEvent(new CustomEvent("themeChange", { detail: newMode }));
  };

  if (pathname && pathname.startsWith('/admin')) return null;

  return (
    <header className={`absolute top-0 left-0 w-full z-[100] py-6 border-b border-transparent transition-colors ${forceNightModeStyles ? 'bg-transparent' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] w-full mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/images/logo.webp"
            alt="KPN Roofing Shed Logo"
            width={92}
            height={72}
            className="rounded-xl shadow-lg"
            priority
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0 items-center">
            <li><Link href="/" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${forceNightModeStyles ? 'text-white hover:text-slate-300' : 'text-black hover:text-[#00a3e0]'}`}>Home</Link></li>
            <li><Link href="/about-us" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${forceNightModeStyles ? 'text-white hover:text-slate-300' : 'text-black hover:text-[#00a3e0]'}`}>About Us</Link></li>
            
            {/* Services Mega Menu */}
            <li 
              className="relative group"
              onMouseLeave={() => setIsDropdownClicked(false)}
            >
              <Link href="/services" className={`cursor-pointer no-underline text-[15px] font-bold transition-colors duration-300 flex items-center gap-1 pb-6 -mb-6 ${forceNightModeStyles ? 'text-white hover:text-slate-300' : 'text-black hover:text-[#00a3e0]'}`}>
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] lg:w-[1050px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 translate-y-4 overflow-hidden z-[100] border border-slate-100 p-4 lg:p-6 ${
                  isDropdownClicked ? "opacity-0 invisible pointer-events-none" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
                }`}
                onClick={() => setIsDropdownClicked(true)}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-6">
                    <Link href="/services/agriculture-animal-husbandry-sheds" className="relative block w-full aspect-square rounded-2xl overflow-hidden shadow-md group/title">
                      <Image src="/images/goat1.webp" alt="Agriculture" fill sizes="(max-width: 768px) 100vw, 250px" className="object-cover group-hover/title:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-black/60 group-hover/title:bg-black/50 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <h4 className="text-white font-extrabold text-lg tracking-wide drop-shadow-md leading-snug">Agriculture & Animal Husbandry</h4>
                      </div>
                    </Link>
                    <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-1">
                      <li><Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Tractor size={18} className="text-[#ee0000]" /> Goat Farm Shed</Link></li>
                      <li><Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Droplets size={18} className="text-[#ee0000]" /> Dairy Farm Shed</Link></li>
                      <li><Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Feather size={18} className="text-[#ee0000]" /> Poultry Farm Shed</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 2 */}
                  <div className="flex flex-col gap-6">
                    <Link href="/services/industrial-sheds" className="relative block w-full aspect-square rounded-2xl overflow-hidden shadow-md group/title">
                      <Image src="/images/factory.webp" alt="Industrial Shed" fill sizes="(max-width: 768px) 100vw, 250px" className="object-cover group-hover/title:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-black/60 group-hover/title:bg-black/50 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <h4 className="text-white font-extrabold text-lg tracking-wide drop-shadow-md leading-snug">Industrial<br/>Shed</h4>
                      </div>
                    </Link>
                    <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-1">
                      <li><Link href="/services/industrial-sheds/factory-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Factory size={18} className="text-[#ee0000]" /> Factory Shed</Link></li>
                      <li><Link href="/services/industrial-sheds/garment-factory-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Shirt size={18} className="text-[#ee0000]" /> Garment Factory Shed</Link></li>
                      <li><Link href="/services/industrial-sheds/warehouse-godown-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Warehouse size={18} className="text-[#ee0000]" /> Warehouse & Godown</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 3 */}
                  <div className="flex flex-col gap-6">
                    <Link href="/services/home-roofing-sheds" className="relative block w-full aspect-square rounded-2xl overflow-hidden shadow-md group/title">
                      <Image src="/images/terrace.webp" alt="Home Roofing" fill sizes="(max-width: 768px) 100vw, 250px" className="object-cover group-hover/title:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-black/60 group-hover/title:bg-black/50 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <h4 className="text-white font-extrabold text-lg tracking-wide drop-shadow-md leading-snug">Home Roofing<br/>Sheds</h4>
                      </div>
                    </Link>
                    <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-1">
                      <li><Link href="/services/home-roofing-sheds/terrace-roofing-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Home size={18} className="text-[#ee0000]" /> Terrace Roofing Shed</Link></li>
                      <li><Link href="/services/home-roofing-sheds/car-parking-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Car size={18} className="text-[#ee0000]" /> Car Parking Shed</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 4 */}
                  <div className="flex flex-col gap-6">
                    <Link href="/services/sports-turf-sheds" className="relative block w-full aspect-square rounded-2xl overflow-hidden shadow-md group/title">
                      <Image src="/images/services/sports-turf-main-banner.webp" alt="Sports Turf" fill sizes="(max-width: 768px) 100vw, 250px" className="object-cover group-hover/title:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-black/60 group-hover/title:bg-black/50 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                        <h4 className="text-white font-extrabold text-lg tracking-wide drop-shadow-md leading-snug">Sports<br/>Turf</h4>
                      </div>
                    </Link>
                    <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-1">
                      <li><Link href="/services/sports-turf-sheds/badminton-court-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Activity size={18} className="text-[#ee0000]" /> Badminton Court</Link></li>
                      <li><Link href="/services/sports-turf-sheds/cricket-turf-shed" className="text-slate-700 hover:text-[#00a3e0] text-sm font-bold transition-colors flex items-center gap-3"><Trophy size={18} className="text-[#ee0000]" /> Cricket Turf Shed</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Community Dropdown */}
            <li className="relative group">
              <Link href="/corporate-social-responsibility" className={`cursor-pointer no-underline text-[15px] font-bold transition-colors duration-300 flex items-center gap-1 pb-6 -mb-6 ${forceNightModeStyles ? 'text-white hover:text-slate-300' : 'text-black hover:text-[#00a3e0]'}`}>
                Community
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 translate-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 overflow-hidden z-[100] border border-slate-100 flex flex-col py-2">
                <Link href="/corporate-social-responsibility" className="px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#00a3e0] transition-colors border-b border-slate-100 last:border-0">
                  Corporate Social Responsibility
                </Link>
                <Link href="/gallery" className="px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#00a3e0] transition-colors border-b border-slate-100 last:border-0">
                  Gallery
                </Link>
              </div>
            </li>
            <li><Link href="/blog" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${forceNightModeStyles ? 'text-white hover:text-slate-300' : 'text-black hover:text-[#00a3e0]'}`}>Blog</Link></li>
            <li><Link href="/contact" className={`no-underline text-[15px] font-bold transition-colors duration-300 ${forceNightModeStyles ? 'text-white hover:text-slate-300' : 'text-black hover:text-[#00a3e0]'}`}>Contact</Link></li>
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          {isHomePage && (
            <button 
              onClick={toggleTheme}
              className={`flex items-center justify-center p-2 rounded-full border-2 transition-colors ${forceNightModeStyles ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'}`}
              title="Toggle Morning/Night Mode"
              aria-label="Toggle Theme Mode"
            >
              {isNightMode ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}

          <a href="tel:+919788770786" className={`hidden md:inline-flex items-center border-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${forceNightModeStyles ? 'bg-white border-black text-black hover:bg-black hover:text-white': 'bg-white border-black text-black hover:bg-black hover:text-white'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 align-middle"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call Now
          </a>
          <button onClick={() => openQuoteModal()} className="hidden sm:block bg-[#ee0000] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:bg-[#cc0000] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(249,92,25,0.3)] shadow-[0_4px_14px_rgba(249,92,25,0.4)]">
            Get Free Quote
          </button>
          
          <button aria-label="Toggle Mobile Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden relative z-[110] p-1 ${isMobileMenuOpen ? 'text-[#ee0000]' : (forceNightModeStyles ? 'text-white' : 'text-black')}`}>
             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-[105] transition-transform duration-300 flex flex-col pt-24 pb-8 px-8 md:hidden overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-6 list-none m-0 p-0">
          <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Home</Link></li>
          <li><Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">About Us</Link></li>
          <li className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0] flex-grow text-left">
                Services
              </Link>
              <button aria-label="Toggle Services Menu" onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="p-2 text-slate-900 hover:text-[#00a3e0]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 border-l-2 border-slate-200 flex flex-col gap-6 py-2">
                <div>
                  <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ee0000] font-bold text-lg hover:text-[#cc0000] flex items-center gap-2 mb-4">
                    View All Services <ArrowRight size={18} />
                  </Link>
                </div>
                <div>
                  <Link href="/services/agriculture-animal-husbandry-sheds" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ee0000] font-bold text-sm uppercase tracking-widest mb-3 hover:text-[#cc0000] block">Agriculture & Animal Husbandry →</Link>
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    <li><Link href="/services/agriculture-animal-husbandry-sheds/goat-farm-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Goat Farm Shed</Link></li>
                    <li><Link href="/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Cow / Dairy Farm Shed</Link></li>
                    <li><Link href="/services/agriculture-animal-husbandry-sheds/poultry-farm-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Poultry Farm Shed</Link></li>
                  </ul>
                </div>
                <div>
                  <Link href="/services/industrial-sheds" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ee0000] font-bold text-sm uppercase tracking-widest mb-3 hover:text-[#cc0000] block">Industrial Shed →</Link>
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    <li><Link href="/services/industrial-sheds/factory-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Factory Shed</Link></li>
                    <li><Link href="/services/industrial-sheds/garment-factory-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Garment Factory Shed</Link></li>
                    <li><Link href="/services/industrial-sheds/warehouse-godown-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Warehouse & Godown Shed</Link></li>
                  </ul>
                </div>
                <div>
                  <Link href="/services/home-roofing-sheds" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ee0000] font-bold text-sm uppercase tracking-widest mb-3 hover:text-[#cc0000] block">Home Roofing Sheds →</Link>
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    <li><Link href="/services/home-roofing-sheds/terrace-roofing-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Terrace Roofing Shed</Link></li>
                    <li><Link href="/services/home-roofing-sheds/car-parking-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Car Parking Shed</Link></li>
                  </ul>
                </div>
                <div>
                  <Link href="/services/sports-turf-sheds" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ee0000] font-bold text-sm uppercase tracking-widest mb-3 hover:text-[#cc0000] block">Sports Turf →</Link>
                  <ul className="flex flex-col gap-3 list-none p-0 m-0">
                    <li><Link href="/services/sports-turf-sheds/badminton-court-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Badminton Court Shed</Link></li>
                    <li><Link href="/services/sports-turf-sheds/cricket-turf-shed" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Cricket Turf Shed</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col">
            <button aria-label="Toggle Community Menu" onClick={() => setIsMobileCommunityOpen(!isMobileCommunityOpen)} className="flex items-center justify-between text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0] w-full text-left">
              Community
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isMobileCommunityOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileCommunityOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="pl-4 border-l-2 border-slate-200 flex flex-col gap-4 py-2 list-none m-0">
                <li><Link href="/corporate-social-responsibility" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Corporate Social Responsibility</Link></li>
                <li><Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-[#00a3e0] font-semibold text-lg">Gallery</Link></li>
              </ul>
            </div>
          </li>
          <li><Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Blog</Link></li>
          <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 no-underline text-2xl font-extrabold hover:text-[#00a3e0]">Contact</Link></li>
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
