import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/CoC", "/festival-intro", "/festival-staffs", "/sponsor", "/timetable"], // 그 외 모든 경로 비허용
      },
    ],
    sitemap: `/sitemap.xml`,
  };
}
