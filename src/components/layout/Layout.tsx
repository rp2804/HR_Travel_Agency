import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../common/WhatsAppButton";
import { EnquiryModal } from "../forms/EnquiryModal";
import { ScrollToTop } from "../common/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export interface EnquiryContextType {
  openEnquiry: (options?: { destination?: string; packageTitle?: string; price?: number }) => void;
}

export const EnquiryContext = React.createContext<EnquiryContextType>({
  openEnquiry: () => {},
});

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryDetails, setEnquiryDetails] = useState<{
    destination?: string;
    packageTitle?: string;
    price?: number;
  }>({});

  const handleOpenEnquiry = (options?: { destination?: string; packageTitle?: string; price?: number }) => {
    setEnquiryDetails(options || {});
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ openEnquiry: handleOpenEnquiry }}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-brand-accent selection:text-white">
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppButton />
        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={handleCloseEnquiry}
          initialDestination={enquiryDetails.destination}
          initialPackageTitle={enquiryDetails.packageTitle}
          packagePrice={enquiryDetails.price}
        />
      </div>
    </EnquiryContext.Provider>
  );
};
