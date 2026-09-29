import Image from "next/image";
import { Beer, Music, Users } from "lucide-react";
import { IMAGE_ROOT } from "@/config";

const features = [
  {
    icon: Users,
    title: "החבר'ה שגדלתם איתם",
    text: "חיילים, סטודנטים וצעירי המושבה – כולם חוזרים הביתה בשישי ונפגשים כאן.",
  },
  {
    icon: Beer,
    title: "בירה במחיר הוגן",
    text: "מחירים למי שמרוויח גרוש וחצי. בלי תרגילים, בלי מינימום.",
  },
  {
    icon: Music,
    title: "הופעות חיות כל שבוע",
    text: "מהרכבים של תיכון הדסים ועד די-ג'יים מאבן יהודה שעושים אווירה.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto grid items-center gap-14 px-4 lg:grid-cols-2">
        <div>
          <span className="section-kicker !text-start">הסיפור שלנו</span>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            מוקד קהילתי לצעירי אבן יהודה
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-ink">
            בר האבן נולד מתוך רצון פשוט: ליצור מרחב מפגש חברתי לצעירים של
            המושבה כשהם חוזרים הביתה בסופי השבוע. בלי לנסוע רחוק, בלי לשלם הון –
            פשוט לרדת לבר, לפגוש את כולם ולשמוע מוזיקה טובה.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-ink">
            הבר פועל בימי שישי בערב, מ-20:00 ועד 02:00, ובכל ערב יש הופעה חיה
            של אמנים מקומיים.
          </p>

          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-lg bg-foam p-5 shadow-sm ring-1 ring-ink/10">
                <Icon className="mb-3 size-8 text-brass" />
                <h3 className="mb-1 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-ink/80">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={IMAGE_ROOT + "/outdoor_bar_1.jpg"}
              alt="עמדת הבר"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -start-6 hidden w-1/2 overflow-hidden rounded-xl border-8 border-background shadow-xl sm:block">
            <div className="relative aspect-square">
              <Image
                src={IMAGE_ROOT + "/people_2.jpg"}
                alt="חברים בבר"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
