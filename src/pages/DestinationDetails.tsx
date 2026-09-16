import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Calendar, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { destinations } from "../data/destinations";
import { packages } from "../data/packages";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { PackageCard } from "../components/cards/PackageCard";
import { useEnquiry } from "../hooks/useEnquiry";
import { siteConfig } from "../../src/config/siteConfig";
import { getWhatsAppUrl, createDestinationWhatsAppMessage } from "../utils/whatsapp";

export const DestinationDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openEnquiry } = useEnquiry();

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  // Linked packages matching this destination
  const destinationPackages = packages.filter(
    (p) => p.destinationSlug === destination.slug || p.destination.toLowerCase().includes(destination.name.toLowerCase())
  );

  const whatsappMessage = createDestinationWhatsAppMessage(destination.name);
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  return (
    <div className="pt-20 pb-20 sm:pb-28">
      {/* Hero Banner with large image */}
      <div className="relative h-[55vh] sm:h-[65vh] w-full overflow-hidden bg-slate-950 flex items-end">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              {destination.state}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent text-white">
              <Calendar className="w-3.5 h-3.5" />
              Best: {destination.bestTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight">
            {destination.name}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            {destination.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openEnquiry({ destination: destination.name })}
              className="px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Plan a Trip to {destination.name}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl shadow-lg transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumb
          items={[
            { label: "Destinations", href: "/destinations" },
            { label: destination.name },
          ]}
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Left 2 Columns: Overview, Highlights, Things To Do, Gallery */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                About {destination.name}
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {destination.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Ideal For Travellers Seeking
                </h3>
                <div className="flex flex-wrap gap-2">
                  {destination.bestFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-orange-50 text-brand-accent border border-orange-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                Key Travel Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Sparkles className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Things To Do */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
              <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                Recommended Experiences & Things To Do
              </h2>
              <ul className="space-y-3">
                {destination.thingsToDo.map((thing, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{thing}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Destination Gallery */}
            {destination.gallery && destination.gallery.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-100">
                <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">
                  Photo Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {destination.gallery.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm">
                      <img
                        src={img}
                        alt={`${destination.name} photo ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Quick Info Box & Sticky CTA */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 sticky top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Plan With Experts
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-1">
                Customize Your {destination.name} Holiday
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Whether you prefer quiet tea homestays, luxury 5-star mountain resorts, or special temple darshan passes, we customize everything to your budget.
              </p>

              <div className="mt-5 space-y-3 text-xs text-slate-700 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Region:</span>
                  <span className="font-semibold">{destination.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Best Season:</span>
                  <span className="font-semibold">{destination.bestTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Private Cab:</span>
                  <span className="font-semibold text-teal-700">Available from any city</span>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  onClick={() => openEnquiry({ destination: destination.name })}
                  className="w-full py-3 px-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Plan Trip to {destination.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Packages for this destination */}
        {destinationPackages.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Ready Itineraries
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  Featured Packages for {destination.name}
                </h2>
              </div>
              <Link
                to="/packages"
                className="text-sm font-semibold text-brand-accent hover:underline flex items-center gap-1"
              >
                <span>All Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationPackages.map((pkg) => (
                <PackageCard key={pkg.id} packageItem={pkg} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
