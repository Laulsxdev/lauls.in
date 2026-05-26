"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Loader2, AlertCircle } from "lucide-react";

export default function DistributionQuote() {
  const benefits = [
    "Competitive mill-direct pricing",
    "Bulk order discounts available",
    "Flexible payment terms for regular buyers",
    "Dedicated account manager assigned",
    "Complete documentation & test certificates"
  ];

  // Form State
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [honey, setHoney] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot spam check
    if (honey) {
      setStatus("success");
      setStatusMessage("Your quote request has been submitted successfully. Our team will contact you within 2 hours.");
      return;
    }

    // Required fields check
    if (!name.trim() || !email.trim() || !phone.trim() || !category || !message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields (*).");
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setStatusMessage("Please enter a valid corporate email address.");
      return;
    }

    // Phone regex validation (minimum 10 digits, allowing optional +, spaces, hyphens)
    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
    if (!phoneRegex.test(phone.trim())) {
      setStatus("error");
      setStatusMessage("Please enter a valid contact phone number (at least 10 digits).");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          interest: category,
          message: `Quantity Required: ${quantity.trim() || "Not specified"}\nPhone: ${phone.trim()}\n\nAdditional Requirements:\n${message.trim()}`
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Your quote request has been submitted successfully. Our sales team will get back to you shortly.");
        // Reset form fields
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setCategory("");
        setQuantity("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="bg-white py-24 w-full border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-16">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Get in touch
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            Request a quote
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Ensure your major requirements are met from the right partner. Within 24 hours with unmatched pricing and availability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 rounded-2xl p-4 lg:p-8">
          
          {/* Left Dark Box - Why Request With Us */}
          <div className="lg:w-1/3 bg-[#0A1628] rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col justify-center border border-white/5">
            <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
              Why Request With Us
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Competitive mill-direct pricing
            </h3>
            <p className="text-white/60 text-sm font-light leading-relaxed mb-10">
              We source directly from primary mills and pass the savings on to you. No middlemen, no hidden charges.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-[#DCA54C] shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm font-light leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form Area */}
          <div className="lg:w-2/3 lg:pl-4 py-4">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-slate-100 rounded-2xl bg-slate-50/50 gap-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-500" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-[#0A1628] mb-2">Quote Request Submitted</h3>
                  <p className="text-gray-500 max-w-md leading-relaxed">{statusMessage}</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 border border-[#DCA54C] text-[#DCA54C] font-bold rounded-lg hover:bg-[#DCA54C]/5 transition-all text-sm"
                >
                  Request Another Quote
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot Spam Protection Field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2 relative">
                     <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Full name <span className="text-red-400">*</span></label>
                     <input
                       type="text"
                       required
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50"
                       placeholder="Your name"
                     />
                   </div>
                   <div className="space-y-2 relative">
                     <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Company</label>
                     <input
                       type="text"
                       value={company}
                       onChange={(e) => setCompany(e.target.value)}
                       className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50"
                       placeholder="Company name"
                     />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2 relative">
                     <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Email <span className="text-red-400">*</span></label>
                     <input
                       type="email"
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50"
                       placeholder="name@company.com"
                     />
                   </div>
                   <div className="space-y-2 relative">
                     <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Phone <span className="text-red-400">*</span></label>
                     <input
                       type="tel"
                       required
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                       className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50"
                       placeholder="+91 00000 00000"
                     />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Product category <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <select
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50 appearance-none text-gray-700"
                      >
                        <option value="">Select a product category</option>
                        <option value="Ferro Alloys">Ferro Alloys</option>
                        <option value="Steel Rounds">Steel Rounds</option>
                        <option value="Wire Rods">Wire Rods</option>
                        <option value="Precision Tubes">Precision Tubes</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Quantity required</label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50"
                      placeholder="e.g. 50 MT"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative pt-2">
                  <label className="text-xs font-bold text-gray-800 tracking-wide font-display">Additional requirements <span className="text-red-400">*</span></label>
                   <textarea
                     rows={4}
                     required
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     className="w-full p-4 border border-gray-200 rounded-lg focus:border-[#DCA54C] outline-none transition-colors text-sm bg-gray-50/50 resize-none text-gray-700"
                     placeholder="Specify grade, size, finish, or any special requirements..."
                   ></textarea>
                </div>

                {status === "error" && statusMessage && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
                    <AlertCircle size={18} className="shrink-0" />
                    {statusMessage}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-white border border-[#E5E7EB] hover:border-[#DCA54C] text-[#0A1628] font-bold rounded-lg transition-all text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting Quote Request...
                      </>
                    ) : (
                      "Submit enquiry →"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
