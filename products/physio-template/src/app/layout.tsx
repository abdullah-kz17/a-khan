import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif" 
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "A Khan Physiotherapy & Kinetic Expert Clinic",
  description: "Experience premium medical care at A Khan Clinic. Specialized physiotherapy and clinical services in Lahore focused on your complete well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        cormorant.variable, 
        montserrat.variable, 
        "font-sans antialiased bg-[#FCFAFA] text-[#1A1A1A]"
      )}>
        {children}
      </body>
    </html>
  );
}
