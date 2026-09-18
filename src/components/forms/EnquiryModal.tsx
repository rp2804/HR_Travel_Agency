import React, { useState, useEffect } from "react";
import { X, CheckCircle2, MessageCircle, Phone, Mail, Users, MapPin } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { destinations } from "../../data/destinations";
import { getWhatsAppUrl, createFormEnquiryWhatsAppMessage } from "../../utils/whatsapp";
import { EnquiryFormData } from "../../types";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialPackageTitle?: string;
  packagePrice?: number;
  initialTravelDate?: string;
  initialTravellers?: string;
  initialTravelType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialDestination = "",
  initialPackageTitle = "",
  packagePrice,
  initialTravelDate = "",
  initialTravellers = "",
  initialTravelType = "",
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    destination: initialDestination || (initialPackageTitle ? initialPackageTitle : ""),
    travelDate: initialTravelDate,
    travellers: initialTravellers || "2 Adults (Couple)",
    travelType: initialTravelType || "Family Holiday",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        destination: initialDestination || initialPackageTitle || prev.destination,
        travelDate: initialTravelDate || prev.travelDate,
        travellers: initialTravellers || prev.travellers,
        travelType: initialTravelType || prev.travelType,
      }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialDestination, initialPackageTitle, initialTravelDate, initialTravellers, initialTravelType, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else {
      const digitsOnly = formData.phone.replace(/[^\d]/g, "");
      // Accept 10 digits (Indian mobile) or 12 digits (with 91 country code)
      if (digitsOnly.length < 10) {
        errs.phone = "Enter a valid phone number";
      } else if (digitsOnly.length === 12 && !digitsOnly.startsWith("91")) {
        errs.phone = "Enter a valid Indian phone number";
      } else if (digitsOnly.length > 12) {
        errs.phone = "Phone number is too long";
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const whatsappMessage = createFormEnquiryWhatsAppMessage({
    ...formData,
    message: initialPackageTitle
      ? `Package Interest: ${initialPackageTitle}${packagePrice ? ` (₹${packagePrice.toLocaleString('en-IN')})` : ''}\n${formData.message}`
      : formData.message,
  });

  const whatsappLink = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 my-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="bg-brand-navy dark:bg-slate-800 px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-brand-accent">
              {siteConfig.agencyName} • Trip Planner
            </span>
            <h2 id="enquiry-modal-title" className="text-xl font-bold font-serif mt-0.5">
              {initialPackageTitle ? `Enquire: ${initialPackageTitle}` : "Plan Your Dream Journey"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 dark:bg-slate-900">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Share your details below and we'll connect with you on WhatsApp to craft your personalized itinerary.
              </p>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sundaram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 ${
                      errors.name ? "border-red-400 focus:ring-red-200" : "border-slate-200 dark:border-slate-600 focus:ring-brand-accent/30 focus:border-brand-accent"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98401 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 ${
                      errors.phone ? "border-red-400 focus:ring-red-200" : "border-slate-200 dark:border-slate-600 focus:ring-brand-accent/30 focus:border-brand-accent"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Destination
                  </label>
                  <div className="relative">
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent appearance-none pr-8 cursor-pointer"
                    >
                      <option value="">Choose or explore any...</option>
                      {destinations.map((dest) => (
                        <option key={dest.id} value={`${dest.name} (${dest.state})`}>
                          {dest.name} ({dest.state})
                        </option>
                      ))}
                      <option value="Custom Multi-Destination Circuit">Multi-city South India Circuit</option>
                      <option value="International Holiday (Bali/Dubai)">International Holiday</option>
                    </select>
                    <MapPin className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Travel Date & Travellers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Approx. Travel Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Travellers
                  </label>
                  <div className="relative">
                    <select
                      value={formData.travellers}
                      onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent appearance-none pr-8 cursor-pointer"
                    >
                      <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                      <option value="Family (2 Adults + 1 Child)">Family (2 Adults + 1 Child)</option>
                      <option value="Family (2 Adults + 2 Children)">Family (2 Adults + 2 Children)</option>
                      <option value="Small Group (4-6 Travellers)">Small Group (4-6 Travellers)</option>
                      <option value="Large Group (8+ Travellers)">Large Group (8+ Travellers)</option>
                      <option value="Solo Traveler">Solo Traveler</option>
                    </select>
                    <Users className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Special Requests / Hotel Preference
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Prefer tea estate resort, senior-citizen friendly vehicle, vegetarian food..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-sm text-slate-800 dark:text-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base group cursor-pointer"
              >
                <span>Continue to WhatsApp</span>
                <MessageCircle className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400 -mt-1">
                Your details will be sent via WhatsApp for instant assistance
              </p>
            </form>
          ) : (
            /* Confirmation & WhatsApp Deep-link Screen */
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif">
                  Ready to Connect, {formData.name.split(" ")[0]}!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-sm mx-auto">
                  Your travel details are ready. Click below to open WhatsApp and chat directly with our travel planner for instant quotes and personalized recommendations.
                </p>
              </div>

              {/* WhatsApp Action button */}
              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl shadow-lg transition-all text-base hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366]" />
                  <span>Continue on WhatsApp</span>
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  Opens WhatsApp with your travel details pre-filled.
                </p>
              </div>

              {/* Alternative contact options */}
              <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-4 grid grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-navy dark:text-brand-accent" />
                  <span>Call {siteConfig.contact.phoneFormatted}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Tour%20Enquiry%20from%20${encodeURIComponent(formData.name)}`}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-accent" />
                  <span>Send Email</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 underline pt-2 block mx-auto cursor-pointer"
              >
                Modify details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
