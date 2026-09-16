import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, RefreshCw } from "lucide-react";
import { packages } from "../data/packages";
import { destinations } from "../data/destinations";
import { tourCategories } from "../data/categories";
import { PackageCard } from "../components/cards/PackageCard";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { formatCurrency } from "../utils/formatters";
import { useEnquiry } from "../hooks/useEnquiry";

export const Packages: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openEnquiry } = useEnquiry();

  // Filter state
  const [search, setSearch] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [maxBudget, setMaxBudget] = useState(60000);
  const [sortBy, setSortBy] = useState<"recommended" | "price-asc" | "price-desc">("recommended");

  // Mobile filter drawer state
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category param from URL if present
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setCategoryFilter(cat);
    }
  }, [searchParams]);

  // Reset filters
  const handleReset = () => {
    setSearch("");
    setDestinationFilter("all");
    setCategoryFilter("all");
    setDurationFilter("all");
    setMaxBudget(60000);
    setSortBy("recommended");
    setSearchParams({});
  };

  // Filter and sort logic
  const filteredPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        // Search query
        const matchesSearch =
          pkg.title.toLowerCase().includes(search.toLowerCase()) ||
          pkg.destination.toLowerCase().includes(search.toLowerCase()) ||
          pkg.shortDescription.toLowerCase().includes(search.toLowerCase());

        // Destination
        const matchesDestination =
          destinationFilter === "all" ||
          pkg.destinationSlug === destinationFilter ||
          pkg.destination.toLowerCase().includes(destinationFilter.toLowerCase());

        // Category
        const matchesCategory =
          categoryFilter === "all" ||
          pkg.category.toLowerCase() === categoryFilter.toLowerCase();

        // Duration filter
        let matchesDuration = true;
        if (durationFilter === "short") matchesDuration = pkg.durationDays <= 3;
        else if (durationFilter === "medium") matchesDuration = pkg.durationDays === 4 || pkg.durationDays === 5;
        else if (durationFilter === "long") matchesDuration = pkg.durationDays >= 6;

        // Budget
        const matchesBudget = pkg.price <= maxBudget;

        return matchesSearch && matchesDestination && matchesCategory && matchesDuration && matchesBudget;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        // Default recommended: featured first, then price
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [search, destinationFilter, categoryFilter, durationFilter, maxBudget, sortBy]);

  return (
    <div className="pt-24 pb-20 sm:pb-28">
      {/* Top Banner */}
      <div className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80"
            alt="Coorg tea background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/10 rounded-full mb-3 border border-white/10">
            Transparent Holidays
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight">
            Find Your Perfect Trip
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Choose from all-inclusive South India packages featuring private vehicles, handpicked stays, and local guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumb items={[{ label: "Tour Packages" }]} className="mb-6" />

        {/* Top Control Bar (Search, Active Count, Sort, Mobile Filter Toggle) */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search package, destination, or duration..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-accent" />
              <span>Filters</span>
            </button>

            {/* Sort dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main 2-Column Catalogue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-bold font-serif text-slate-900 text-lg flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-brand-accent" />
                  <span>Filter Trips</span>
                </h3>
                <button
                  onClick={handleReset}
                  className="text-xs text-brand-accent hover:underline font-medium flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Destination Filter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Destination
                </label>
                <select
                  value={destinationFilter}
                  onChange={(e) => setDestinationFilter(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 cursor-pointer"
                >
                  <option value="all">All Destinations</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.slug}>
                      {d.name} ({d.state})
                    </option>
                  ))}
                </select>
              </div>

              {/* Travel Type / Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Travel Style
                </label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-brand-accent">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={categoryFilter === "all"}
                      onChange={() => setCategoryFilter("all")}
                      className="text-brand-accent focus:ring-brand-accent cursor-pointer"
                    />
                    <span>All Categories</span>
                  </label>
                  {tourCategories.map((c) => (
                    <label
                      key={c.id}
                      className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-brand-accent"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={c.name}
                        checked={categoryFilter.toLowerCase() === c.name.toLowerCase()}
                        onChange={() => setCategoryFilter(c.name)}
                        className="text-brand-accent focus:ring-brand-accent cursor-pointer"
                      />
                      <span>{c.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  Duration
                </label>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-brand-accent">
                    <input
                      type="radio"
                      name="duration"
                      value="all"
                      checked={durationFilter === "all"}
                      onChange={() => setDurationFilter("all")}
                      className="text-brand-accent cursor-pointer"
                    />
                    <span>Any Duration</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-brand-accent">
                    <input
                      type="radio"
                      name="duration"
                      value="short"
                      checked={durationFilter === "short"}
                      onChange={() => setDurationFilter("short")}
                      className="text-brand-accent cursor-pointer"
                    />
                    <span>2 - 3 Days (Weekend)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-brand-accent">
                    <input
                      type="radio"
                      name="duration"
                      value="medium"
                      checked={durationFilter === "medium"}
                      onChange={() => setDurationFilter("medium")}
                      className="text-brand-accent cursor-pointer"
                    />
                    <span>4 - 5 Days (Classic)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-brand-accent">
                    <input
                      type="radio"
                      name="duration"
                      value="long"
                      checked={durationFilter === "long"}
                      onChange={() => setDurationFilter("long")}
                      className="text-brand-accent cursor-pointer"
                    />
                    <span>6+ Days (Extended)</span>
                  </label>
                </div>
              </div>

              {/* Budget Range Slider */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Max Budget
                  </label>
                  <span className="text-xs font-bold text-brand-navy">
                    {formatCurrency(maxBudget)}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={60000}
                  step={2000}
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(Number(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>₹10,000</span>
                  <span>₹60,000+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Packages Grid Column */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Showing {filteredPackages.length} tour packages</span>
              {(categoryFilter !== "all" || destinationFilter !== "all" || search) && (
                <button
                  onClick={handleReset}
                  className="text-brand-accent hover:underline cursor-pointer"
                >
                  Clear active filters
                </button>
              )}
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
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
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-card">
                <p className="text-base font-bold font-serif text-slate-800">
                  No packages match your specific filters
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                  We specialize in crafting fully custom South India itineraries. Let us build this exact trip for you!
                </p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={() => openEnquiry()}
                    className="px-4 py-2 bg-brand-accent text-white text-xs font-semibold rounded-xl shadow-md cursor-pointer"
                  >
                    Request Custom Quote
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom-sheet / Filter Modal */}
      {mobileFilterOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4"
          onClick={() => setMobileFilterOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <h3 className="font-bold font-serif text-slate-900 text-lg">
                Filter Packages
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile filter controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Destination
                </label>
                <select
                  value={destinationFilter}
                  onChange={(e) => setDestinationFilter(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs cursor-pointer"
                >
                  <option value="all">All Destinations</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.slug}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Travel Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  {tourCategories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Max Budget: {formatCurrency(maxBudget)}
                </label>
                <input
                  type="range"
                  min={10000}
                  max={60000}
                  step={2000}
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(Number(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-3 bg-brand-accent text-white text-xs font-semibold rounded-xl shadow-md cursor-pointer"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
