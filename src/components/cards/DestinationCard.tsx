import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Destination } from "../../types";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group relative block rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent"
    >
      {/* Background Image with subtle scale */}
      <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Multi-layer Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Top State Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">
          <MapPin className="w-3 h-3 text-brand-accent" />
          {destination.state}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-accent block mb-1">
              {destination.tag || "Must Visit"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif tracking-tight leading-snug">
              {destination.name}
            </h3>
          </div>

          {/* Action indicator arrow */}
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:bg-brand-accent group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mt-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
          {destination.shortDescription}
        </p>

        {/* Highlights Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
          {destination.bestFor.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white/90 backdrop-blur-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
