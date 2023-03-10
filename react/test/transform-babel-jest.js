const babelPresetJest = require("babel-preset-jest");
const getBabelPreset = require("../scripts/get-babel-preset");

const babelOptions = getBabelPreset();

const jestBabelConfig = {
  ...babelOptions,
  plugins: [...babelOptions.plugins, ...babelPresetJest().plugins],
};

module.exports = require("babel-jest").createTransformer(jestBabelConfig);
