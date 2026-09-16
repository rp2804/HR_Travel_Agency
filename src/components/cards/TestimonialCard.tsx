import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="bg-white rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-card-hover">
      {/* Subtle quote watermark */}
      <Quote className="w-10 h-10 text-slate-100 absolute top-6 right-6 pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative z-10">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Traveler Info */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-accent/20 shrink-0"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="font-bold text-slate-900 text-sm truncate">
              {testimonial.name}
            </h4>
            <span title="Verified Traveler">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            </span>
          </div>
          <p className="text-xs text-slate-500 truncate">{testimonial.location}</p>
          <span className="inline-block mt-0.5 text-[11px] text-brand-accent font-medium truncate">
            {testimonial.tripName}
          </span>
        </div>
      </div>
    </article>
  );
};
