export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  shortDescription: string;
  description: string;
  bestFor: string[];
  bestTime: string;
  featured: boolean;
  slug: string;
  highlights: string[];
  thingsToDo: string[];
  gallery: string[];
  tag?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  stay?: string;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  destinationSlug: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "Popular" | "Best Seller" | "Family Favourite" | "Honeymoon Special" | "Trending";
  shortDescription: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  bestTime: string;
  gallery: string[];
  featured: boolean;
  popular: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tripName: string;
  quote: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: "Nature" | "Culture" | "Family" | "Adventure" | "Beaches";
  image: string;
  featured?: boolean;
}

export interface TourCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  travellers: string;
  travelType: string;
  message: string;
}

export interface FilterState {
  search: string;
  destination: string;
  category: string;
  duration: string;
  maxBudget: number;
  sortBy: "recommended" | "price-asc" | "price-desc" | "duration-desc";
}
