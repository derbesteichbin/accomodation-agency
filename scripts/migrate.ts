import { getCliClient } from "sanity/cli";
import { siteContent } from "../src/content/site";

const client = getCliClient({ apiVersion: "2025-01-01" });

function key(i: number) {
  return `k${i}${Math.random().toString(36).slice(2, 8)}`;
}

async function run() {
  const doc = {
    _id: "siteSettings",
    _type: "siteSettings",
    businessName: siteContent.businessName,
    tagline: siteContent.tagline,
    bookingCalLink: siteContent.bookingCalLink,
    contactEmail: siteContent.contactEmail,
    nav: siteContent.nav.map((n, i) => ({
      _key: key(i),
      label: n.label,
      href: n.href,
    })),
    hero: {
      heading: siteContent.hero.heading,
      subheading: siteContent.hero.subheading,
    },
    services: siteContent.services.map((s, i) => ({
      _key: key(i),
      title: s.title,
      description: s.description,
    })),
    testimonials: siteContent.testimonials.map((t, i) => ({
      _key: key(i),
      quote: t.quote,
      author: t.author,
      role: t.role,
    })),
    about: {
      heading: siteContent.about.heading,
      body: siteContent.about.body,
    },
  };

  const res = await client.createOrReplace(doc);
  console.log("Migrated site content:", res._id);
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
