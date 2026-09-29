"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IMAGE_ROOT } from "@/config";
import { TICKETS_URL } from "@/content";

const navigationItems = [
  { href: "#about", label: "הסיפור שלנו" },
  { href: "#even-yehuda", label: "אבן יהודה" },
  { href: "#events", label: "הופעות" },
  { href: "#gallery", label: "גלריה" },
  { href: "#merchandise", label: "מרצ'נדייז" },
  { href: "#contact", label: "צור קשר" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-espresso/95 backdrop-blur shadow-lg"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 text-cream">
        <a href="#top" className="flex items-center gap-3" aria-label="בר האבן – לראש העמוד">
          <span className="grid size-11 place-items-center rounded-full bg-cream">
            <Image
              src={IMAGE_ROOT + "/logo.png"}
              alt=""
              width={36}
              height={34}
              priority
            />
          </span>
          <span className="font-display text-xl font-bold">בר האבן</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-medium transition-colors hover:text-brass"
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
          className="hidden rounded-full bg-brass px-5 py-2 font-bold text-foam transition hover:bg-brass/85 lg:inline-block"
        >
          כרטיסייה
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 hover:bg-white/10 lg:hidden"
          aria-label={isMenuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="container mx-auto flex flex-col gap-1 px-4 pb-4 text-cream lg:hidden">
          {[...navigationItems, { href: TICKETS_URL, label: "לרכישת כרטיסייה" }].map(
            (item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-3 text-lg font-medium hover:bg-white/10"
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
