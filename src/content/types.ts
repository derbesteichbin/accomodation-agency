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
  intro: string;
  categories: PackageCategory[];
};

export type SingleTier = { label: string; price: string; features: string[] };
export type SingleServiceItem = { name: string; description: string; tiers: SingleTier[] };
export type SingleServiceGroup = { propertyType: "wohnung" | "haus"; items: SingleServiceItem[] };

export type Addon = { name: string; price: string; description: string };

export type AboutMe = { heading: string; body: string; image: { src: string; alt: string } };
export type BenefitItem = { title: string; description: string };
export type Benefits = { heading: string; items: BenefitItem[] };
export type HowStep = { title: string; description: string };
export type HowItWorks = { heading: string; steps: HowStep[] };
export type Coverage = { heading: string; body: string; areas: string[] };
export type FaqItem = { question: string; answer: string; showOnHome: boolean };
export type Faq = { heading: string; items: FaqItem[] };
export type Support = { heading: string; body: string; email: string; phone: string };

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
  aboutMe: AboutMe;
  benefits: Benefits;
  howItWorks: HowItWorks;
  coverage: Coverage;
  faq: Faq;
  support: Support;
  gallery: Img[];
  testimonials: Testimonial[];
  about: { heading: string; body: string; image: Img };
  impressum: string;
  privacy: string;
  locale: string;
  ui: { packages: string; popular: string; book: string; testimonials: string; portfolio: string; imprint: string; privacy: string; singleServices: string; addons: string };
};
