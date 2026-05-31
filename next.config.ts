import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/works',
};

module.exports = nextConfig;