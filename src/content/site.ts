import type { SiteContent } from "@/content/types";

export const siteContent: SiteContent = {
  businessName: "Client Business Name",
  tagline: "Short tagline goes here",
  bookingUrl: "https://cal.com/your-handle",
  contactEmail: "hello@example.com",
  nav: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
  ],
  hero: {
    heading: "Main headline",
    subheading: "One or two supporting sentences.",
    image: { src: "/images/hero.jpg", alt: "Hero image description" },
  },
  services: [
    { title: "Service one", description: "What it includes." },
    { title: "Service two", description: "What it includes." },
    { title: "Service three", description: "What it includes." },
  ],
  gallery: [
    { src: "/images/work-1.jpg", alt: "Work sample one" },
    { src: "/images/work-2.jpg", alt: "Work sample two" },
  ],
  testimonials: [
    { quote: "Great to work with.", author: "Client name", role: "Company" },
  ],
  about: {
    heading: "About",
    body: "Short story about the business.",
    image: { src: "/images/about.jpg", alt: "Portrait" },
  },
};
