module.exports = {
  presets: ["@native-base/next-adapter/babel"],
  plugins: [
    // ["react-native-web", { commonjs: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    [
      "transform-define",
      {
        __DEV__: process.env.NODE_ENV,
        __SUBPLATFORM__: "next",
      },
    ],
  ],
};
