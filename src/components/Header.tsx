"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavigationItem = {
  href: string;
  label: string;
  external?: boolean;
};

const navigationItems: NavigationItem[] = [
  { href: "#page", label: "הסיפור שלנו" },
  { href: "#gallery", label: "גלריה" },
  { href: "#performance-schedule", label: "הופעות" },
  { href: "#merchandise", label: "מרצ'נדייז" },
  { href: "https://www.stampme.com/", label: "כרטיסיות", external: true },
  { href: "#contact-us", label: "צור קשר" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background py-4 sticky top-0 z-50 border-b-2 border-amber-600 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/logo.png"
                alt="Bar HaEven Logo"
                width={51.1}
                height={48.8}
                priority
              />
            </Link>
          </div>

          <div className="md:hidden flex-shrink-0">
            <h3 className="font-bold">תשתו בירה, יהיה בסדר!</h3>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-amber-100"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center flex-1">
            <ul
              className="flex gap-8 items-center justify-center w-full"
              dir="rtl"
            >
              {navigationItems.map((item) => {
                const ElementToRender = item.external ? "a" : Link;
                return (
                  <li key={item.href}>
                    <ElementToRender
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      className="text-lg font-medium hover:text-amber-600 transition-colors"
                    >
                      {item.label}
                    </ElementToRender>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4" dir="rtl">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium hover:text-amber-600 block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
