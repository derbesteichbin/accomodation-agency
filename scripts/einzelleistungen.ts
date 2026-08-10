import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => Math.random().toString(36).slice(2, 9);

function tier(label: string, price: string, feats: string[]) {
  return { _key: k(), label: { de: label, en: label }, price, features: { de: feats, en: feats } };
}
function item(de: string, en: string, tiers: ReturnType<typeof tier>[]) {
  return { _key: k(), name: { de, en }, description: { de: "", en: "" }, tiers };
}

function wohnung() {
  return [
    item("Immobilienfotos", "Property photos", [
      tier("Basis", "€195", ["15 professionell bearbeitete Immobilienfotos"]),
      tier("Gold", "€265", ["25 professionell bearbeitete Immobilienfotos"]),
      tier("Platin", "€325", ["40 professionell bearbeitete Immobilienfotos"]),
      tier("Platin+", "€425", ["60 professionell bearbeitete Immobilienfotos"]),
    ]),
    item("Drohnenaufnahmen", "Drone shots", [
      tier("Basis", "€135", ["3 Drohnenaufnahmen"]),
      tier("Gold", "€185", ["5 Drohnenaufnahmen"]),
      tier("Platin", "€245", ["8 Drohnenaufnahmen"]),
      tier("Platin+", "€295", ["12 Drohnenaufnahmen"]),
    ]),
    item("Social Media-Video/Reel", "Social media video/reel", [
      tier("", "€295", []),
    ]),
    item("Premium Immobilienvideo", "Premium property video", [
      tier("Horizontal oder Vertikal", "€395", []),
    ]),
    item("Golden Hour Immobilienfotos", "Golden hour property photos", [
      tier("Basis", "€99", ["4 Golden-Hour-Fotos"]),
      tier("Gold", "€139", ["6 Golden-Hour-Fotos"]),
      tier("Platin", "€199", ["10 Golden-Hour-Fotos"]),
    ]),
    item("Golden Hour Drohnenaufnahmen", "Golden hour drone shots", [
      tier("Basis", "€79", ["2 Golden-Hour-Drohnenaufnahmen"]),
      tier("Gold", "€119", ["4 Golden-Hour-Drohnenaufnahmen"]),
      tier("Platin", "€179", ["8 Golden-Hour-Drohnenaufnahmen"]),
    ]),
  ];
}

function haus() {
  return [
    item("Immobilienfotos", "Property photos", [
      tier("Basis", "€245", ["15 professionell bearbeitete Immobilienfotos"]),
      tier("Gold", "€315", ["25 professionell bearbeitete Immobilienfotos"]),
      tier("Platin", "€375", ["40 professionell bearbeitete Immobilienfotos"]),
      tier("Platin+", "€475", ["60 professionell bearbeitete Immobilienfotos"]),
    ]),
    item("Drohnenaufnahmen", "Drone shots", [
      tier("Basis", "€185", ["3 Drohnenaufnahmen"]),
      tier("Gold", "€235", ["5 Drohnenaufnahmen"]),
      tier("Platin", "€295", ["8 Drohnenaufnahmen"]),
      tier("Platin+", "€345", ["12 Drohnenaufnahmen"]),
    ]),
    item("Social Media-Video/Reel", "Social media video/reel", [
      tier("", "€345", []),
    ]),
    item("Premium Immobilienvideo", "Premium property video", [
      tier("Horizontal oder Vertikal", "€445", []),
    ]),
    item("Golden Hour Immobilienfotos", "Golden hour property photos", [
      tier("Basis", "€139", ["4 Golden-Hour-Fotos"]),
      tier("Gold", "€179", ["6 Golden-Hour-Fotos"]),
      tier("Platin", "€239", ["10 Golden-Hour-Fotos"]),
    ]),
    item("Golden Hour Drohnenaufnahmen", "Golden hour drone shots", [
      tier("Basis", "€109", ["2 Golden-Hour-Drohnenaufnahmen"]),
      tier("Gold", "€149", ["4 Golden-Hour-Drohnenaufnahmen"]),
      tier("Platin", "€209", ["8 Golden-Hour-Drohnenaufnahmen"]),
    ]),
  ];
}

async function run() {
  const groups = [
    { _key: k(), propertyType: "wohnung", items: wohnung() },
    { _key: k(), propertyType: "haus", items: haus() },
  ];
  await client.patch("siteSettings").set({ singleServices: groups }).commit();
  console.log("Einzelleistungen mit Stufen eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
