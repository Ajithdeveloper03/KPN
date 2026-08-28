"use client";
import React, { useState, useEffect } from "react";

export const openQuoteModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-quote-modal"));
  }
};

export default function QuoteModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", location: "", shedType: "Factory Shed", message: "", bot_field: "" });
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
      const apiUrl = isDev ? 'http://localhost/php/KPN/mailer/send_mail.php' : '/mailer/send_mail.php';
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
          setFormData({ name: "", phone: "", location: "", shedType: "Factory Shed", message: "", bot_field: "" });
        }, 3000);
      } else {
        setFormStatus("error");
        setErrorMessage(result.message + (result.debug ? ` [Debug: ${result.debug}]` : "") || "Something went wrong. Please try again.");
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
      <div className="bg-white rounded-2xl w-full max-w-[900px] mx-4 max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row">

        {/* Left Side: Image Cover (Hidden on Mobile) */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/animal1.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#062088]/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h4 className="text-2xl font-bold mb-2">Build with Confidence</h4>
            <p className="text-sm font-medium text-white/90">Join 1000+ satisfied clients across India who trust KPN for durable roofing structures.</p>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-1/2 p-8 max-h-[90vh] overflow-y-auto relative">
          <button id="quotemodal-button-93" aria-label="Close quote modal" className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 border-0 text-2xl text-slate-500 cursor-pointer flex items-center justify-center hover:bg-slate-200 transition-colors z-10"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>

          {formStatus === "success" ? (
            <div className="text-center py-10 h-full flex flex-col items-center justify-center">
              <div className="text-[#25d366] text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-extrabold text-[#1e2229] mb-2">Request Received!</h3>
              <p className="text-slate-500 font-medium">Our engineers will review your details and reach out to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-extrabold text-[#1e2229] mb-2">Get a Free Quote</h3>
              <p className="text-slate-500 mb-6 font-medium text-sm">Fill in details for a customized structural estimate within 24 hours.</p>

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
                    <label className="block text-xs font-bold text-[#1e2229] mb-1.5 uppercase tracking-wider" htmlFor={id}>{label}</label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base md:text-sm font-medium text-[#1e2229] outline-none transition-colors focus:border-[#ee0000] bg-slate-50"
                      placeholder={placeholder}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleFormChange}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-bold text-[#1e2229] mb-1.5 uppercase tracking-wider" htmlFor="shedType">Select Service</label>
                  <select
                    id="shedType"
                    name="shedType"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base md:text-sm font-medium text-[#1e2229] outline-none transition-colors focus:border-[#ee0000] bg-slate-50"
                    value={formData.shedType}
                    onChange={handleFormChange}
                  >
                    <option value="" disabled>Select a Shed Type...</option>
                    <optgroup label="Industrial Sheds">
                      <option value="Factory Shed">Factory Shed</option>
                      <option value="Garment Factory Shed">Garment Factory Shed</option>
                      <option value="Warehouse / Godown Shed">Warehouse / Godown Shed</option>
                    </optgroup>
                    <optgroup label="Agricultural Sheds">
                      <option value="Poultry Farm Shed">Poultry Farm Shed</option>
                      <option value="Goat Farm Shed">Goat Farm Shed</option>
                      <option value="Cow / Dairy Farm Shed">Cow / Dairy Farm Shed</option>
                    </optgroup>
                    <optgroup label="Sports Turf Sheds">
                      <option value="Badminton Court Shed">Badminton Court Shed</option>
                      <option value="Cricket Turf Shed">Cricket Turf Shed</option>
                    </optgroup>
                    <optgroup label="Home Roofing Sheds">
                      <option value="Terrace Roofing Shed">Terrace Roofing Shed</option>
                      <option value="Car Parking Shed">Car Parking Shed</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e2229] mb-1.5 uppercase tracking-wider" htmlFor="message">Message / Shed Size (sq.ft)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base md:text-sm font-medium text-[#1e2229] outline-none transition-colors focus:border-[#ee0000] bg-slate-50 resize-none"
                    placeholder="e.g. Need a 2400 sq.ft goat farm shed"
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </div>

                <button id="quotemodal-button-94" type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#ee0000] hover:bg-[#cc0000] text-white font-extrabold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-[0_8px_20px_rgba(238,0,0,0.25)] mt-2 disabled:opacity-70 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
