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
      name: "packages",
      title: "Packages / Pricing",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Package name", type: "localeString" }),
            defineField({ name: "price", title: "Price (e.g. 490 EUR)", type: "string" }),
            defineField({ name: "description", title: "Short description", type: "localeText" }),
            defineField({
              name: "features",
              title: "What's included",
              type: "localeStringArray",
            }),
            defineField({ name: "featured", title: "Highlight this package", type: "boolean", initialValue: false }),
          ],
          preview: {
            select: { title: "name.de", subtitle: "price" },
          },
        }),
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
