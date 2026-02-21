import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bartlett Labs | AI Automation & Business Systems | Houston, TX",
  description:
    "Custom AI assistants and automation workflows that handle your leads, scheduling, and data entry. Get your time back and scale without adding headcount. Houston, TX.",
  metadataBase: new URL("https://bartlettlabs.io"),
  openGraph: {
    title: "Bartlett Labs | AI Automation & Business Systems | Houston, TX",
    description:
      "Custom AI assistants and automation workflows that handle your leads, scheduling, and data entry. Houston, TX.",
    url: "https://bartlettlabs.io",
    siteName: "Bartlett Labs",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bartlett Labs — AI Automation & Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartlett Labs | AI Automation & Business Systems | Houston, TX",
    description:
      "Custom AI assistants and automation workflows that handle your leads, scheduling, and data entry. Houston, TX.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />

      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
