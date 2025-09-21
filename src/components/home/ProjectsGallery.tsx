// src/components/home/ProjectsGallery.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { REALISATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

// Slugs à afficher sur la Home (ordre imposé)
const HOME_REAL_SLUGS = [
  "halle-sports-collette-besson-villejuif",
  "netter-debergue-91-logements-creche",
  "centre-culturel-coreen",
] as const;

// Index d’ordre pour le tri
const ORDER_INDEX: Record<string, number> = HOME_REAL_SLUGS.reduce((acc, slug, i) => {
  acc[slug] = i;
  return acc;
}, {} as Record<string, number>);

/* --- Vignette projet avec mini-carrousel (flèches) --- */
function RealisationMini({
  title,
  city,
  type,
  cover,
  gallery = [],
}: {
  title: string;
  city: string;
  type: string;
  cover: string;
  gallery?: string[];
}) {
  const images = useMemo(() => (gallery?.length ? gallery : [cover]), [gallery, cover]);
  const [idx, setIdx] = useState(0);
  const total = images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
      {/* Image courante */}
      <div className="relative w-full h-60">
        <Image
          src={images[idx]}
          alt={`${title} — photo ${idx + 1}`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
      </div>

      {/* Légende */}
      <div className="absolute bottom-4 left-4 text-white drop-shadow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">
          {city} — {type}
        </p>
      </div>

      {/* Flèches (si plusieurs images) */}
      {total > 1 && (
        <>
          <button
            aria-label="Précédent"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-9 h-9 grid place-items-center hover:bg-black/60"
          >
            ‹
          </button>
          <button
            aria-label="Suivant"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white w-9 h-9 grid place-items-center hover:bg-black/60"
          >
            ›
          </button>

          {/* Bullets (optionnel) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller à l’image ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/50"} hover:bg-white/80`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectsGallery() {
  // On garde seulement les 3 projets demandés et on les trie selon HOME_REAL_SLUGS
  const items = REALISATIONS
    .filter((r) => r.slug in ORDER_INDEX)
    .sort((a, b) => ORDER_INDEX[a.slug] - ORDER_INDEX[b.slug]);

  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-10 text-center">Réalisations personnelles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((r) => (
            <RealisationMini
              key={r.slug}
              title={r.title}
              city={r.city}
              type={r.type}
              cover={r.cover}
              gallery={r.gallery}
            />
          ))}
        </div>

        {/* CTA vers la page /realisations */}
        <div className="mt-8 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center rounded-xl border px-5 py-2.5 text-sm font-medium hover:shadow-sm transition"
            aria-label="Voir toutes nos réalisations"
          >
            Voir toutes nos réalisations →
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsGallery;
