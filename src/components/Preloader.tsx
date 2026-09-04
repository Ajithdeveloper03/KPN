"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => setLoading(false), 0);
      return;
    }

    // Wait for the window to load (or a small delay) before fading out
    const timeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Wait for fade-out transition to complete
    }, 800); // Initial delay to show preloader

    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Logo Container */}
      <div className="relative animate-pulse flex flex-col items-center">
        <Image
          src="/images/logo.webp"
          alt="KPN Roofing Shed logo with peacock and house emblem"
          width={150}
          height={120}
          className="rounded-2xl shadow-xl mb-6"
          style={{ width: "150px", height: "auto" }}
          priority
        />
        
        {/* Modern Loader Bar */}
        <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#ee0000] rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 0%; transform: translateX(200%); }
        }
      `}} />
    </div>
  );
}
