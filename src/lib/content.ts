import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { SiteContent } from "@/content/types";
import { ui } from "@/i18n";

const QUERY = `*[_type == "siteSettings"][0]{
  businessName, tagline, bookingCalLink, contactEmail,
  nav[]{label, href},
  hero{heading, subheading, image},
  services[]{title, description},
  packages[]{name, price, description, features, featured},
  gallery[],
  testimonials[]{quote, author, role},
  about{heading, body, image},
  impressum, privacy
}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function img(source: any): { src: string; alt: string } {
  if (!source?.asset) return { src: "", alt: source?.alt ?? "" };
  return { src: urlForImage(source).width(1600).url(), alt: source.alt ?? "" };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pick(v: any, locale: string): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  return v[locale] ?? v.de ?? v.en ?? "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pickArr(v: any, locale: string): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  return v[locale] ?? v.de ?? v.en ?? [];
}

export async function getContent(locale: string): Promise<SiteContent> {
  const data = await client.fetch(
    QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  if (!data) throw new Error("No siteSettings document found in Sanity");
  return {
    businessName: data.businessName ?? "",
    tagline: pick(data.tagline, locale),
    bookingCalLink: data.bookingCalLink ?? "",
    contactEmail: data.contactEmail ?? "",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nav: (data.nav ?? []).map((n: any) => ({ label: pick(n.label, locale), href: n.href })),
    hero: {
      heading: pick(data.hero?.heading, locale),
      subheading: pick(data.hero?.subheading, locale),
      image: img(data.hero?.image),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    services: (data.services ?? []).map((s: any) => ({ title: pick(s.title, locale), description: pick(s.description, locale) })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    packages: (data.packages ?? []).map((p: any) => ({
      name: pick(p.name, locale),
      price: p.price ?? "",
      description: pick(p.description, locale),
      features: pickArr(p.features, locale),
      featured: p.featured ?? false,
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gallery: (data.gallery ?? []).filter((g: any) => g?.asset).map((g: any) => img(g)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    testimonials: (data.testimonials ?? []).map((t: any) => ({ quote: pick(t.quote, locale), author: t.author, role: pick(t.role, locale) })),
    about: {
      heading: pick(data.about?.heading, locale),
      body: pick(data.about?.body, locale),
      image: img(data.about?.image),
    },
    impressum: pick(data.impressum, locale),
    privacy: pick(data.privacy, locale),
    locale,
    ui: ui[locale as keyof typeof ui] ?? ui.de,
  };
}
