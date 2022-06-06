/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  basePath: "/hot-or-not/out",
};

module.exports = nextConfig;
