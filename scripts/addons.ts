import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => `a${Math.random().toString(36).slice(2, 8)}`;

const addons = [
  { de: "Virtuelle Möblierung/Renovation", en: "Virtual furnishing/renovation" },
  { de: "Immobilienfotos bei Sonnenauf-/untergang", en: "Property photos at sunrise/sunset" },
  { de: "Drohnenfotos bei Sonnenauf-/untergang", en: "Drone photos at sunrise/sunset" },
  { de: "Makler Voice-Over für Social-Media-Video/Reel", en: "Agent voice-over for social media video/reel" },
].map((a) => ({
  _key: k(),
  name: { de: a.de, en: a.en },
  price: "",
  description: { de: "", en: "" },
}));

async function run() {
  await client.patch("siteSettings").set({ addons }).commit();
  console.log("Zusatzleistungen eingespielt.");
}

run().catch((err) => {
  console.error("Fehler:", err);
  process.exit(1);
});
