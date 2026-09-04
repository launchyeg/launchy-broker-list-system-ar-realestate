import { MetadataRoute } from "next";
import siteConfig from "@/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/dashboard/"],
      },
    ],
    sitemap: `${siteConfig.seo.siteUrl}/sitemap.xml`,
  };
}
