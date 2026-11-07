import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // In dev, serve files from public/ as-is so a replaced image shows up on
    // reload. The optimizer cache doesn't notice when a file changes in place.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;

// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   basePath: '/portfolio',
// };

// module.exports = nextConfig;