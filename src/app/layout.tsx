import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
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
  title: "Bartlett Labs | Engineering Tomorrow's Solutions",
  description:
    "Bartlett Labs is an innovation company spanning digital publishing, commerce, AI consulting, and software engineering.",
  metadataBase: new URL("https://bartlettlabs.io"),
  openGraph: {
    title: "Bartlett Labs",
    description: "Engineering Tomorrow's Solutions",
    url: "https://bartlettlabs.io",
    siteName: "Bartlett Labs",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1130,
        height: 1144,
        alt: "Bartlett Labs",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Bartlett Labs",
    description: "Engineering Tomorrow's Solutions",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Ambient mist background */}
        <div className="mist-container" aria-hidden="true">
          <div className="mist-orb mist-orb-1" />
          <div className="mist-orb mist-orb-2" />
          <div className="mist-orb mist-orb-3" />
        </div>

        {children}
      </body>
    </html>
  );
}
