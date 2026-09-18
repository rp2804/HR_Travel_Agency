import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ContactForm } from "../components/forms/ContactForm";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const Contact: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    `Hello ${siteConfig.agencyName}, I would like to get in touch regarding a tour enquiry!`
  );

  return (
    <div className="pt-24 pb-16 sm:pb-20">
      {/* Top Banner */}
      <div className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Beach background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/10 rounded-full mb-3 border border-white/10">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight">
            Contact Our Travel Planners
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            We are here to help design your dream holiday. Reach out via WhatsApp, phone, email, or drop by our office.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Contacts & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-brand-accent tracking-wider">
                  Direct Lines
                </span>
                <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
                  Let's Connect
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Call or message us anytime for package inquiries, custom quotes, or group bookings.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-green-50 border border-green-100">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-green-900 block">WhatsApp Travel Desk</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-green-700 hover:underline block"
                    >
                      {siteConfig.contact.whatsappFormatted}
                    </a>
                    <span className="text-[11px] text-green-800">Instant quotes & itinerary sharing</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-900 block">Phone Support</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-semibold text-brand-navy hover:text-brand-accent block"
                    >
                      {siteConfig.contact.phoneFormatted}
                    </a>
                    {siteConfig.contact.secondaryPhone && (
                      <a
                        href={`tel:${siteConfig.contact.secondaryPhone}`}
                        className="text-xs text-slate-500 block hover:text-brand-accent"
                      >
                        Alt: {siteConfig.contact.secondaryPhone}
                      </a>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-brand-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-900 block">Email Enquiries</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm font-medium text-slate-800 hover:text-brand-accent block break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-900 block">Registered Office</span>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.locality},{" "}
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-900 block">Office Hours</span>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {siteConfig.contact.officeHours}
                    </p>
                    <span className="text-[11px] text-teal-700 font-medium">WhatsApp active 7 days a week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <ContactForm />

            {/* Embedded Google Maps Placeholder / Iframe */}
            <div className="bg-white rounded-2xl p-4 shadow-card border border-slate-100">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>Office Location</span>
                </span>
                <a
                  href={siteConfig.maps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-accent hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>

              <div className="w-full h-72 rounded-xl overflow-hidden bg-slate-100 relative">
                <iframe
                  title="Agency Location Map"
                  src={siteConfig.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
