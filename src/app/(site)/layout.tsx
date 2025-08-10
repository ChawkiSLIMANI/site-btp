import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col border-2 border-transparent">
      {/* la bordure transparente sert de “traceur” visuel temporaire */}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
