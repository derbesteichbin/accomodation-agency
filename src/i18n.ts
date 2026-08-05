export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const ui = {
  de: { packages: "Pakete", popular: "Beliebt", book: "Jetzt buchen", testimonials: "Das sagen Gäste", portfolio: "Portfolio", imprint: "Impressum", privacy: "Datenschutz", singleServices: "Einzelleistungen", addons: "Zusatzleistungen" },
  en: { packages: "Packages", popular: "Popular", book: "Book now", testimonials: "What guests say", portfolio: "Portfolio", imprint: "Legal notice", privacy: "Privacy policy", singleServices: "Individual services", addons: "Add-ons" },
} as const;
