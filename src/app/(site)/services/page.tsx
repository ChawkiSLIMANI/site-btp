// src/app/(site)/services/page.tsx
import Image from "next/image";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import type { Service } from "@/lib/types";

function TwoColSection({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <section
      aria-labelledby={`service-${service.slug}`}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-sm border p-4 md:p-6 bg-white"
    >
      {/* Image */}
      <div
        className={`${reverse ? "order-1" : "order-1 md:order-2"
          } relative aspect-[4/3] overflow-hidden rounded-2xl`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          quality={90}
        />
      </div>

      {/* Texte */}
      <div
        className={`${reverse ? "order-2" : "order-2 md:order-1"
          } flex flex-col gap-3 justify-center`}
      >
        <h2
          id={`service-${service.slug}`}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          {service.title}
        </h2>

        {/* Use fullDescription if available, otherwise fallback to description */}
        {service.fullDescription ? (
          <div className="space-y-3 text-gray-700 text-justify">
            {service.fullDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="text-gray-700 text-justify">{service.description}</p>
        )}

        {service.bullets?.length ? (
          <ul className="mt-2 space-y-2">
            {service.bullets.map((b, i) => (
              <li key={`${b}-${i}`} className="flex items-start gap-2">
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
  const { processSection } = SITE_CONFIG.servicesPage;
  const { title: pageTitle, subtitle } = SITE_CONFIG.home.services; // Reusing Home title or use a dedicated one

  return (
    <main className="py-12 md:py-16">
      <Container>
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {subtitle}
          </p>
        </header>

        {/* Sections 2 colonnes */}
        <div className="grid gap-8 md:gap-10">
          {SERVICES.map((service, idx) => (
            <TwoColSection
              key={service.slug}
              service={service}
              reverse={idx % 2 !== 0} // Alternate: 2nd item (index 1) is reverse
            />
          ))}
        </div>

        {/* ===== Processus Section ===== */}
        <section id="processus" className="mt-12">
          <div className="rounded-2xl border bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold">{processSection.title}</h2>

            <div className="mt-3 space-y-3 text-gray-700 text-justify">
              {processSection.intro.map((p, i) => (
                // Highlight words in **bold** using simple split logic or dangerouslySetInnerHTML?
                // For now, let's keep it simple text or simple bold parsing if needed.
                // The original text had <strong>. Let's just use dangerouslySetInnerHTML for flexibility
                // or just render text. The config has Markdown-like syntax.
                // For simplicity in this template, we'll just render the string.
                <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </div>

            {/* Étapes */}
            <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSection.steps.map((s, i) => (
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
                  {i < processSection.steps.length - 1 && (
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
