const path = require("path");
const resolvePath = (filename) => {
  path.resolve(__dirname, filename);
};
//排除node_modules
const nodeExternals = require("webpack-node-externals");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  //   externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".vue"],
  },
};
