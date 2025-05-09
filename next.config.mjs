/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['swansorter.com', '147.93.29.202'],
    unoptimized: true,
  },
};

export default nextConfig;
