import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export' as const,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
