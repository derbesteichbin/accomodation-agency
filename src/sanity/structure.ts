import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site content")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings").title("Site content")
        ),
    ]);
