import type { MetadataRoute } from "next";

// Demo preview: block all crawlers. Remove when the real site goes live.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
