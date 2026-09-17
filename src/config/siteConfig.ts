export interface SiteConfig {
  agencyName: string;
  tagline: string;
  shortDescription: string;
  establishedYear: number;
  contact: {
    phone: string;
    phoneFormatted: string;
    secondaryPhone?: string;
    whatsapp: string; // digits only with country code, e.g., 
    whatsappFormatted: string;
    email: string;
    supportEmail: string;
    address: {
      street: string;
      locality: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    officeHours: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    twitter?: string;
  };
  maps: {
    embedUrl: string;
    directUrl: string;
  };
  branding: {
    primaryColor: string;
    accentColor: string;
    logoText: string;
    badgeText: string;
  };
  trustHighlights: Array<{
    title: string;
    subtitle: string;
    icon: string;
  }>;
}

export const siteConfig: SiteConfig = {
  agencyName: "Southern Trails",
  tagline: "Discover South India, Your Way.",
  shortDescription:
    "Handcrafted holidays, unforgettable journeys and local experiences across Tamil Nadu, Kerala, Karnataka and beyond.",
  establishedYear: 2018,
  contact: {
    phone: "+91 8682957486",
    phoneFormatted: "+91 8682957486",
    secondaryPhone: "+91 72000 65465",
    whatsapp: "7200065465",
    whatsappFormatted: "+91 7200065465",
    email: "enquiry@southerntrails.in",
    supportEmail: "support@southerntrails.in",
    address: {
      street: "No. 42, 2nd Floor, Venkatanarayana Road",
      locality: "T. Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600017",
      country: "India",
    },
    officeHours: "Mon - Sat: 9:00 AM - 7:30 PM (IST)",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8485233630267!2d80.2312!3d13.0405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a6d54d9b%3A0xb3a32f91a670fa9!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directUrl: "https://maps.google.com/?q=T+Nagar+Chennai+Tamil+Nadu",
  },
  branding: {
    primaryColor: "#0F2439",
    accentColor: "#E07A2B",
    logoText: "Southern Trails",
    badgeText: "Tamil Nadu & South India Specialists",
  },
  trustHighlights: [
    {
      title: "Local Expertise",
      subtitle: "Native travel planners with first-hand route & destination knowledge",
      icon: "MapPin",
    },
    {
      title: "Customized Itineraries",
      subtitle: "Tailored to your family pace, preferred stays, and budget",
      icon: "Sliders",
    },
    {
      title: "Transparent Packages",
      subtitle: "Clear inclusions with no hidden driver bata or surprise fees",
      icon: "ShieldCheck",
    },
    {
      title: "Personal Travel Support",
      subtitle: "Dedicated WhatsApp trip coordinator from arrival to departure",
      icon: "Headphones",
    },
  ],
};
