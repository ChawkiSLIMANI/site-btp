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
  type: string;
  city: string;
  year: number;
  surface?: string;
  cover: string;
  gallery: string[];
  excerpt?: string;
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
