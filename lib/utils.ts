import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS = {
  name: "Tech971 Computers, Mobiles & Electronics Repairing",
  shortName: "TECH971",
  tagline: "COMPUTERS • MOBILES • ELECTRONICS REPAIR",
  phone: "+971 52 261 8691",
  phoneTel: "+971522618691",
  whatsappUrl: "https://wa.me/971522618691",
  mapsUrl: "https://maps.app.goo.gl/ZshrHHhHeGbF2o9L6",
  address:
    "Al Khaleej Center, 149-B, M Floor, Exit 2, Near Sharaf DG Metro Station, Al Raffa, Dubai, United Arab Emirates.",
  city: "Dubai, United Arab Emirates",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Repair Services" },
  { href: "#devices", label: "Devices" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
] as const;
