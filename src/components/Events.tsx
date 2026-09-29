import { TICKETS_URL, events } from "@/content";

export default function Events() {
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <span className="section-kicker">על הבמה</span>
        <h2 className="section-title mb-12">לוח הופעות</h2>

        <ol className="divide-y divide-ink/15 overflow-hidden rounded-2xl bg-foam shadow-sm ring-1 ring-ink/10">
          {events.map((event) => (
            <li
              key={event.date + event.artist}
              className="flex items-center gap-5 px-5 py-5 transition-colors hover:bg-cream md:px-8"
            >
              <div className="w-16 shrink-0 text-center">
                <div className="font-display text-3xl font-black text-brass">
                  {event.date}
                </div>
                <div className="text-sm text-ink/70">{event.day}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold md:text-2xl">{event.artist}</h3>
              </div>
              <span className="rounded-full bg-ink/10 px-3 py-1 text-sm font-semibold text-ink">
                {event.genre}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-ink">
          רוצים להופיע אצלנו?{" "}
          <a href="#contact" className="font-bold text-brass underline-offset-4 hover:underline">
            דברו איתנו
          </a>{" "}
          ·{" "}
          <a
            href={TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brass underline-offset-4 hover:underline"
          >
            לרכישת כרטיסייה
          </a>
        </p>
      </div>
    </section>
  );
}
