import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { getWhatsAppUrl } from "../../utils/whatsapp";

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = "",
}) => {
  const defaultMessage = `Hi ${siteConfig.agencyName}, I am interested in planning a trip to South India. Please assist me with options and pricing!`;
  const message = customMessage || defaultMessage;
  const whatsappUrl = getWhatsAppUrl(siteConfig.contact.whatsapp, message);

  return (
    <aside aria-label="WhatsApp quick chat" className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-floating hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with travel expert on WhatsApp"
      >
        {/* Subtle pulsing indicator ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-50" />

        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366]" />

        {/* Floating tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 hidden sm:block">
          Chat with an Expert
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
        </span>
      </a>
    </aside>
  );
};
