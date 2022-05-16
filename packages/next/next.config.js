const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");

const nextConfig = {
  // Allows us to access other directories in the monorepo
  experimental: {
    externalDir: true,
  },
  // This feature conflicts with next-images
  // images: {
  //   disableStaticImages: true,
  // },
  webpack: (config, options) => {
    // config.resolve.alias = {
    //   ...(config.resolve.alias || {}),
    //   // Transform all direct `react-native` imports to `react-native-web`
    //   "react-native$": "react-native-web",
    // };
    // config.resolve.extensions = [
    //   ".web.js",
    //   ".web.ts",
    //   ".web.tsx",
    //   ...config.resolve.extensions,
    // ];

    // if (options.isServer) {
    //   config.externals = ["react", "react-native-web", ...config.externals];
    // }
    // config.resolve.alias["react"] = path.resolve(
    //   __dirname,
    //   ".",
    //   "node_modules",
    //   "react"
    // );
    // config.resolve.alias["react-native-web"] = path.resolve(
    //   __dirname,
    //   ".",
    //   "node_modules",
    //   "react-native-web"
    // );

    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader", // or directly file-loader
      include: path.resolve(__dirname, "node_modules/@native-base/icons"),
    });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      // "react-native-linear-gradient": "react-native-web-linear-gradient",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    return config;
  },
};

module.exports = withNativebase({
  dependencies: ["@native-base/icons"],
  nextConfig,
});
