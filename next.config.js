/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "cdn.pixabay.com"],
  },
  env: {
    MONGODB_URL:
      "mongodb+srv://devendra:devendra@cluster0.aq7umfb.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig
