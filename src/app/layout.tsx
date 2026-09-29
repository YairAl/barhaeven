import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Karantina, Rubik } from "next/font/google";
import "./globals.css";

const karantina = Karantina({
  variable: "--font-karantina",
  subsets: ["latin", "hebrew"],
  weight: ["400", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
});

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["latin", "hebrew"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "בר האבן | הבר הקהילתי של אבן יהודה",
  description:
    "בר האבן – הבר הקהילתי של אבן יהודה. כל שישי 20:00–02:00, הופעות חיות, בירה במחיר הוגן והחבר'ה שגדלתם איתם.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${karantina.variable} ${rubik.variable} ${frank.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
