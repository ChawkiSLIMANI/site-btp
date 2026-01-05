// src/components/layout/Footer.tsx
import Link from "next/link";
import { SITE } from "@/lib/constants";

// Icône Instagram (SVG path)
const ICON_INSTAGRAM =
  "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.6.6.3 1 .7 1.3 1.3.3.4.5 1.1.6 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.3-.3.6-.7 1-1.3 1.3-.4.3-1.1.5-2.3.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.6-.6-.3-1-.7-1.3-1.3-.3-.4-.5-1.1-.6-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.3.3-.6.7-1 1.3-1.3.4-.3 1.1-.5 2.3-.6C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.4-.4.2-.7.4-.9.9-.2.3-.3.8-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.4 1.7.2.4.4.7.9.9.3.2.8.3 1.7.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.4.9-.9.2-.3.3-.8.4-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.7-.9-.9-.3-.2-.8-.3-1.7-.4-1.2-.1-1.6-.1-4.7-.1zm0 2.2a5.4 5.4 0 110 10.8A5.4 5.4 0 0112 6.6zm0 2.2a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.8-2.6a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z";

export function Footer() {
  // On garde uniquement Instagram s’il est configuré
  const instagram = (SITE.socials ?? []).find(
    (s) => s.label.toLowerCase() === "instagram"
  );

  return (
    <footer className="mt-12 border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4 text-sm">
          <div className="relative h-16 w-32">
            <img src="/images/placeholders/logo-AC-1.jpeg" alt="Aksou Coaching" className="h-full w-full object-contain object-left" />
          </div>
          <p className="font-semibold text-brand">{SITE.name}</p>
          <p className="opacity-80">
            {SITE.address}
          </p>

        </div>

        {/* Instagram seulement */}
        <div className="flex items-center gap-3">
          {instagram && (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              title="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d={ICON_INSTAGRAM} />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          )}
        </div>

        <nav className="text-sm flex gap-4 opacity-90">
          <Link href="/a-propos" className="hover:underline">Qui suis-je ?</Link>
          <Link href="/services" className="hover:underline">Mes Offres</Link>
          <Link href="/realisations" className="hover:underline">Témoignages</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>

      <div className="py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} {SITE.name} — SIREN : 839 341 468 00016

      </div>
    </footer>
  );
}
