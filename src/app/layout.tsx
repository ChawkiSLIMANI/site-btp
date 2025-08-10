import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entreprise BTP — Construction & Rénovation",
  description: "Votre partenaire de confiance pour vos travaux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
