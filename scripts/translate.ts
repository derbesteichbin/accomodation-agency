import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });

function key(p: string, i: number) {
  return `${p}${i}${Math.random().toString(36).slice(2, 8)}`;
}

async function run() {
  await client
    .patch("siteSettings")
    .set({
      tagline: "Holiday homes with character",
      contactEmail: "hello@nordlicht-studio.example",
      nav: [
        { _key: key("n", 1), label: "Portfolio", href: "#portfolio" },
        { _key: key("n", 2), label: "Services", href: "#services" },
        { _key: key("n", 3), label: "Packages", href: "#packages" },
        { _key: key("n", 4), label: "About", href: "#about" },
      ],
      "hero.heading": "Places you won't forget",
      "hero.subheading":
        "We match guests with handpicked holiday apartments and houses for people who want more than just somewhere to sleep. Every property is visited in person, so what you expect is what you get.",
      services: [
        {
          _key: key("s", 1),
          title: "A curated selection",
          description:
            "Not an endless catalogue, but a carefully tended collection. We only take on properties we would happily stay in ourselves, and we check location, furnishings and cleanliness before any listing goes live.",
        },
        {
          _key: key("s", 2),
          title: "Personal advice",
          description:
            "Tell us what you have in mind and we will find the right fit. Whether it's a quiet weekend for two or room enough for the whole family, we think it through and make concrete recommendations.",
        },
        {
          _key: key("s", 3),
          title: "Support on the ground",
          description:
            "If questions come up during your stay, we are reachable. From handing over the keys to tips for the evening, we make sure there is nothing for you to worry about.",
        },
      ],
      testimonials: [
        {
          _key: key("t", 1),
          quote:
            "The apartment was exactly as described. No surprises, only pleasant ones. The recommendation suited us perfectly.",
          author: "Lena K.",
          role: "Guest from Hamburg",
        },
        {
          _key: key("t", 2),
          quote:
            "We had questions at short notice and got a helpful answer within minutes. That is what service should look like.",
          author: "Thomas B.",
          role: "Guest from Munich",
        },
        {
          _key: key("t", 3),
          quote:
            "You can tell that every property here is chosen with care. Next time we will book through Nordlicht again.",
          author: "The Wendt family",
          role: "Guests from Cologne",
        },
      ],
      "about.heading": "About us",
      "about.body":
        "Nordlicht Studio grew out of a simple observation: good places are hard to find, and bad ones hide behind good photography. We wanted to change that. Rather than chasing volume, we focus on a small number of carefully vetted houses and apartments, and we put our name behind every one of them. What began as a small project is now a fixed point for guests who value reliability.",
      packages: [
        {
          _key: key("p", 1),
          name: "Standard",
          price: "490 EUR",
          description: "A solid starting point for smaller properties.",
          features: ["2 hours on site", "20 edited photos", "Delivered within 5 working days"],
          featured: false,
        },
        {
          _key: key("p", 2),
          name: "Premium",
          price: "890 EUR",
          description: "Our most popular option for holiday apartments.",
          features: [
            "4 hours on site",
            "50 edited photos",
            "Drone footage",
            "Delivered within 3 working days",
          ],
          featured: true,
        },
        {
          _key: key("p", 3),
          name: "Exclusive",
          price: "1490 EUR",
          description: "Full coverage for large properties.",
          features: [
            "Full day on site",
            "100 edited photos",
            "Video walkthrough",
            "Drone footage",
            "Delivered within 48 hours",
          ],
          featured: false,
        },
      ],
    })
    .commit();

  console.log("Translated to English.");
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
