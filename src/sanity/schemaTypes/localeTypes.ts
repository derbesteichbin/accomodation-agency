import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized string",
  type: "object",
  fields: [
    defineField({ name: "de", title: "Deutsch", type: "string" }),
    defineField({ name: "en", title: "English", type: "string" }),
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({ name: "de", title: "Deutsch", type: "text", rows: 4 }),
    defineField({ name: "en", title: "English", type: "text", rows: 4 }),
  ],
});

export const localeStringArray = defineType({
  name: "localeStringArray",
  title: "Localized list",
  type: "object",
  fields: [
    defineField({ name: "de", title: "Deutsch", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "en", title: "English", type: "array", of: [{ type: "string" }] }),
  ],
});
