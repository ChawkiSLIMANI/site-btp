import type { Service, Realisation, Testimonial, SiteSettings } from "@/lib/types";

export const SITE: SiteSettings = {
  name: "Entreprise BTP",
  baseline: "Votre partenaire de confiance pour vos projets de construction et rénovation",
  phone: "+33 1 23 45 67 89",
  email: "contact@entreprise-btp.fr",
  address: "12 Rue des Travaux, 75000 Paris, France",
  hours: "Lun–Ven : 8h–18h",
  areas: ["Paris", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne"],
  socials: [
    { label: "Facebook", url: "https://facebook.com" },
    { label: "LinkedIn", url: "https://linkedin.com" }
  ]
};

export const SERVICES: Service[] = [
  {
    slug: "construction-maison",
    title: "Construction de maisons",
    description:
      "Nous réalisons des maisons sur mesure, adaptées à vos besoins et à votre budget, avec des matériaux de qualité et un suivi rigoureux.",
    bullets: [
      "Plans personnalisés",
      "Matériaux écologiques",
      "Respect des délais"
    ],
    image: "/images/placeholders/service-maison.png"
  },
  {
    slug: "renovation-interieure",
    title: "Rénovation intérieure",
    description:
      "Transformez vos espaces avec nos prestations complètes en rénovation intérieure : cuisine, salle de bain, sols et peintures.",
    bullets: [
      "Aménagement sur mesure",
      "Finitions soignées",
      "Optimisation des espaces"
    ],
    image: "/images/placeholders/service-renovation.png"
  },
  {
    slug: "amenagement-exterieur",
    title: "Aménagement extérieur",
    description:
      "Création de terrasses, jardins et allées pour embellir et valoriser votre extérieur.",
    bullets: [
      "Terrasses bois ou carrelage",
      "Allées et murets",
      "Aménagement paysager"
    ],
    image: "/images/placeholders/service-exterieur.png"
  }
];

export const REALISATIONS: Realisation[] = [
  {
    slug: "maison-paris-2024",
    title: "Maison contemporaine à Paris",
    type: "Construction",
    city: "Paris",
    year: 2024,
    surface: "150 m²",
    cover: "/images/placeholders/realisation1.png",
    gallery: [
      "/images/placeholders/realisation1.png",
      "/images/placeholders/realisation1b.png"
    ],
    excerpt: "Construction d'une maison contemporaine alliant confort et performance énergétique."
  },
  {
    slug: "renovation-cuisine-versailles",
    title: "Rénovation d'une cuisine à Versailles",
    type: "Rénovation",
    city: "Versailles",
    year: 2023,
    cover: "/images/placeholders/realisation2.png",
    gallery: ["/images/placeholders/realisation2.png"],
    excerpt: "Cuisine moderne et fonctionnelle, optimisée pour la lumière et l'espace."
  }
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
