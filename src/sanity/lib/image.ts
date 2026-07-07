import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: unknown) {
  return builder.image(source as never);
}
