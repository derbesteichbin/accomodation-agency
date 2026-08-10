import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" });

const intros: Record<string, { de: string; en: string }> = {
  wohnung: {
    de: "Wohnung* Gilt für Eigentumswohnungen, Penthousewohnungen und Maisonettenwohnungen bis ca. 150 m² Wohnfläche. Für Villen, Mehrfamilienhäuser, Gewerbeobjekte oder außergewöhnlich große Immobilien erstellen wir ein individuelles Angebot.",
    en: "Apartment* Applies to condominiums, penthouses and maisonettes up to approx. 150 m² of living space. For villas, multi-family houses, commercial properties or exceptionally large properties we prepare an individual quote.",
  },
  haus: {
    de: "Haus* Gilt für Einfamilienhäuser, Doppelhaushälften und Reihenhäuser bis ca. 250 m² Wohnfläche. Für Villen, Mehrfamilienhäuser, Gewerbeobjekte oder außergewöhnlich große Immobilien erstellen wir ein individuelles Angebot.",
    en: "House* Applies to detached houses, semi-detached houses and terraced houses up to approx. 250 m² of living space. For villas, multi-family houses, commercial properties or exceptionally large properties we prepare an individual quote.",
  },
};

async function run() {
  const doc = await client.getDocument("siteSettings");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groups = ((doc as any)?.packageGroups ?? []).map((g: any) => ({
    ...g,
    intro: intros[g.propertyType] ?? g.intro,
  }));
  await client.patch("siteSettings").set({ packageGroups: groups }).commit();
  console.log("Paket-Beschreibungen eingespielt.");
}

run().catch((err) => { console.error("Fehler:", err); process.exit(1); });
