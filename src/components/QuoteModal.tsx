"use client";
import React, { useState, useEffect } from "react";

export const openQuoteModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-quote-modal"));
  }
};

export default function QuoteModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", location: "", shedType: "industrial", message: "", bot_field: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const isDev = process.env.NODE_ENV === 'development';
      const apiUrl = isDev ? 'https://localhost/php/KPN/mailer/send_mail.php' : '/mailer/send_mail.php';
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Quote Modal",
          ...formData
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setFormStatus("success");
        setTimeout(() => {
          setIsModalOpen(false);
          setFormStatus("idle");
          setFormData({ name: "", phone: "", location: "", shedType: "industrial", message: "", bot_field: "" });
        }, 3000);
      } else {
        setFormStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Network error. Please ensure you have internet access and try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-[520px] mx-4 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 border-0 text-2xl text-slate-500 cursor-pointer flex items-center justify-center hover:bg-slate-200 transition-colors"
          onClick={() => setIsModalOpen(false)}
        >
          ×
        </button>

        {formStatus === "success" ? (
          <div className="text-center py-5">
            <div className="text-[#25d366] text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-extrabold text-[#1e2229] mb-2">Quote Request Received!</h3>
            <p className="text-slate-500 font-medium">Our engineers will review your details and reach out to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold text-[#1e2229] mb-2">Get a Free Quote</h3>
            <p className="text-slate-500 mb-6 font-medium">Fill in details for a customized structural estimate within 24 hours.</p>
            {formStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-4 text-sm font-medium">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              {/* HONEYPOT FIELD (Hidden from real users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="bot_field">Leave this field blank</label>
                <input type="text" id="bot_field" name="bot_field" value={formData.bot_field} onChange={handleFormChange} tabIndex={-1} autoComplete="off" />
              </div>
              {[
                { label: "Your Name", id: "name", type: "text", placeholder: "Enter your name" },
                { label: "Phone Number", id: "phone", type: "tel", placeholder: "Enter phone number" },
                { label: "Site Location / State", id: "location", type: "text", placeholder: "e.g. Coimbatore, Tamil Nadu" },
              ].map(({ label, id, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-sm font-bold text-[#1e2229] mb-1.5" htmlFor={id}>{label}</label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#1e2229] outline-none transition-colors focus:border-[#004b87] bg-slate-50"
                    placeholder={placeholder}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleFormChange}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-bold text-[#1e2229] mb-1.5" htmlFor="shedType">Shed Type</label>
                <select
                  id="shedType"
                  name="shedType"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#1e2229] outline-none transition-colors focus:border-[#004b87] bg-slate-50"
                  value={formData.shedType}
                  onChange={handleFormChange}
                >
                  <option value="industrial">Industrial / Factory Shed</option>
                  <option value="agricultural">Agricultural / Animal Shed</option>
                  <option value="home">Home / Recreational Shed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1e2229] mb-1.5" htmlFor="message">Message / Shed Size (sq.ft)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-[#1e2229] outline-none transition-colors focus:border-[#004b87] bg-slate-50 resize-none"
                  placeholder="e.g. Need a 2400 sq.ft goat farm shed"
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-[#ee0000] hover:bg-[#cc0000] text-white font-extrabold py-4 rounded-xl text-base transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(249,92,25,0.35)] mt-2 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {formStatus === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </>
                ) : (
                  "Send Quote Request"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
