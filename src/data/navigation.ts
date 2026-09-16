export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const quickDestinations = [
  { name: "Ooty & Coonoor", href: "/destinations/ooty" },
  { name: "Munnar Hills", href: "/destinations/munnar" },
  { name: "Kodaikanal", href: "/destinations/kodaikanal" },
  { name: "Coorg Coffee Estate", href: "/destinations/coorg" },
  { name: "Madurai & Rameswaram", href: "/destinations/rameswaram" },
  { name: "Wayanad Rainforest", href: "/destinations/wayanad" },
];
