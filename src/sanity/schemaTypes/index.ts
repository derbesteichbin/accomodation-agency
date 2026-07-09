import { type SchemaTypeDefinition } from 'sanity'
import { localeString, localeText, localeStringArray } from './localeTypes'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString, localeText, localeStringArray, siteSettings],
}
