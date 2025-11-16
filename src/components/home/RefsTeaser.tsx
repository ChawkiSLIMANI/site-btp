import Image from "next/image";
import Link from "next/link";
import { REALISATIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function RefsTeaser() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Réalisations personnelles</h2>
          <Link
            href="/realisations"
            className="text-cyan-700 font-medium hover:underline"
          >
            Voir toutes →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.slice(0, 3).map((realisation) => (
            <div
              key={realisation.slug}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={realisation.cover}
                  alt={realisation.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 100vw"
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {realisation.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {realisation.city} — {realisation.year}
                </p>
                {realisation.excerpt && (
                  <p className="text-sm text-gray-600 mb-4">
                    {realisation.excerpt}
                  </p>
                )}
                <Link
                  href={`/realisations#${realisation.slug}`}
                  className="text-cyan-700 font-medium hover:underline"
                >
                  Détails →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
