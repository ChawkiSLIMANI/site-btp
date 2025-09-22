// src/components/realisations/RealisationCard.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Realisation } from "@/lib/types";

export default function RealisationCard({ r }: { r: Realisation }) {
  const images = useMemo(() => (r.gallery?.length ? r.gallery : [r.cover]), [r.gallery, r.cover]);
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const total = images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <article className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      {/* vignette + carrousel minimal */}
      <div className="relative h-56">
        <Image
          src={images[idx]}
          alt={`${r.title} — photo ${idx + 1}`}
          fill
          className="object-cover"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          priority={false}
        />
        {total > 1 && (
          <>
            <button
              aria-label="Précédent"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-black/40 text-white hover:bg-black/60"
            >
              ‹
            </button>
            <button
              aria-label="Suivant"
              onClick={next}
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
        <p className="text-sm text-gray-500">{r.city} — {r.year} — {r.type}</p>
        {r.excerpt && <p className="mt-2 text-gray-700 text-sm">{r.excerpt}</p>}

        {/* détails repliables */}
        <div className="mt-4">
          <button
            onClick={() => setOpen(v => !v)}
            className="text-sm font-medium underline underline-offset-2"
            aria-expanded={open}
          >
            {open ? "Masquer les détails" : "Détails du projet"}
          </button>
          {open && (
            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {r.meta?.address && (
                <>
                  <dt className="text-gray-500">Adresse</dt><dd>{r.meta.address}</dd>
                </>
              )}
              {r.meta?.moa && (<><dt className="text-gray-500">Maître d’ouvrage</dt><dd>{r.meta.moa}</dd></>)}
              {r.meta?.moe && (<><dt className="text-gray-500">Maître d’œuvre</dt><dd>{r.meta.moe}</dd></>)}
              {r.meta?.bet && (<><dt className="text-gray-500">BET / Économiste</dt><dd>{r.meta.bet}</dd></>)}
              {/* {r.meta?.eg && (<><dt className="text-gray-500">Entreprise</dt><dd>{r.meta.eg}</dd></>)} */}
              {r.meta?.amount && (<><dt className="text-gray-500">Montant</dt><dd>{r.meta.amount}</dd></>)}
              {r.meta?.duration && (<><dt className="text-gray-500">Durée</dt><dd>{r.meta.duration}</dd></>)}
            </dl>
          )}
        </div>
      </div>
    </article>
  );
}
