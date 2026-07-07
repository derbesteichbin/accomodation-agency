import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { SiteContent } from "@/content/types";

const QUERY = `*[_type == "siteSettings"][0]{
  businessName, tagline, bookingCalLink, contactEmail,
  nav[]{label, href},
  hero{heading, subheading, image},
  services[]{title, description},
  gallery[],
  testimonials[]{quote, author, role},
  about{heading, body, image}
}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function img(source: any): { src: string; alt: string } {
  if (!source?.asset) return { src: "", alt: source?.alt ?? "" };
  return { src: urlForImage(source).width(1600).url(), alt: source.alt ?? "" };
}

export async function getContent(): Promise<SiteContent> {
  const data = await client.fetch(
    QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  if (!data) throw new Error("No siteSettings document found in Sanity");
  return {
    businessName: data.businessName ?? "",
    tagline: data.tagline ?? "",
    bookingCalLink: data.bookingCalLink ?? "",
    contactEmail: data.contactEmail ?? "",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    nav: (data.nav ?? []).map((n: any) => ({ label: n.label, href: n.href })),
    hero: {
      heading: data.hero?.heading ?? "",
      subheading: data.hero?.subheading ?? "",
      image: img(data.hero?.image),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    services: (data.services ?? []).map((s: any) => ({ title: s.title, description: s.description })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gallery: (data.gallery ?? []).filter((g: any) => g?.asset).map((g: any) => img(g)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    testimonials: (data.testimonials ?? []).map((t: any) => ({ quote: t.quote, author: t.author, role: t.role })),
    about: {
      heading: data.about?.heading ?? "",
      body: data.about?.body ?? "",
      image: img(data.about?.image),
    },
  };
}
