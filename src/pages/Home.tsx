import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "../components/sections/Hero";
import { QuickSearchBar } from "../components/forms/QuickSearchBar";
import { SectionHeading } from "../components/common/SectionHeading";
import { DestinationCard } from "../components/cards/DestinationCard";
import { PackageCard } from "../components/cards/PackageCard";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { StorySection } from "../components/sections/StorySection";
import { CategoryChips } from "../components/sections/CategoryChips";
import { HowItWorks } from "../components/sections/HowItWorks";
import { TestimonialCard } from "../components/cards/TestimonialCard";
import { FAQAccordion } from "../components/sections/FAQAccordion";
import { CTASection } from "../components/sections/CTASection";
import { Lightbox } from "../components/common/Lightbox";
import { destinations } from "../data/destinations";
import { packages } from "../data/packages";
import { testimonials } from "../data/testimonials";
import { galleryItems } from "../data/gallery";
import { useEnquiry } from "../hooks/useEnquiry";

export const Home: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  // Lightbox state for homepage gallery
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Quick enquiry bar submission
  const handleQuickSearch = (criteria: {
    destination: string;
    travelDate: string;
    travellers: string;
    travelType: string;
  }) => {
    openEnquiry({
      destination: criteria.destination,
      travelDate: criteria.travelDate,
      travellers: criteria.travellers,
      travelType: criteria.travelType,
    });
  };

  // 8 demo destinations requested for the homepage grid
  const homeDestinations = destinations.slice(0, 8);

  // Featured tour packages for homepage
  const featuredPackages = packages.filter((p) => p.featured).slice(0, 4);

  // Editorial gallery preview (6 images)
  const homeGallery = galleryItems.slice(0, 6);

  const openLightbox = (index: number) => {
    setActiveGalleryIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO */}
      <Hero onPlanTrip={() => openEnquiry()} />

      {/* SECTION 2: QUICK ENQUIRY BAR */}
      <QuickSearchBar onSearch={handleQuickSearch} />

      {/* SECTION 3: POPULAR DESTINATIONS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="South India Destinations"
          title="Explore South India"
          subtitle="Places worth discovering — from mist-draped hill stations to timeless coastal shrines."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-brand-navy dark:border-brand-accent text-brand-navy dark:text-white hover:bg-brand-navy dark:hover:bg-brand-accent hover:text-white font-semibold text-sm transition-all cursor-pointer"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 4: FEATURED TOUR PACKAGES */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent-light dark:bg-slate-800 dark:border-slate-700 rounded-full mb-3 border border-orange-200">
                Handcrafted Itineraries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 dark:text-white">
                Popular Tour Packages
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                Choose a trip that fits your style with verified hotels and private transport.
              </p>
            </div>
            <Link
              to="/packages"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors group cursor-pointer"
            >
              <span>Explore All Packages</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageItem={pkg}
                onEnquire={(p) =>
                  openEnquiry({
                    packageTitle: p.title,
                    destination: p.destination,
                    price: p.price,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY TRAVEL WITH US */}
      <WhyUsSection />

      {/* SECTION 6: EXPERIENCE / STORY SECTION */}
      <StorySection />

      {/* SECTION 7: PACKAGE CATEGORIES */}
      <CategoryChips />

      {/* SECTION 8: HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 9: TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-brand-sand dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Traveler Reviews"
            title="Stories From Happy Travelers"
            subtitle="Genuine experiences shared by families, honeymooners, and pilgrim groups across India."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
            * Sample traveler reviews reflecting authentic agency itinerary feedback.
          </div>
        </div>
      </section>

      {/* SECTION 10: TRAVEL GALLERY */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent-light dark:bg-slate-800 dark:border-slate-700 rounded-full mb-3 border border-orange-200">
                Visual Stories
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 dark:text-white">
                Travel Moments Captured
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                A glimpse of serene tea estates, sacred stone carvings, and sun-kissed beaches.
              </p>
            </div>
            <Link
              to="/gallery"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors group cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Editorial gallery grid with varying sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {homeGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-subtle hover:shadow-card transition-all ${
                  index === 0 || index === 3 ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <h4 className="text-sm sm:text-base font-bold font-serif">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <FAQAccordion limit={6} />

      {/* SECTION 12: FINAL CTA */}
      <CTASection onPlanTrip={() => openEnquiry()} />

      {/* Lightbox Modal */}
      <Lightbox
        items={homeGallery}
        currentIndex={activeGalleryIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveGalleryIndex(idx)}
      />
    </div>
  );
};
