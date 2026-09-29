import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Lexicon from "@/components/Lexicon";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Merchandise from "@/components/Merchandise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Lexicon />
        <Events />
        <Gallery />
        <Merchandise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
