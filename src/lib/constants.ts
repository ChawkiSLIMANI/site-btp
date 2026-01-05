// src/lib/constants.ts
import type { Service, Realisation, SiteSettings } from "@/lib/types";
import { gallery } from "@/lib/galleries";

// Images imports for Hero (Static imports for better Next.js Image handling)
// Note: We use require/import in this file so they can be passed to the config
// If you prefer strict "string paths", you can just use strings, but we lose blur-data.
// For the template, we'll suggest using Static imports where possible or public paths.

/* --- IMAGES PLACEHOLDERS (To be replaced by real assets) --- */
const HERO_SLIDE_1 = "/images/placeholders/HeroCarroussel_1.jpg";
const HERO_SLIDE_2 = "/images/placeholders/HeroCarroussel_2.jpg";
const HERO_SLIDE_3 = "/images/placeholders/HeroCarroussel_3.jpg";


/* --- HELPERS --- */
const buildPaths = (base: string, entries: Array<{ index: number; ext: string }>) =>
  entries.map(({ index, ext }) => `${base}_${index}${ext}`);

/* --- GALLERIES (Keep existing logic) --- */
const BEAUREPAIRE_GALLERY = buildPaths("/images/realisations/BEAUREPAIRE", [
  { index: 1, ext: ".jpeg" }, { index: 2, ext: ".jpeg" }, { index: 3, ext: ".jpeg" },
  { index: 4, ext: ".jpeg" }, { index: 5, ext: ".jpeg" }, { index: 6, ext: ".jpeg" },
  { index: 7, ext: ".jpeg" }, { index: 8, ext: ".png" }, { index: 9, ext: ".png" }, { index: 10, ext: ".png" },
]);

const ILE_DE_FRANCE_MATERIAUX_GALLERY = buildPaths("/images/realisations/ILE_DE_France_Matériaux", [
  { index: 1, ext: ".jpeg" }, { index: 2, ext: ".png" }, { index: 3, ext: ".png" },
  { index: 4, ext: ".png" }, { index: 5, ext: ".png" },
]);


/* =========================================================================
   SITE CONFIGURATION (THE SOURCE OF TRUTH)
   ========================================================================= */

export const SITE_CONFIG = {
  /** General Site Settings (Contact, Socials, etc.) */
  general: {
    name: "Aksou Coaching",
    baseline: "Coach des leaders sous pression",
    email: "contact@aksou-coaching.com",
    address: "Paris",
    hours: "Lun–Ven : 9h–18h",
    areas: ["Paris", "Île-de-France"],
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com/" },
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "Facebook", url: "https://facebook.com/" }
    ]
  } as SiteSettings,

  /** Navigation & Labels */
  labels: {
    services: "Nos services",
    portfolio: "Réalisations",
    contact: "Contact",
    moreInfo: "En savoir plus →",
    viewAllProjects: "Voir toutes nos réalisations →"
  },

  /* Home Page Configuration */
  home: {
    hero: {
      slides: [
        { src: HERO_SLIDE_1, alt: "Illustration 1" },
        { src: HERO_SLIDE_2, alt: "Illustration 2" },
        { src: HERO_SLIDE_3, alt: "Illustration 3" },
      ]
    },
    services: {
      title: "Nos services",
      subtitle: "Une expertise reconnue au service de vos projets.",
      // Define which services show on Home and in what order
      displayOrder: ["renovation-interieure", "construction-maison"]
    },
    projects: {
      title: "Nos Réalisations",
      displayOrder: [
        "halle-sports-collette-besson-villejuif",
        "netter-debergue-91-logements-creche",
        "centre-culturel-coreen"
      ]
    }
  },

  /** Services Process Section */
  servicesPage: {
    processSection: {
      title: "Notre Processus",
      intro: [
        "Nous vous accompagnons à chaque étape de votre projet, de la définition de vos besoins jusqu'à la livraison finale.",
        "Notre méthodologie éprouvée garantit le respect des délais et une qualité irréprochable.",
        "La transparence et la communication sont au cœur de notre démarche."
      ],
      steps: [
        { title: "Découverte", bullets: ["Analyse des besoins", "Étude de faisabilité"] },
        { title: "Conception", bullets: ["Propositions", "Validation"] },
        { title: "Réalisation", bullets: ["Suivi opérationnel", "Contrôle qualité"] },
        { title: "Livraison", bullets: ["Réception", "Satisfaction client"] },
      ]
    }
  }
};

/* --- SERVICES DATA --- */
// Exporting strictly as 'Service[]' for type safety, but defined here.
export const SERVICES: Service[] = [
  {
    slug: "renovation-interieure",
    title: "Rénovation / Réhabilitation",
    description:
      "Nous donnons une nouvelle vie aux bâtiments existants. Notre équipe accompagne vos projets de rénovation...",
    fullDescription: [
      "Nous donnons une nouvelle vie aux bâtiments existants.",
      "Notre équipe accompagne vos projets de rénovation, de restructuration et de modernisation en alliant respect du patrimoine, performance énergétique et confort.",
      "L’objectif : transformer sans dénaturer, valoriser l’existant et répondre aux normes actuelles tout en optimisant vos espaces."
    ],
    bullets: [
      "Aménagement sur mesure",
      "Finitions soignées",
      "Optimisation des espaces",
    ],
    image: "/images/placeholders/REHABILITATION.jpg",
  },
  {
    slug: "construction-maison",
    title: "Construction neuve",
    description:
      "En tant qu’entreprise générale, nous prenons en charge l’exécution complète de vos chantiers neufs...",
    fullDescription: [
      "En tant qu’entreprise générale, nous prenons en charge l’exécution complète de vos chantiers neufs.",
      "Nous assurons la coordination des différents corps d’état, le respect des délais et la qualité d’exécution, dans le strict suivi des plans de conception établis.",
      "Notre priorité : livrer un ouvrage conforme, durable et parfaitement maîtrisé."
    ],
    bullets: [
      "Respect des délais",
      "Qualité d’exécution",
    ],
    image: "/images/realisations/NETTER_DEBERGUE_6.png",
  },
];

/* --- REALISATIONS DATA --- */
export const REALISATIONS: Realisation[] = [
  {
    slug: "beaurepaire-pantin-17-logements",
    title: "« Beaurepaire » — Construction neuve de 19 logements",
    type: "Construction",
    city: "Pantin (93)",
    year: 2025,
    cover: BEAUREPAIRE_GALLERY[0],
    gallery: BEAUREPAIRE_GALLERY,
    excerpt: "Construction neuve d’un bâtiment R+5 avec sous-sol parking et crèche au rez-de-chaussée.",
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
    excerpt: "Immeuble R+3 + 1 sous-sol : showroom (RDC & R-1), plateaux de bureaux à partir du R+1.",
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
    excerpt: "Réhabilitation d’un hôtel particulier : bureaux, espaces d’expo, salle de théâtre.",
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
    gallery: gallery("PERIGNY-SUR-YERRES", 3),
    excerpt: "Fondations, reprises en sous-œuvre, dallage pour l’extension (≈ 3 500 m²).",
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
    excerpt: "5 bâtiments en béton préfabriqué : 91 logements, crèche 99 berceaux, voirie nouvelle, ovoïde.",
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

// Backwards compatibility / export for other files
export const SITE = SITE_CONFIG.general;
// We can use this to grab the first legacy image if needed
export const HERO_LEAD = SITE_CONFIG.home.hero.slides[0]?.src || "/images/placeholders/HeroCarroussel_1.jpg";

// Section dédiée aux réalisations AKSO
export const AKSO_REALISATIONS: Realisation[] = [
  {
    slug: "renovation-maison-de-ville-83m2",
    title: "Rénovation d'une maison de ville 83m²",
    type: "Rénovation",
    city: "Lieu à préciser",
    year: 2024,
    cover: "/images/realisations/01-avant-apres-maison-de-ville-83m2.jpg",
    gallery: [
      "/images/realisations/01-avant-apres-maison-de-ville-83m2.jpg",
      "/images/realisations/02-avant-apres-renovation-facade.jpg",
      "/images/realisations/03-renovation-sejour-maison.jpg",
      "/images/realisations/04-amenagement-escalier-maison-de-ville.jpg",
      "/images/realisations/05-avant-apres-realisation-escalier.jpg",
    ],
    excerpt: "Détails à venir.",
  },
  {
    slug: "renovation-appartement-4-pieces-78m2",
    title: "Appartement 4 pièces de 78m²",
    type: "Rénovation",
    city: "Lieu à préciser",
    year: 2024,
    cover: "/images/realisations/renovation-interieur-appartement-4-pieces.jpg",
    gallery: [
      "/images/realisations/renovation-interieur-appartement-4-pieces.jpg",
      "/images/realisations/avant-apres-renovation-salle-a-manger.jpg",
      "/images/realisations/avant-apres-renovation-cuisine-architecte-interieur.jpg",
      "/images/realisations/avant-apres-renovation-appartement-architecte-interieur.jpg",
      "/images/realisations/avant-apres-renovation-salle-de-bain.jpg",
      "/images/realisations/avant-apres-amenagement-chambre-enfant.jpg",
    ],
    excerpt: "Détails à venir.",
  },
];


