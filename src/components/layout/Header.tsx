'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-cyan-700 ${
                pathname === l.href ? 'text-cyan-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Burger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-300 p-2"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`py-2 ${pathname === l.href ? 'text-cyan-700 font-semibold' : 'text-gray-800'}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {/* <Link
              href="/devis"
              className="mt-2 inline-flex rounded-2xl bg-cyan-700 px-4 py-2 text-white font-medium"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
