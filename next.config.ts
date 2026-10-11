import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Placeholder photos come from Unsplash. Once real photos live in /public/images,
    // this entry can be removed.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Demo site: keep it out of search engines (also set via metadata + robots.ts).
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
