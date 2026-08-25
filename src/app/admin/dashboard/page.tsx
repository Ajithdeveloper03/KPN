"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getApiUrl = () => {
    const isDev = process.env.NODE_ENV === 'development';
    return isDev ? 'https://localhost/php/KPN/admin/api.php' : '/admin/api.php';
  };

  const fetchBlogs = async () => {
    try {
      const token = sessionStorage.getItem("admin_token");
      const res = await fetch(getApiUrl(), {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      if (data.status === "success") {
        setBlogs(data.data);
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteBlog = async (id: number) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const token = sessionStorage.getItem("admin_token");
      const res = await fetch(`${getApiUrl()}?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) fetchBlogs();
    } catch (err) {
      alert("Failed to delete blog.");
    }
  };

  const publishedCount = blogs.filter(b => b.status !== 'draft').length;
  const draftCount = blogs.filter(b => b.status === 'draft').length;

  return (
    <div className="flex-1 flex flex-col bg-gray-50/50">
      {/* Topbar */}
      <header className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Blogs Manager</h1>
          <p className="text-sm text-gray-400 mt-1 flex gap-2">
            Home <span className="text-gray-300">/</span> Admin <span className="text-gray-300">/</span> blogs
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
          Welcome back, Admin! 👋
        </div>
      </header>

      <div className="p-8 overflow-y-auto h-full">
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-xl mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1e293b] rounded-2xl p-6 text-white shadow-xl shadow-slate-200/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold">{blogs.length}</p>
              <p className="text-xs text-slate-400 font-medium tracking-wider mt-1 uppercase">Total Articles</p>
            </div>
          </div>
          
          <div className="bg-[#10b981] rounded-2xl p-6 text-white shadow-xl shadow-emerald-200/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold">{publishedCount}</p>
              <p className="text-xs text-emerald-100 font-medium tracking-wider mt-1 uppercase">Published Live</p>
            </div>
          </div>

          <div className="bg-[#f97316] rounded-2xl p-6 text-white shadow-xl shadow-orange-200/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-bold">{draftCount}</p>
              <p className="text-xs text-orange-100 font-medium tracking-wider mt-1 uppercase">Draft</p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white text-gray-600 focus:outline-none focus:border-orange-500">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
            <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white text-gray-600 focus:outline-none focus:border-orange-500">
              <option>All Categories</option>
            </select>
            <button 
              onClick={() => router.push('/admin/dashboard/editor')}
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-orange-500/30 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              New Article
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <h3 className="text-sm font-medium text-gray-500">Showing <span className="font-bold text-gray-800">{blogs.length}</span> articles</h3>
            <button onClick={fetchBlogs} className="text-xs font-semibold text-[#f97316] hover:text-[#ea580c] flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 tracking-wider uppercase w-24">Cover</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 tracking-wider uppercase">Title & Slug</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 tracking-wider uppercase">Category</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 tracking-wider uppercase">Sections</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 tracking-wider uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 tracking-wider uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400 text-sm">
                      <div className="animate-spin w-6 h-6 border-2 border-[#f97316] border-t-transparent rounded-full mx-auto mb-2"></div>
                      Loading articles...
                    </td>
                  </tr>
                ) : blogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400 text-sm">
                      No articles found. Create your first one!
                    </td>
                  </tr>
                ) : (
                  blogs.map((blog) => {
                    let parsedData = null;
                    try {
                      if (blog.builder_data) parsedData = JSON.parse(blog.builder_data);
                    } catch(e) {}
                    const sectionCount = parsedData?.sections?.length || 0;
                    const faqCount = parsedData?.faqs?.length || 0;
                    const isDraft = blog.status === 'draft';
                    
                    return (
                      <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors group bg-white">
                        <td className="px-6 py-4 align-middle">
                          <div className="w-16 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                            {blog.image ? (
                              <img src={blog.image} alt="Blog" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 align-middle">
                          <p className="text-sm font-bold text-gray-800 line-clamp-1">{blog.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{blog.slug}</p>
                        </td>
                        <td className="px-6 py-4 align-middle">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-100">
                            {blog.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 align-middle">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded inline-block w-fit">
                              {sectionCount} sections
                            </span>
                            {faqCount > 0 && (
                              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded inline-block w-fit">
                                {faqCount} FAQs
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 align-middle">
                          {isDraft ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                              DRAFT
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              LIVE
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 align-middle text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => router.push(`/admin/dashboard/editor?id=${blog.id}`)}
                              className="bg-[#f97316] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#ea580c] transition-colors flex items-center gap-1"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                              Edit
                            </button>
                            <button 
                              onClick={() => deleteBlog(blog.id)}
                              className="bg-gray-100 text-gray-500 px-2 py-1.5 rounded hover:bg-red-50 hover:text-red-500 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
