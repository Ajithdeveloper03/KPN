import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import QuoteButton from "@/components/QuoteButton";
import TableOfContents from "@/components/TableOfContents";

// Helper: fetch with a hard timeout so builds never hang waiting for an unreachable server
async function fetchWithTimeout(url: string, timeoutMs = 5000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

// Build-time API URL — only used server-side during `next build`.
// On the live server the PHP files live at /kpnroofingshed/admin/api.php.
// In local dev (XAMPP running), use the localhost URL. If XAMPP is off, we
// gracefully fall back to the static slug list / placeholder content.
function getApiUrl() {
  const isDev = process.env.NODE_ENV === "development";
  return isDev
    ? "https://localhost/php/KPN/admin/api.php"
    : `${process.env.NEXT_PUBLIC_SITE_URL || "https://kpnroofingshed.com"}/kpnroofingshed/admin/api.php`;
}

// Bypass self-signed SSL errors during local development fetch calls to XAMPP
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

export async function generateStaticParams() {
  try {
    const res = await fetchWithTimeout(getApiUrl(), 4000);
    if (!res.ok) throw new Error("API not reachable");
    const data = await res.json();
    return data.data.map((post: any) => ({ slug: post.slug }));
  } catch {
    // Fallback for local build without PHP server running
    return [
      { slug: "ultimate-guide-to-roofing-sheds" },
      { slug: "benefits-of-industrial-sheds" },
      { slug: "choosing-right-roofing-sheet" },
      { slug: "goat-farm-shed-design-guide" },
      { slug: "sports-turf-shed-advantages" },
    ];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await fetchWithTimeout(`${getApiUrl()}?slug=${slug}`, 4000);
    if (res.ok) {
      const data = await res.json();
      return {
        title: data.data.meta_title || `${data.data.title} | KPN Roofing Shed`,
        description:
          data.data.meta_description ||
          "Read expert insights from KPN Roofing Shed.",
        keywords: data.data.meta_keywords || "",
      };
    }
  } catch {
    // Silently fall back
  }
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | KPN Roofing Shed`,
    description:
      "Read expert insights on roofing shed construction, industrial sheds, and agricultural sheds from KPN Roofing Shed.",
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post = null;
  try {
    const res = await fetchWithTimeout(`${getApiUrl()}?slug=${slug}`, 4000);
    if (res.ok) {
      const data = await res.json();
      post = data.data;
    }
  } catch {
    // Silently fall back during build if PHP API is unreachable
  }

  if (slug === "ultimate-guide-to-roofing-sheds") {
    post = {
      title: "The Ultimate Guide to Roofing Shed Construction",
      content: `
        <h2 id="introduction">Introduction to Roofing Sheds</h2>
        <p>Choosing the right roofing shed is critical for the long-term success of your industrial, agricultural, or residential project. A well-built shed provides protection, durability, and functional value.</p>
        <img src="/kpnroofingshed/images/image3.jpeg" alt="Roofing Shed Introduction" style="width:100%; border-radius:1rem; margin-top:2rem; margin-bottom:2rem;" />
        
        <h2 id="materials">Choosing the Right Materials</h2>
        <p>Steel is the undisputed king of modern shed construction. Using high-quality materials like Apollo steel ensures structural integrity against heavy winds and storms.</p>
        <h3 id="roofing-sheets">Types of Roofing Sheets</h3>
        <p>From color-coated galvalume sheets to polycarbonate sheets for natural light, the roof cladding determines heat resistance and lifespan.</p>
        <img src="/kpnroofingshed/images/image4.jpeg" alt="Roofing Materials" style="width:100%; border-radius:1rem; margin-top:2rem; margin-bottom:2rem;" />
        
        <h2 id="ventilation">The Importance of Ventilation</h2>
        <p>Proper airflow prevents moisture buildup and heat accumulation, which is especially important for livestock sheds and industrial manufacturing units.</p>
        <ul>
          <li>Turbo ventilators for continuous exhaust</li>
          <li>Ridge vents for natural thermal lift</li>
          <li>Side mesh for cross ventilation</li>
        </ul>
        <img src="/kpnroofingshed/images/image7.jpeg" alt="Ventilation in Sheds" style="width:100%; border-radius:1rem; margin-top:2rem; margin-bottom:2rem;" />

        <h2 id="conclusion">Conclusion</h2>
        <p>Planning your shed with experts like KPN Roofing Shed ensures you get maximum value, durability, and performance from your investment.</p>
      `,
      image: "/kpnroofingshed/images/image2.jpeg",
      author: "KPN Experts",
      created_at: new Date().toISOString(),
      read_time: "8 min read",
      category: "Guides",
    };
  }

  // Fallback placeholder when CMS is unreachable during build (and not the static one)
  if (!post) {
    post = {
      title: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      content: `<p class="text-xl leading-relaxed text-slate-600 mb-8 font-medium">Content is currently unavailable. Please check back later or ensure the CMS API is running.</p>`,
      image: "/kpnroofingshed/images/image4.jpeg",
      author: "KPN Engineering Team",
      created_at: new Date().toISOString(),
      read_time: "4 min read",
      category: "Industrial",
    };
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <main className="flex-grow pb-20">

        {/* Article Hero: Full Bleed Image with Dark Overlay */}
        <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] mb-12">
          <Image
            src={post.image || "/kpnroofingshed/images/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover"
          />
          {/* Dark Gradient Overlay for Header Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121316]/90 via-[#121316]/40 to-transparent"></div>
        </section>

        {/* Content Wrapper */}
        <article className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Main Content (Left) */}
            <div className="w-full lg:w-[70%]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ee0000] hover:text-[#cc0000] transition-colors mb-6 uppercase tracking-widest"
              >
                <ArrowLeft size={16} /> Back to Blog
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#e6e9f3] text-[#062088] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                  <Clock size={14} /> {post.read_time || post.readTime}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#111] leading-[1.1] mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between border-y border-slate-200 py-6 mb-10 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111]">{post.author}</h4>
                    <span className="text-sm text-slate-500 font-medium flex items-center gap-1">
                      <Calendar size={14} />{" "}
                      {post.created_at
                        ? new Date(post.created_at).toLocaleDateString()
                        : post.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider hidden sm:block mr-2">
                    Share
                  </span>
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </button>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:text-[#111] prose-a:text-[#062088] prose-a:font-bold hover:prose-a:text-[#ee0000] prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags & Bottom CTA */}
              <div className="mt-16 pt-10 border-t border-slate-200">
                <div className="bg-[#f8f9fc] rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 shadow-sm">
                  <div>
                    <h4 className="text-2xl font-bold text-[#111] mb-2">Ready to build your shed?</h4>
                    <p className="text-slate-500 font-medium text-lg">Talk to our experts for a transparent quotation.</p>
                  </div>
                  <QuoteButton className="bg-[#ee0000] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all whitespace-nowrap" />
                </div>
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="w-full lg:w-[30%]">
              <TableOfContents />
            </div>

          </div>
        </article>
      </main>
    </div>
  );
}
