// src/components/home/ServicesTeaser.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

// Slugs à afficher en Home dans l'ordre souhaité (1) Rénovation (2) Construction
const HOME_ORDER = ["renovation-interieure", "construction-maison"] as const;

// Index -> position (pour le tri), sans utiliser Map (évite le souci de types)
const ORDER_INDEX: Record<string, number> = HOME_ORDER.reduce((acc, slug, i) => {
  acc[slug] = i;
  return acc;
}, {} as Record<string, number>);

export function ServicesTeaser() {
  const items = SERVICES
    // ne garder que les services listés dans HOME_ORDER
    .filter((s) => s.slug in ORDER_INDEX)
    // trier selon l'ordre défini ci-dessus (rénovation d'abord)
    .sort((a, b) => ORDER_INDEX[a.slug] - ORDER_INDEX[b.slug]);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nos services</h2>
          <p className="mt-2 text-gray-600">
            Construction neuve et rénovation : une équipe unique, la même exigence.
          </p>
        </header>

        <div className="grid gap-8 md:gap-10">
          {items.map((service, idx) => (
            <article
              key={service.slug}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-sm border p-4 md:p-6 bg-white"
            >
              {/* Texte */}
              <div className="order-2 md:order-1 flex flex-col gap-3 justify-center">
                <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets?.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        aria-hidden
                        className="mt-1 h-5 w-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border hover:shadow-sm transition"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 md:order-2 relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={idx === 0}
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
