import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-heading" 
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});


export const metadata: Metadata = {
  metadataBase: new URL('https://akhanphysio.com'),
  title: {
    default: "A-Khan Physiotherapy & Kinetic Expert Clinic | Best Physiotherapist in Lahore",
    template: "%s | A-Khan Physiotherapy"
  },
  description: "Experience premium medical care at A-Khan Clinic. Dr. Moez Khan offers specialized physiotherapy, chiropractic care, and rehabilitation in Lahore. Book your appointment today.",
  keywords: ["Physiotherapy Lahore", "Chiropractor Lahore", "Dr Moez Khan", "Back Pain Treatment", "Sciatica Treatment", "Stroke Rehabilitation", "Sports Injury Clinic", "Best Physiotherapist in Lahore"],
  authors: [{ name: "Dr. Moez Khan" }],
  creator: "Pixelync",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akhanphysio.com",
    title: "A-Khan Physiotherapy & Kinetic Expert Clinic",
    description: "Leading physiotherapy and chiropractic clinic in Lahore. Expert care for pain relief, rehabilitation, and mobility.",
    siteName: "A-Khan Physiotherapy",
    images: [
      {
        url: "/images/owner-pic.jpeg",
        width: 800,
        height: 1000,
        alt: "Dr. Moez Khan - A-Khan Physiotherapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Khan Physiotherapy | Expert Care in Lahore",
    description: "Relief from pain and mobility issues with Dr. Moez Khan. Top-rated physiotherapy and chiropractic services.",
    images: ["/images/owner-pic.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/a-khan-logo.png',
    shortcut: '/images/a-khan-logo.png',
    apple: '/images/a-khan-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "A-Khan Physiotherapy & Kinetic Expert Clinic",
    "image": "https://akhanphysio.com/images/owner-pic.jpeg",
    "url": "https://akhanphysio.com",
    "telephone": "+923084687707",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House #14, Mehar Fayyaz Colony, BB Block, Fateh Garh",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.582045, 
      "longitude": 74.329376 
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "15:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.facebook.com/akhanphysio", 
      "https://www.instagram.com/akhanphysio"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        outfit.variable, 
        plusJakarta.variable, 
        "font-body antialiased bg-[#FCFAFA] text-[#1A1A1A]"
      )}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
