import { useContext } from "react";
import { EnquiryContext } from "../components/layout/Layout";

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryContext.Provider");
  }
  return context;
};
