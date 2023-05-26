/** @type {import('next').NextConfig} */
const nextConfig = {
  imagses: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
