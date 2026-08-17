import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { SiteContent } from "@/content/types";
import { ui } from "@/i18n";

const QUERY = `*[_type == "siteSettings"][0]{
  businessName, tagline, bookingCalLink, contactEmail,
  nav[]{label, href},
  hero{heading, subheading, image},
  services[]{title, description},
  packageGroups[]{ propertyType, intro, categories[]{ categoryName, tiers[]{ name, price, description, features, featured } } },
  singleServices[]{ propertyType, items[]{ name, description, tiers[]{ label, price, features } } },
  addons[]{ name, price, description },
  aboutMe{ heading, body, image },
  benefits{ heading, items[]{ title, description } },
  howItWorks{ heading, steps[]{ title, description } },
  coverage{ heading, body, areas },
  faq{ heading, items[]{ question, answer, showOnHome } },
  support{ heading, body, email, phone },
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
    packageGroups: (data.packageGroups ?? []).map((g: any) => ({
      propertyType: g.propertyType === "haus" ? "haus" : "wohnung",
      intro: pick(g.intro, locale),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      categories: (g.categories ?? []).map((c: any) => ({
        categoryName: pick(c.categoryName, locale),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tiers: (c.tiers ?? []).map((t: any) => ({
          name: pick(t.name, locale),
          price: t.price ?? "",
          description: pick(t.description, locale),
          features: pickArr(t.features, locale),
          featured: t.featured ?? false,
        })),
      })),
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    singleServices: (data.singleServices ?? []).map((g: any) => ({
      propertyType: g.propertyType === "haus" ? "haus" : "wohnung",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: (g.items ?? []).map((it: any) => ({
        name: pick(it.name, locale),
        description: pick(it.description, locale),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tiers: (it.tiers ?? []).map((t: any) => ({
          label: pick(t.label, locale),
          price: t.price ?? "",
          features: pickArr(t.features, locale),
        })),
      })),
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addons: (data.addons ?? []).map((a: any) => ({
      name: pick(a.name, locale),
      price: a.price ?? "",
      description: pick(a.description, locale),
    })),
    aboutMe: {
      heading: pick(data.aboutMe?.heading, locale),
      body: pick(data.aboutMe?.body, locale),
      image: img(data.aboutMe?.image),
    },
    benefits: {
      heading: pick(data.benefits?.heading, locale),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: (data.benefits?.items ?? []).map((b: any) => ({ title: pick(b.title, locale), description: pick(b.description, locale) })),
    },
    howItWorks: {
      heading: pick(data.howItWorks?.heading, locale),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      steps: (data.howItWorks?.steps ?? []).map((s: any) => ({ title: pick(s.title, locale), description: pick(s.description, locale) })),
    },
    coverage: {
      heading: pick(data.coverage?.heading, locale),
      body: pick(data.coverage?.body, locale),
      areas: pickArr(data.coverage?.areas, locale),
    },
    faq: {
      heading: pick(data.faq?.heading, locale),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: (data.faq?.items ?? []).map((f: any) => ({ question: pick(f.question, locale), answer: pick(f.answer, locale), showOnHome: f.showOnHome ?? false })),
    },
    support: {
      heading: pick(data.support?.heading, locale),
      body: pick(data.support?.body, locale),
      email: data.support?.email ?? "",
      phone: data.support?.phone ?? "",
    },
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
