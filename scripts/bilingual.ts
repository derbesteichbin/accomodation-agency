import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = (p: string, i: number) => `${p}${i}${Math.random().toString(36).slice(2, 8)}`;

async function run() {
  await client
    .patch("siteSettings")
    .set({
      tagline: {
        de: "Ferienunterkünfte mit Charakter",
        en: "Holiday homes with character",
      },
      nav: [
        { _key: k("n", 1), label: { de: "Portfolio", en: "Portfolio" }, href: "#portfolio" },
        { _key: k("n", 2), label: { de: "Leistungen", en: "Services" }, href: "#services" },
        { _key: k("n", 3), label: { de: "Pakete", en: "Packages" }, href: "#packages" },
        { _key: k("n", 4), label: { de: "Über uns", en: "About" }, href: "#about" },
      ],
      "hero.heading": {
        de: "Unterkünfte, die man nicht mehr vergisst",
        en: "Places you won't forget",
      },
      "hero.subheading": {
        de: "Wir vermitteln handverlesene Ferienwohnungen und Häuser für Gäste, die mehr suchen als nur einen Ort zum Schlafen. Jede Unterkunft wird persönlich besichtigt, damit die Erwartung am Ende auch der Wirklichkeit entspricht.",
        en: "We match guests with handpicked holiday apartments and houses for people who want more than just somewhere to sleep. Every property is visited in person, so what you expect is what you get.",
      },
      services: [
        {
          _key: k("s", 1),
          title: { de: "Kuratierte Auswahl", en: "A curated selection" },
          description: {
            de: "Kein endloser Katalog, sondern eine sorgfältig gepflegte Sammlung. Wir nehmen nur Unterkünfte auf, in denen wir selbst gerne übernachten würden, und prüfen Lage, Ausstattung und Sauberkeit vor jeder Aufnahme.",
            en: "Not an endless catalogue, but a carefully tended collection. We only take on properties we would happily stay in ourselves, and we check location, furnishings and cleanliness before any listing goes live.",
          },
        },
        {
          _key: k("s", 2),
          title: { de: "Persönliche Beratung", en: "Personal advice" },
          description: {
            de: "Sagen Sie uns, wonach Ihnen der Sinn steht, und wir finden das Passende. Ob ruhiges Wochenende zu zweit oder Platz für die ganze Familie, wir denken mit und sprechen konkrete Empfehlungen aus.",
            en: "Tell us what you have in mind and we will find the right fit. Whether it's a quiet weekend for two or room enough for the whole family, we think it through and make concrete recommendations.",
          },
        },
        {
          _key: k("s", 3),
          title: { de: "Betreuung vor Ort", en: "Support on the ground" },
          description: {
            de: "Bei Fragen während des Aufenthalts sind wir erreichbar. Von der Schlüsselübergabe bis zu Tipps für den Abend kümmern wir uns darum, dass Sie sich um nichts sorgen müssen.",
            en: "If questions come up during your stay, we are reachable. From handing over the keys to tips for the evening, we make sure there is nothing for you to worry about.",
          },
        },
      ],
      testimonials: [
        {
          _key: k("t", 1),
          quote: {
            de: "Die Wohnung war genau so, wie sie beschrieben wurde, keine Überraschungen, nur angenehme. Die Empfehlung hat perfekt zu uns gepasst.",
            en: "The apartment was exactly as described. No surprises, only pleasant ones. The recommendation suited us perfectly.",
          },
          author: "Lena K.",
          role: { de: "Gast aus Hamburg", en: "Guest from Hamburg" },
        },
        {
          _key: k("t", 2),
          quote: {
            de: "Wir hatten kurzfristig Fragen und bekamen innerhalb von Minuten eine hilfreiche Antwort. So stellt man sich Service vor.",
            en: "We had questions at short notice and got a helpful answer within minutes. That is what service should look like.",
          },
          author: "Thomas B.",
          role: { de: "Gast aus München", en: "Guest from Munich" },
        },
        {
          _key: k("t", 3),
          quote: {
            de: "Man merkt, dass hier jede Unterkunft mit Bedacht ausgewählt wird. Wir buchen beim nächsten Mal wieder über Nordlicht.",
            en: "You can tell that every property here is chosen with care. Next time we will book through Nordlicht again.",
          },
          author: "Familie Wendt",
          role: { de: "Gäste aus Köln", en: "Guests from Cologne" },
        },
      ],
      "about.heading": { de: "Über uns", en: "About us" },
      "about.body": {
        de: "Nordlicht Studio ist aus der einfachen Beobachtung entstanden, dass gute Unterkünfte oft schwer zu finden sind und schlechte sich hinter schönen Fotos verstecken. Wir wollten das ändern. Statt auf Masse zu setzen, konzentrieren wir uns auf wenige, sorgfältig geprüfte Häuser und Wohnungen und stehen mit unserem Namen für jede einzelne davon ein. Was als kleines Projekt begann, ist heute eine feste Anlaufstelle für Gäste, die Wert auf Verlässlichkeit legen.",
        en: "Nordlicht Studio grew out of a simple observation: good places are hard to find, and bad ones hide behind good photography. We wanted to change that. Rather than chasing volume, we focus on a small number of carefully vetted houses and apartments, and we put our name behind every one of them. What began as a small project is now a fixed point for guests who value reliability.",
      },
      packages: [
        {
          _key: k("p", 1),
          name: { de: "Standard", en: "Standard" },
          price: "490 EUR",
          description: {
            de: "Der solide Einstieg für kleinere Objekte.",
            en: "A solid starting point for smaller properties.",
          },
          features: {
            de: ["2 Stunden vor Ort", "20 bearbeitete Fotos", "Lieferung in 5 Werktagen"],
            en: ["2 hours on site", "20 edited photos", "Delivered within 5 working days"],
          },
          featured: false,
        },
        {
          _key: k("p", 2),
          name: { de: "Premium", en: "Premium" },
          price: "890 EUR",
          description: {
            de: "Unsere meistgewählte Option für Ferienwohnungen.",
            en: "Our most popular option for holiday apartments.",
          },
          features: {
            de: ["4 Stunden vor Ort", "50 bearbeitete Fotos", "Drohnenaufnahmen", "Lieferung in 3 Werktagen"],
            en: ["4 hours on site", "50 edited photos", "Drone footage", "Delivered within 3 working days"],
          },
          featured: true,
        },
        {
          _key: k("p", 3),
          name: { de: "Exclusive", en: "Exclusive" },
          price: "1490 EUR",
          description: {
            de: "Vollumfassende Aufnahme für grosse Objekte.",
            en: "Full coverage for large properties.",
          },
          features: {
            de: ["Ganztägig vor Ort", "100 bearbeitete Fotos", "Video-Rundgang", "Drohnenaufnahmen", "Lieferung in 48 Stunden"],
            en: ["Full day on site", "100 edited photos", "Video walkthrough", "Drone footage", "Delivered within 48 hours"],
          },
          featured: false,
        },
      ],
    })
    .commit();

  console.log("Bilingual content written.");
}

run().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
