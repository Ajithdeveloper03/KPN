"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function EditorForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [activeTab, setActiveTab] = useState("content");
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Coworking Insights");
  const [readTime, setReadTime] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState("draft");
  
  // Advanced State (JSON)
  const [sections, setSections] = useState([{ id: 1, type: "text", heading: "", body: "", image: "", bullets: [""] }]);
  const [faqs, setFaqs] = useState<{question: string, answer: string}[]>([]);
  
  // SEO State
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  const getApiUrl = () => {
    const isDev = process.env.NODE_ENV === 'development';
    return isDev ? 'https://localhost/php/KPN/admin/api.php' : '/kpnroofingshed/admin/api.php';
  };

  const getUploadUrl = () => {
    const isDev = process.env.NODE_ENV === 'development';
    return isDev ? 'https://localhost/php/KPN/admin/upload.php' : '/kpnroofingshed/admin/upload.php';
  };

  const fetchBlog = async (blogId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${getApiUrl()}?slug=id-${blogId}`); // Note: current API searches by slug, need to fix fetching by ID if necessary, but we can fetch all and filter for now.
      const listRes = await fetch(getApiUrl());
      const data = await listRes.json();
      const blog = data.data.find((b: any) => b.id.toString() === blogId);
      
      if (blog) {
        setTitle(blog.title);
        setSlug(blog.slug);
        setCategory(blog.category);
        setReadTime(blog.read_time);
        setAuthor(blog.author);
        setCoverImage(blog.image);
        setStatus(blog.status || 'draft');
        setMetaTitle(blog.meta_title);
        setMetaDescription(blog.meta_description);
        setMetaKeywords(blog.meta_keywords);

        if (blog.builder_data) {
          try {
            const parsed = JSON.parse(blog.builder_data);
            if (parsed.sections) setSections(parsed.sections);
            if (parsed.faqs) setFaqs(parsed.faqs);
          } catch(e) {}
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Convert builder_data into a classic raw HTML string for the public site
  const generateRawHtml = () => {
    let html = "";
    sections.forEach(sec => {
      if (sec.heading) html += `<h2>${sec.heading}</h2>`;
      if (sec.type === 'bullets' && sec.bullets && sec.bullets.length > 0) {
        html += `<ul>`;
        sec.bullets.forEach(bullet => {
          if (bullet.trim()) html += `<li>${bullet}</li>`;
        });
        html += `</ul>`;
      } else if (sec.body) {
        html += `<p>${String(sec.body).replace(/\n/g, '<br/>')}</p>`;
      }
      if (sec.image) html += `<img src="${sec.image}" alt="${sec.heading}" />`;
    });
    if (faqs.length > 0) {
      html += `<h2>Frequently Asked Questions</h2><div class="faqs">`;
      faqs.forEach(faq => {
        html += `<div class="faq-item"><h3>${faq.question}</h3><p>${faq.answer}</p></div>`;
      });
      html += `</div>`;
    }
    return html;
  };

  const handleSave = async (forceStatus?: string) => {
    if (!title || !slug) {
      alert("Title and Slug are required.");
      return;
    }

    setIsSaving(true);
    const token = sessionStorage.getItem("admin_token");
    
    const builderData = {
      sections,
      faqs
    };

    const payload = {
      id: id ? parseInt(id) : undefined,
      title,
      slug,
      category,
      author,
      read_time: readTime,
      image: coverImage,
      content: generateRawHtml(),
      builder_data: JSON.stringify(builderData),
      status: forceStatus || status,
      meta_title: metaTitle,
      meta_description: metaDescription,
      meta_keywords: metaKeywords,
    };

    try {
      const res = await fetch(getApiUrl(), {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.status === "success") {
        router.push("/admin/dashboard");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Failed to save article.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, setter: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    const token = sessionStorage.getItem("admin_token");

    try {
      const res = await fetch(getUploadUrl(), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      const data = await res.json();
      if (data.status === "success") {
        setter(data.url);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (err) {
      alert("Image upload failed.");
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading editor...</div>;
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50/50 h-full overflow-hidden">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between z-10 shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Blogs Manager</h1>
          <p className="text-sm text-gray-400 mt-1 flex gap-2">
            <Link href="/admin/dashboard" className="hover:text-gray-600">Home</Link> 
            <span className="text-gray-300">/</span> Admin <span className="text-gray-300">/</span> blogs
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
          Welcome back, Admin! 👋
        </div>
      </header>

      {/* Editor Toolbar */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm font-medium">
            &larr; All Articles
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <div>
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{id ? 'Editing' : 'Creating New'}</p>
            <p className="text-sm font-semibold text-gray-800 line-clamp-1">{title || 'Untitled Article'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 mr-4 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
            <span className={`text-xs font-semibold ${status === 'published' ? 'text-emerald-600' : 'text-gray-400'}`}>
              {status === 'published' ? 'Published' : 'Draft'}
            </span>
            <button 
              onClick={() => setStatus(status === 'published' ? 'draft' : 'published')}
              className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer ${status === 'published' ? 'bg-emerald-500' : 'bg-gray-300'}`}
            >
              <div className={`w-3.5 h-3.5 bg-white rounded-full absolute top-[3px] transition-all ${status === 'published' ? 'left-[22px]' : 'left-[3px]'}`}></div>
            </button>
          </div>
          
          <Link href="/admin/dashboard" className="text-sm font-semibold text-gray-500 hover:text-gray-800 px-4 py-2">
            Cancel
          </Link>
          <button 
            onClick={() => handleSave()}
            disabled={isSaving}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-orange-500/30 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : (id ? 'Update Article' : 'Publish Article')}
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column (Tabs + Forms) */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-gray-200">
          {/* Tabs */}
          <div className="flex gap-8 px-8 border-b border-gray-200 bg-white shrink-0">
            {[
              { id: "content", label: `Content (${sections.length} sections)` },
              { id: "faqs", label: `FAQs (${faqs.length})` },
              { id: "seo", label: "SEO Meta" },
              { id: "settings", label: "Settings & Cover" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-semibold transition-colors border-b-2 cursor-pointer ${
                  activeTab === tab.id 
                    ? "border-orange-500 text-orange-500" 
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Scrollable Form Area */}
          <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
            <div className="max-w-3xl mx-auto space-y-8 pb-20">

              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Article Title *</label>
                    <input 
                      type="text" 
                      value={title || ""}
                      onChange={(e) => {
                        setTitle(e.target.value);
                        if (!id) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
                      }}
                      placeholder="Why Choose a Coworking Space in..."
                      className="w-full px-4 py-3 text-lg font-bold text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  {/* Sections Builder */}
                  <div className="flex items-center justify-between pt-4">
                    <h3 className="text-sm font-bold text-gray-800">Content Sections</h3>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSections([...sections, { id: Date.now(), type: "text", heading: "", body: "", image: "", bullets: [""] }])}
                        className="bg-[#1e293b] hover:bg-slate-800 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>+</span> Add Text Section
                      </button>
                      <button 
                        onClick={() => setSections([...sections, { id: Date.now(), type: "bullets", heading: "", body: "", image: "", bullets: ["", ""] }])}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>+</span> Add Bullet List
                      </button>
                    </div>
                  </div>

                  {sections.map((section, index) => (
                    <div key={section.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative">
                      <button 
                        onClick={() => setSections(sections.filter(s => s.id !== section.id))}
                        className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-orange-500 uppercase tracking-widest text-xs">Section {index + 1}</h4>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Section Heading</label>
                          <input 
                            type="text" 
                            value={section.heading || ""}
                            onChange={(e) => {
                              const newSecs = [...sections];
                              newSecs[index].heading = e.target.value;
                              setSections(newSecs);
                            }}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm font-semibold text-gray-800"
                          />
                        </div>
                        
                        {section.type === 'bullets' ? (
                          <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Bullet Points</label>
                            <div className="space-y-3">
                              {(section.bullets || []).map((bullet, bIndex) => (
                                <div key={bIndex} className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                                  <input 
                                    type="text"
                                    value={bullet || ""}
                                    placeholder="Enter bullet point text..."
                                    onChange={(e) => {
                                      const newSecs = [...sections];
                                      if (!newSecs[index].bullets) newSecs[index].bullets = [];
                                      newSecs[index].bullets[bIndex] = e.target.value;
                                      setSections(newSecs);
                                    }}
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm text-gray-600"
                                  />
                                  <button 
                                    onClick={() => {
                                      const newSecs = [...sections];
                                      newSecs[index].bullets = newSecs[index].bullets.filter((_, i) => i !== bIndex);
                                      setSections(newSecs);
                                    }}
                                    className="text-gray-400 hover:text-red-500"
                                  >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                  </button>
                                </div>
                              ))}
                              <button 
                                onClick={() => {
                                  const newSecs = [...sections];
                                  if (!newSecs[index].bullets) newSecs[index].bullets = [];
                                  newSecs[index].bullets.push("");
                                  setSections(newSecs);
                                }}
                                className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 mt-2"
                              >
                                + Add another point
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Body Content</label>
                            <textarea 
                              rows={4}
                              value={section.body || ""}
                              onChange={(e) => {
                                const newSecs = [...sections];
                                newSecs[index].body = e.target.value;
                                setSections(newSecs);
                              }}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm text-gray-600 border-l-4 border-l-orange-500"
                            />
                          </div>
                        )}
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Section Image (Optional)</label>
                          {section.image ? (
                            <div className="relative rounded-lg overflow-hidden border border-gray-200 group">
                              <img src={section.image} alt="" className="w-full h-48 object-cover" />
                              <button 
                                onClick={() => {
                                  const newSecs = [...sections];
                                  newSecs[index].image = "";
                                  setSections(newSecs);
                                }}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              </button>
                            </div>
                          ) : (
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors">
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                id={`file-${section.id}`}
                                onChange={(e) => handleImageUpload(e, (url) => {
                                  const newSecs = [...sections];
                                  newSecs[index].image = url;
                                  setSections(newSecs);
                                })}
                              />
                              <label htmlFor={`file-${section.id}`} className="cursor-pointer text-sm font-bold text-gray-400 hover:text-orange-500">
                                UPLOAD IMAGE
                              </label>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'faqs' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                    <div>
                      <h3 className="font-bold text-gray-800">Frequently Asked Questions</h3>
                      <p className="text-sm text-gray-500 mt-1">FAQs improve reader trust and SEO visibility for this article.</p>
                    </div>
                    <button 
                      onClick={() => setFaqs([...faqs, { question: "", answer: "" }])}
                      className="bg-[#a855f7] hover:bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>+</span> Add FAQ
                    </button>
                  </div>

                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative">
                      <button 
                        onClick={() => setFaqs(faqs.filter((_, i) => i !== index))}
                        className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <h4 className="font-bold text-purple-500 uppercase tracking-widest text-xs">FAQ {index + 1}</h4>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Question</label>
                          <input 
                            type="text" 
                            value={faq.question || ""}
                            onChange={(e) => {
                              const newFaqs = [...faqs];
                              newFaqs[index].question = e.target.value;
                              setFaqs(newFaqs);
                            }}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-sm font-semibold text-gray-800"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Answer</label>
                          <textarea 
                            rows={3}
                            value={faq.answer || ""}
                            onChange={(e) => {
                              const newFaqs = [...faqs];
                              newFaqs[index].answer = e.target.value;
                              setFaqs(newFaqs);
                            }}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 text-sm text-gray-600 border-l-4 border-l-purple-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {faqs.length === 0 && (
                    <div className="text-center py-12 text-gray-400 text-sm">
                      No FAQs added yet.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'seo' && (
                <div className="space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-6">SEO Meta Settings</h3>
                    
                    {/* Google Search Preview */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Google Search Preview</span>
                      </div>
                      <div className="max-w-[600px]">
                        <h4 className="text-[20px] text-[#1a0dab] hover:underline cursor-pointer truncate">
                          {metaTitle || title || 'Example Meta Title for Google Search'}
                        </h4>
                        <p className="text-[#006621] text-sm mb-1 truncate">
                          yoursite.com/blog/{slug || 'example-slug'}
                        </p>
                        <p className="text-[#545454] text-sm line-clamp-2 leading-snug">
                          {metaDescription || 'Provide a compelling description of this article to encourage users to click through from search engine results...'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">URL Slug</label>
                        <input 
                          type="text" 
                          value={slug || ""}
                          onChange={(e) => setSlug(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm font-semibold text-gray-800"
                        />
                      </div>
                      <div>
                        <label className="flex justify-between items-end text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                          <span>Meta Title</span>
                          <span>{metaTitle.length}/60</span>
                        </label>
                        <input 
                          type="text" 
                          value={metaTitle || ""}
                          onChange={(e) => setMetaTitle(e.target.value)}
                          placeholder="Ideal length: 50-60 chars"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm font-semibold text-gray-800"
                        />
                      </div>
                      <div>
                        <label className="flex justify-between items-end text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                          <span>Meta Description</span>
                          <span>{metaDescription.length}/160</span>
                        </label>
                        <textarea 
                          rows={3}
                          value={metaDescription || ""}
                          onChange={(e) => setMetaDescription(e.target.value)}
                          placeholder="Ideal length: 150-160 chars"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm text-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  {/* Cover Image */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Article Cover Image</h3>
                    {coverImage ? (
                      <div className="relative rounded-xl overflow-hidden border border-gray-200 group">
                        <img src={coverImage} alt="" className="w-full h-[300px] object-cover" />
                        <button 
                          onClick={() => setCoverImage("")}
                          className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center hover:bg-gray-50 transition-colors">
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          id="cover-upload"
                          onChange={(e) => handleImageUpload(e, setCoverImage)}
                        />
                        <label htmlFor="cover-upload" className="cursor-pointer text-sm font-bold text-gray-400 hover:text-orange-500 flex flex-col items-center gap-2">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          UPLOAD COVER IMAGE
                          <span className="font-normal text-xs mt-1 text-gray-400">JPEG, PNG, WEBP (Max 5MB)</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Basic Info */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Category</label>
                      <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm font-semibold text-gray-800"
                      >
                        <option>Coworking Insights</option>
                        <option>Business Growth</option>
                        <option>Community Stories</option>
                        <option>Announcements</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Read Time</label>
                      <input 
                        type="text" 
                        value={readTime || ""}
                        onChange={(e) => setReadTime(e.target.value)}
                        placeholder="e.g. 5 min read"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm font-semibold text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Author</label>
                      <input 
                        type="text" 
                        value={author || ""}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-sm font-semibold text-gray-800"
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Right Sidebar (Contextual Info) */}
        <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto shrink-0 hidden lg:block">
          <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Category</h4>
            <div className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
              {category}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Cover Image Preview</h4>
            <div className="bg-gray-50 border border-gray-100 rounded-lg h-32 flex items-center justify-center overflow-hidden">
              {coverImage ? (
                <img src={coverImage} className="w-full h-full object-cover" alt="" />
              ) : (
                <span className="text-xs text-gray-400 font-medium">No cover image</span>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Article Stats</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sections</span>
                <span className="font-bold text-gray-800">{sections.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">FAQs</span>
                <span className="font-bold text-purple-600">{faqs.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Word Count</span>
                <span className="font-bold text-gray-800">
                  {sections.reduce((acc, sec) => {
                    let text = sec.body || "";
                    if (sec.type === 'bullets' && sec.bullets) {
                      text += " " + sec.bullets.join(" ");
                    }
                    return acc + text.split(/\s+/).filter(Boolean).length;
                  }, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading editor...</div>}>
      <EditorForm />
    </Suspense>
  );
}
