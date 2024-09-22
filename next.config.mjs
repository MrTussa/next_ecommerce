/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // TODO: Подключить бек
      },
    ],
  },
};

export default nextConfig;
