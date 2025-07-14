import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playFairDisplay = Playfair_Display({
  variable: "--font-play-fair-display",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calma",
  description:
    "Calma é um app para psicólogos organizarem suas consultas, pacientes e anotações clínicas. Use com calma — foi feito pra isso.",
  openGraph: {
    images: "/assets/calma.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/calma.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playFairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
