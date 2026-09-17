import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Menu, X, MessageCircle, Phone, ArrowRight, Sun, Moon } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { mainNavItems } from "../../data/navigation";
import { getWhatsAppUrl } from "../../utils/whatsapp";
import { useTheme } from "../../context/ThemeContext";

interface NavbarProps {
  onOpenEnquiry: (initialDestination?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const whatsappDirectUrl = getWhatsAppUrl(
    siteConfig.contact.whatsapp,
    `Hi ${siteConfig.agencyName}, I would like to plan a tour with you!`
  );

  const isTransparent = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-4"
          : "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-white shadow-sm border-b border-slate-100 dark:border-slate-800 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg group"
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isTransparent
                ? "bg-white/20 text-white group-hover:bg-brand-accent"
                : "bg-brand-navy dark:bg-brand-accent text-white"
            }`}
          >
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${
                isTransparent ? "text-white" : "text-brand-navy dark:text-white"
              }`}
            >
              {siteConfig.agencyName}
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase font-semibold mt-0.5 ${
                isTransparent ? "text-slate-200" : "text-brand-accent"
              }`}
            >
              {siteConfig.branding.badgeText}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-accent relative py-1 ${
                  isActive
                    ? "text-brand-accent font-semibold"
                    : isTransparent
                    ? "text-slate-100 hover:text-white"
                    : "text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-brand-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all border ${
              isTransparent
                ? "bg-white/15 border-white/20 text-white hover:bg-white/25"
                : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Quick WhatsApp button */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              isTransparent
                ? "bg-white/15 text-white hover:bg-[#25D366] hover:text-white"
                : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 hover:bg-[#25D366] hover:text-white"
            }`}
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Plan My Trip Modal CTA */}
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover active:scale-95 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all border ${
              isTransparent
                ? "bg-white/15 border-white/20 text-white"
                : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            }`}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => onOpenEnquiry()}
            className="sm:hidden px-3 py-1.5 bg-brand-accent text-white text-xs font-semibold rounded-lg"
          >
            Plan
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 shadow-2xl px-6 py-6 transition-all duration-300 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-4">
            {mainNavItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-orange-50 dark:bg-slate-800 text-brand-accent font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 px-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-center rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Plan My Custom Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-center rounded-xl shadow-sm flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Expert on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="w-full py-2 px-4 border border-slate-200 text-slate-700 font-medium text-center rounded-xl flex items-center justify-center gap-2 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-brand-navy" />
              <span>Call: {siteConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
