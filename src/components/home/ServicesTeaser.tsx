// src/components/home/ServicesTeaser.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

// Rénovation d'abord, puis Construction
const HOME_ORDER = ["renovation-interieure", "construction-maison"] as const;
const ORDER_INDEX: Record<string, number> = HOME_ORDER.reduce((acc, slug, i) => {
  acc[slug] = i;
  return acc;
}, {} as Record<string, number>);

export function ServicesTeaser() {
  const items = SERVICES
    .filter((s) => s.slug in ORDER_INDEX)
    .sort((a, b) => ORDER_INDEX[a.slug] - ORDER_INDEX[b.slug]);

  return (
    <section className="py-16">
      <Container>
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Nos services</h2>
          <p className="mt-2 text-gray-600">
            Construction neuve et rénovation : une équipe unique, la même exigence.
          </p>
        </header>

        <div className="grid gap-8 md:gap-10">
          {items.map((service, idx) => {
            const imageOnRight = idx % 2 === 0; // alterne
            return (
              <article
                key={service.slug}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-sm border p-4 md:p-6 bg-white"
              >
                {/* Image (à droite pour le 1er, à gauche pour le 2nd) */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={idx === 0}
                  />
                </div>

                {/* Texte (inverse de l'image) */}
                <div
                  className={`flex flex-col gap-3 justify-center ${
                    imageOnRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-justify">{service.description}</p>

                  {service.bullets?.length ? (
                    <ul className="space-y-2">
                      {service.bullets.map((b, i) => (
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
                  ) : null}

                  <div className="pt-2">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border hover:shadow-sm transition"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
