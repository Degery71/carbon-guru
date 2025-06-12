import type { Metadata } from "next";
import "./globals.css";

import { Oswald } from "next/font/google";
export const metadata: Metadata = {
  title: "CARBÓN GURU",
  description: "Comida callejera",
};

const font = Oswald({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
