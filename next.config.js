/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["az", "en", "ru"],
    defaultLocale: "az",
    localeDetection: false
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**"
      }
    ]
  }
};

module.exports = nextConfig;
