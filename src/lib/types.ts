export type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
};

export type Realisation = {
  slug: string;
  title: string;
  type: "Construction" | "Rénovation";
  city: string;
  year: number;
  cover: string;
  gallery: string[];
  excerpt?: string;
  meta?: {
    address?: string;
    moa?: string;        // Maître d'ouvrage
    moe?: string;        // Maître d'œuvre / Architecte
    bet?: string;        // BET / Économiste
    eg?: string;         // Entreprise générale / rôle
    amount?: string;     // Montant (texte pour garder le format)
    duration?: string;   // Durée des travaux
  };
};

export type Testimonial = {
  name: string;
  quote: string;
  city?: string;
  rating?: number;
};
export type SiteSettings = {
  name: string;
  baseline: string;
  phone: string;
  email: string;
  address: string;
  hours?: string;
  areas: string[];
  socials?: { label: string; url: string }[];
};



export type Reference = {
  slug: string;
  title: string;
  city?: string;
  year?: number;
  moa?: string;   // Maîtrise d’Ouvrage
  moe?: string;   // Maîtrise d’Œuvre
  eg?: string;    // Entreprise Générale / contexte
  amount?: string; // Montant / budget
  duration?: string;
  excerpt?: string;
};
