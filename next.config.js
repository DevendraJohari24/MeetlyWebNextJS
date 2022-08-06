/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig
