import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import { SITE } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Reliable Taxi Services Across the Isle of Man`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Paul's Taxis is a friendly, family-run taxi company providing reliable local journeys, airport transfers, ferry transfers and wheelchair accessible transport across the Isle of Man.",
  keywords: [
    "taxi Isle of Man",
    "Isle of Man airport transfer",
    "Paul's Taxis",
    "wheelchair accessible taxi Isle of Man",
    "ferry transfer taxi",
  ],
  openGraph: {
    title: `${SITE.name} | Reliable Taxi Services Across the Isle of Man`,
    description:
      "Friendly, professional and dependable taxi services covering local journeys, airport transfers, ferry transfers and wheelchair accessible transport.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Reliable Taxi Services Across the Isle of Man`,
    description:
      "Friendly, professional and dependable taxi services covering local journeys, airport transfers, ferry transfers and wheelchair accessible transport.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: SITE.name,
              image: `${SITE.url}/og-image.jpg`,
              telephone: SITE.phone,
              email: SITE.email,
              areaServed: "Isle of Man",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IM",
                addressRegion: "Isle of Man",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "22:00",
              },
              url: SITE.url,
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
