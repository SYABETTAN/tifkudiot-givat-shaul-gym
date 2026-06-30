import type { Metadata } from "next";
import { businessData } from "./business-data";
import { getSiteUrl } from "./utils";

const siteUrl = getSiteUrl();

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "תיפקודיות | מכון כושר בגבעת שאול ירושלים",
  description: businessData.description,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: businessData.name,
    title: "תיפקודיות | מכון כושר בגבעת שאול ירושלים",
    description: businessData.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "תיפקודיות | מכון כושר בגבעת שאול ירושלים",
    description: businessData.description,
  },
};

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: businessData.fullName,
    alternateName: businessData.name,
    description: businessData.description,
    url: siteUrl,
    telephone: businessData.phone.international,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.address.street,
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.neighborhood,
      postalCode: businessData.address.postalCode,
      addressCountry: "IL",
    },
    areaServed: businessData.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}
