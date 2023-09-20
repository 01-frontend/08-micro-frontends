const { MfeName } = require("shared-lib/dist/common/constants");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../../package.json");

const deps = packageJson.dependencies;

module.exports = () =>
  new ModuleFederationPlugin({
    name: MfeName.ORDER_MGT,
    filename: "remote-entry.js",
    exposes: {
      "./App": "./src/App",
    },
    shared: {
      ...deps,
      react: {
        import: "react",
        shareKey: "react",
        shareScope: "default",
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
    },
  });
