import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Verticals from "@/components/Verticals";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Verticals />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
