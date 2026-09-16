import React, { useState, useMemo } from "react";
import { MapPin, Maximize2 } from "lucide-react";
import { galleryItems } from "../data/gallery";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Lightbox } from "../components/common/Lightbox";

const categories = ["All Photos", "Nature", "Culture", "Family", "Adventure", "Beaches"];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All Photos") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 sm:pb-28">
      {/* Top Banner */}
      <div className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80"
            alt="Alleppey backwaters background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/10 rounded-full mb-3 border border-white/10">
            Visual Memories
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight">
            Travel Photo Gallery
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Inspiring sights captured across South India's hill stations, historical temples, and backwaters.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumb items={[{ label: "Gallery" }]} className="mb-8" />

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-subtle hover:shadow-card bg-slate-900 aspect-[4/3] sm:aspect-square cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-serif leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-brand-accent" />
                  {item.location}
                </p>
                <div className="absolute top-3 right-3 p-1.5 bg-black/40 rounded-full text-white/80">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setCurrentIndex(idx)}
      />
    </div>
  );
};
