import React from "react";
import { MessageSquare, CalendarCheck, Luggage } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Tell Us Your Plan",
    description:
      "Share your destination wish, travel dates, passenger group, and personal stay preferences via our quick form or WhatsApp.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "We Build Your Itinerary",
    description:
      "Our native South India planner crafts a day-by-day custom route, pairs handpicked resorts, and quotes transparent pricing.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Travel & Enjoy",
    description:
      "Arrive stress-free. Your dedicated cab and driver welcome you at the airport/station with full on-trip support.",
    icon: Luggage,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Effortless Planning"
          title="How It Works"
          subtitle="From your first message to your journey back home, we make every step delightfully simple."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] -translate-y-8 h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -z-0" />

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 bg-brand-sand dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-subtle hover:shadow-card transition-all"
              >
                {/* Step indicator badge */}
                <span className="w-14 h-14 rounded-2xl bg-brand-navy dark:bg-brand-accent text-brand-accent dark:text-white text-lg font-extrabold flex items-center justify-center font-serif shadow-md mb-6">
                  {item.step}
                </span>

                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-slate-800 text-brand-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-serif mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
