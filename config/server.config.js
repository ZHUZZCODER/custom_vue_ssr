const resolvePath = require("./resolvePath");
//排除node_modules
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const commonConfig = require("./common.config");

module.exports = merge(commonConfig, {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    clean: true,
    filename: "server_bundle.js",
    path: resolvePath("../dist/server"),
  },
  externals: [nodeExternals()],
});
