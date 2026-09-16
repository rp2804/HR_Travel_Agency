import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Phone, Mail } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { getWhatsAppUrl, createFormEnquiryWhatsAppMessage } from "../../utils/whatsapp";
import { EnquiryFormData } from "../../types";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    destination: "",
    travelDate: "",
    travellers: "2 Adults",
    travelType: "Family Holiday",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.replace(/[^\d]/g, "").length < 10) {
      errs.phone = "Enter a valid 10-digit number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const whatsappMessage = createFormEnquiryWhatsAppMessage(formData);
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 text-center space-y-5 animate-fadeIn">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold font-serif text-slate-900">
          Message Prepared Successfully!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          Thank you, <strong className="text-slate-800">{formData.name}</strong>. To get instant quotation updates, please continue directly to our WhatsApp chat:
        </p>

        <div className="pt-2 max-w-sm mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all text-base"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366]" />
            <span>Continue on WhatsApp</span>
          </a>
        </div>

        <div className="border-t border-slate-100 pt-5 mt-5 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-1.5 hover:text-brand-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-navy" />
            <span>Call {siteConfig.contact.phoneFormatted}</span>
          </a>
          <span className="text-slate-300">•</span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:text-brand-accent transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-accent" />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs text-slate-400 hover:text-slate-600 underline pt-3 block mx-auto"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 space-y-4"
    >
      <div className="border-b border-slate-100 pb-4 mb-2">
        <h3 className="text-xl font-bold font-serif text-slate-900">
          Send Us an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Tell us about your upcoming vacation plans. We reply within 30 minutes during business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Anand Kumar"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-brand-accent/30 focus:border-brand-accent"
            }`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98401 23456"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-brand-accent/30 focus:border-brand-accent"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="anand@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Desired Destination
          </label>
          <input
            type="text"
            placeholder="e.g. Ooty, Munnar, Kodaikanal, etc."
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Approx. Travel Date
          </label>
          <input
            type="date"
            value={formData.travelDate}
            onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Number of Travellers
          </label>
          <select
            value={formData.travellers}
            onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
          >
            <option value="1 Adult (Solo)">1 Adult (Solo)</option>
            <option value="2 Adults (Couple)">2 Adults (Couple)</option>
            <option value="Family with 1-2 kids">Family with 1-2 kids</option>
            <option value="Group of 4-6">Group of 4-6</option>
            <option value="Large Group 8+">Large Group 8+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Notes & Requirements
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about vehicle preference (Innova/Sedan), hotel category (3-star / 4-star / luxury resort), or specific spots you want to cover..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-6 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
      >
        <span>Submit Travel Enquiry</span>
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};
