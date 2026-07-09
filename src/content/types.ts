export type Img = { src: string; alt: string };
export type NavItem = { label: string; href: string };
export type Service = { title: string; description: string };
export type Testimonial = { quote: string; author: string; role?: string };

export type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured: boolean;
};

export type SiteContent = {
  businessName: string;
  tagline: string;
  bookingCalLink: string;
  contactEmail: string;
  nav: NavItem[];
  hero: { heading: string; subheading: string; image: Img };
  services: Service[];
  packages: Package[];
  gallery: Img[];
  testimonials: Testimonial[];
  about: { heading: string; body: string; image: Img };
  impressum: string;
  privacy: string;
  locale: string;
  ui: { packages: string; popular: string; book: string; testimonials: string; portfolio: string; imprint: string; privacy: string };
};
