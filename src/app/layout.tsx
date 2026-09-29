import type { Metadata } from "next";
import { Assistant, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
});

const frank = Frank_Ruhl_Libre({
  variable: "--font-frank",
  subsets: ["latin", "hebrew"],
  weight: ["500", "700", "900"],
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
      <body className={`${assistant.variable} ${frank.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
