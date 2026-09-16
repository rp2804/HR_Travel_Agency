import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

interface HeroProps {
  onPlanTrip: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanTrip }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-20 pb-16">
      {/* Background Image with subtle zoom and optimized priority */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=2000&q=85"
          alt="Scenic Nilgiri Hills and tea plantation at sunrise"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          // @ts-expect-error fetchpriority is a modern standard attribute
          fetchpriority="high"
          loading="eager"
        />
        {/* Multistage gradient overlay for high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/45" />
        <div className="absolute inset-0 bg-brand-navy/35 mix-blend-multiply" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-accent animate-spin-slow" />
          <span>{siteConfig.agencyName} • Travel Handcrafted with Care</span>
        </div>

        {/* Tagline / Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight max-w-4xl leading-[1.12] text-white">
          {siteConfig.tagline}
        </h1>

        {/* Supporting text */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-normal">
          {siteConfig.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <button
            onClick={onPlanTrip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all cursor-pointer"
          >
            <span>Plan Your Trip</span>
          </button>
        </div>

        {/* Trust Line */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-accent" />
            Trusted travel assistance
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-accent" />
            Custom itineraries
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-brand-accent" />
            Local South India expertise
          </span>
        </div>
      </div>
    </section>
  );
};
