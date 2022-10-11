const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: { 
    path: path.join(__dirname, "dist"), 
    filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      },
    ],
  },
  resolve: { 
    modules: [path.resolve(__dirname, "src"), "node_modules"] 
  },
  devServer: { 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "static", "index.html"),
    }),
  ],
};