"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const unhideAll = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        const hElement = el as HTMLElement;
        hElement.style.opacity = "1";
        hElement.style.transform = "translateY(0)";
        hElement.style.clipPath = "none";
        
        if (el.getAttribute("data-reveal") === "image") {
          const child = el.querySelector("img") || el.firstElementChild;
          if (child) (child as HTMLElement).style.transform = "scale(1)";
        }
      });
    };

    unhideAll();
    const timer = setTimeout(unhideAll, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
