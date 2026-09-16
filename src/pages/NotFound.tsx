import React from "react";
import { Link } from "react-router-dom";
import { Compass, Home, ArrowRight } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 text-center shadow-card border border-slate-100 space-y-6">
        <div className="w-20 h-20 bg-orange-50 text-brand-accent rounded-full flex items-center justify-center mx-auto">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-extrabold text-brand-navy font-serif">
            404
          </span>
          <h1 className="text-2xl font-bold font-serif text-slate-900 mt-2">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            The trail you are looking for has moved or does not exist. Let's guide you back to familiar sights.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
          >
            <span>Explore Trips</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
