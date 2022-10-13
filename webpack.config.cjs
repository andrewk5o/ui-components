const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = (_, argv) => {
  process.env.NODE_ENV = argv.mode || "development"
  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.bundle.js",
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
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
      new ForkTsCheckerWebpackPlugin(),
    ],
  }
}
