const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../../package.json");

const deps = packageJson.dependencies;

module.exports = () =>
  new ModuleFederationPlugin({
    name: "order_placement",
    filename: "remote-entry.js",
    exposes: {
      "./OrderPlacement": "./src/App",
    },
    shared: {
      ...deps,
      react: { singleton: true, requiredVersion: deps.react },
      "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
    },
  });
