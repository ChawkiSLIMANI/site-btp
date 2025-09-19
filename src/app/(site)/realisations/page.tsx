"use client";

import { REALISATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { MiniCarousel } from "@/components/realisations/MiniCarousel";

export default function RealisationsPage() {
  return (
    <section className="py-16">
      <Container>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Nos réalisations</h1>
          <p className="mt-2 text-gray-600">
            Une sélection de chantiers livrés en construction et rénovation.
          </p>
        </header>

        {REALISATIONS.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {REALISATIONS.map((realisation) => {
              const images =
                realisation.gallery?.length
                  ? realisation.gallery
                  : realisation.cover
                  ? [realisation.cover]
                  : [];

              return (
                <article
                  key={realisation.slug}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* Mini carrousel sur la vignette */}
                  <MiniCarousel images={images} alt={realisation.title} />

                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-1">{realisation.title}</h2>

                    {/* Meta (type / ville / année) si présents */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
                      {realisation.type && (
                        <span className="inline-flex items-center rounded-full border px-2 py-1">
                          {realisation.type}
                        </span>
                      )}
                      {realisation.city && (
                        <span className="inline-flex items-center rounded-full border px-2 py-1">
                          {realisation.city}
                        </span>
                      )}
                      {realisation.year && (
                        <span className="inline-flex items-center rounded-full border px-2 py-1">
                          {realisation.year}
                        </span>
                      )}
                    </div>

                    {realisation.excerpt && (
                      <p className="text-gray-700 text-sm">{realisation.excerpt}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p>Aucune réalisation pour le moment.</p>
        )}
      </Container>
    </section>
  );
}
