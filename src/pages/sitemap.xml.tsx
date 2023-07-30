import { SESSIONS } from "@/constants/sessions";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // cache for up to 8 hours
  res.setHeader("Cache-Control", "public, max-age=28800, stale-while-revalidate=28800");
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();

  return {
    props: {},
  };
};

const createSitemap = () =>
  `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://gophercon.kr/</loc>
    </url>
    <url>
      <loc>https://gophercon.kr/coc</loc>
    </url>
    <url>
      <loc>https://gophercon.kr/contact</loc>
    </url>
    <url>
      <loc>https://gophercon.kr/program</loc>
    </url>
    <url>
      <loc>https://gophercon.kr/sponsors</loc>
    </url>
    ${SESSIONS.map((session) =>
      `
          <url>
            <loc>https://gophercon.kr/program/${session.id}</loc>
          </url>
        `.trim(),
    ).join("")}
  </urlset>
`;

export default () => null;
