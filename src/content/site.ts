import type { SiteContent } from "@/content/types";

export const siteContent: SiteContent = {
  businessName: "Nordlicht Studio",
  tagline: "Ferienunterkünfte mit Charakter",
  bookingCalLink: "your-handle/shooting-termin",
  contactEmail: "hallo@nordlicht-studio.example",
  nav: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Leistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
  ],
  hero: {
    heading: "Unterkünfte, die man nicht mehr vergisst",
    subheading:
      "Wir vermitteln handverlesene Ferienwohnungen und Häuser für Gäste, die mehr suchen als nur einen Ort zum Schlafen. Jede Unterkunft wird persönlich besichtigt, damit die Erwartung am Ende auch der Wirklichkeit entspricht.",
    image: { src: "/images/hero.jpg", alt: "Heller Wohnraum mit großen Fenstern" },
  },
  services: [
    {
      title: "Kuratierte Auswahl",
      description:
        "Kein endloser Katalog, sondern eine sorgfältig gepflegte Sammlung. Wir nehmen nur Unterkünfte auf, in denen wir selbst gerne übernachten würden, und prüfen Lage, Ausstattung und Sauberkeit vor jeder Aufnahme.",
    },
    {
      title: "Persönliche Beratung",
      description:
        "Sagen Sie uns, wonach Ihnen der Sinn steht, und wir finden das Passende. Ob ruhiges Wochenende zu zweit oder Platz für die ganze Familie, wir denken mit und sprechen konkrete Empfehlungen aus.",
    },
    {
      title: "Betreuung vor Ort",
      description:
        "Bei Fragen während des Aufenthalts sind wir erreichbar. Von der Schlüsselübergabe bis zu Tipps für den Abend kümmern wir uns darum, dass Sie sich um nichts sorgen müssen.",
    },
  ],
  gallery: [
    { src: "/images/work-1.jpg", alt: "Gemütliches Schlafzimmer mit Holzakzenten" },
    { src: "/images/work-2.jpg", alt: "Küche im skandinavischen Stil" },
    { src: "/images/work-3.jpg", alt: "Terrasse mit Blick ins Grüne" },
    { src: "/images/work-4.jpg", alt: "Wohnzimmer mit Kamin" },
    { src: "/images/work-5.jpg", alt: "Badezimmer mit freistehender Wanne" },
    { src: "/images/work-6.jpg", alt: "Frühstückstisch am Fenster" },
  ],
  testimonials: [
    {
      quote:
        "Die Wohnung war genau so, wie sie beschrieben wurde, keine Überraschungen, nur angenehme. Die Empfehlung hat perfekt zu uns gepasst.",
      author: "Lena K.",
      role: "Gast aus Hamburg",
    },
    {
      quote:
        "Wir hatten kurzfristig Fragen und bekamen innerhalb von Minuten eine hilfreiche Antwort. So stellt man sich Service vor.",
      author: "Thomas B.",
      role: "Gast aus München",
    },
    {
      quote:
        "Man merkt, dass hier jede Unterkunft mit Bedacht ausgewählt wird. Wir buchen beim nächsten Mal wieder über Nordlicht.",
      author: "Familie Wendt",
      role: "Gäste aus Köln",
    },
  ],
  about: {
    heading: "Über uns",
    body:
      "Nordlicht Studio ist aus der einfachen Beobachtung entstanden, dass gute Unterkünfte oft schwer zu finden sind und schlechte sich hinter schönen Fotos verstecken. Wir wollten das ändern. Statt auf Masse zu setzen, konzentrieren wir uns auf wenige, sorgfältig geprüfte Häuser und Wohnungen und stehen mit unserem Namen für jede einzelne davon ein. Was als kleines Projekt begann, ist heute eine feste Anlaufstelle für Gäste, die Wert auf Verlässlichkeit legen.",
    image: { src: "/images/about.jpg", alt: "Zwei Personen im Gespräch am Tisch" },
  },
};
