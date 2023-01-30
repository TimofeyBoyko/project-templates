const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
    },
  ],
  ["@babel/preset-react", { runtime: "automatic" }],
];

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime",
  "@babel/plugin-proposal-export-namespace-from",
  "babel-plugin-styled-components",
];

module.exports = {
  presets,
  plugins,
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};
