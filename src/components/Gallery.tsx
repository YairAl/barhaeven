import Image from "next/image";
import { IMAGE_ROOT } from "@/config";
import { photos } from "@/content";

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export default function Gallery() {
  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="poster mb-12 text-[clamp(5rem,16vw,11rem)]">מהשישי האחרון</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
          {photos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`${tilts[i % tilts.length]} border-[3px] border-ink bg-foam p-2 pb-3 shadow-[5px_5px_0_theme(colors.ink)] transition-transform hover:rotate-0`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={IMAGE_ROOT + photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm font-medium">
                {photo.alt}
                {photo.credit && <span className="text-stout"> · צילום: {photo.credit}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
