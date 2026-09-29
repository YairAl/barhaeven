"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { IMAGE_ROOT } from "@/config";
import { TICKETS_URL, photos } from "@/content";

const navigationItems = [
  { href: "#milon", label: "מה זה האבן" },
  { href: "#events", label: "הופעות" },
  ...(photos.length ? [{ href: "#gallery", label: "תמונות" }] : []),
  { href: "#merch", label: "מרצ'" },
  { href: "#contact", label: "איך מגיעים" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-amber">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="בר האבן – לראש העמוד">
          <Image
            src={IMAGE_ROOT + "/logo.png"}
            alt=""
            width={48}
            height={46}
            priority
            className="size-12 rounded-full border-[3px] border-ink bg-foam object-contain p-0.5"
          />
          <span className="poster text-4xl">בר האבן</span>
        </a>

        <ul className="hidden items-center gap-7 text-lg font-bold md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="decoration-[3px] underline-offset-[6px] hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hidden bg-stamp py-2 text-base text-foam md:inline-flex"
        >
          כרטיסייה
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full border-[3px] border-ink bg-foam p-2 md:hidden"
          aria-label={isMenuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="border-t-[3px] border-ink bg-amber px-4 pb-5 pt-2 md:hidden">
          {[...navigationItems, { href: TICKETS_URL, label: "לרכישת כרטיסייה" }].map(
            (item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="poster block py-2 text-5xl"
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}
