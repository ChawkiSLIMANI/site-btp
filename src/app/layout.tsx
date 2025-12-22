// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Aksou Coaching - Coach des leaders sous pression",
  description: "Gagnez en lucidité, en performance et en leadership quand tout s’accélère.",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-black text-white antialiased font-sans selection:bg-brand selection:text-black">
        {children}
      </body>
    </html>
  );
}
