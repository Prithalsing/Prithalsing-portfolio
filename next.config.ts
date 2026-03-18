import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing from drei
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
