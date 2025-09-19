// src/components/layout/Footer.tsx
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { FooterBadges } from "./FooterBadges";


const ICONS: Record<string, string> = {
  LinkedIn:
    "M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-5v-7.7c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-5V8z",
  Instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.6.6.3 1 .7 1.3 1.3.3.4.5 1.1.6 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.3-.3.6-.7 1-1.3 1.3-.4.3-1.1.5-2.3.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.6-.6-.3-1-.7-1.3-1.3-.3-.4-.5-1.1-.6-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.3.3-.6.7-1 1.3-1.3.4-.3 1.1-.5 2.3-.6C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.4-.4.2-.7.4-.9.9-.2.3-.3.8-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.4 1.7.2.4.4.7.9.9.3.2.8.3 1.7.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.4.9-.9.2-.3.3-.8.4-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.7-.9-.9-.3-.2-.8-.3-1.7-.4-1.2-.1-1.6-.1-4.7-.1zm0 2.2a5.4 5.4 0 110 10.8A5.4 5.4 0 0112 6.6zm0 2.2a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.8-2.6a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z",
  Facebook:
    "M22 12a10 10 0 10-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z",
};

export function Footer() {
  const socials = SITE.socials ?? []; // ✅ évite ts(18048)

  return (
    <footer className="mt-12 border-t border-gray-200 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-sm">
          <p className="font-semibold">{SITE.name}</p>
          <p className="opacity-80">
            {SITE.address} — {SITE.phone}
          </p>
          <a className="underline opacity-90" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
              title={s.label}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d={ICONS[s.label] ?? ICONS["LinkedIn"]} />
              </svg>
              <span className="sr-only">{s.label}</span>
            </a>
          ))}
        </div>

        <nav className="text-sm flex gap-4 opacity-90">
          <Link href="/a-propos" className="hover:underline">À propos</Link>
          <Link href="/realisations" className="hover:underline">Réalisations</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
<FooterBadges />
      <div className="py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} {SITE.name} — Tous droits réservés
      </div>
    </footer>
  );
}
