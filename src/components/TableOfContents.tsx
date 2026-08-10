"use client";
import React, { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ contentSelector = ".prose" }: { contentSelector?: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Wait for content to render, then parse headings
    const contentElement = document.querySelector(contentSelector);
    if (!contentElement) return;

    const headings = Array.from(contentElement.querySelectorAll("h2, h3"));
    const items: TocItem[] = headings.map((heading) => {
      // Ensure heading has an ID
      if (!heading.id) {
        heading.id = heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || Math.random().toString(36).substr(2, 9);
      }
      return {
        id: heading.id,
        text: heading.textContent || "",
        level: Number(heading.tagName.charAt(1)),
      };
    });
    setToc(items);

    // Setup intersection observer for highlighting active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
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
