import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => Math.random().toString(36).slice(2, 9);

const addons = [
  {
    de: "Virtuelle Möblierung/Renovation",
    en: "Virtual furnishing/renovation",
    price: "",
    descDe: "Leere oder renovierungsbedürftige Räume digital einrichten.",
    descEn: "Digitally furnish empty or dated rooms.",
  },
  {
    de: "Golden Hour Videoaufnahmen",
    en: "Golden hour video footage",
    price: "€199",
    descDe: "Zusätzliche Aufnahmen zur Golden Hour, die in ein gebuchtes Social-Media-Reel integriert werden.",
    descEn: "Additional golden-hour footage integrated into a booked social media reel.",
  },
  {
    de: "Makler Voice-Over für Social Media-Video/Reel",
    en: "Agent voice-over for social media video/reel",
    price: "",
    descDe: "Professionelle Sprecherstimme für Ihr Reel.",
    descEn: "Professional voice-over for your reel.",
  },
].map((a) => ({
  _key: k(),
  name: { de: a.de, en: a.en },
  price: a.price,
  description: { de: a.descDe, en: a.descEn },
}));

async function run() {
  await client.patch("siteSettings").set({ addons }).commit();
  console.log("Zusatzleistungen aktualisiert.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
