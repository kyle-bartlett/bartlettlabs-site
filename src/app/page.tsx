import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Demo from "@/components/Demo";
import ProblemSolution from "@/components/ProblemSolution";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = {
  title: "Bartlett Labs | AI Automation & Business Systems | Houston, TX",
  description:
    "Custom AI assistants and automation workflows that handle your leads, scheduling, and data entry. Get your time back and scale without adding headcount. Houston, TX.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Industries />
        <Demo />
        <ProblemSolution />
        <Founder />
        <Services />
        <Proof />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}
