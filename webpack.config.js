const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
      new HtmlWebpackPlugin({
      template: "./src/public/index.html"
      }),
      new CleanWebpackPlugin()
  ]
};