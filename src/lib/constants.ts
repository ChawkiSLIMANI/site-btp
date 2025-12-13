// src/lib/constants.ts (extraits pertinents)
import type { Service, Realisation, Testimonial, SiteSettings } from "@/lib/types";
// ⬇️ importe avec un alias pour éviter tout conflit de nom local
import { gallery } from "@/lib/galleries";


const rangeFiles = (prefix: string, start: number, end: number, ext = ".png") =>
  Array.from({ length: end - start + 1 }, (_, i) => `${prefix}_${i + start}${ext}`);

const buildPaths = (base: string, entries: Array<{ index: number; ext: string }>) =>
  entries.map(({ index, ext }) => `${base}_${index}${ext}`);

const BEAUREPAIRE_GALLERY = buildPaths("/images/realisations/BEAUREPAIRE", [
  { index: 1, ext: ".jpeg" },
  { index: 2, ext: ".jpeg" },
  { index: 3, ext: ".jpeg" },
  { index: 4, ext: ".jpeg" },
  { index: 5, ext: ".jpeg" },
  { index: 6, ext: ".jpeg" },
  { index: 7, ext: ".jpeg" },
  { index: 8, ext: ".png" },
  { index: 9, ext: ".png" },
  { index: 10, ext: ".png" },
]);

const ILE_DE_FRANCE_MATERIAUX_GALLERY = buildPaths("/images/realisations/ILE_DE_France_Matériaux", [
  { index: 1, ext: ".jpeg" },
  { index: 2, ext: ".png" },
  { index: 3, ext: ".png" },
  { index: 4, ext: ".png" },
  { index: 5, ext: ".png" },
]);

export const HERO_LEAD = "/images/placeholders/HeroCarroussel_1.jpg";


export const SITE: SiteSettings = {
  name: "AKSO Construction",
  baseline:
    "Construction & rénovation tous corps d’état — pilotage rigoureux, transparence et qualité durable",
  phone: "01 89 70 34 90",
  email: "Contact@akso-construction.fr",
  address: "25 rue de l’Abbé Grégoire 75006",
  hours: "Lun–Ven : 8h–18h",
  areas: ["Paris", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne"],
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/company/akso" },   // TODO
    { label: "Instagram", url: "https://www.instagram.com/akso_construction/" },          // DONE
    { label: "Facebook", url: "https://facebook.com/akso" }             // TODO
  ]
};

// SERVICES/REALISATIONS/TESTIMONIALS : tu peux garder tels quels.
// On n’affichera que Construction + Rénovation en Home.


// src/lib/constants.ts (extrait SERVICES uniquement)
export const SERVICES: Service[] = [
  {
    slug: "renovation-interieure",
    title: "Rénovation / Réhabilitation",
    description:
      "Nous donnons une nouvelle vie aux bâtiments existants. Notre équipe accompagne vos projets de rénovation, de restructuration et de modernisation en alliant respect du patrimoine, performance énergétique et confort. L’objectif : transformer sans dénaturer, valoriser l’existant et répondre aux normes actuelles tout en optimisant vos espaces.",
    bullets: [
      "Aménagement sur mesure",
      "Finitions soignées",
      "Optimisation des espaces",
    ],
    image: "/images/placeholders/RenovationRehab.jpg", // ton image de réhabilitation
  },
  {
    slug: "construction-maison",
    title: "Construction neuve",
    description:
      "En tant qu’entreprise générale, nous prenons en charge l’exécution complète de vos chantiers neufs. Nous assurons la coordination des différents corps d’état, le respect des délais et la qualité d’exécution, dans le strict suivi des plans de conception établis. Notre priorité : livrer un ouvrage conforme, durable et parfaitement maîtrisé.",
    bullets: [
      "Respect des délais",
      "Qualité d’exécution",
    ],
    image: "/images/placeholders/ConstructionNeuve.jpg",
  },
];

export const REALISATIONS: Realisation[] = [
  {
    slug: "beaurepaire-pantin-17-logements",
    title: "« Beaurepaire » — Construction neuve de 19 logements",
    type: "Construction",
    city: "Pantin (93)",
    year: 2025,
    cover: BEAUREPAIRE_GALLERY[0],
    gallery: BEAUREPAIRE_GALLERY,
    excerpt:
      "Construction neuve d’un bâtiment R+5 avec sous-sol parking et crèche au rez-de-chaussée.",
    meta: {
      address: "1 rue Beaurepaire, 93500 Pantin",
      moa: "INEADOMO",
      moe: "Maud Caubet — MOE EXE : Cabinet J2",
      eg: "PRESTIBAT",
      amount: "4 M€",
      duration: "14 mois",
    },
  },
  {
    slug: "idf-materiaux-showroom-bureaux",
    title: "Île-de-France Matériaux — Showroom 650 m² + Plateaux de bureaux 890 m²",
    type: "Construction",
    city: "Argenteuil (95)",
    year: 2025,
    cover: ILE_DE_FRANCE_MATERIAUX_GALLERY[0],
    gallery: ILE_DE_FRANCE_MATERIAUX_GALLERY,
    excerpt:
      "Immeuble R+3 + 1 sous-sol : showroom (RDC & R-1), plateaux de bureaux à partir du R+1.",
    meta: {
      moe: "Aurélie Cartier",
      bet: "BEGT (Structure)",
      eg: "PRESTIBAT",
      amount: "7 M€",
      duration: "18 mois",
    },
  },
  {
    slug: "centre-culturel-coreen",
    title: "Centre Culturel Coréen",
    type: "Rénovation",
    city: "Paris 8e (75)",
    year: 2024,
    cover: gallery("Centre_Culturel_Coréen", 3)[0],
    gallery: gallery("Centre_Culturel_Coréen", 3),
    excerpt:
      "Réhabilitation d’un hôtel particulier : bureaux, espaces d’expo, salle de théâtre.",
    meta: {
      address: "20 rue de la Boétie, 75008 Paris",
      moa: "Centre Culturel Coréen",
      moe: "STUDIOS Architecture",
      bet: "ELITHIS",
      eg: "PRESTIBAT",
      amount: "8 M€",
      duration: "8 mois",
    },
  },
  {
    slug: "microplast-extension-usine",
    title: "MICROPLAST — Extension d’usine (fondations & reprises)",
    type: "Construction",
    city: "Périgny-sur-Yerres (94)",
    year: 2024,
    cover: gallery("PERIGNY-SUR-YERRES", 3)[0],
    gallery: [
      ...gallery("PERIGNY-SUR-YERRES", 4, ".png"),
      ...gallery("PERIGNY-SUR-YERRES", [5, 6], ".webp"),
    ],
    excerpt:
      "Fondations, reprises en sous-œuvre, dallage pour l’extension (≈ 3 500 m²).",
    meta: {
      moa: "MICROPLAST",
      moe: "CUBA Architecture (EXE)",
      eg: "PRESTIBAT",
      amount: "1 M€ — Gros Œuvre",
      duration: "3 mois",
    },
  },
  {
    slug: "netter-debergue-91-logements-creche",
    title: "Programme « NETTER DEBERGUE » — 91 logements + crèche",
    type: "Construction",
    city: "Paris 12e (75)",
    year: 2023,
    cover: gallery("NETTER_DEBERGUE", 10)[0],
    gallery: gallery("NETTER_DEBERGUE", 10),
    excerpt:
      "5 bâtiments en béton préfabriqué : 91 logements, crèche 99 berceaux, voirie nouvelle, ovoïde.",
    meta: {
      moa: "RATP Habitat",
      moe: "R Architecture",
      bet: "OTIS / OREGON — Structure : CSI",
      eg: "Demathieu Bard",
      amount: "25 M€ TCE",
      duration: "25 mois",
    },
  },
  {
    slug: "halle-sports-collette-besson-villejuif",
    title: "Gymnase « Halle des Sports Collette Besson »",
    type: "Rénovation",
    city: "Villejuif (94)",
    year: 2021,
    cover: gallery("HALLE_DES_SPORTS_COLLETTE_BESSON", 3)[0],
    gallery: gallery("HALLE_DES_SPORTS_COLLETTE_BESSON", 3),
    excerpt: "Transformation d’une coque brute en gymnase complet.",
    meta: {
      moa: "Ville de Villejuif",
      moe: "TOUGERON Architecte",
      bet: "EPDC",
      eg: "Demathieu Bard",
      amount: "5,9 M€ TCE",
      duration: "12 mois",
    },
  },
  {
    slug: "hello-villejuif-159-logements",
    title: "Programme « HELLO VILLEJUIF » — 159 logements",
    type: "Construction",
    city: "Villejuif (94)",
    year: 2020,
    cover: gallery("HELLO_VILLEJUIF", 3)[0],
    gallery: gallery("HELLO_VILLEJUIF", 3),
    excerpt: "Construction neuve de 159 logements en accession.",
    meta: {
      moa: "DB Immobilier",
      moe: "TOUGERON Architecte",
      eg: "Demathieu Bard",
      amount: "20,6 M€ TCE",
      duration: "25 mois",
    },
  },
];

// Section dédiée aux réalisations AKSO (exemples à adapter avec vos projets réels)
export const AKSO_REALISATIONS: Realisation[] = [
  {
    slug: "renovation-appartement-paris-8",
    title: "Appartement Paris 8ème - Rue de Berri",
    type: "Rénovation",
    city: "Paris 8ème (75)",
    year: 2025,
    cover: "/images/realisations/appartement_paris_sejour_apres.png",
    gallery: [
      "/images/realisations/appartement_paris_sejour_avant.png",
      "/images/realisations/appartement_paris_cuisine_avant.png",
      "/images/realisations/appartement_paris_chambre_avant.png",
      "/images/realisations/appartement_paris_sejour_apres.png",
      "/images/realisations/appartement_paris_cuisine_apres.png",
      "/images/realisations/appartement_paris_chambre_apres.png",
    ],
    excerpt: "Renovation totale d'un appartement de 87m2.",
  },
];
