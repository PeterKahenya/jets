const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devtool:false,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    historyApiFallback:true,
    port: 3000,
    // publicPath: "http://localhost:3000/dist/",
    hot: true,
    // watchContentBase: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};