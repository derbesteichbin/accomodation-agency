import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = (p: string, i: number) => `${p}${i}${Math.random().toString(36).slice(2, 8)}`;

function tier(name: string, feats: { de: string[]; en: string[] }, featured = false) {
  return {
    _key: k("t", Math.floor(Math.random() * 100000)),
    name: { de: name, en: name },
    price: "Preis auf Anfrage",
    description: { de: "", en: "" },
    features: feats,
    featured,
  };
}

function photoCat() {
  return {
    _key: k("c", 1),
    categoryName: { de: "Photo-Paket", en: "Photo package" },
    tiers: [
      tier("Basis", { de: ["15 Immobilienfotos", "3 Drohnenfotos"], en: ["15 property photos", "3 drone photos"] }),
      tier("Gold", { de: ["25 Immobilienfotos", "5 Drohnenfotos"], en: ["25 property photos", "5 drone photos"] }, true),
      tier("Platin", { de: ["40 Immobilienfotos", "9 Drohnenfotos"], en: ["40 property photos", "9 drone photos"] }),
    ],
  };
}

function videoCat() {
  return {
    _key: k("c", 2),
    categoryName: { de: "Video-Dienstleistung", en: "Video service" },
    tiers: [
      tier("Basis", { de: ["Innenaufnahme"], en: ["Interior footage"] }),
      tier("Gold", { de: ["Innen + Außen"], en: ["Interior + exterior"] }, true),
      tier("Platin", { de: ["Innen + Außen inkl. Storytelling Social-Media-Video/Reel"], en: ["Interior + exterior incl. storytelling social media video/reel"] }),
    ],
  };
}

function marketingCat() {
  return {
    _key: k("c", 3),
    categoryName: { de: "Marketing-Paket", en: "Marketing package" },
    tiers: [
      tier("Basis", { de: ["15 Immobilienfotos", "3 Drohnenfotos", "Innenaufnahme"], en: ["15 property photos", "3 drone photos", "Interior footage"] }),
      tier("Gold", { de: ["25 Immobilienfotos", "5 Drohnenfotos", "Innen + Außen"], en: ["25 property photos", "5 drone photos", "Interior + exterior"] }, true),
      tier("Platin", { de: ["40 Immobilienfotos", "9 Drohnenfotos", "Innen + Außen inkl. Storytelling Reel"], en: ["40 property photos", "9 drone photos", "Interior + exterior incl. storytelling reel"] }),
    ],
  };
}

async function run() {
  const groups = ["wohnung", "haus"].map((pt) => ({
    _key: k("g", pt === "haus" ? 2 : 1),
    propertyType: pt,
    categories: [photoCat(), videoCat(), marketingCat()],
  }));

  await client.patch("siteSettings").set({ packageGroups: groups }).commit();
  console.log("Package groups eingespielt.");
}

run().catch((err) => {
  console.error("Fehler:", err);
  process.exit(1);
});
