import Image from "next/image";
import { IMAGE_ROOT } from "@/config";
import { MAPS_URL, TICKETS_URL, hours } from "@/content";

const ticker = [
  "כל שישי",
  hours.time,
  "הופעות חיות",
  "בירה במחיר של שכר חייל",
  "רח' ההדרים",
  "תשתו בירה, יהיה בסדר!",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-amber">
      <div className="bubbles pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-24 lg:pt-14">
        <div>
          <p className="mb-4 inline-block -rotate-2 bg-ink px-3 py-1 text-lg font-bold text-amber">
            הבר הקהילתי של אבן יהודה
          </p>
          <h1 className="poster text-[clamp(7.5rem,30vw,20rem)]">
            <span className="block">בר</span>
            <span className="block text-foam [-webkit-text-stroke:3px_theme(colors.ink)] [paint-order:stroke_fill]">
              האבן
            </span>
          </h1>
          <p className="mt-6 max-w-md text-xl font-medium leading-relaxed md:text-2xl">
            בסוף השבוע כולם חוזרים הביתה. אנחנו דואגים שיהיה לאן לרדת: מוזיקה
            חיה, בירה זולה והחבר&apos;ה שגדלתם איתם.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-ink text-amber"
            >
              לרכישת כרטיסייה
            </a>
            <a href="#events" className="btn bg-foam">
              מי מופיע השבוע?
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]">
          <div className="sticker relative aspect-square rotate-[-5deg] p-[12%] transition-transform duration-300 hover:rotate-0">
            <Image
              src={IMAGE_ROOT + "/logo.png"}
              alt="הלוגו של בר האבן: אליעזר בן־יהודה מרים בירה"
              width={511}
              height={488}
              priority
              className="size-full object-contain"
            />
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-4 -start-2 grid size-32 rotate-12 place-items-center rounded-full bg-stamp text-center text-foam shadow-[4px_5px_0_theme(colors.ink)] transition-transform hover:rotate-0 md:size-40"
          >
            <span className="grid size-[86%] place-items-center rounded-full border-2 border-dashed border-foam/80">
              <span>
                <span className="poster block text-4xl md:text-5xl">שישי</span>
                <span dir="ltr" className="block text-sm font-bold md:text-base">
                  {hours.time}
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="relative -mx-4 -rotate-1 overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-amber">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {[...ticker, ...ticker].map((item, i) => (
                <li key={i} className="poster flex items-center whitespace-nowrap px-6 text-4xl">
                  {item}
                  <span className="ps-12 text-foam">✺</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
