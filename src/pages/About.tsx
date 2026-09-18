import React from "react";
import { Shield, Compass, Users } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { CTASection } from "../components/sections/CTASection";
import { useEnquiry } from "../hooks/useEnquiry";

export const About: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="pt-24 pb-0">
      {/* Hero Banner */}
      <div className="bg-brand-navy text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1600&q=80"
            alt="Wayanad mist background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/10 rounded-full mb-3 border border-white/10">
            About Our Agency
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight">
            Crafting Unforgettable South India Memories
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Founded with a passion for soulful travel, native hospitality, and transparent holiday planning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumb items={[{ label: "About Us" }]} className="mb-8" />

        {/* Section 1: Our Story */}
        <section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-wider">
                Our Roots
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 dark:text-white leading-tight">
                Born From a Deep Love for South India
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Established in {siteConfig.establishedYear}, {siteConfig.agencyName} was born out of a realization: too many travelers visiting Tamil Nadu, Kerala, and Karnataka were getting trapped in rushed group tours, rigid bus timetables, and unexpected hidden driver costs.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                We set out to build something different — a boutique travel agency rooted in local culture where every trip is private, paced for genuine relaxation, and handled by knowledgeable drivers who treat travellers like honored guests.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80"
                alt="Nilgiris hill station view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: What We Do */}
        <section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold text-brand-accent tracking-wider">
              Core Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 mt-1">
              What We Do Best
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              From peaceful hill retreats to sacred pilgrimage corridors, we coordinate every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-accent flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-2">
                Custom Leisure Itineraries
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Handcrafted couple getaways and family vacations across Ooty, Kodaikanal, Munnar, Coorg, and Wayanad with verified hotel stays.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-2">
                Spiritual Temple Trails
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Special darshan assistance, sacred theertham rituals, and convenient logistics for Madurai, Rameswaram, Thanjavur, and Srirangam.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white mb-2">
                Private Fleet & Driver Network
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Clean, sanitized private vehicles with vetted, polite chauffeurs experienced in ghat roads and regional sightseeing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Travel Philosophy */}
        <section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="bg-brand-sand dark:bg-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-700">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-wider">
                Our Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
                Our Travel Philosophy
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                "A holiday should replenish you, not exhaust you. We prioritize quality over quantity: fewer rushed stops, more time sipping fresh estate coffee, walking in misty pine woods, and soaking in sacred temple quietude."
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <CTASection onPlanTrip={() => openEnquiry()} />
    </div>
  );
};
