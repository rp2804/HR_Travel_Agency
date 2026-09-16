import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "navy" | "teal" | "neutral" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "accent",
  className = "",
  size = "sm",
}) => {
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs font-semibold";

  const variantClasses = {
    accent: "bg-orange-500 text-white shadow-sm font-medium",
    navy: "bg-brand-navy text-white font-medium",
    teal: "bg-teal-700 text-white font-medium",
    neutral: "bg-slate-100 text-slate-700 font-medium",
    outline: "border border-slate-200 text-slate-700 bg-white/80 backdrop-blur-sm",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full tracking-wide uppercase transition-all duration-200 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
