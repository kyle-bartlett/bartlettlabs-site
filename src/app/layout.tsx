import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bartlett Labs | AI Automation for Houston Businesses",
  description:
    "Websites, chatbots, and internal workflow automation for Houston small businesses. Book a 15-minute call.",
  metadataBase: new URL("https://bartlettlabs.io"),
  openGraph: {
    title: "Bartlett Labs | AI Automation for Houston Businesses",
    description:
      "Websites, chatbots, and internal workflow automation for Houston small businesses.",
    url: "https://bartlettlabs.io",
    siteName: "Bartlett Labs",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bartlett Labs — AI Automation for Houston Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartlett Labs | AI Automation for Houston Businesses",
    description:
      "Websites, chatbots, and internal workflow automation for Houston small businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Ambient mist background */}
        <div className="mist-container" aria-hidden="true">
          <div className="mist-orb mist-orb-1" />
          <div className="mist-orb mist-orb-2" />
          <div className="mist-orb mist-orb-3" />
        </div>

        {children}

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
