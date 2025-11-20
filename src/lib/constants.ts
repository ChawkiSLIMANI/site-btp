// src/lib/constants.ts (extraits pertinents)
import type { Service, Realisation, Testimonial, SiteSettings } from "@/lib/types";
// ⬇️ importe avec un alias pour éviter tout conflit de nom local
import { gallery } from "@/lib/galleries";


const rangeFiles = (prefix: string, start: number, end: number, ext = ".png") =>
  Array.from({ length: end - start + 1 }, (_, i) => `${prefix}_${i + start}${ext}`);

export const HERO_LEAD = "/images/placeholders/Carroussel_1.png";


export const SITE: SiteSettings = {
  name: "AKSO Construction",
  baseline:
    "Construction & rénovation tous corps d’état — pilotage rigoureux, transparence et qualité durable",
  phone: "01 89 70 34 90",
  email: "j.aksou@akso-construction.fr",
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
    image: "/images/placeholders/REHABILITATION.jpg", // ton image de réhabilitation
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
    image: "/images/realisations/NETTER_DEBERGUE_6.png",
  },
];



export const REALISATIONS: Realisation[] = [
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
{
  slug: "netter-debergue-91-logements-creche",
  title: "Programme « NETTER DEBERGUE » — 91 logements + crèche",
  type: "Construction",
  city: "Paris 12e (75)",
  year: 2023,
  cover: gallery("NETTER_DEBERGUE", 10)[0],     // 1 → 10
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
    slug: "beaurepaire-pantin-17-logements",
    title: "Programme « BEAUREPAIRE » — 17 logements + 2 commerces + crèche",
    type: "Construction",
    city: "Pantin (93)",
    year: 2025,
    cover: gallery("BEAUREPAIRE", 3)[0],
    gallery: gallery("BEAUREPAIRE", 3),
    excerpt:
      "Immeuble R+5, 17 logements (dont 2 duplex), crèche au RDC, parking en sous-sol avec ascenseur voiture.",
    meta: {
      address: "1 rue Beaurepaire, 93500 Pantin",
      moa: "INEADOMO",
      moe: "Maud Caubet — MOE EXE : Cabinet J2",
      eg: "PRESTIBAT",
      amount: "5 M€ TCE",
      duration: "14 mois",
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
    // 🔥 PÉRIGNY-SUR-YERRES (Microplast) — ajouté
    slug: "microplast-extension-usine",
    title: "MICROPLAST — Extension d’usine (fondations & reprises)",
    type: "Construction",
    city: "Périgny-sur-Yerres (94)",
    year: 2024,
    cover: gallery("PERIGNY-SUR-YERRES", 3)[0],
    gallery: gallery("PERIGNY-SUR-YERRES", 3),
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
    slug: "idf-materiaux-showroom-bureaux",
    title:
      "Île-de-France Matériaux — Showroom 650 m² + Plateaux de bureaux 890 m²",
    type: "Construction",
    city: "Argenteuil (95)",
    year: 2025,
    cover: gallery("ILE_DE_France_Matériaux", 4)[0],
    gallery: gallery("ILE_DE_France_Matériaux", 4),
    excerpt:
      "Immeuble R+3 + 1 sous-sol : showroom (RDC & R-1), plateaux de bureaux à partir du R+1.",
    meta: {
      // moa: "SCI NS",
      moe: "Aurélie Cartier",
      bet: "BEGT (Structure)",
      eg: "PRESTIBAT",
      amount: "7 M€",
      duration: "18 mois",
    },
  },
  {
    // TODO: compléter avec les informations finales validées par le client
    slug: "chantier-pantin",
    title: "Chantier Pantin",
    type: "Construction",
    city: "À préciser",
    year: 2025,
    cover: gallery("Chantier_Pantin", 7, ".jpeg")[0],
    gallery: gallery("Chantier_Pantin", 7, ".jpeg"),
    excerpt: "Description à compléter après validation client.",
    meta: {
      moa: "À préciser",
      moe: "À préciser",
      eg: "À préciser",
      amount: "À confirmer",
      duration: "À confirmer",
    },
  },
  {
    // TODO: compléter avec les informations finales validées par le client
    slug: "chantier-bureaux",
    title: "Chantier Bureaux",
    type: "Construction",
    city: "À préciser",
    year: 2025,
    cover: gallery("Chantier_BUREAUX", 1, ".jpeg")[0],
    gallery: gallery("Chantier_BUREAUX", 1, ".jpeg"),
    excerpt: "Description à compléter après validation client.",
    meta: {
      moa: "À préciser",
      moe: "À préciser",
      eg: "À préciser",
      amount: "À confirmer",
      duration: "À confirmer",
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jean Dupont",
    quote: "Un travail impeccable, respect des délais et communication claire.",
    city: "Paris",
    rating: 5
  },
  {
    name: "Sophie Martin",
    quote: "Ma maison est exactement comme je l'avais imaginée, merci à toute l'équipe.",
    city: "Boulogne-Billancourt",
    rating: 5
  }
];
