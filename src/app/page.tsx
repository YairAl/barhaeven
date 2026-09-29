import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EvenYehuda from "@/components/EvenYehuda";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Merchandise from "@/components/Merchandise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <EvenYehuda />
        <Events />
        <Gallery />
        <Merchandise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
