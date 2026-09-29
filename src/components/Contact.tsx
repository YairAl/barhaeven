import { Beer } from "lucide-react";
import { MAPS_URL, TICKETS_URL, contact, hours } from "@/content";

const STAMPED = 3;

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-foam md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="poster mb-14 text-[clamp(5rem,17vw,12rem)] text-amber">
          נתראה בשישי.
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wide text-amber">איפה</h3>
            <p className="poster text-5xl">{hours.address}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-bold underline decoration-amber decoration-[3px] underline-offset-4"
            >
              ניווט בגוגל מפות
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wide text-amber">מתי</h3>
            <p className="poster text-5xl">{hours.day}</p>
            <p dir="ltr" className="poster text-end text-5xl text-foam/70">
              {hours.time}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wide text-amber">דברו איתנו</h3>
            <ul className="space-y-1 text-xl" dir="ltr">
              <li className="text-end">
                <a href={`mailto:${contact.email}`} className="hover:text-amber">
                  {contact.email}
                </a>
              </li>
              <li className="text-end">
                <a href={contact.phoneHref} className="hover:text-amber">
                  {contact.phone}
                </a>
              </li>
              <li className="text-end">
                <a
                  href={contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber"
                >
                  {contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-8 rounded-3xl border-[3px] border-amber p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="poster mb-4 text-6xl text-amber">הכרטיסייה</h3>
            <ul className="flex flex-wrap gap-2" aria-label="כרטיסיית ניקוב">
              {Array.from({ length: 10 }).map((_, i) => (
                <li
                  key={i}
                  className={`grid size-10 place-items-center rounded-full border-2 md:size-12 ${
                    i < STAMPED
                      ? "rotate-12 border-stamp bg-stamp text-foam"
                      : "border-dashed border-foam/40"
                  }`}
                >
                  {i < STAMPED && <Beer className="size-5" />}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-amber bg-amber text-ink shadow-[4px_4px_0_theme(colors.stamp)]"
          >
            לרכישת כרטיסייה
          </a>
        </div>
      </div>
    </section>
  );
}
