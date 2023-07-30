/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
  experimental: {
    scrollRestoration: true,
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
