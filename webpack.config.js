const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHotPlugin = require("html-webpack-hot-plugin");
const htmlHotPlugin = new HtmlWebpackHotPlugin({
  // enable hot update, default: true
  // if hot update acting strangly, set it to false, and open an issue here:
  // https://github.com/cxphoe/html-webpack-hot-plugin
  hot: true
});

const env = process.env.NODE_ENV;

module.exports = {
  entry: "./app/index.js",

  mode: env,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 3500,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env == "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./app/index.html" }),
    htmlHotPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    before(app, server) {
      // This step is curcial. DevServer is needed to send reload message to opened page.
      // Without this step, the update of HtmlWebpackHotPlugin will be omitted and you will need to refresh the page manually.
      htmlHotPlugin.setDevServer(server);
    }
  }
};
