import React from "react";
import { MessageCircle, ArrowRight, Sparkles, Phone } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { getWhatsAppUrl } from "../../utils/whatsapp";

interface CTASectionProps {
  onPlanTrip: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onPlanTrip }) => {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    `Hello ${siteConfig.agencyName}! I am ready to plan my trip. Please connect me with a holiday specialist.`
  );

  return (
    <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden text-white">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1800&q=80"
          alt="Scenic Munnar tea hills"
          className="w-full h-full object-cover object-center opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-dark/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-accent text-xs font-semibold tracking-wider uppercase mb-5 border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Adventure</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-tight leading-tight">
          Ready to Plan Your Next Journey?
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          Tell us where you want to go, and we'll help you plan the rest. Customized routes, transparent prices, and warm hospitality.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onPlanTrip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover active:scale-95 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-semibold text-base rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Direct Phone Call */}
        <div className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
          <span>Prefer a quick phone call?</span>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="text-white font-semibold hover:text-brand-accent transition-colors flex items-center gap-1 underline underline-offset-4"
          >
            <Phone className="w-3.5 h-3.5 text-brand-accent" />
            <span>{siteConfig.contact.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
