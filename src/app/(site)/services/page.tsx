// src/app/(site)/services/page.tsx
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

type Service = (typeof SERVICES)[number];

function pickBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

function TwoColSection({ service, reverse = false }: { service: Service; reverse?: boolean }) {
  return (
    <section
      aria-labelledby={`service-${service.slug}`}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-sm border p-4 md:p-6 bg-white"
    >
      {/* Image (peut passer à gauche si reverse) */}
      <div className={`${reverse ? "order-1" : "order-1 md:order-2"} relative aspect-[4/3] overflow-hidden rounded-2xl`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* Texte */}
      <div className={`${reverse ? "order-2" : "order-2 md:order-1"} flex flex-col gap-3 justify-center`}>
        <h2 id={`service-${service.slug}`} className="text-2xl md:text-3xl font-semibold tracking-tight">
          {service.title}
        </h2>
        <p className="text-gray-700">{service.description}</p>

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
      </div>
    </section>
  );
}

export default function ServicesPage() {
  // ⚠️ on affiche la rénovation en premier
  const renovation = pickBySlug("renovation-interieure");
  const construction = pickBySlug("construction-maison");

  const steps = [
    {
      title: "Première visite",
      bullets: ["Analyse des besoins", "Évaluation du site"],
    },
    {
      title: "Étude & conception",
      bullets: ["Descriptif travaux", "Plans de projet"],
    },
    {
      title: "Phase exécution",
      bullets: ["Planning", "Coordination des équipes AKSO"],
    },
    {
      title: "Réception",
      bullets: ["Contrôle qualité", "Remise des documents", "Levée de réserves"],
    },
  ] as const;

  return (
    <main className="py-12 md:py-16">
      <Container>
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Nos services</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Nous intervenons en <strong>rénovation</strong> et en <strong>construction</strong>, avec la même exigence
            de qualité et de suivi.
          </p>
        </header>

        {/* Sections 2 colonnes */}
        <div className="grid gap-8 md:gap-10">
          {renovation && <TwoColSection service={renovation} reverse={false} />}
          {construction && <TwoColSection service={construction} reverse />}
        </div>

        {/* ===== Processus (maquette client) ===== */}
        <section id="processus" className="mt-12">
          <div className="rounded-2xl border bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Nos services – processus</h2>

            <div className="mt-3 space-y-3 text-gray-700">
              <p>
                Dans le cadre de missions de conception-réalisation, nous vous accompagnons de la définition précise de
                votre programme jusqu’à votre installation, garantissant un suivi rigoureux et un pilotage optimisé.
              </p>
              <p>
                Nous assurons la coordination des intervenants, le respect des délais, des coûts et de la qualité
                d’exécution. Notre valeur ajoutée réside dans notre capacité à anticiper les aléas, à mobiliser les bons
                partenaires et à garantir la réussite de vos projets dans le respect des objectifs fixés.
              </p>
              <p>
                Choisir AKSO, c’est s’engager avec un partenaire qui place la transparence au cœur de sa démarche, en
                garantissant une communication claire et régulière à chaque étape du projet.
              </p>
            </div>

            {/* Étapes */}
            <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <div className="h-full rounded-xl border p-4">
                    <div className="text-xs text-gray-500 mb-1">Étape {i + 1}</div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span aria-hidden>•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Flèche vers l’étape suivante (desktop seulement) */}
                  {i < steps.length - 1 && (
                    <svg
                      aria-hidden
                      className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Container>
    </main>
  );
}
