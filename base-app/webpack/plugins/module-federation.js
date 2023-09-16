const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../../package.json");

const deps = packageJson.dependencies;

module.exports = () =>
  new ModuleFederationPlugin({
    name: "host_app",
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
