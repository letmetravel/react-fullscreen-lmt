var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry:   "./example/index.js",
  output:  {
    path: "./",
    filename: "/bundle.js"
  },
  module:  {
    loaders: [
      {include: /\.json$/, loaders: ["json-loader"]},
      {include: /\.js$/, loaders: ["babel-loader?stage=1&optional=runtime"], exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
    ]
  },
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules",
      "web_modules"
    ],
    extensions: ["", ".json", ".js"]
  }
};