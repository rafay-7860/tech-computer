import { BUSINESS } from "./utils";

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Tech971, I need assistance with a computer, mobile phone, or electronics repair. Could you please help me?";

export function serviceInquiryMessage(serviceName: string): string {
  return `Hello Tech971, I am interested in your ${serviceName} service. Could you please help me with a repair inquiry?`;
}

export function deviceInquiryMessage(deviceName: string): string {
  return `Hello Tech971, I need assistance with my ${deviceName}. Could you please help me with a repair inquiry?`;
}

export type RepairInquiryPayload = {
  fullName: string;
  phone: string;
  deviceType: string;
  deviceBrand: string;
  deviceModel: string;
  repairCategory: string;
  problem: string;
  preferredContact: string;
};

export function formatRepairInquiryMessage(data: RepairInquiryPayload): string {
  return [
    "Hello Tech971, I would like to submit a repair inquiry.",
    "",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Device Type: ${data.deviceType}`,
    `Brand: ${data.deviceBrand}`,
    `Model: ${data.deviceModel}`,
    `Repair Category: ${data.repairCategory}`,
    `Preferred Contact: ${data.preferredContact}`,
    "",
    "Problem Description:",
    data.problem,
  ].join("\n");
}

export type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  deviceType: string;
  message: string;
};

export function formatContactMessage(data: ContactPayload): string {
  const lines = [
    "Hello Tech971, I would like to get in touch.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];

  if (data.email) {
    lines.push(`Email: ${data.email}`);
  }

  lines.push(
    `Device Type: ${data.deviceType}`,
    "",
    "Message:",
    data.message
  );

  return lines.join("\n");
}
