import "@/styles/globals.css";
import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";

export const metadata: Metadata = {
  title: "AKSO - Entreprise de construction",
  description: "Votre partenaire de confiance pour vos travaux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-[#E8E2D9] text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}


const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choisis ce dont tu as besoin
  variable: "--font-elegant",
  display: "swap",
});
