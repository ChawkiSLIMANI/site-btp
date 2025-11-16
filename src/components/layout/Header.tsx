// src/components/layout/Header.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };
const NAV: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
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
    if (!isHome) { setOverHero(false); return; }
    const hero = document.getElementById("hero");
    if (!hero) {
      setOverHero(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(hero);
    return () => io.disconnect();
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
    ? "bg-transparent"
    : "bg-white/90 backdrop-blur border-b";
  const headerBase = `${headerPosition} z-50 w-full transition-colors duration-200 ${headerAppearance}`;

  const linkBase = "text-sm font-medium transition-colors";
  const linkColor = isTransparent
    ? "text-white hover:text-white/80"
    : "text-gray-700 hover:text-cyan-700";
  const linkActive = isTransparent ? "text-white" : "text-cyan-700";

  return (
    <>
      <header className={headerBase}>
        <div ref={barRef} className="container mx-auto pl-2 pr-4 sm:px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="AKSO Construction - Accueil">
            <div className="relative h-12 md:h-14 w-48 md:w-64 translate-y-[2px]">
              <Image
                src="/images/placeholders/logoak.png"
                alt="AKSO Construction"
                fill
                sizes="(min-width: 768px) 256px, 192px"
                className={`object-contain ${isTransparent ? "invert" : ""}`}
                priority
              />
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
              isTransparent ? "border-white/70 text-white" : "border-gray-300 text-gray-900"
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
          <nav className={`px-4 py-3 flex flex-col gap-2 ${
            isTransparent ? "bg-black/60 text-white" : "bg-white"
          }`}>
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base ${
                  active
                    ? isTransparent
                      ? "bg-white/10"
                      : "text-cyan-700 bg-cyan-50"
                    : isTransparent
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
      <div
        aria-hidden
        className="shrink-0 transition-[height] duration-200"
        style={{ height: isTransparent ? 0 : headerHeight }}
      />
    </>
  );
}

export default Header;
