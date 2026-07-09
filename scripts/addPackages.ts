import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });

function key(i: number) {
  return `p${i}${Math.random().toString(36).slice(2, 8)}`;
}

const packages = [
  {
    _key: key(1),
    name: "Standard",
    price: "490 EUR",
    description: "Der solide Einstieg für kleinere Objekte.",
    features: [
      "2 Stunden vor Ort",
      "20 bearbeitete Fotos",
      "Lieferung in 5 Werktagen",
    ],
    featured: false,
  },
  {
    _key: key(2),
    name: "Premium",
    price: "890 EUR",
    description: "Unsere meistgewählte Option für Ferienwohnungen.",
    features: [
      "4 Stunden vor Ort",
      "50 bearbeitete Fotos",
      "Drohnenaufnahmen",
      "Lieferung in 3 Werktagen",
    ],
    featured: true,
  },
  {
    _key: key(3),
    name: "Exclusive",
    price: "1490 EUR",
    description: "Vollumfassende Aufnahme für grosse Objekte.",
    features: [
      "Ganztägig vor Ort",
      "100 bearbeitete Fotos",
      "Video-Rundgang",
      "Drohnenaufnahmen",
      "Lieferung in 48 Stunden",
    ],
    featured: false,
  },
];

async function run() {
  const res = await client
    .patch("siteSettings")
    .set({ packages })
    .setIfMissing({ nav: [] })
    .commit();

  const hasPakete = (res.nav ?? []).some((n: { href?: string }) => n.href === "#packages");
  if (!hasPakete) {
    await client
      .patch("siteSettings")
      .insert("after", "nav[-1]", [
        { _key: key(9), label: "Pakete", href: "#packages" },
      ])
      .commit();
  }

  console.log("Packages added.");
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
