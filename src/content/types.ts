export type Img = { src: string; alt: string };
export type NavItem = { label: string; href: string };
export type Service = { title: string; description: string };
export type Testimonial = { quote: string; author: string; role?: string };

export type SiteContent = {
  businessName: string;
  tagline: string;
  bookingUrl: string;
  contactEmail: string;
  nav: NavItem[];
  hero: { heading: string; subheading: string; image: Img };
  services: Service[];
  gallery: Img[];
  testimonials: Testimonial[];
  about: { heading: string; body: string; image: Img };
};
