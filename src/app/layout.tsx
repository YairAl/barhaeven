import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
});

export const metadata: Metadata = {
  title: "בר האבן",
  description: "הבר הקהילתי של אבן יהודה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.variable} antialiased`}>{children}</body>
    </html>
  );
}
