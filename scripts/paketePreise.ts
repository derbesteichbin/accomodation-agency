import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => Math.random().toString(36).slice(2, 9);

function tier(name: string, price: string, feats: { de: string[]; en: string[] }, featured = false) {
  return {
    _key: k(),
    name: { de: name, en: name },
    price,
    description: { de: "", en: "" },
    features: feats,
    featured,
  };
}

// Marketing-Paket
function marketing(pt: "wohnung" | "haus") {
  const p = pt === "wohnung"
    ? ["€445", "€595", "€895"]
    : ["€495", "€645", "€945"];
  return {
    _key: k(),
    categoryName: { de: "Marketing-Paket", en: "Marketing package" },
    tiers: [
      tier("Basis", p[0], {
        de: ["15 professionell bearbeitete Immobilienfotos", "3 hochwertige Drohnenaufnahmen", "Essential Reel"],
        en: ["15 professionally edited property photos", "3 high-quality drone shots", "Essential reel"],
      }),
      tier("Gold", p[1], {
        de: ["25 professionell bearbeitete Immobilienfotos", "5 hochwertige Drohnenaufnahmen", "Premium Reel"],
        en: ["25 professionally edited property photos", "5 high-quality drone shots", "Premium reel"],
      }, true),
      tier("Platin", p[2], {
        de: ["40 professionell bearbeitete Immobilienfotos", "9 hochwertige Drohnenaufnahmen", "Cinematic Reel"],
        en: ["40 professionally edited property photos", "9 high-quality drone shots", "Cinematic reel"],
      }),
    ],
  };
}

// Photo-Paket
function photo(pt: "wohnung" | "haus") {
  const p = pt === "wohnung"
    ? ["€295", "€375", "€535"]
    : ["€345", "€425", "€585"];
  return {
    _key: k(),
    categoryName: { de: "Photo-Paket", en: "Photo package" },
    tiers: [
      tier("Basis", p[0], {
        de: ["15 professionell bearbeitete Immobilienfotos", "3 hochwertige Drohnenaufnahmen"],
        en: ["15 professionally edited property photos", "3 high-quality drone shots"],
      }),
      tier("Gold", p[1], {
        de: ["25 professionell bearbeitete Immobilienfotos", "5 hochwertige Drohnenaufnahmen"],
        en: ["25 professionally edited property photos", "5 high-quality drone shots"],
      }, true),
      tier("Platin", p[2], {
        de: ["40 professionell bearbeitete Immobilienfotos", "9 hochwertige Drohnenaufnahmen"],
        en: ["40 professionally edited property photos", "9 high-quality drone shots"],
      }),
    ],
  };
}

// Video-Dienstleistungen
function video(pt: "wohnung" | "haus") {
  const p = pt === "wohnung"
    ? ["€195", "€265", "€395"]
    : ["€245", "€315", "€445"];
  return {
    _key: k(),
    categoryName: { de: "Video-Dienstleistungen", en: "Video services" },
    tiers: [
      tier("Basis", p[0], {
        de: ["Innenaufnahmen", "Social Media Reel (Essential), 15–25 s"],
        en: ["Interior footage", "Social media reel (Essential), 15–25 s"],
      }),
      tier("Gold", p[1], {
        de: ["Innen- & Außenaufnahmen", "Social Media Reel (Premium), 25–35 s"],
        en: ["Interior & exterior footage", "Social media reel (Premium), 25–35 s"],
      }, true),
      tier("Platin", p[2], {
        de: ["Innen- & Außenaufnahmen inkl. Storytelling", "Social Media Reel (Cinematic), 45–60 s"],
        en: ["Interior & exterior incl. storytelling", "Social media reel (Cinematic), 45–60 s"],
      }),
    ],
  };
}

async function run() {
  const groups = (["wohnung", "haus"] as const).map((pt) => ({
    _key: k(),
    propertyType: pt,
    intro: undefined, // intro nicht anfassen
    categories: [marketing(pt), photo(pt), video(pt)],
  }));

  // intro bewahren: bestehende intros wieder mitnehmen
  const doc = await client.getDocument("siteSettings");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const existing = (doc as any)?.packageGroups ?? [];
  const introByType: Record<string, unknown> = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  existing.forEach((g: any) => { introByType[g.propertyType] = g.intro; });

  const withIntro = groups.map((g) => ({ ...g, intro: introByType[g.propertyType] ?? undefined }));

  await client.patch("siteSettings").set({ packageGroups: withIntro }).commit();
  console.log("Paketpreise eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
