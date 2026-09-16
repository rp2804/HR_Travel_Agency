import React from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Check, MessageCircle, ArrowRight } from "lucide-react";
import { Package } from "../../types";
import { formatCurrency } from "../../utils/formatters";
import { siteConfig } from "../../config/siteConfig";
import { getWhatsAppUrl, createPackageWhatsAppMessage } from "../../utils/whatsapp";

interface PackageCardProps {
  packageItem: Package;
  onEnquire?: (packageItem: Package) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ packageItem, onEnquire }) => {
  const whatsappMessage = createPackageWhatsAppMessage(packageItem.title, packageItem.price);
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, whatsappMessage);

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-100/80 transition-all duration-300 transform hover:-translate-y-1">
      {/* Thumbnail Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={packageItem.image}
          alt={packageItem.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Badge (Popular / Best Seller / Honeymoon) */}
        {packageItem.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase bg-brand-accent text-white rounded-full shadow-sm">
              {packageItem.badge}
            </span>
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 text-[11px] font-semibold bg-white/90 text-slate-800 rounded-full backdrop-blur-sm shadow-sm">
            {packageItem.category}
          </span>
        </div>

        {/* Duration Overlay at bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium z-10">
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            {packageItem.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            {packageItem.destination.split(",")[0]}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 group-hover:text-brand-accent transition-colors leading-snug">
            <Link to={`/packages/${packageItem.id}`}>
              {packageItem.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {packageItem.shortDescription}
          </p>

          {/* Highlights checklist */}
          <ul className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
            {packageItem.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Actions Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[11px] text-slate-400 font-medium block uppercase tracking-wider">
              Starting from
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                {formatCurrency(packageItem.price)}
              </span>
              {packageItem.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatCurrency(packageItem.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400">per person / all incl.</span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Direct WhatsApp button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#25D366] bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
              title="Chat on WhatsApp about this package"
              aria-label={`Chat on WhatsApp about ${packageItem.title}`}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            {/* If onEnquire is passed, can trigger modal or link to details */}
            {onEnquire ? (
              <button
                type="button"
                onClick={() => onEnquire(packageItem)}
                className="inline-flex items-center gap-1 px-3.5 py-2.5 bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                to={`/packages/${packageItem.id}`}
                className="inline-flex items-center gap-1 px-3.5 py-2.5 bg-brand-navy hover:bg-brand-navy-light text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
