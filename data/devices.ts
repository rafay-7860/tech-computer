export type DeviceCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const devices: DeviceCategory[] = [
  {
    id: "desktops",
    title: "Desktop Computers",
    description:
      "Repair inquiries and troubleshooting support for desktop computer issues.",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Desktop computer setup on a workspace desk",
  },
  {
    id: "laptops",
    title: "Laptops",
    description:
      "Assistance with laptop performance, hardware, and software concerns.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Open laptop computer on a wooden desk",
  },
  {
    id: "smartphones",
    title: "Smartphones",
    description:
      "Support for smartphone repair inquiries and device assessments.",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Smartphone screen lit on a dark surface",
  },
  {
    id: "tablets",
    title: "Tablets",
    description:
      "Tablet inspection and repair inquiry assistance for common device issues.",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tablet device displayed on a clean surface",
  },
  {
    id: "accessories",
    title: "Computer Accessories",
    description:
      "Help with accessory-related troubleshooting and compatibility questions.",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Computer accessories including keyboard and mouse",
  },
  {
    id: "electronics",
    title: "Electronic Devices",
    description:
      "General electronics repair inquiries and device inspection support.",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Assorted electronic devices on a technical workbench",
  },
];
