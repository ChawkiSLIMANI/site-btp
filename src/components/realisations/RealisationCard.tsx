// src/components/realisations/RealisationCard.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Realisation } from "@/lib/types";

export default function RealisationCard({ r }: { r: Realisation }) {
  const images = useMemo(() => (r.gallery?.length ? r.gallery : [r.cover]), [r.gallery, r.cover]);
  const [thumbIdx, setThumbIdx] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;

  const prev = () => setThumbIdx((i) => (i - 1 + total) % total);
  const next = () => setThumbIdx((i) => (i + 1) % total);

  const prevLightbox = () => setLightboxIdx((i) => (i - 1 + total) % total);
  const nextLightbox = () => setLightboxIdx((i) => (i + 1) % total);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        prevLightbox();
      } else if (event.key === "ArrowRight") {
        nextLightbox();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen]);

  const openLightbox = (startIdx: number) => {
    setLightboxIdx(startIdx);
    setLightboxOpen(true);
  };

  return (
    <article className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* vignette + carrousel minimal */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => openLightbox(thumbIdx)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(thumbIdx);
          }
        }}
        className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-video cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        aria-label={`Voir la galerie ${r.title}`}
      >
        <Image
          src={images[thumbIdx]}
          alt={`${r.title} — photo ${thumbIdx + 1}`}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          quality={90}
          priority={false}
        />
        {total > 1 && (
          <>
            <button
              aria-label="Précédent"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-black/40 text-white hover:bg-black/60"
            >
              ‹
            </button>
            <button
              aria-label="Suivant"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-black/40 text-white hover:bg-black/60"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* contenu */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{r.title}</h3>
        {r.excerpt && <p className="mt-2 text-gray-700 text-sm">{r.excerpt}</p>}
        {r.meta?.amount && (
          <p className="mt-2 text-sm font-semibold text-gray-800">
            Budget : <span className="font-normal text-gray-700">{r.meta.amount}</span>
          </p>
        )}
        <p className="mt-2 text-sm text-gray-500">{r.city} — {r.year} — {r.type}</p>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col justify-center"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxOpen(false);
          }}
        >
          <div className="relative mx-auto w-full max-w-4xl px-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              <Image
                key={images[lightboxIdx]}
                src={images[lightboxIdx]}
                alt={`${r.title} — photo ${lightboxIdx + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
                priority
              />
            </div>

            {total > 1 && (
              <>
                <button
                  aria-label="Image précédente"
                  onClick={(event) => {
                    event.stopPropagation();
                    prevLightbox();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/40"
                >
                  ‹
                </button>
                <button
                  aria-label="Image suivante"
                  onClick={(event) => {
                    event.stopPropagation();
                    nextLightbox();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/20 text-white hover:bg-white/40"
                >
                  ›
                </button>
              </>
            )}

            <button
              type="button"
              aria-label="Fermer la galerie"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white text-3xl"
            >
              ×
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIdx(i);
                  }}
                  aria-label={`Afficher la photo ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ${i === lightboxIdx ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
