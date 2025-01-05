import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/barhaeven",
  images: { unoptimized: true },
};

export default nextConfig;
