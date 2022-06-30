/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  basePath: "/hrad-or-not",
};

module.exports = nextConfig;
