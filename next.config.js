const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
