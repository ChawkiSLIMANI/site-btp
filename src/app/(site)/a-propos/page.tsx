// src/app/(site)/a-propos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — AKSO Construction",
  description:
    "AKSO Construction : entreprise TCE basée à Paris. 7 ans d’expérience terrain, coordination rigoureuse, assurance SMA BTP et adhésions professionnelles.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos — AKSO Construction",
    description:
      "Entreprise TCE fondée en 2024. Pilotage chantier, partenaires qualifiés, sécurité et qualité au cœur de nos engagements.",
    type: "website",
    url: "/a-propos",
    siteName: SITE.name
  }
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">À propos</h1>
        <p className="mt-3 text-gray-700">
          AKSO est une entreprise de{" "}
          <strong>construction, réhabilitation et rénovation tous corps d’état</strong>, basée à
          Paris. Nous pilotons vos travaux avec exigence de qualité, de transparence et de
          sécurité.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <article className="rounded-2xl border p-5 md:p-6 bg-white">
            <h2 className="text-2xl font-semibold">Notre parcours</h2>
            <p className="mt-2">
              Fondée en <strong>octobre 2024</strong>, AKSO s’appuie sur{" "}
              <strong>7 ans d’expérience chantier</strong> : ingénierie et conduite de travaux
              au sein de grands groupes (EIFFAGE, DEMATHIEU BARD), puis gestion globale de
              projets en tant que responsable travaux chez PRESTIBAT. Ce parcours nous a
              permis de bâtir un réseau solide de partenaires dans tous les corps d’état.
            </p>
            <p className="mt-3">
              Notre approche : considérer chaque chantier comme une{" "}
              <strong>micro-entreprise</strong> avec un <strong>interlocuteur unique</strong>, pour
              des décisions rapides et un suivi clair de l’étude jusqu’à la livraison.
            </p>
          </article>

          <article className="rounded-2xl border p-5 md:p-6 bg-white">
            <h2 className="text-2xl font-semibold">Assurances & adhésions</h2>
            <ul className="mt-2 space-y-2">
              <li>• Assurance : <strong>SMA BTP</strong> (spécialiste des professionnels du BTP)</li>
              <li>• Membre : <strong>Chambre des Métiers et de l’Artisanat de Paris</strong></li>
              <li>• Membre : <strong>Fédération Française du Bâtiment — Île-de-France</strong></li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              Des certifications spécifiques (ex. RGE/Qualibat) sont mobilisées selon la nature du
              lot et des exigences du projet.
            </p>
          </article>

          <article className="rounded-2xl border p-5 md:p-6 bg-white">
            <h2 className="text-2xl font-semibold">Références personnelles</h2>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>Gymnase “Halle des Sports Colette Besson”</strong>, Villejuif (94) — Aménagement d’une coque brute en gymnase (MOA Ville, MOE Tougeron, EG Demathieu Bard).
              </li>
              <li>
                <strong>Programme “HELLO VILLEJUIF” — 159 logements</strong> (EG Demathieu Bard).
              </li>
              <li>
                <strong>“NETTER DEBERGUE” — 91 logements + crèche</strong>, Paris 12e (EG Demathieu Bard).
              </li>
              <li>
                <strong>Centre Culturel Coréen</strong>, Paris 8e — Rénovation d’un hôtel particulier (EG Prestibat).
              </li>
              <li>
                <strong>MICROPLAST</strong> — extension d’usine (fondations, reprises en sous-œuvre).
              </li>
            </ul>
          </article>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl border px-4 py-2 text-sm font-medium">
              Nous contacter
            </Link>
            <a href={`tel:${SITE.phone}`} className="rounded-xl border px-4 py-2 text-sm font-medium">
              {SITE.phone}
            </a>
          </div>
        </div>

        <aside className="md:col-span-1 space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border bg-gray-50">
            <Image
              src="/images/placeholders/logoak.jpg"
              alt="AKSO Construction"
              fill
              className="object-contain p-8"
            />
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Zones d’intervention</h3>
            <p className="text-sm text-gray-700 mt-1">{SITE.areas.join(" • ")}</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
