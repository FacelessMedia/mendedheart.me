import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mendedheart.me",
      },
    ],
  },
};

export default nextConfig;
