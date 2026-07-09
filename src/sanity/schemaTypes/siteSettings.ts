import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site content",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Business name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
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
            defineField({ name: "label", title: "Label", type: "string" }),
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
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
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
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
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
            defineField({ name: "name", title: "Package name", type: "string" }),
            defineField({ name: "price", title: "Price (e.g. 490 EUR)", type: "string" }),
            defineField({ name: "description", title: "Short description", type: "text", rows: 2 }),
            defineField({
              name: "features",
              title: "What's included",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "featured", title: "Highlight this package", type: "boolean", initialValue: false }),
          ],
          preview: {
            select: { title: "name", subtitle: "price" },
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
            defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
            defineField({ name: "author", title: "Author", type: "string" }),
            defineField({ name: "role", title: "Role (optional)", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 5 }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site content" };
    },
  },
});
