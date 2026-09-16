import React, { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import { destinations } from "../data/destinations";
import { DestinationCard } from "../components/cards/DestinationCard";
import { Breadcrumb } from "../components/common/Breadcrumb";

const stateFilters = [
  "All Destinations",
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "International",
];

export const Destinations: React.FC = () => {
  const [selectedState, setSelectedState] = useState("All Destinations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesState =
        selectedState === "All Destinations" || dest.state.toLowerCase() === selectedState.toLowerCase();

      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.bestFor.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesState && matchesSearch;
    });
  }, [selectedState, searchQuery]);

  return (
    <div className="pt-24 pb-20 sm:pb-28">
      {/* Top Banner */}
      <div className="bg-brand-navy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80"
            alt="Kodaikanal mountain background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-white/10 rounded-full mb-3 border border-white/10">
            Handcrafted Circuits
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight">
            Discover South India & Beyond
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            From the cool pine forests of Ooty and Kodaikanal to the quiet backwaters of Kerala and sacred shores of Rameswaram.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Breadcrumb items={[{ label: "Destinations" }]} className="mb-8" />

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* State Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {stateFilters.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedState === state
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search destination, hill, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Destination Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 p-8">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold font-serif text-slate-800">
              No destinations match your criteria
            </h3>
            <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching with another keyword or reset the state filter.
            </p>
            <button
              onClick={() => {
                setSelectedState("All Destinations");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 bg-brand-navy text-white text-xs font-semibold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
