"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export function MiniCarousel({ images, alt, className }: Props) {
  const safeImages = images?.length ? images : [];
  const [index, setIndex] = useState(0);

  // Sécurise l’index si la liste change
  useEffect(() => {
    if (index >= safeImages.length) setIndex(0);
  }, [safeImages.length, index]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  }, [safeImages.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % safeImages.length);
  }, [safeImages.length]);

  if (!safeImages.length) {
    return (
      <div className={`relative w-full aspect-[4/3] overflow-hidden bg-gray-100 ${className ?? ""}`} />
    );
  }

  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden ${className ?? ""}`}>
      <Image
        src={safeImages[index]}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        quality={85}
        priority={false}
      />

      {/* Flèches */}
      {safeImages.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Image précédente"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-9 h-9 grid place-items-center hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-9 h-9 grid place-items-center hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination bullets */}
      {safeImages.length > 1 && (
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
          {safeImages.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
