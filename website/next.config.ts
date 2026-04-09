import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rtsinternational.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.bbcfactoring.com.mx",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
