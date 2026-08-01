"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // We use gsap.context for easy cleanup
    let ctx = gsap.context(() => {
      
      // 1. Image Mask Reveals [data-reveal="image"]
      const images = document.querySelectorAll('[data-reveal="image"]');
      images.forEach((img) => {
        // Ensure parent has overflow-hidden (we'll assume classes handle this, or we can force it)
        const child = img.querySelector('img') || img.firstElementChild;
        if (!child) return;

        // Set initial state
        gsap.set(img, { clipPath: "inset(0 0 100% 0)" });
        gsap.set(child, { scale: 1.25 });

        // Animation
        gsap.to(img, {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
          }
        });
        
        gsap.to(child, {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
          }
        });
      });

      // 2. Line-by-Line Text Reveals [data-reveal="text"]
      const texts = document.querySelectorAll('[data-reveal="text"]');
      texts.forEach((text) => {
        // For simple implementations, if the text isn't split into lines yet, 
        // we'll just animate the element itself, or its immediate children.
        // If it's a wrapper of multiple elements, stagger them.
        
        gsap.fromTo(text, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
            }
          }
        );
      });

      // 3. Staggered Container Reveals [data-reveal="stagger"]
      const staggerContainers = document.querySelectorAll('[data-reveal="stagger"]');
      staggerContainers.forEach((container) => {
        const children = container.children;
        if (!children || children.length === 0) return;
        
        const childrenArray = Array.from(children);
        
        gsap.fromTo(childrenArray,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
            }
          }
        );
      });

    }); // End context

    return () => {
      ctx.revert(); // Cleanup GSAP instances on unmount/re-render
    };
  }, [pathname]); // Re-run when path changes (for multi-page support)

  return null; // This component doesn't render anything visually
}
