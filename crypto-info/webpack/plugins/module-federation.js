const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../../package.json");

const deps = packageJson.dependencies;

module.exports = () =>
  new ModuleFederationPlugin({
    name: "equity_info",
    filename: "remote-entry.js",
    exposes: {
      "./EquityInfo": "./src/App",
    },
    shared: {
      ...deps,
      react: { singleton: true, requiredVersion: deps.react },
      "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
    },
  });
