/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // Allows us to access other directories in the monorepo
  experimental: {
    externalDir: true,
  },
  // This feature conflicts with next-images
  images: {
    disableStaticImages: true,
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    if (options.isServer) {
      config.externals = ["react", "react-native-web", ...config.externals];
    }
    config.resolve.alias["react"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react"
    );
    config.resolve.alias["react-native-web"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react-native-web"
    );

    return config;
  },
};

// Necessary to handle statically
const withImages = require("next-images");
const withFonts = require("next-fonts");

const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native-svg",
  "native-base",
  "react-native-svg",
]);

// module.exports = withImages(withFonts(nextConfig));

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withImages, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
    // your plugins go here.
  ],
  nextConfig
);
