import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/hungiie.github.io',
};

module.exports = nextConfig;