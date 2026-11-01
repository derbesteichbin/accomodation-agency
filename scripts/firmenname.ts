import { getCliClient } from "sanity/cli";
const client = getCliClient({ apiVersion: "2025-01-01" });
async function run() {
  await client.patch("siteSettings").set({ businessName: "Immobilien Gurus" }).commit();
  console.log("Firmenname gesetzt.");
}
run().catch((e) => { console.error(e); process.exit(1); });
