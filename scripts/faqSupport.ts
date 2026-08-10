import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => `q${Math.random().toString(36).slice(2, 8)}`;

async function run() {
  await client.patch("siteSettings").set({
    faq: {
      heading: {
        de: "Warum Luftaufnahmen für Immobilien mehr bewirken",
        en: "Why aerial shots do more for real estate",
      },
      items: [
        { _key: k(), question: { de: "Warum Drohnenaufnahmen?", en: "Why drone photography?" }, answer: { de: "Platzhalter-Antwort.", en: "Placeholder answer." } },
        { _key: k(), question: { de: "Wie lange dauert ein Termin?", en: "How long does a shoot take?" }, answer: { de: "Platzhalter-Antwort.", en: "Placeholder answer." } },
        { _key: k(), question: { de: "Wann bekomme ich die Bilder?", en: "When do I get the photos?" }, answer: { de: "Platzhalter-Antwort.", en: "Placeholder answer." } },
      ],
    },
    support: {
      heading: { de: "Support & Kontakt", en: "Support & contact" },
      body: { de: "Fragen? Wir helfen gern weiter.", en: "Questions? We're happy to help." },
      email: "hello@immobilien-gurus.example",
      phone: "",
    },
  }).commit();
  console.log("FAQ und Support eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
