import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/nadina-portfolio.html",
      },
    ];
  },
};

export default nextConfig;
