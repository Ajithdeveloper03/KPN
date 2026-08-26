"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    // Disable smooth scrolling on mobile for performance
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let animFrame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animFrame = requestAnimationFrame(raf);
    };
    animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
