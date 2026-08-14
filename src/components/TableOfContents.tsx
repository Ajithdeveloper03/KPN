"use client";
import React, { useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ contentSelector = ".prose" }: { contentSelector?: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  // Track IDs we generated ourselves (not server-rendered) to avoid mutating
  // heading.id on nodes React hydrated, which causes reconciler crashes.
  const generatedIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) return;

    const headings = Array.from(contentElement.querySelectorAll("h2, h3")) as HTMLElement[];

    const items: TocItem[] = headings.map((heading) => {
      let id = heading.id;
      if (!id) {
        // Generate a stable ID without mutating server-rendered HTML directly
        id =
          heading.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") ||
          Math.random().toString(36).substring(2, 9);
        // Only set the attribute if we generated it (client-only)
        heading.setAttribute("id", id);
        generatedIds.current.add(id);
      }
      return {
        id,
        text: heading.textContent || "",
        level: Number(heading.tagName.charAt(1)),
      };
    });

    setToc(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId((entry.target as HTMLElement).id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((h) => observer.observe(h));

    return () => {
      observer.disconnect();
      // Clean up any IDs we injected on unmount so the DOM is clean
      generatedIds.current.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.removeAttribute("id");
      });
      generatedIds.current.clear();
    };
  }, [contentSelector]);

  if (toc.length === 0) return null;

  return (
    <div className="sticky top-32 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
      <h4 className="text-lg font-bold text-[#111] mb-4 uppercase tracking-wider">Table of Contents</h4>
      <ul className="space-y-3">
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 1}rem` }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`block text-sm font-medium transition-colors ${
                activeId === item.id ? "text-[#ee0000]" : "text-slate-500 hover:text-[#062088]"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
