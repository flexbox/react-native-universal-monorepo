const path = require("path");

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "native-base",
  "react-native-svg",
  "react-native-safe-area-context",
  "@react-aria/visually-hidden",
  "@react-native-aria/button",
  "@react-native-aria/checkbox",
  "@react-native-aria/combobox",
  "@react-native-aria/focus",
  "@react-native-aria/interactions",
  "@react-native-aria/listbox",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/tabs",
  "@react-native-aria/utils",
  "@react-stately/combobox",
  "@react-stately/radio",
]);

// Necessary to handle static files
// const withImages = require("next-images");
const withFonts = require("next-fonts");

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

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    // [withImages, { projectRoot: __dirname }],
    // your plugins go here.
  ],
  nextConfig
);
