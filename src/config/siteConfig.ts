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
  agencyName: "HR Travels",
  tagline: "Discover South India, Your Way.",
  shortDescription:
    "Handcrafted holidays, unforgettable journeys and local experiences across Tamil Nadu, Kerala, Karnataka and beyond.",
  establishedYear: 2018,
  contact: {
    phone: "+91 9876543210",
    phoneFormatted: "+91 98765 43210",
    secondaryPhone: "+91 8765432109",
    whatsapp: "9876543210",
    whatsappFormatted: "+91 98765 43210",
    email: "enquiry@hrtravels.example", // Placeholder email - update with actual business email
    supportEmail: "support@hrtravels.example", // Placeholder email - update with actual business email
    address: {
      street: "123, Galaxy Tower, MG Road",
      locality: "Indiranagar",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560038",
      country: "India",
    },
    officeHours: "Mon - Sat: 9:00 AM - 7:30 PM (IST)",
  },
  social: {
    instagram: "", // Add actual Instagram profile URL when available
    facebook: "", // Add actual Facebook page URL when available
    youtube: "", // Add actual YouTube channel URL when available
    twitter: "", // Add actual Twitter/X profile URL when available
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.823514343739!2d77.64108931482247!3d12.971598990861848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1726651023007!5m2!1sen!2sin",
    directUrl: "https://maps.google.com/?q=MG+Road+Indiranagar+Bangalore+Karnataka",
  },
  branding: {
    primaryColor: "#0F2439",
    accentColor: "#E07A2B",
    logoText: "HR Travels",
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
