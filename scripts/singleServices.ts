import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = (p: string) => `${p}${Math.random().toString(36).slice(2, 8)}`;

function item(de: string, en: string) {
  return {
    _key: k("i"),
    name: { de, en },
    price: "Preis auf Anfrage",
    description: { de: "", en: "" },
  };
}

const items = () => [
  item("Immobilienfotos", "Property photos"),
  item("Drohnenfotos", "Drone photos"),
  item("Social-Media-Video/Reel", "Social media video/reel"),
];

async function run() {
  const groups = ["wohnung", "haus"].map((pt) => ({
    _key: k("g"),
    propertyType: pt,
    items: items(),
  }));

  await client.patch("siteSettings").set({ singleServices: groups }).commit();
  console.log("Einzelleistungen eingespielt.");
}

run().catch((err) => {
  console.error("Fehler:", err);
  process.exit(1);
});
