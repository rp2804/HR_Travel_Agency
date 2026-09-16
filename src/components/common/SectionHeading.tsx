import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}>
      {badge && (
        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent-light rounded-full mb-3 border border-orange-200">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
