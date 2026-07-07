import { siteContent } from "@/content/site";
import type { SiteContent } from "@/content/types";

export async function getContent(): Promise<SiteContent> {
  return siteContent;
}
