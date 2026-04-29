/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the most important line!
  images: {
    unoptimized: true, // Static sites can't use Next.js default image optimization
  },
};

export default nextConfig;
