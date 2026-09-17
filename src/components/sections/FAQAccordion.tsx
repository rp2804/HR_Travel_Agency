import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { faqs } from "../../data/faqs";

interface FAQAccordionProps {
  limit?: number;
  showHeading?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  limit,
  showHeading = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            subtitle="Clear answers about our booking process, custom itineraries, vehicles, and on-trip assistance."
          />
        )}

        <div className="space-y-3.5">
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-brand-accent/30 bg-orange-50/20 dark:bg-slate-800/50 shadow-sm"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-white font-serif">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-accent text-white rotate-180"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100/60 dark:border-slate-800 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
