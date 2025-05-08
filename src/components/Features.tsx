import { Beer, Music, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="size-10 text-amber-600" />,
    title: "בואו להיות עם החברה שגדלתם איתם",
  },
  {
    icon: <Beer className="size-10 text-amber-600" />,
    title: "בירות במחיר נוח למי שמרוויח גרוש וחצי",
  },
  {
    icon: <Music className="size-10 text-amber-600" />,
    title: "אירועים כל שבוע של מוזיקאים מקומיים",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          תשתו בירה, יהיה בסדר!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
