import type { Metadata } from "next";
import { Inter, Arvo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arvo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bartlett Labs | AI Automation for Local Business | Crosby, TX",
  description:
    "Purdue-trained engineer building sturdy automated systems for local businesses. Lead capture, AI follow-up, invoicing automation. Hand-built in Crosby, TX.",
  metadataBase: new URL("https://bartlettlabs.io"),
  openGraph: {
    title: "Bartlett Labs | AI Automation for Local Business | Crosby, TX",
    description:
      "World-class systems. Small-town values. Automated lead capture, scheduling, and invoicing for local business owners.",
    url: "https://bartlettlabs.io",
    siteName: "Bartlett Labs",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bartlett Labs — World-class systems. Small-town values.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartlett Labs | AI Automation for Local Business | Crosby, TX",
    description:
      "World-class systems. Small-town values. Hand-built automation for local businesses in Crosby, TX.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${arvo.variable}`}>
      <head />
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  );
}
