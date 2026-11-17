import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageLoader } from "@/components/PageLoader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BUSINESS } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const siteUrl = "https://tech971.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tech971 | Computer, Laptop & Mobile Repair Dubai | Al Khaleej Center",
    template: "%s | Tech971 Dubai",
  },
  description:
    "Tech971 Computers, Mobiles & Electronics Repairing in Dubai. Computer repair, laptop repair, mobile repair, and electronics repair inquiries near Sharaf DG Metro at Al Khaleej Center, Al Raffa.",
  keywords: [
    "Computer Repair Dubai",
    "Laptop Repair Dubai",
    "Mobile Repair Dubai",
    "Electronics Repair Dubai",
    "Computer Repair Al Khaleej Center",
    "Mobile Repair Near Sharaf DG Metro",
    "Tech971 Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: BUSINESS.name,
    title: "Tech971 | Computer & Mobile Repair Dubai",
    description:
      "Device repair inquiries for computers, mobiles, and electronics at Tech971 in Al Khaleej Center, Dubai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech971 | Computer & Mobile Repair Dubai",
    description:
      "Contact Tech971 for computer, laptop, mobile, and electronics repair assistance in Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  image: `${siteUrl}/og-image.svg`,
  telephone: BUSINESS.phone,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Al Khaleej Center, 149-B, M Floor, Exit 2, Near Sharaf DG Metro Station",
    addressLocality: "Al Raffa",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  hasMap: BUSINESS.mapsUrl,
  sameAs: [BUSINESS.whatsappUrl, BUSINESS.mapsUrl],
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  description:
    "Computer, mobile phone, and electronics repair shop in Dubai providing repair inquiry and technical assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${orbitron.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <PageLoader />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
