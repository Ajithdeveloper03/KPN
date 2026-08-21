"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const pathname = usePathname();
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.revert();
      ctxRef.current = null;
    }

    const initAnimations = () => {
      // Disable scroll animations on mobile for better performance
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        // Just make sure elements are visible
        document.querySelectorAll('[data-reveal]').forEach((el) => {
          gsap.set(el, { opacity: 1, y: 0, clipPath: "none" });
          if (el.getAttribute("data-reveal") === "image") {
            const child = el.querySelector("img") || el.firstElementChild;
            if (child) gsap.set(child, { scale: 1 });
          }
        });
        return;
      }

      ctxRef.current = gsap.context(() => {
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
            scrollTrigger: { trigger: img, start: "top 85%" },
          });

          gsap.to(child, {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: img, start: "top 85%" },
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
              scrollTrigger: { trigger: text, start: "top 90%" },
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
              scrollTrigger: { trigger: container, start: "top 85%" },
            }
          );
        });

        // 4. Fade Up [data-reveal="fade-up"]
        document.querySelectorAll('[data-reveal="fade-up"]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          );
        });
      });
    };

    // Wait for DOM paint and images
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        initAnimations();
        ScrollTrigger.refresh();
      });
    }, 250);

    return () => {
      clearTimeout(timer);
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
  }, [pathname]);

  return null;
}
