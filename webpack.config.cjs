const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (_, argv) => {
  process.env.NODE_ENV = argv.mode || "development"
  return {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.bundle.js",
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
    },
    ...(argv.mode !== "production" && { devtool: "inline-source-map" }),
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "static", "index.html"),
      }),
    ],
  }
}
