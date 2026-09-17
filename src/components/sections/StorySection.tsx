import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export const StorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="relative pb-8">
            {/* Main high-res lifestyle image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
                alt="Travelers taking in scenic mountain views in South India"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-floating border border-slate-100 flex items-center gap-3.5 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-accent flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Established in {siteConfig.establishedYear}
                </p>
                <p className="text-sm font-bold text-slate-900 font-serif">
                  Hundreds of Happy Families
                </p>
              </div>
            </div>

            {/* Small decorative corner backdrop */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent/10 rounded-3xl -z-10" />
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <div className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent-light rounded-full border border-orange-200">
              Our Story & Passion
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">
              More Than a Trip
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From weekend escapes to carefully planned family holidays, we help travellers explore South India with comfort, flexibility and local insight.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We grew up exploring every winding hairpin bend of the Nilgiris, every spice aroma of the Wayanad hills, and the sacred temple corridors of Tamil Nadu. We don't believe in rushed tourist buses or rigid schedules — our holidays are paced for real memories, quiet sunrise walks, and authentic regional feasts.
            </p>

            {/* Key trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Private & clean vehicles</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Handpicked resort stays</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>No hidden driver fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Instant WhatsApp support</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold shadow-md transition-all group cursor-pointer"
              >
                <span>Learn About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
