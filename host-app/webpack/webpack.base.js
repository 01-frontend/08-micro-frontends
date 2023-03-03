const path = require("path");

const handleCss = require("./rules/handle-css");
const handleTs = require("./rules/handle-ts");
const handleSvg = require("./rules/handle-svg");
const handleImages = require("./rules/handle-images");
const bundleStatsWebpackPlugin = require("./plugins/bundle-stats-webpack-plugin");
const cleanWebpackPlugin = require("./plugins/clean-webpack-plugin");
const copyWebpackPlugin = require("./plugins/copy-webpack-plugin");
const htmlWebpackPlugin = require("./plugins/html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[chunkhash:8].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [handleCss(), handleTs(), handleImages(), handleSvg()],
  },
  plugins: [
    htmlWebpackPlugin(),
    cleanWebpackPlugin(),
    copyWebpackPlugin(),
    bundleStatsWebpackPlugin(),
  ],
};
