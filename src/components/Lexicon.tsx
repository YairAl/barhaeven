// "The Even dictionary": the about section, written as entries from the
// dictionary of Eliezer Ben-Yehuda — the man the town (and our logo) is named after.

const entries = [
  {
    word: "אֶבֶן",
    pos: "נ'",
    senses: [
      "סלע, חומר קשה ויציב.",
      "כינוי חיבה לאבן יהודה, כמו ב״חוזרים לאבן בסופ״ש״.",
      "בר קהילתי לצעירי המושבה, פתוח בשישי בערב.",
    ],
    example: "״נפגשים באבן?״",
  },
  {
    word: "בִּירָה",
    pos: "נ'",
    senses: [
      "משקה תוסס העשוי שעורה, כשות ומים.",
      "אצלנו: במחיר למי שמרוויח גרוש וחצי.",
    ],
    example: "״תשתו בירה, יהיה בסדר!״",
  },
  {
    word: "שִׁישִׁי",
    pos: "ז'",
    senses: [
      "היום השישי בשבוע.",
      "הערב שבו חיילים, סטודנטים וכל מי שגדל כאן חוזרים הביתה.",
      "20:00–02:00, עם הופעה חיה של אמנים מקומיים.",
    ],
    example: "״מה, לא באת בשישי?״",
  },
];

export default function Lexicon() {
  return (
    <section id="milon" className="relative bg-foam py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-x-10 gap-y-3 border-b-[3px] border-ink pb-5">
          <h2 className="poster text-[clamp(4.5rem,13vw,9rem)]">מילון האבן</h2>
          <p className="max-w-sm font-lex text-lg italic text-stout">
            מהדורה מיוחדת, לזכרו של אליעזר בן־יהודה – מחייה השפה העברית, ששמו
            ניתן למושבה שלנו.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
          {entries.map((entry) => (
            <article key={entry.word} className="min-w-0">
              <h3 className="font-lex text-6xl font-black md:text-7xl">
                {entry.word}{" "}
                <span className="align-middle font-lex text-2xl font-normal italic text-stout">
                  ({entry.pos})
                </span>
              </h3>
              <ol className="mt-5 space-y-2 font-lex text-xl leading-relaxed">
                {entry.senses.map((sense, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-bold text-stamp">{i + 1}.</span>
                    <span>{sense}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 font-lex text-lg italic text-stout">
                <span className="not-italic text-stamp">◊</span> {entry.example}
              </p>
            </article>
          ))}
        </div>

        <aside className="mt-16 flex flex-col gap-4 rounded-3xl border-[3px] border-ink bg-amber p-6 shadow-[6px_6px_0_theme(colors.ink)] md:flex-row md:items-center md:gap-10 md:p-8">
          <h3 className="font-lex text-4xl font-black md:shrink-0 md:text-5xl">
            אֶבֶן יְהוּדָה{" "}
            <span className="text-xl font-normal italic">(ש״פ)</span>
          </h3>
          <p className="font-lex text-xl leading-relaxed">
            מושבה בשרון, נוסדה ב־1932 ובין הפרדסים שלה גדלנו כולנו. ראו גם:{" "}
            <b>בית</b>; <b>בר האבן</b>.
          </p>
        </aside>
      </div>
    </section>
  );
}
