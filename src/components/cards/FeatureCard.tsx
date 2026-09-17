import React from "react";
import { MapPin, Sliders, ShieldCheck, Headphones, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Sliders,
  ShieldCheck,
  Headphones,
};

interface FeatureCardProps {
  title: string;
  subtitle: string;
  iconName: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  iconName,
  index,
}) => {
  const Icon = iconMap[iconName] || MapPin;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-card border border-slate-100 dark:border-slate-800 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 group">
      {/* Icon container */}
      <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-slate-800 text-brand-accent flex items-center justify-center mb-5 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 block mb-1">
        0{index + 1}
      </span>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-serif mb-2 group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

