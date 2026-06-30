import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { getJsonLd, siteMetadata } from "@/lib/seo";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getJsonLd();

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-navy font-sans text-off-white antialiased">
        <ScrollProgress />
        <DemoBanner />
        <main className="pb-20 md:pb-0">{children}</main>
        <FloatingCTA />
      </body>
    </html>
  );
}
