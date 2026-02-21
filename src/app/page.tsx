import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Demo />
        <ProblemSolution />
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
