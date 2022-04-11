/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")
const fs = require("fs")

const nextConfig = {
  webpack: (config, options) => {
    return config
  },
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
  env: {
    rawJsFromFile: fs.readFileSync("./facebookCode.js").toString(),
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/404": { page: "/404" },
    }
  },
}

const config = withPlugins(
  [
    withImages,
    //   optimizedImages,
    //   {
    //     // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
    //     optimizeImages: false,
    //   },
    // ],
  ],
  nextConfig
)

module.exports = config
