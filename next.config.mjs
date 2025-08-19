/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Ensure our Edge API routes are properly handled
  output: 'standalone',
};

export default nextConfig;
