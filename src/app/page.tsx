import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import DiagnosticAudit from "@/components/DiagnosticAudit";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bartlett Labs | AI Automation for Local Business | Crosby, TX",
  description:
    "Purdue-trained engineer building sturdy automated systems for local businesses. Lead capture, AI follow-up, invoicing automation. Hand-built in Crosby, TX.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Founder />
        <Services />
        <Proof />
        <DiagnosticAudit />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
