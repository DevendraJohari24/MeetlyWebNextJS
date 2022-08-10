/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "cdn.pixabay.com"],
  },
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL:
      "mongodb+srv://devendra:devendra@cluster0.aq7umfb.mongodb.net/?retryWrites=true&w=majority",
    DB_NAME: "meetups",
  },
};

module.exports = nextConfig
