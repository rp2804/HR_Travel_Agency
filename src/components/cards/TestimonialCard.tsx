import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { Testimonial } from "../../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <article className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:shadow-card-hover">
      {/* Subtle quote watermark */}
      <Quote className="w-10 h-10 text-slate-100 dark:text-slate-800 absolute top-6 right-6 pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-amber-400 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm leading-relaxed italic relative z-10 line-clamp-5 min-h-[5.5rem] sm:min-h-[6rem]">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Traveler Info */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 min-w-0">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-accent/20 shrink-0"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 min-w-0">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate">
              {testimonial.name}
            </h4>
            <span title="Verified Traveler">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{testimonial.location}</p>
          <span className="block mt-0.5 text-[10px] sm:text-[11px] text-brand-accent font-medium truncate w-full">
            {testimonial.tripName}
          </span>
        </div>
      </div>
    </article>
  );
};
