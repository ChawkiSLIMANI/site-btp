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
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-sm border p-4 md:p-6 bg-white`}
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

  return (
    <main className="py-12 md:py-16">
      <Container>
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Nos services</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Nous intervenons en <strong>rénovation</strong> et en <strong>construction</strong>, avec la même exigence
            de qualité et de suivi.
          </p>
        </header>

        <div className="grid gap-8 md:gap-10">
          {renovation && <TwoColSection service={renovation} reverse={false} />}
          {construction && <TwoColSection service={construction} reverse />}
        </div>
      </Container>
    </main>
  );
}
