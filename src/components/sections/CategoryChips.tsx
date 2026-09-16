import React from "react";
import { Link } from "react-router-dom";
import { Users, Heart, Compass, Sparkles, Mountain, Briefcase, UsersRound, ArrowRight } from "lucide-react";
import { tourCategories } from "../../data/categories";

const categoryIconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Mountain: <Mountain className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  UsersRound: <UsersRound className="w-5 h-5" />,
};

export const CategoryChips: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-brand-sand border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-2 block">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Explore by Travel Style
            </h2>
          </div>
          <Link
            to="/packages"
            className="mt-3 md:mt-0 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Grid / Horizontal Scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {tourCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/packages?category=${encodeURIComponent(cat.name)}`}
              className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-brand-accent/40 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-accent group-hover:bg-brand-accent group-hover:text-white flex items-center justify-center transition-colors mb-3">
                {categoryIconMap[cat.icon] || <Compass className="w-5 h-5" />}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-accent transition-colors font-serif">
                {cat.name}
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 hidden sm:block">
                View trips
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
