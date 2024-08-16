/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*',
      },
      {
        source: '/:shortUrl',
        destination: 'http://localhost:4000/url/:shortUrl',
      },
    ];
  },
};

export default nextConfig;