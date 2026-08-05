export type Img = { src: string; alt: string };
export type NavItem = { label: string; href: string };
export type Service = { title: string; description: string };
export type Testimonial = { quote: string; author: string; role?: string };

export type Tier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
};
export type PackageCategory = {
  categoryName: string;
  tiers: Tier[];
};
export type PackageGroup = {
  propertyType: "wohnung" | "haus";
  categories: PackageCategory[];
};

export type SingleServiceItem = { name: string; price: string; description: string };
export type SingleServiceGroup = { propertyType: "wohnung" | "haus"; items: SingleServiceItem[] };

export type Addon = { name: string; price: string; description: string };

export type SiteContent = {
  businessName: string;
  tagline: string;
  bookingCalLink: string;
  contactEmail: string;
  nav: NavItem[];
  hero: { heading: string; subheading: string; image: Img };
  services: Service[];
  packageGroups: PackageGroup[];
  singleServices: SingleServiceGroup[];
  addons: Addon[];
  gallery: Img[];
  testimonials: Testimonial[];
  about: { heading: string; body: string; image: Img };
  impressum: string;
  privacy: string;
  locale: string;
  ui: { packages: string; popular: string; book: string; testimonials: string; portfolio: string; imprint: string; privacy: string; singleServices: string; addons: string };
};
