// src/components/layout/Header.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };
const NAV: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Qui suis-je ?" },
  { href: "/services", label: "Mes Offres" },
  { href: "/realisations", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(64);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!barRef.current) return;
      setHeaderHeight(barRef.current.getBoundingClientRect().height);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Track hero visibility to switch between transparent and solid header
  const [overHero, setOverHero] = useState(isHome);
  useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      return;
    }

    let currentHero: Element | null = null;
    const io = new IntersectionObserver(
      ([entry]) => setOverHero(entry?.isIntersecting ?? false),
      { threshold: 0.01 }
    );

    const attachObserver = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        if (!currentHero) setOverHero(false);
        return;
      }
      if (hero === currentHero) return;
      if (currentHero) io.unobserve(currentHero);
      currentHero = hero;
      io.observe(hero);
    };

    attachObserver();
    const mo = new MutationObserver(attachObserver);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  const isTransparent = isHome && overHero;

  useLayoutEffect(() => {
    if (!barRef.current) return;
    setHeaderHeight(barRef.current.getBoundingClientRect().height);
  }, [isTransparent]);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const headerPosition = "fixed inset-x-0 top-0";
  const headerAppearance = isTransparent
    ? "bg-transparent py-4"
    : "bg-black/90 backdrop-blur-md border-b border-white/5 py-4";
  const headerBase = `${headerPosition} z-50 w-full transition-all duration-300 ${headerAppearance}`;

  const linkBase = "text-sm font-medium transition-colors tracking-wide";

  return (
    <>
      <header className={headerBase}>
        <div ref={barRef} className="container mx-auto pl-2 pr-4 sm:px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4" aria-label="Aksou Coaching - Accueil">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-brand shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Image
                src="/images/placeholders/logo-AC-2.jpeg"
                alt="Aksou Coaching"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                AKSOU
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand">
                Coaching
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${active ? "text-brand" : "text-white/90 hover:text-brand"}`}
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
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border ${isTransparent
              ? "border-white/70 text-white"
              : "border-white/20 text-white bg-white/5" // Force dark theme mode
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

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <nav className="px-4 py-3 flex flex-col gap-2 bg-black/95 text-white border-t border-white/10 shadow-xl">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base transition-colors ${active
                    ? "text-brand font-bold bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div
        aria-hidden
        className="shrink-0 transition-[height] duration-200"
        style={{ height: isTransparent ? 0 : headerHeight }}
      />
    </>
  );
}

export default Header;
