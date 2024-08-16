/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
