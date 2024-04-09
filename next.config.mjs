/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.wired.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.vox-cdn.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
