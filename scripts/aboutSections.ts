import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => `x${Math.random().toString(36).slice(2, 8)}`;

async function run() {
  await client.patch("siteSettings").set({
    aboutMe: {
      heading: { de: "Über mich", en: "About me" },
      body: {
        de: "Hier steht die persönliche Geschichte. Platzhaltertext, den der Kunde später im Studio ersetzt.",
        en: "Personal story goes here. Placeholder text the client replaces in the Studio later.",
      },
    },
    benefits: {
      heading: { de: "Darum Luftaufnahmen für Immobilien", en: "Why aerial shots for real estate" },
      items: [
        { _key: k(), title: { de: "Mehr Aufmerksamkeit", en: "More attention" }, description: { de: "Platzhalter.", en: "Placeholder." } },
        { _key: k(), title: { de: "Bessere Perspektive", en: "Better perspective" }, description: { de: "Platzhalter.", en: "Placeholder." } },
        { _key: k(), title: { de: "Schnellerer Verkauf", en: "Faster sale" }, description: { de: "Platzhalter.", en: "Placeholder." } },
      ],
    },
    howItWorks: {
      heading: { de: "So einfach geht's", en: "How it works" },
      steps: [
        { _key: k(), title: { de: "Anfrage", en: "Request" }, description: { de: "Platzhalter.", en: "Placeholder." } },
        { _key: k(), title: { de: "Termin & Aufnahme", en: "Appointment & shoot" }, description: { de: "Platzhalter.", en: "Placeholder." } },
        { _key: k(), title: { de: "Lieferung", en: "Delivery" }, description: { de: "Platzhalter.", en: "Placeholder." } },
      ],
    },
    coverage: {
      heading: { de: "Wo wir tätig sind", en: "Where we operate" },
      body: { de: "Platzhalter für das Einzugsgebiet.", en: "Placeholder for the coverage area." },
      areas: { de: ["Region 1", "Region 2", "Region 3"], en: ["Region 1", "Region 2", "Region 3"] },
    },
  }).commit();
  console.log("Über-uns-Abschnitte eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
