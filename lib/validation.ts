import { z } from "zod";

export const repairInquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d+\s()-]+$/, "Please enter a valid phone number"),
  deviceType: z.string().min(1, "Please select a device type"),
  deviceBrand: z.string().min(1, "Please enter the device brand"),
  deviceModel: z.string().min(1, "Please enter the device model"),
  repairCategory: z.string().min(1, "Please select a repair category"),
  problem: z
    .string()
    .min(10, "Please describe the problem (at least 10 characters)"),
  preferredContact: z.string().min(1, "Please select a preferred contact method"),
});

export type RepairInquiryFormData = z.infer<typeof repairInquirySchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d+\s()-]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  deviceType: z.string().min(1, "Please select a device type"),
  message: z.string().min(10, "Please enter a message (at least 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const DEVICE_TYPE_OPTIONS = [
  "Desktop Computer",
  "Laptop",
  "Mobile Phone",
  "Tablet",
  "Other Electronics",
] as const;

export const REPAIR_CATEGORY_OPTIONS = [
  "Hardware Issue",
  "Software Issue",
  "Screen or Display",
  "Battery or Charging",
  "Performance Issue",
  "Other",
] as const;

export const CONTACT_METHOD_OPTIONS = ["WhatsApp", "Phone Call"] as const;
