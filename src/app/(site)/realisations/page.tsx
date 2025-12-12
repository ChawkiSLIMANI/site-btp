// src/app/(site)/realisations/page.tsx
import { AKSO_REALISATIONS, REALISATIONS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import RealisationCard from "@/components/realisations/RealisationCard";

export default function RealisationsPage() {
  const { title: pageTitle } = SITE_CONFIG.home.projects; // Using Home "Portfolio" title or add a specific one if needed
  const secondaryTitle = "Autres Réalisations"; // Generic title for the second section

  return (
    <main className="py-12 md:py-16">
      <Container>
        <section id="realisations-principales">
          <header className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
            <p className="mt-2 text-gray-600 max-w-3xl">
              Sélection de projets récents.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REALISATIONS.map((r) => (
              <RealisationCard key={r.slug} r={r} />
            ))}
          </div>
        </section>

        <section
          id="realisations-secondaires"
          className="mt-16 md:mt-20 border-t border-gray-200 pt-10"
          aria-labelledby="realisations-secondaires-title"
        >
          <header className="mb-6 md:mb-8">
            <h2 id="realisations-secondaires-title" className="text-3xl md:text-4xl font-bold">
              {secondaryTitle}
            </h2>
          </header>

          {AKSO_REALISATIONS.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AKSO_REALISATIONS.map((r) => (
                <RealisationCard key={r.slug} r={r} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              Aucune autre réalisation pour le moment.
            </p>
          )}
        </section>
      </Container>
    </main>
  );
}
