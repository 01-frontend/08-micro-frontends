const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { MfeName } = require("shared-lib/common/constants");

const packageJson = require("../../package.json");

const deps = packageJson.dependencies;

module.exports = () =>
  new ModuleFederationPlugin({
    name: MfeName.HOLDINGS,
    filename: "remote-entry.js",
    exposes: {
      "./App": "./src/App",
    },
    shared: {
      ...deps,
      react: { singleton: true, requiredVersion: deps.react },
      "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
    },
  });
