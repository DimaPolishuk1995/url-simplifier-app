/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async rewrites() {
    const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:4000';

    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/:path*`,
      },
      {
        source: '/:shortUrl',
        destination: `${apiBaseUrl}/url/:shortUrl`,
      },
    ];
  },
};

export default nextConfig;
