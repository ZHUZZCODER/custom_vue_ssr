const resolvePath = require("./resolvePath");
const { merge } = require("webpack-merge");
const commonConfig = require("./common.config");
const { DefinePlugin } = require("webpack");

module.exports = merge(commonConfig, {
  target: "web",
  entry: "./src/client/index.js",
  output: {
    clean: true,
    filename: "client_bundle.js",
    path: resolvePath("../dist/client"),
  },
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});
