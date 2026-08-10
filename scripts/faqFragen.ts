import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => Math.random().toString(36).slice(2, 9);

const fragen: { de: string; en: string; antDe?: string; antEn?: string }[] = [
  {
    de: "Warum professionelle Immobilienfotos den Unterschied machen?",
    en: "Why do professional property photos make the difference?",
    antDe: "Der erste Eindruck entscheidet oft darüber, ob sich Interessenten näher mit einer Immobilie beschäftigen. Professionelle Fotos präsentieren Räume hell, einladend und authentisch. Sie heben die Stärken einer Immobilie hervor und schaffen Vertrauen – eine wichtige Grundlage für mehr Anfragen und eine erfolgreiche Vermarktung.",
    antEn: "First impressions often decide whether prospects look at a property more closely. Professional photos present rooms bright, inviting and authentic. They highlight a property's strengths and build trust – an important basis for more enquiries and successful marketing.",
  },
  { de: "Warum Luftaufnahmen für Immobilien mehr bewirken können?", en: "Why can aerial shots do more for real estate?" },
  { de: "Wie läuft ein Immobilien-Shooting ab?", en: "How does a property shoot work?" },
  { de: "Wie lange dauert ein Shooting?", en: "How long does a shoot take?" },
  { de: "Wann und wie erhalte ich die fertigen Aufnahmen?", en: "When and how do I receive the finished images?" },
  { de: "Wie bereite ich meine Immobilie optimal vor?", en: "How do I best prepare my property?" },
  { de: "Was passiert bei schlechtem Wetter?", en: "What happens in bad weather?" },
  { de: "Darf überall mit einer Drohne geflogen werden?", en: "Are drones allowed to fly everywhere?" },
  { de: "Kann ich Foto- und Videopakete individuell kombinieren?", en: "Can I combine photo and video packages individually?" },
  { de: "Für wen sind diese Dienstleistungen geeignet?", en: "Who are these services suitable for?" },
  { de: "Was beeinflusst den Preis?", en: "What affects the price?" },
];

const items = fragen.map((f) => ({
  _key: k(),
  question: { de: f.de, en: f.en },
  answer: { de: f.antDe ?? "", en: f.antEn ?? "" },
}));

async function run() {
  await client.patch("siteSettings").set({
    "faq.heading": {
      de: "Warum Luftaufnahmen für Immobilien mehr bewirken",
      en: "Why aerial shots do more for real estate",
    },
    "faq.items": items,
  }).commit();
  console.log("FAQ-Fragen eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
