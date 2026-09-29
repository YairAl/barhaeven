import Image from "next/image";
import { IMAGE_ROOT } from "@/config";
import { evenYehudaPhotos } from "@/content";

const facts = [
  { value: "1932", label: "שנת הייסוד של המושבה" },
  { value: "1950", label: "הפכה למועצה מקומית" },
  { value: "שישי", label: "הערב שבו כולם חוזרים הביתה" },
];

export default function EvenYehuda() {
  return (
    <section id="even-yehuda" className="relative overflow-hidden bg-espresso py-24 text-cream">
      <div className="grain absolute inset-0" />
      <div className="container relative mx-auto px-4">
        <span className="section-kicker">הבית שלנו</span>
        <h2 className="section-title">אבן יהודה</h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-cream/80">
          מושבה ירוקה בלב השרון, שנקראת על שמו של אליעזר בן־יהודה, מחייה השפה
          העברית. גדלנו כאן בין הפרדסים – ובר האבן הוא הדרך שלנו להחזיר
          למושבה מקום מפגש משלה.
        </p>

        <dl className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-cream/15 bg-white/5 p-6 text-center"
            >
              <dd className="font-display text-5xl font-black text-brass">
                {fact.value}
              </dd>
              <dt className="mt-2 text-cream/80">{fact.label}</dt>
            </div>
          ))}
        </dl>

        {evenYehudaPhotos.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {evenYehudaPhotos.map((photo) => (
              <figure key={photo.src} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={IMAGE_ROOT + photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                {photo.credit && (
                  <figcaption className="mt-1 text-xs text-cream/50">
                    צילום: {photo.credit}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
