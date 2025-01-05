import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PerformanceSchedule from "@/components/PerformanceSchedule";
import PhotoGallery from "@/components/PhotoGallery";
import Merchandise from "@/components/Merchandise";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div id="page" className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="gallery">
          <PhotoGallery />
        </section>
        <section id="performance-schedule">
          <PerformanceSchedule />
        </section>
        <section id="merchandise">
          <Merchandise />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
