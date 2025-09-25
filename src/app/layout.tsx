// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";

export const metadata: Metadata = {
  title: "AKSO - Entreprise de construction",
  description: "Votre partenaire de confiance pour vos travaux.",
};

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-elegant",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodoni.variable} overflow-x-hidden`}>
      <body className="flex flex-col min-h-screen bg-white text-gray-800 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
