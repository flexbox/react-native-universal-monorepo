// Failed to compile

// ```
// ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js
// TypeError: Property id of VariableDeclarator expected node to be of a type ["LVal"] but instead got "StringLiteral"
// ```

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["react-native-web", { commonjs: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
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

// ```
// ../app/src/App.tsx
// Module parse failed: Unexpected token (16:21)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// | // import LogoSrc from "./logo.png";
// |
// > export function App(): JSX.Element {
// |   const platformValue = subplatform
// |     ? `${Platform.OS} (${subplatform})`
// ```

// {
//   "presets": [
//     "next/babel",
//     ["babel-preset-expo", { "jsxRuntime": "automatic" }]
//   ],
//   "plugins": [
//     ["@babel/plugin-proposal-class-properties", { "loose": true }],
//     ["@babel/plugin-proposal-private-methods", { "loose": true }],
//     ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
//     "react-native-reanimated/plugin"
//   ]
// }
