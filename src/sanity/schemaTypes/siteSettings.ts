import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site content",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "localeString" }),
    defineField({ name: "bookingCalLink", title: "Cal.com link (handle/event-slug)", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
    defineField({
      name: "nav",
      title: "Navigation links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localeString" }),
            defineField({ name: "href", title: "Link (e.g. #portfolio)", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Hero section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "localeString" }),
        defineField({ name: "subheading", title: "Subheading", type: "localeText" }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "localeString" }),
            defineField({ name: "description", title: "Description", type: "localeText" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "packageGroups",
      title: "Pakete",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Objektart",
          fields: [
            defineField({
              name: "propertyType",
              title: "Objektart",
              type: "string",
              options: { list: [
                { title: "Wohnung", value: "wohnung" },
                { title: "Haus", value: "haus" },
              ] },
            }),
            defineField({
              name: "categories",
              title: "Kategorien",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  title: "Kategorie",
                  fields: [
                    defineField({ name: "categoryName", title: "Kategoriename", type: "localeString" }),
                    defineField({
                      name: "tiers",
                      title: "Stufen (Basis / Gold / Platin)",
                      type: "array",
                      of: [
                        defineArrayMember({
                          type: "object",
                          fields: [
                            defineField({ name: "name", title: "Stufenname", type: "localeString" }),
                            defineField({ name: "price", title: "Preis (z.B. 490 EUR)", type: "string" }),
                            defineField({ name: "description", title: "Kurzbeschreibung", type: "localeText" }),
                            defineField({ name: "features", title: "Enthalten", type: "localeStringArray" }),
                            defineField({ name: "featured", title: "Hervorheben", type: "boolean", initialValue: false }),
                          ],
                          preview: { select: { title: "name.de", subtitle: "price" } },
                        }),
                      ],
                    }),
                  ],
                  preview: { select: { title: "categoryName.de" } },
                }),
              ],
            }),
          ],
          preview: {
            select: { pt: "propertyType" },
            prepare({ pt }) { return { title: pt === "haus" ? "Haus" : "Wohnung" }; },
          },
        }),
      ],
    }),
    defineField({
      name: "singleServices",
      title: "Einzelleistungen",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Objektart",
          fields: [
            defineField({
              name: "propertyType",
              title: "Objektart",
              type: "string",
              options: { list: [
                { title: "Wohnung", value: "wohnung" },
                { title: "Haus", value: "haus" },
              ] },
            }),
            defineField({
              name: "items",
              title: "Leistungen",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "name", title: "Name", type: "localeString" }),
                    defineField({ name: "price", title: "Preis (z.B. ab 120 EUR)", type: "string" }),
                    defineField({ name: "description", title: "Kurzbeschreibung", type: "localeText" }),
                  ],
                  preview: { select: { title: "name.de", subtitle: "price" } },
                }),
              ],
            }),
          ],
          preview: {
            select: { pt: "propertyType" },
            prepare({ pt }) { return { title: pt === "haus" ? "Haus" : "Wohnung" }; },
          },
        }),
      ],
    }),
    defineField({
      name: "addons",
      title: "Zusatzleistungen",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "localeString" }),
            defineField({ name: "price", title: "Preis (optional)", type: "string" }),
            defineField({ name: "description", title: "Kurzbeschreibung", type: "localeText" }),
          ],
          preview: { select: { title: "name.de", subtitle: "price" } },
        }),
      ],
    }),
    defineField({
      name: "aboutMe",
      title: "Über mich",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Überschrift", type: "localeString" }),
        defineField({ name: "body", title: "Text", type: "localeText" }),
        defineField({ name: "image", title: "Bild", type: "image", options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt-Text", type: "string" })] }),
      ],
    }),
    defineField({
      name: "benefits",
      title: "Vorteile (Darum ...)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Überschrift", type: "localeString" }),
        defineField({ name: "items", title: "Vorteile", type: "array",
          of: [defineArrayMember({ type: "object", fields: [
            defineField({ name: "title", title: "Titel", type: "localeString" }),
            defineField({ name: "description", title: "Beschreibung", type: "localeText" }),
          ], preview: { select: { title: "title.de" } } })] }),
      ],
    }),
    defineField({
      name: "howItWorks",
      title: "So einfach geht's",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Überschrift", type: "localeString" }),
        defineField({ name: "steps", title: "Schritte", type: "array",
          of: [defineArrayMember({ type: "object", fields: [
            defineField({ name: "title", title: "Titel", type: "localeString" }),
            defineField({ name: "description", title: "Beschreibung", type: "localeText" }),
          ], preview: { select: { title: "title.de" } } })] }),
      ],
    }),
    defineField({
      name: "coverage",
      title: "Wo wir tätig sind",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Überschrift", type: "localeString" }),
        defineField({ name: "body", title: "Text", type: "localeText" }),
        defineField({ name: "areas", title: "Gebiete", type: "localeStringArray" }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Portfolio gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "localeText" }),
            defineField({ name: "author", title: "Author", type: "string" }),
            defineField({ name: "role", title: "Role (optional)", type: "localeString" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "localeString" }),
        defineField({ name: "body", title: "Body", type: "localeText" }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
    }),
    defineField({ name: "impressum", title: "Impressum (legal notice)", type: "localeText" }),
    defineField({ name: "privacy", title: "Datenschutzerklärung (privacy policy)", type: "localeText" }),
  ],
  preview: {
    prepare() {
      return { title: "Site content" };
    },
  },
});
