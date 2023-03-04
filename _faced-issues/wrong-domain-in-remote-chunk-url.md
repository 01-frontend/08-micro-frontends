# Wrong domain in remote chunk url

```
  Loading chunk vendors-node_modules_react_jsx-runtime_js failed. (error: http://localhost:3000/vendors-node_modules_react_jsx-runtime_js.bundle.c036aae5.js)
  // The chunk file should be loaded from remote url (3001) instead of host-app (3000)
```

Solution: change the `output.publicPath to "auto"`

```
  module.exports = {
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: {
      publicPath: "auto",
      path: path.resolve(__dirname, "../dist"),
      filename: "bundle.[chunkhash:8].js",
    },
```
