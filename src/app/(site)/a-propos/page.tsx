// src/app/(site)/a-propos/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos — AKSO Construction",
  description:
    "AKSO Construction : conduite de travaux TCE, rénovation et construction. Pilotage rigoureux, transparence et qualité à chaque étape.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  const badges = [
    { src: "/images/assurances/SMABTP.png", alt: "Assurance SMA BTP" },
    { src: "/images/assurances/FFBIDF.png", alt: "Fédération Française du Bâtiment Île-de-France" },
    { src: "/images/assurances/CMAP.png", alt: "Chambre des Métiers et de l’Artisanat — Paris" },
    { src: "/images/assurances/CQCMA.png", alt: "Certification CQ CMA" },
  ];

  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* ===== Titre & texte client ===== */}
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">À propos d’AKSO</h1>
        <div className="mt-3 space-y-4 text-gray-700">
          <p>
            Après 10 années d&apos;expérience dans la conduite de travaux et responsable d’opérations,
            nous mettons à profit une solide expertise technique pour piloter des projets de construction neuf,
            de rénovation et de réhabilitation tous corps d’état (TCE). Ingénieur travaux de formation, nous
            dirigeons chaque opération avec rigueur, méthode et une parfaite maîtrise des enjeux techniques et
            réglementaires.
          </p>
          <p>
            Nous avons participé à des projets d&apos;envergure, en passant par de la réhabilitation d&apos;hôtellerie
            de luxe et des programmes de construction neuf de plusieurs bâtiments. Forts de ce savoir-faire, nous avons
            créé AKSO pour offrir à nos clients un accompagnement sur-mesure et engagé.
          </p>
        </div>
      </header>

      {/* ===== Notre approche ===== */}
      <section className="mt-8 max-w-3xl">
        <h2 className="text-2xl font-semibold">Notre approche</h2>
        <div className="mt-2 space-y-4 text-gray-700">
          <p>
            Chez AKSO, chaque chantier est bien plus qu’un simple projet : c’est une mission unique que nous abordons
            avec rigueur et attention. Chaque projet est suivi par un interlocuteur dédié, qui devient votre point de
            contact privilégié tout au long du processus.
          </p>
          <p>
            Cette organisation nous permet de prendre des décisions rapidement, de réagir efficacement aux imprévus et
            de garantir un accompagnement clair et personnalisé. De l’étude initiale à la livraison finale, nous vous
            assurons transparence, fiabilité et qualité à chaque étape.
          </p>
        </div>
      </section>

      {/* ===== Assurances & adhésions (logos + légendes) — sans encadrement ===== */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Assurances & adhésions</h2>

        <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "/images/assurances/CMAP.png",
              alt: "Chambre des Métiers et de l’Artisanat — Paris",
              caption: "Membre de la Chambre des Métiers et de l’Artisanat de Paris",
            },
            {
              src: "/images/assurances/SMABTP.png",
              alt: "SMA BTP",
              caption: "Assurée par la SMA BTP — spécialiste des pros de la construction",
            },
            {
              src: "/images/assurances/FFBIDF.png",
              alt: "Fédération Française du Bâtiment — Île-de-France",
              caption: "Membre de la FFB (Île-de-France)",
            },
            {
              src: "/images/assurances/CQCMA.png",
              alt: "Charte Qualité CMA",
              caption: "Titulaire de la charte Qualité, Confiance, Performance & Excellence (CMA)",
            },
          ].map((item) => (
            <li key={item.src} className="flex">
              <figure className="mx-auto text-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={260}
                  height={110}
                  sizes="(min-width:1024px) 260px, (min-width:640px) 200px, 160px"
                  className="mx-auto h-14 sm:h-16 lg:h-20 w-auto object-contain"
                />
                <figcaption className="mt-3 text-sm leading-snug text-gray-700 max-w-[26ch] mx-auto">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-gray-600">
          Des certifications ou labels complémentaires peuvent être mobilisés selon la nature des lots.
        </p>
      </section>

      {/* ===== Message + CTA contact — sans encadrement ===== */}
      <section className="mt-14 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          <span className="uppercase">Envie de partager un projet avec nous</span> ?
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border px-5 py-2.5 text-sm font-medium hover:shadow-sm transition"
          >
            Nous contacter
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center rounded-xl border px-5 py-2.5 text-sm font-medium hover:shadow-sm transition"
          >
            {SITE.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
