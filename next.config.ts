import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed experimental nodeMiddleware flag to fix TypeError: t._onTimeout is not a function
  // This experimental feature was causing runtime instability
};

export default nextConfig;