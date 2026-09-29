import Image from "next/image";
import { IMAGE_ROOT } from "@/config";
import { contact, products } from "@/content";

export default function Merchandise() {
  return (
    <section id="merchandise" className="py-24">
      <div className="container mx-auto px-4">
        <span className="section-kicker">לאבן־יהודי הפטריוט</span>
        <h2 className="section-title mb-12">מרצ&apos;נדייז</h2>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col items-center rounded-2xl bg-foam p-6 text-center shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={IMAGE_ROOT + product.image}
                alt={product.name}
                width={260}
                height={260}
                className="mb-4 aspect-square w-full max-w-[260px] object-contain"
              />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mb-5 mt-1 font-display text-2xl font-black text-brass">
                ₪{product.price}
              </p>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(
                  "הזמנת " + product.name
                )}`}
                className="w-full rounded-full bg-espresso py-2.5 font-bold text-cream transition hover:bg-ink"
              >
                להזמנה
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink/70">
          ניתן לקנות גם בבר, בכל שישי.
        </p>
      </div>
    </section>
  );
}
