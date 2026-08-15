import type { NextConfig } from 'next';
import { REPO_NAME } from './src/lib/basePath';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Explicitly pin the project root so Turbopack doesn't try to walk up
  // to a lockfile outside the project (e.g. one in the user's home
  // directory), which otherwise prints a "ignored package-lock.json"
  // warning on `next dev`.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
