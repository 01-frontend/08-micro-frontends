const path = require("path");

const cleanWebpackPlugin = require("./plugins/clean-webpack-plugin");
const handleCss = require("./rules/handle-css");
const handleImages = require("./rules/handle-images");
const handleSvg = require("./rules/handle-svg");
const handleTs = require("./rules/handle-ts");

module.exports = {
  mode: "production",
  entry: {
    constants: path.resolve(__dirname, "../src/common/constants.ts"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [handleCss(), handleTs(), handleImages(), handleSvg()],
  },
  plugins: [cleanWebpackPlugin()],
};
