import type { MetadataRoute } from "next";
import { site } from "./_lib/site";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: site.url,
    changeFrequency: "monthly",
    priority: 1,
    images: [`${site.url}/img/dra-2.jpg`, `${site.url}/img/dra-1.jpg`],
  },
];

export default sitemap;
