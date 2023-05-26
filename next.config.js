/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // https://github.com/vercel/next.js/issues/48177#issuecomment-1557354538
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    )
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
  images: {
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
