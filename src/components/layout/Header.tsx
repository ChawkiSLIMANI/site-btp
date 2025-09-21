// src/components/layout/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // Fermer le menu au changement de route
  useEffect(() => setOpen(false), [pathname]);

  // Empêcher le scroll du body quand le menu est ouvert (mobile)
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Home: overlay transparent; Pages internes: sticky blanc
  const headerClass = isHome
    ? "absolute inset-x-0 top-0 z-50 bg-transparent"
    : "sticky top-0 z-50 bg-white/90 backdrop-blur border-b";

  const linkBase = "text-sm font-medium transition-colors";
  const linkColor = isHome ? "text-white hover:text-white/80" : "text-gray-700 hover:text-cyan-700";
  const linkActive = isHome ? "text-white" : "text-cyan-700";

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="AKSO Construction - Accueil">
          <div className="relative h-8 w-32 md:w-40">
            <Image
              src="/images/placeholders/logoak.jpg"
              alt="AKSO Construction"
              fill
              className={`object-contain ${isHome ? "invert" : ""}`}
              priority
            />
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} ${active ? linkActive : linkColor}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Burger */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border ${
            isHome ? "border-white/70 text-white" : "border-gray-300 text-gray-900"
          }`}
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-5 h-5">
            <span className={`absolute left-0 right-0 h-0.5 bg-current transition-transform ${open ? "top-2.5 rotate-45" : "top-1"}`} />
            <span className={`absolute left-0 right-0 h-0.5 bg-current transition-opacity top-2.5 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 right-0 h-0.5 bg-current transition-transform ${open ? "top-2.5 -rotate-45" : "top-4"}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className={`px-4 py-3 flex flex-col gap-2 ${isHome ? "bg-black/60 text-white" : "bg-white"}`}>
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-base ${
                  active
                    ? isHome
                      ? "bg-white/10"
                      : "text-cyan-700 bg-cyan-50"
                    : isHome
                    ? "hover:bg-white/10"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

// ✅ double export pour éviter les erreurs d'import
export default Header;
