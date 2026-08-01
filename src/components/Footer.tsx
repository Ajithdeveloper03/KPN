import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[#121316] border-t border-white/10 pt-16 pb-8 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
          <Image
            src="/kpnroofingshed/images/night-bg.png"
            alt="Footer Background Texture"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        
        {/* Dark Gradient for readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#121316] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/kpnroofingshed/images/logo.jpg"
                alt="KPN Roofing Shed Logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="text-xl font-extrabold text-white">KPN Roofing Shed</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-medium max-w-xs">
              India&apos;s premium roofing contractors delivering industrial warehouses, factory sheds, agricultural animal houses, and recreation turf structures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li><a href="#services" className="text-slate-300 no-underline font-medium hover:text-[#00a3e0] transition-colors">Shed Solutions</a></li>
              <li><a href="#about" className="text-slate-300 no-underline font-medium hover:text-[#00a3e0] transition-colors">Why KPN</a></li>
              <li><a href="#process" className="text-slate-300 no-underline font-medium hover:text-[#00a3e0] transition-colors">Our Process</a></li>
              <li><a href="#faqs" className="text-slate-300 no-underline font-medium hover:text-[#00a3e0] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-base uppercase tracking-wider mb-5">Contact Details</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-slate-400 font-medium">
                <svg className="shrink-0 mt-0.5 text-[#ee0000]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Coimbatore Head Office & Manufacturing Facility, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-medium">
                <svg className="shrink-0 text-[#ee0000]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+919876543210" className="text-slate-400 no-underline hover:text-[#00a3e0] transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-medium">
                <svg className="shrink-0 text-[#ee0000]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:contact@kpnroofingshed.com" className="text-slate-400 no-underline hover:text-[#00a3e0] transition-colors">contact@kpnroofingshed.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 pt-6 border-t border-white/10 flex justify-center items-center flex-wrap gap-4 text-center">
          <span className="text-white text-sm font-medium">© {new Date().getFullYear()} KPN Roofing Shed. All Rights Reserved.</span>
        </div>
      </footer>

      {/* Sticky Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-[200] bg-white border-t border-slate-200 shadow-lg md:hidden">
        <div className="grid grid-cols-2">
          <a href="tel:+919876543210" className="flex items-center justify-center gap-2 py-4 bg-[#004b87] text-white font-bold text-sm no-underline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call Now
          </a>
          <a href="https://wa.me/919876543210?text=I%27m%20interested%20in%20a%20roofing%20shed%20project" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-[#25d366] text-white font-bold text-sm no-underline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.023 14.122.992 11.5.992 6.064.992 1.64 5.361 1.636 10.79c-.001 1.704.469 3.372 1.36 4.894l-.993 3.629 3.738-.97zm12.39-7.22c-.304-.151-1.8-.883-2.078-.984-.278-.102-.48-.151-.68.151-.2.302-.778.984-.954 1.185-.177.201-.354.226-.658.075-.304-.151-1.284-.473-2.447-1.509-.9-.801-1.507-1.792-1.684-2.093-.177-.302-.018-.465.133-.615.136-.135.304-.352.456-.528.151-.177.202-.302.303-.503.101-.2.05-.377-.025-.528-.076-.151-.68-1.634-.932-2.237-.245-.589-.493-.509-.68-.518-.175-.009-.376-.01-.577-.01-.201 0-.528.075-.802.377-.275.302-1.05.955-1.05 2.329 0 1.373 1.002 2.7 1.127 2.87.126.17 1.972 2.973 4.779 4.184.667.288 1.189.46 1.597.59.67.213 1.28.183 1.761.111.537-.08 1.8-.734 2.053-1.442.253-.707.253-1.314.177-1.442-.076-.128-.278-.203-.582-.354z"></path></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
