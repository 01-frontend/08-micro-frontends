const path = require("path");

const glob = require("glob");

const cleanWebpackPlugin = require("./plugins/clean-webpack-plugin");
const handleCss = require("./rules/handle-css");
const handleImages = require("./rules/handle-images");
const handleSvg = require("./rules/handle-svg");
const handleTs = require("./rules/handle-ts");

module.exports = {
  mode: "production",
  entry: glob.sync("./src/**/*.{ts,tsx}").reduce((acc, path) => {
    const buildPath = path
      .replace("./src/", "./")
      .replace(".ts", "")
      .replace(".tsx", "");
    acc[buildPath] = path;
    return acc;
  }, {}),
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
