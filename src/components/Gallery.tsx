import Image from "next/image";
import { IMAGE_ROOT } from "@/config";
import { galleryPhotos } from "@/content";

// First and fourth photos span two rows to give the grid some rhythm.
const featured = new Set([0, 3]);

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="container mx-auto px-4">
        <span className="section-kicker">רגעים מהבר</span>
        <h2 className="section-title mb-12">גלריה</h2>

        <div className="grid auto-rows-[11rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-3 md:gap-4">
          {galleryPhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl shadow-md ${
                featured.has(i) ? "row-span-2" : ""
              }`}
            >
              <Image
                src={IMAGE_ROOT + photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/0 transition group-hover:bg-espresso/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
