import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { MAPS_URL, TICKETS_URL, contact, hours } from "@/content";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
  </svg>
);

const channels = [
  { icon: Mail, title: "מייל", content: contact.email, link: `mailto:${contact.email}` },
  { icon: Phone, title: "טלפון", content: contact.phone, link: contact.phoneHref },
  { icon: InstagramIcon, title: "אינסטגרם", content: contact.instagram, link: contact.instagramHref },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-espresso py-24 text-cream">
      <div className="grain absolute inset-0" />
      <div className="container relative mx-auto px-4">
        <span className="section-kicker">נתראה בשישי</span>
        <h2 className="section-title mb-12">איך מגיעים ואיך מדברים איתנו</h2>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cream/15 bg-white/5 p-8">
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 size-6 shrink-0 text-brass" />
                <div>
                  <div className="font-bold">{hours.address}</div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brass underline-offset-4 hover:underline"
                  >
                    ניווט בגוגל מפות ←
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-1 size-6 shrink-0 text-brass" />
                <div>
                  <div className="font-bold">{hours.day}</div>
                  <div dir="ltr" className="text-end text-cream/80">
                    {hours.time}
                  </div>
                </div>
              </li>
            </ul>
            <a
              href={TICKETS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-brass py-3 text-center text-lg font-bold text-foam transition hover:bg-brass/90"
            >
              לרכישת כרטיסייה
            </a>
          </div>

          <ul className="grid gap-4">
            {channels.map(({ icon: Icon, title, content, link }) => (
              <li key={title}>
                <a
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 rounded-2xl border border-cream/15 bg-white/5 p-5 transition hover:border-brass hover:bg-white/10"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brass/20">
                    <Icon className="size-6 text-brass" />
                  </span>
                  <div>
                    <div className="text-sm text-cream/60">{title}</div>
                    <div dir="ltr" className="text-end text-lg font-semibold">
                      {content}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
