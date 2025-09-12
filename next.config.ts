import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/landing-portfolio' : '',
  assetPrefix: isProd ? '/landing-portfolio/' : '',
};

export default nextConfig;
