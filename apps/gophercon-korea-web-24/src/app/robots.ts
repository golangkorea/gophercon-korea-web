import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/CoC", "/festival-intro", "/festival-staffs", "/sponsor", "/timetable"],
      },
    ],
    sitemap: `/sitemap.xml`,
  };
}
