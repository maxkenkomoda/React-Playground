const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, argv) => {
  const config = {
    mode: argv.mode,
    entry: "./src/index.tsx",
    output: {
      filename: "index.js",
      path: path.resolve(
        __dirname,
        // dist is for track test and public is for development server
        argv.mode === "production" ? "dist" : "public"
      ),
    },
    target: "web",
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: "babel-loader",
              options: { presets: ["@babel/preset-env", "@babel/react"] },
            },
            {
              loader: "ts-loader",
              options: {
                configFile: path.resolve(__dirname, "tsconfig.json"),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      hot: true,
      host: "localhost",
      historyApiFallback: true,
      port: 4200,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/statics", "index.html"),
        filename: "index.html",
        inject: "body",
      }),
    ],
  };

  // if development mode, create map
  if (argv.mode === "development") {
    config.devtool = "eval-source-map";
  }
  return config;
};
