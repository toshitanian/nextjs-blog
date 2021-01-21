// https://nextjs.org/docs/api-reference/next.config.js/

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap
  },
}
