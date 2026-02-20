import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Proof />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
