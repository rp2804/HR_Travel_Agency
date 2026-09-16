import { siteConfig } from '../config/siteConfig';
import { EnquiryFormData } from '../types';

export const getWhatsAppUrl = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/[^\d]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};

export const createPackageWhatsAppMessage = (
  packageTitle: string,
  price?: number
): string => {
  let message = `Hello ${siteConfig.agencyName} team! 👋\n\n`;
  message += `I am interested in your package: *${packageTitle}*`;
  if (price) {
    message += ` (Starting at ₹${price.toLocaleString('en-IN')})`;
  }
  message += `.\n\nCould you please share the detailed itinerary, available dates, and customized quote? Thank you!`;
  return message;
};

export const createDestinationWhatsAppMessage = (
  destinationName: string
): string => {
  return `Hello ${siteConfig.agencyName} team! 👋\n\nI am planning a trip to *${destinationName}*. Could you please share the available packages and itinerary options?`;
};

export const createFormEnquiryWhatsAppMessage = (
  data: Partial<EnquiryFormData>
): string => {
  let msg = `*New Trip Enquiry via Website* 🌟\n`;
  msg += `Agency: ${siteConfig.agencyName}\n\n`;
  if (data.name) msg += `👤 *Name:* ${data.name}\n`;
  if (data.phone) msg += `📞 *Phone:* ${data.phone}\n`;
  if (data.email) msg += `✉️ *Email:* ${data.email}\n`;
  if (data.destination) msg += `📍 *Destination:* ${data.destination}\n`;
  if (data.travelDate) msg += `🗓️ *Preferred Date:* ${data.travelDate}\n`;
  if (data.travellers) msg += `👥 *Travellers:* ${data.travellers}\n`;
  if (data.travelType) msg += `🧭 *Tour Type:* ${data.travelType}\n`;
  if (data.message) msg += `💬 *Notes/Requests:* ${data.message}\n`;
  msg += `\nPlease provide a customized itinerary and package estimate.`;
  return msg;
};
