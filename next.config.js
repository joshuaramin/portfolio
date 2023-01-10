const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: ["i.scdn.co"],
   },
   webpack(config) {
      config.resolve.alias = {
         ...config.resolve.alias,
         "@styles": path.resolve(__dirname, "src/styles"),
      };

      return config;
   },
};

module.exports = nextConfig;
