import { events } from "@/content";

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-ink py-20 text-foam md:py-28">
      <div className="halftone pointer-events-none absolute -end-24 -top-24 size-96 rounded-full text-amber/25" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="poster mb-12 text-[clamp(5rem,16vw,11rem)] text-amber">
          על הבמה
        </h2>

        <ol>
          {events.map((event, i) => (
            <li
              key={event.date + event.artist}
              className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-2 border-t-[3px] border-dashed border-foam/30 py-6 last:border-b-[3px] md:grid-cols-[9rem_1fr_auto] md:gap-x-10"
            >
              <div className="poster text-6xl text-amber md:text-8xl" dir="ltr">
                {event.date}
              </div>
              <div className="min-w-0">
                {i === 0 && (
                  <span className="mb-1 inline-block -rotate-2 bg-stamp px-2 py-0.5 text-sm font-bold">
                    הבא בתור
                  </span>
                )}
                <h3 className="poster break-words text-5xl transition-colors group-hover:text-amber md:text-7xl">
                  {event.artist}
                </h3>
              </div>
              <span className="col-start-2 justify-self-start rounded-full border-2 border-foam/60 px-4 py-1 font-bold md:col-start-auto md:justify-self-end">
                {event.genre}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-xl">
          מנגנים? תקליטנים? הבמה פתוחה לאמנים מהמושבה.{" "}
          <a href="#contact" className="font-bold text-amber underline decoration-[3px] underline-offset-4">
            דברו איתנו
          </a>
        </p>
      </div>
    </section>
  );
}
