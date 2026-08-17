import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });

// Reihenfolge muss der bestehenden faq.items-Reihenfolge entsprechen (1..13).
const en: { q: string; a: string }[] = [
  {
    q: "Why do professional property photos make the difference?",
    a: "First impressions often decide whether prospects look at a property more closely. Professional photos present rooms bright, inviting and authentic. They highlight a property's strengths, build trust and help it stand out more favourably on property portals and in marketing.",
  },
  {
    q: "Why do drone shots make a property look stronger?",
    a: "Drone shots show not only the property itself but also its plot, the outdoor areas and the immediate surroundings. This makes it easier to convey the size of the plot, a garden, a terrace, a pool or a special location. For houses and larger plots in particular, drone shots offer a perspective that conventional property photos cannot.",
  },
  {
    q: "How does a property shoot work?",
    a: "Once you have selected your desired services and preferred date, you will immediately receive a confirmation email along with our checklist for preparing the property. Before we start, we take a brief look around the property and discuss any special requests if needed.",
  },
  {
    q: "How long does a shoot take?",
    a: "The duration depends on the size of the property and the services booked. A photo-only shoot takes less time than a combination of photography, drone shots and video. As a guide, the basic photo package usually takes 60–90 minutes.",
  },
  {
    q: "How and when do I receive the finished images?",
    a: "After the shoot, the images are professionally selected and edited. The finished files are then delivered digitally via a personal online gallery or a download link. The exact editing and delivery time depends on the scope of the booking and is communicated at the time of booking. As a guide, editing of the basic photo package is completed within 36 hours.",
  },
  {
    q: "How long are the images stored?",
    a: "Files are stored for 6 months. It is therefore important that you back up the images after delivery.",
  },
  {
    q: "How do I best prepare my property for the shoot?",
    a: "A tidy, well-prepared property, along with good lighting, forms the basis for high-quality images. After booking, you will receive a detailed checklist for optimal preparation.",
  },
  {
    q: "What happens in bad weather?",
    a: "In poor weather conditions, we jointly assess whether the appointment can go ahead as planned or should be postponed. Suitable weather is particularly important for exterior and drone shots. In case of heavy rain, strong wind or other unsuitable conditions, a replacement date is arranged. The safety and quality of the images always come first.",
  },
  {
    q: "Are drones allowed to fly everywhere?",
    a: "Drone shots are subject to certain legal requirements and local flight restrictions. In most cases, drone shots can be carried out without any problems. We therefore check the conditions on site before every planned flight and ensure the shots can be carried out safely and legally. If a flight is not possible, we inform you early and find a suitable alternative together.",
  },
  {
    q: "Can I combine photo and video services individually?",
    a: "Yes. In addition to the various packages, selected individual and add-on services are available, so the scope of your property marketing can be tailored individually. For example, additional drone shots or golden-hour shots can be added to a photo package.",
  },
  {
    q: "What is the difference between a reel and a classic video?",
    a: "A social media reel is designed to grab attention within a few seconds. The property is presented in a short, dynamic and emotional way. Ideal for Instagram, TikTok, Facebook and other social media platforms, with fast cuts and transitions, appealing camera movements and a compact presentation. A classic property video, on the other hand, gives more room to show the property in detail and as a whole. Rooms, features and special details can be presented more calmly and in more detail. The video can be filmed horizontally or vertically as desired.",
  },
  {
    q: "Can property photos and videos be retouched?",
    a: "Yes. All property photos are professionally edited to ensure a natural, high-quality presentation. Minor retouching is generally included, for example replacing a sky or obscuring number plates and personal data. For property videos, subsequent retouching is generally not provided, so good preparation of the property before the shoot is especially important. Our preparation checklist helps you get the property ready for filming.",
  },
  {
    q: "Who are the services suitable for?",
    a: "The services are aimed at anyone who wants to present and market a property professionally. This includes estate agents, private sellers and landlords in particular, as well as providers of holiday accommodation on platforms such as Airbnb, Booking.com and comparable portals. Developers, project planners and other companies can also benefit from professional property photography and videography.",
  },
];

async function run() {
  const doc = await client.getDocument("siteSettings");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = ((doc as any)?.faq?.items ?? []) as any[];
  if (items.length !== en.length) {
    console.error(`Anzahl passt nicht: ${items.length} Fragen im Dokument, ${en.length} Übersetzungen. Abbruch.`);
    process.exit(1);
  }
  const updated = items.map((it, i) => ({
    ...it,
    question: { ...(it.question ?? {}), en: en[i].q },
    answer: { ...(it.answer ?? {}), en: en[i].a },
  }));
  await client.patch("siteSettings").set({
    "faq.heading": {
      de: "Häufig gestellte Fragen",
      en: "Frequently asked questions",
    },
    "faq.subheading": {
      de: "Warum Luftaufnahmen für Immobilien mehr bewirken können.",
      en: "Why aerial shots can do more for real estate.",
    },
    "faq.items": updated,
  }).commit();
  console.log("FAQ auf Englisch übersetzt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
