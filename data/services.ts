export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: ServiceItem[] = [
  {
    id: "computer-laptop",
    title: "Computer & Laptop Repair",
    description:
      "Support for computer troubleshooting, laptop repair inquiries, hardware assessments, and software issues.",
    points: [
      "Computer troubleshooting",
      "Laptop repair inquiries",
      "Hardware issue assessment",
      "Software troubleshooting",
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop on a technical repair workstation",
  },
  {
    id: "mobile-phone",
    title: "Mobile Phone Repair",
    description:
      "Assistance with smartphone repair inquiries including display, battery, and connectivity concerns.",
    points: [
      "Smartphone repair inquiries",
      "Screen and display issues",
      "Battery-related issues",
      "Charging and connectivity issues",
    ],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Smartphone on a modern desk ready for inspection",
  },
  {
    id: "electronics",
    title: "Electronics Repair",
    description:
      "General electronics troubleshooting, device inspection, and repair inquiry support.",
    points: [
      "General electronics troubleshooting",
      "Device inspection",
      "Electronics repair inquiries",
    ],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Electronics components and tools on a repair bench",
  },
  {
    id: "software-support",
    title: "Software & Technical Support",
    description:
      "Help with operating system troubleshooting, software installation assistance, and performance concerns.",
    points: [
      "Operating system troubleshooting",
      "Software installation assistance",
      "Computer performance issues",
      "Technical support inquiries",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Technician working on computer software diagnostics",
  },
];
