// src/app/(site)/realisations/page.tsx
import { REALISATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import RealisationCard from "@/components/realisations/RealisationCard";

export default function RealisationsPage() {
  return (
    <main className="py-12 md:py-16">
      <Container>
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
      </Container>
    </main>
  );
}
