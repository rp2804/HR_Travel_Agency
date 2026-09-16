import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Clock,
  MapPin,
  Check,
  X,
  Calendar,
  MessageCircle,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { packages } from "../data/packages";
import { siteConfig } from "../config/siteConfig";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { PackageCard } from "../components/cards/PackageCard";
import { formatCurrency } from "../utils/formatters";
import { getWhatsAppUrl, createPackageWhatsAppMessage } from "../utils/whatsapp";
import { useEnquiry } from "../hooks/useEnquiry";

export const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { openEnquiry } = useEnquiry();

  const packageItem = packages.find((p) => p.id === id);

  // Active expanded day in itinerary accordion
  const [openDay, setOpenDay] = useState<number | null>(1);

  if (!packageItem) {
    return <Navigate to="/packages" replace />;
  }

  const toggleDay = (dayNumber: number) => {
    setOpenDay(openDay === dayNumber ? null : dayNumber);
  };

  const whatsappMessage = createPackageWhatsAppMessage(packageItem.title, packageItem.price);
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  // Related packages (same category or destination, excluding self)
  const relatedPackages = packages
    .filter((p) => p.id !== packageItem.id && (p.category === packageItem.category || p.destinationSlug === packageItem.destinationSlug))
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 sm:pb-28">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumb
          items={[
            { label: "Packages", href: "/packages" },
            { label: packageItem.title },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Top Metadata Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {packageItem.badge && (
                <span className="px-3 py-0.5 text-xs font-bold uppercase tracking-wider bg-brand-accent text-white rounded-full">
                  {packageItem.badge}
                </span>
              )}
              <span className="px-3 py-0.5 text-xs font-semibold bg-slate-100 text-slate-700 rounded-full">
                {packageItem.category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                {packageItem.destination}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight">
              {packageItem.title}
            </h1>
          </div>

          {/* Quick Header Price summary */}
          <div className="flex items-baseline gap-2 shrink-0">
            <span className="text-xs uppercase text-slate-500">Starting from</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {formatCurrency(packageItem.price)}
            </span>
            <span className="text-xs text-slate-500">/ person</span>
          </div>
        </div>

        {/* Hero Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 rounded-2xl overflow-hidden shadow-card">
          <div className="md:col-span-2 aspect-[16/10] bg-slate-900">
            <img
              src={packageItem.image}
              alt={packageItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-3">
            {packageItem.gallery && packageItem.gallery.slice(1, 3).map((img, idx) => (
              <div key={idx} className="h-full overflow-hidden">
                <img
                  src={img}
                  alt={`${packageItem.title} preview ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Main Content on Left, Sticky Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Main Content Column (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick Trip Highlights Bar */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-subtle border border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-accent flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Duration</span>
                  <span className="font-bold text-slate-900">{packageItem.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-accent flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Best Season</span>
                  <span className="font-bold text-slate-900">{packageItem.bestTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Tour Type</span>
                  <span className="font-bold text-slate-900">100% Private Tour</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-3">
                Tour Overview
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {packageItem.overview}
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-4">
                Trip Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {packageItem.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day by Day Itinerary */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block">
                    Day-by-Day Journey
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                    Detailed Itinerary
                  </h2>
                </div>
                <span className="text-xs text-slate-500">
                  {packageItem.itinerary.length} Days Planned
                </span>
              </div>

              <div className="space-y-3.5">
                {packageItem.itinerary.map((day) => {
                  const isOpen = openDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className={`border rounded-xl transition-all overflow-hidden ${
                        isOpen ? "border-brand-accent/40 bg-orange-50/15" : "border-slate-200"
                      }`}
                    >
                      <button
                        onClick={() => toggleDay(day.day)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="px-2.5 py-1 bg-brand-navy text-white text-xs font-bold rounded-lg shrink-0">
                            Day {day.day}
                          </span>
                          <span className="font-serif font-bold text-sm sm:text-base text-slate-900 truncate">
                            {day.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-brand-accent" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-3">
                          <p>{day.description}</p>
                          {(day.meals || day.stay) && (
                            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-500 font-medium">
                              {day.meals && <span>🍽️ Meals: {day.meals}</span>}
                              {day.stay && <span>🏨 Stay: {day.stay}</span>}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-teal-100">
                <h3 className="text-lg font-bold font-serif text-teal-800 flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span>What is Included</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {packageItem.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-rose-100">
                <h3 className="text-lg font-bold font-serif text-rose-800 flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-rose-500" />
                  <span>What is Excluded</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {packageItem.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Package Specific FAQs */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-4">
                Frequently Asked About This Tour
              </h2>
              <div className="space-y-3 text-sm">
                <details className="border-b border-slate-100 pb-3">
                  <summary className="font-semibold text-slate-800 cursor-pointer hover:text-brand-accent">
                    Can we customize the hotel category or room type?
                  </summary>
                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Yes! We can upgrade your stay to 4-star / 5-star hill resorts, private pool villas, or select heritage homestays based on your preference.
                  </p>
                </details>
                <details className="border-b border-slate-100 pb-3">
                  <summary className="font-semibold text-slate-800 cursor-pointer hover:text-brand-accent">
                    What type of vehicle will be provided?
                  </summary>
                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    For 2-3 travellers, we assign an air-conditioned Sedan (Swift Dzire / Etios). For 4-6 travellers, an AC Toyota Innova / Ertiga is provided. For larger groups, 12 to 20-seater Tempo Travellers are available.
                  </p>
                </details>
                <details className="pb-1">
                  <summary className="font-semibold text-slate-800 cursor-pointer hover:text-brand-accent">
                    How do we proceed with booking confirmation?
                  </summary>
                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Click 'Enquire on WhatsApp' or submit the enquiry card. Our travel specialist will verify availability, send customized day-wise voucher details, and reserve your rooms with a small token deposit.
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* Sticky Enquiry Card on Right */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-floating border border-slate-100 sticky top-24 space-y-5">
              {/* Header Pricing */}
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Special Tour Offer
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {formatCurrency(packageItem.price)}
                  </span>
                  {packageItem.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatCurrency(packageItem.originalPrice)}
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-500">Per person on twin sharing basis</span>
              </div>

              {/* Inclusions summary pills */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Private AC Vehicle for all transfers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Verified 3/4-Star Hotels with Breakfast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Tolls, Parking, & Driver Allowances Incl.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Zero Hidden Charges Guarantee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() =>
                    openEnquiry({
                      packageTitle: packageItem.title,
                      destination: packageItem.destination,
                      price: packageItem.price,
                    })
                  }
                  className="w-full py-3.5 px-4 bg-brand-accent hover:bg-brand-accent-hover active:scale-95 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire Now (Free Quote)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Direct call banner */}
              <div className="bg-slate-50 rounded-xl p-3 text-center text-xs text-slate-600">
                <span>Questions? Call our travel desk:</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-bold text-brand-navy block mt-0.5 hover:text-brand-accent"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Packages Section */}
        {relatedPackages.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Similar Experiences
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  You Might Also Like
                </h2>
              </div>
              <Link
                to="/packages"
                className="text-sm font-semibold text-brand-accent hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageItem={pkg} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
