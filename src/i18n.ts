export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const ui = {
  de: { packages: "Pakete", popular: "Beliebt", book: "Jetzt buchen", testimonials: "Das sagen Gäste", portfolio: "Portfolio" },
  en: { packages: "Packages", popular: "Popular", book: "Book now", testimonials: "What guests say", portfolio: "Portfolio" },
} as const;
