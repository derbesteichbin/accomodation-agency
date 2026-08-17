import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });
const k = () => Math.random().toString(36).slice(2, 9);

const faq: { q: string; a: string; home?: boolean }[] = [
  {
    home: true,
    q: "Warum machen professionelle Immobilienfotos den Unterschied?",
    a: "Der erste Eindruck entscheidet oft darüber, ob sich Interessenten näher mit einer Immobilie beschäftigen. Professionelle Fotos präsentieren Räume hell, einladend und authentisch. Sie heben die Stärken einer Immobilie hervor und schaffen Vertrauen und sorgen dafür, dass sie auf Immobilienportalen und in der Vermarktung positiver auffällt.",
  },
  {
    home: true,
    q: "Warum lassen Drohnenaufnahmen eine Immobilie stärker wirken?",
    a: "Drohnenaufnahmen zeigen nicht nur die Immobilie selbst, sondern auch ihr Grundstück, die Außenbereiche und die unmittelbare Umgebung. Dadurch können beispielsweise die Größe des Grundstücks, ein Garten, eine Terrasse, ein Pool oder die besondere Lage besser vermittelt werden. Besonders bei Häusern und größeren Grundstücken bieten Drohnenaufnahmen eine Perspektive, die klassische Immobilienfotos nicht ermöglichen.",
  },
  {
    home: true,
    q: "Wie läuft ein Immobilien-Shooting ab?",
    a: "Nachdem Sie Ihre gewünschten Leistungen und Ihren Wunschtermin ausgewählt haben, erhalten Sie unverzüglich eine Bestätigungs-E-Mail sowie unsere Checkliste zur optimalen Vorbereitung der Immobilie. Vor Beginn verschaffen wir uns einen kurzen Überblick über die Immobilie und stimmen bei Bedarf besondere Wünsche ab.",
  },
  {
    q: "Wie lange dauert ein Shooting?",
    a: "Die Dauer hängt von der Größe der Immobilie und den gebuchten Leistungen ab. Ein reines Fotoshooting nimmt entsprechend weniger Zeit in Anspruch als eine Kombination aus Fotografie, Drohnenaufnahmen und Video. Als Orientierung dauert im Basis-Foto-Paket in der Regel 60–90 min.",
  },
  {
    home: true,
    q: "Wie und wann erhalte ich die fertigen Aufnahmen?",
    a: "Nach dem Shooting werden die Aufnahmen professionell ausgewählt und bearbeitet. Die fertigen Dateien werden anschließend digital über eine persönliche Online-Galerie bzw. einen Download-Link zur Verfügung gestellt. Die genaue Bearbeitungs- und Lieferzeit hängt vom Umfang des gebuchten Auftrags ab und wird bei der Buchung kommuniziert. Als Orientierung, die Bearbeitung des Basis-Foto-Pakets ist bereits innerhalb von 36h fertig.",
  },
  {
    q: "Wie lange sind die Aufnahmen gespeichert?",
    a: "Die Dateien werden für 6 Monate abgespeichert. Darum ist es wichtig, dass Sie die Aufnahmen nach Fertigstellung absichern.",
  },
  {
    home: true,
    q: "Wie bereite ich meine Immobilie optimal auf das Shooting vor?",
    a: "Eine aufgeräumte und vorbereitete Immobilie, genauso wie eine gute Beleuchtung, bildet die Grundlage für hochwertige Aufnahmen. Nach der Buchung erhalten Sie von uns eine detaillierte Checkliste zur optimalen Vorbereitung.",
  },
  {
    q: "Was passiert bei schlechtem Wetter?",
    a: "Bei schlechten Wetterbedingungen wird gemeinsam geprüft, ob der Termin wie geplant stattfinden kann oder verschoben werden sollte. Besonders für Außen- und Drohnenaufnahmen sind geeignete Wetterbedingungen wichtig. Bei starkem Regen, starkem Wind oder anderen ungeeigneten Bedingungen wird ein Ersatztermin vereinbart. Die Sicherheit und die Qualität der Aufnahmen stehen dabei an erster Stelle.",
  },
  {
    q: "Darf überall mit einer Drohne geflogen werden?",
    a: "Drohnenaufnahmen sind an bestimmte gesetzliche Vorgaben und örtliche Flugbeschränkungen gebunden. In den meisten Fällen lassen sich Drohnenaufnahmen problemlos umsetzen. Wir prüfen daher vor jedem geplanten Flug die Gegebenheiten vor Ort und stellen sicher, dass die Aufnahmen sicher und zulässig durchgeführt werden können. Sollte ein Flug einmal nicht möglich sein, informieren wir Sie frühzeitig und finden gemeinsam eine passende Alternative.",
  },
  {
    q: "Kann ich Foto- und Videoleistungen individuell kombinieren?",
    a: "Ja. Neben den verschiedenen Paketen stehen ausgewählte Einzelleistungen und Zusatzleistungen zur Verfügung, sodass der Umfang der Immobilienvermarktung individuell angepasst werden kann. Beispielsweise können zu einem Foto-Paket zusätzliche Drohnenaufnahmen oder Golden-Hour-Aufnahmen gebucht werden.",
  },
  {
    q: "Was ist der Unterschied zwischen einem Reel und einem klassischen Video?",
    a: "Ein Social Media Reel ist darauf ausgelegt, innerhalb weniger Sekunden Aufmerksamkeit zu erzeugen. Die Immobilie wird kurz, dynamisch und emotional präsentiert. Ideal für Instagram, TikTok, Facebook und andere Social-Media-Plattformen. Dabei stehen schnelle Bildwechsel mit Übergängen, ansprechende Kamerabewegungen und eine kompakte Darstellung im Vordergrund. Ein klassisches Immobilienvideo gibt dagegen mehr Raum, die Immobilie ausführlich und zusammenhängend zu zeigen. Räume, Ausstattungsmerkmale und besondere Details können ruhiger und detaillierter präsentiert werden. Je nach Wunsch kann das Video horizontal oder vertikal aufgenommen werden.",
  },
  {
    q: "Können Immobilienfotos und -videos retuschiert werden?",
    a: "Ja. Alle Immobilienfotos werden professionell bearbeitet, um eine natürliche und hochwertige Darstellung zu gewährleisten. Kleinere Retuschen sind dabei grundsätzlich inklusive, beispielsweise das Ersetzen eines Himmels oder das Unkenntlichmachen von Kennzeichen und persönlichen Daten. Bei Immobilienvideos sind nachträgliche Retuschen grundsätzlich nicht vorgesehen. Deshalb ist eine gute Vorbereitung der Immobilie oder dem Dreh besonders wichtig. Unsere Vorbereitungs-Checkliste hilft Ihnen dabei, die Immobilie optimal für die Aufnahmen vorzubereiten.",
  },
  {
    home: true,
    q: "Für wen sind die Leistungen geeignet?",
    a: "Die Leistungen richten sich an alle, die eine Immobilie professionell präsentieren und vermarkten möchten. Dazu gehören insbesondere Immobilienmakler, private Verkäufer, Vermieter sowie Anbieter von Ferienunterkünften auf Plattformen wie Airbnb, Booking.com und vergleichbaren Portalen. Auch Bauträger, Projektentwickler und andere Unternehmen können von professioneller Immobilienfotografie und -videografie profitieren.",
  },
];

const items = faq.map((f) => ({
  _key: k(),
  question: { de: f.q, en: f.q },
  answer: { de: f.a, en: f.a },
  showOnHome: f.home ?? false,
}));

async function run() {
  await client.patch("siteSettings").set({
    "faq.heading": {
      de: "Warum Luftaufnahmen für Immobilien mehr bewirken können",
      en: "Why aerial shots do more for real estate",
    },
    "faq.items": items,
  }).commit();
  console.log("FAQ-Inhalt eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
