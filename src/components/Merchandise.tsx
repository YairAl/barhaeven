import Image from "next/image";
import { IMAGE_ROOT } from "@/config";
import { contact, products } from "@/content";

export default function Merchandise() {
  return (
    <section id="merch" className="relative overflow-hidden bg-amber py-20 md:py-28">
      <div className="halftone pointer-events-none absolute inset-y-0 start-0 w-1/3 text-ink/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="poster text-[clamp(5rem,16vw,11rem)]">מרצ&apos;</h2>
          <p className="max-w-xs text-lg font-medium">
            לאבן־יהודי הפטריוט. אפשר להזמין כאן או לקנות בבר, בכל שישי.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <article
              key={product.name}
              className="relative flex flex-col rounded-3xl border-[3px] border-ink bg-foam p-6 shadow-[6px_6px_0_theme(colors.ink)]"
            >
              <span
                className={`absolute -top-5 end-5 grid size-20 place-items-center rounded-full bg-stamp text-foam shadow-[3px_3px_0_theme(colors.ink)] ${
                  i % 2 ? "rotate-6" : "-rotate-6"
                }`}
              >
                <span className="poster text-4xl">₪{product.price}</span>
              </span>
              <Image
                src={IMAGE_ROOT + product.image}
                alt={product.name}
                width={300}
                height={300}
                className="mx-auto aspect-square w-full max-w-[16rem] object-contain"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="poster text-5xl">{product.name}</h3>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "הזמנת " + product.name
                  )}`}
                  className="btn shrink-0 bg-ink px-5 py-2 text-base text-amber"
                >
                  להזמנה
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
