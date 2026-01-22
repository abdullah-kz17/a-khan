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
  title: "A Khan Physiotherapy & Kinetic Expert Clinic",
  description: "Experience premium medical care at A Khan Clinic. Specialized physiotherapy and clinical services in Lahore focused on your complete well-being.",
  icons: {
    icon: '/images/a-khan-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        outfit.variable, 
        plusJakarta.variable, 
        "font-body antialiased bg-[#FCFAFA] text-[#1A1A1A]"
      )}>
        {children}
      </body>
    </html>
  );
}
