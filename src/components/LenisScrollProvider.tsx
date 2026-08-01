"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo.easeOut
      smoothWheel: true,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(update);

    // Disable GSAP lag smoothing to prevent stuttering
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  return <>{children}</>;
}
