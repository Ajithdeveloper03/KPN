"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const pathname = usePathname();
  // Use a ref to hold the GSAP context so we can safely revert it
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Revert any previous context before creating a new one
    if (ctxRef.current) {
      ctxRef.current.revert();
      ctxRef.current = null;
    }

    // Wait a brief moment for all sibling components to mount and render into the DOM
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // 1. Image Mask Reveals [data-reveal="image"]
        document.querySelectorAll('[data-reveal="image"]').forEach((img) => {
          const child = img.querySelector("img") || img.firstElementChild;
          if (!child) return;

          gsap.set(img, { clipPath: "inset(0 0 100% 0)" });
          gsap.set(child, { scale: 1.25 });

          gsap.to(img, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: img, start: "top 80%" },
          });

          gsap.to(child, {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: img, start: "top 80%" },
          });
        });

        // 2. Line-by-Line Text Reveals [data-reveal="text"]
        document.querySelectorAll('[data-reveal="text"]').forEach((text) => {
          gsap.fromTo(
            text,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.0,
              ease: "power4.out",
              scrollTrigger: { trigger: text, start: "top 85%" },
            }
          );
        });

        // 3. Staggered Container Reveals [data-reveal="stagger"]
        document.querySelectorAll('[data-reveal="stagger"]').forEach((container) => {
          const children = Array.from(container.children);
          if (!children.length) return;

          gsap.fromTo(
            children,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: { trigger: container, start: "top 75%" },
            }
          );
        });
      });

      ctxRef.current = ctx;
    }, 150);

    return () => {
      clearTimeout(timer);
      // Revert on cleanup — this undoes ALL inline styles GSAP set, preventing
      // React's reconciler from crashing on stale DOM mutations.
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
  }, [pathname]);

  return null;
}
