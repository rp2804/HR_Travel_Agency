import React, { useState } from "react";
import { MapPin, Calendar, Users, Compass, ArrowRight } from "lucide-react";
import { destinations } from "../../data/destinations";
import { tourCategories } from "../../data/categories";

interface QuickSearchBarProps {
  onSearch: (criteria: {
    destination: string;
    travelDate: string;
    travellers: string;
    travelType: string;
  }) => void;
}

export const QuickSearchBar: React.FC<QuickSearchBarProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("2 Travellers");
  const [travelType, setTravelType] = useState("Family Holiday");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination,
      travelDate,
      travellers,
      travelType,
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative -mt-10 sm:-mt-14 z-20">
      <div className="bg-white rounded-2xl shadow-floating border border-slate-100 p-4 sm:p-5 md:p-6 transition-all">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Destination */}
          <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>Destination</span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer py-1"
            >
              <option value="">Where to?</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}, {d.state}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Date */}
          <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-accent" />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer py-1"
            />
          </div>

          {/* Travellers */}
          <div className="border-b sm:border-b-0 lg:border-r border-slate-100 pb-3 sm:pb-0 sm:pr-4">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-accent" />
              <span>Travellers</span>
            </label>
            <select
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer py-1"
            >
              <option value="1 Traveller">1 Traveller (Solo)</option>
              <option value="2 Travellers">2 Travellers (Couple)</option>
              <option value="3-4 Travellers">3-4 Travellers (Family)</option>
              <option value="5-8 Travellers">5-8 Travellers (Group)</option>
              <option value="8+ Travellers">8+ Travellers (Large Group)</option>
            </select>
          </div>

          {/* Travel Type & CTA Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-1 sm:pt-0">
            <div className="lg:hidden flex-1">
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-brand-accent" />
                <span>Travel Type</span>
              </label>
              <select
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 bg-transparent focus:outline-none cursor-pointer py-1"
              >
                {tourCategories.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-3.5 px-6 bg-brand-accent hover:bg-brand-accent-hover active:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get My Trip</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
