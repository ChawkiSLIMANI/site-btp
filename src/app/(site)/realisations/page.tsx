// src/app/(site)/realisations/page.tsx
import { AKSO_REALISATIONS, REALISATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import RealisationCard from "@/components/realisations/RealisationCard";

export default function RealisationsPage() {
  return (
    <main className="py-12 md:py-16">
      <Container>
        <section id="realisations-personnelles">
          <header className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Réalisations personnelles</h1>
            <p className="mt-2 text-gray-600 max-w-3xl">
              Sélection de chantiers en construction et rénovation. Détails (MOA/MOE, montants, durées) disponibles sur chaque fiche.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REALISATIONS.map((r) => (
              <RealisationCard key={r.slug} r={r} />
            ))}
          </div>
        </section>

        <section
          id="realisations-akso"
          className="mt-16 md:mt-20 border-t border-gray-200 pt-10"
          aria-labelledby="realisations-akso-title"
        >
          <header className="mb-6 md:mb-8">
            <h2 id="realisations-akso-title" className="text-3xl md:text-4xl font-bold">
              Réalisation Akso
            </h2>
            <p className="mt-2 text-gray-600 max-w-3xl">
              Projets livrés directement par l&apos;équipe AKSO Construction. Les détails des chantiers seront ajoutés prochainement.
            </p>
          </header>

          {AKSO_REALISATIONS.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {AKSO_REALISATIONS.map((r) => (
                <RealisationCard key={r.slug} r={r} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              Aucune réalisation AKSO n&apos;est renseignée pour le moment. Ajoutez vos projets dans <code>AKSO_REALISATIONS</code> pour les afficher ici.
            </p>
          )}
        </section>
      </Container>
    </main>
  );
}
