import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { IMAGE_ROOT } from "@/config";
import { MAPS_URL, TICKETS_URL, hours } from "@/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso text-cream"
    >
      <Image
        src={IMAGE_ROOT + "/live_music_1.jpg"}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45 sepia-[.35]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />
      <div className="grain absolute inset-0" />

      <div className="container relative mx-auto px-4 pb-16 pt-28 text-center">
        <div className="mx-auto mb-8 grid size-48 place-items-center rounded-full bg-cream shadow-2xl ring-4 ring-brass/60 md:size-60">
          <Image
            src={IMAGE_ROOT + "/logo.png"}
            alt="הלוגו של בר האבן"
            width={204}
            height={195}
            priority
            className="w-36 md:w-44"
          />
        </div>

        <p className="mb-3 text-sm font-semibold tracking-wide text-brass">
          הבר הקהילתי של אבן יהודה
        </p>
        <h1 className="mb-5 text-6xl font-black leading-none md:text-8xl">
          בר האבן
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-xl text-cream/85 md:text-2xl">
          תשתו בירה, יהיה בסדר! מקום לחזור אליו בסוף השבוע – עם החבר&apos;ה,
          מוזיקה חיה ובירה במחיר של שכר חייל.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brass px-8 py-3.5 text-lg font-bold text-foam shadow-lg transition hover:-translate-y-0.5 hover:bg-brass/90"
          >
            לרכישת כרטיסייה
          </a>
          <a
            href="#events"
            className="rounded-full border-2 border-cream/70 px-8 py-3 text-lg font-bold transition hover:bg-cream hover:text-espresso"
          >
            מי מופיע השבוע?
          </a>
        </div>

        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-cream/90">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-5 text-brass" /> {hours.day}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-5 text-brass" />
            <span dir="ltr">{hours.time}</span>
          </li>
          <li>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 underline-offset-4 hover:underline"
            >
              <MapPin className="size-5 text-brass" /> {hours.address}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
