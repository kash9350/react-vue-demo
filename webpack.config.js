// const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },
        {
            test: /\.vue$/,
            exclude: /node_modules/,
            use : {
                loader: 'vue-loader'
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              'css-loader',
              'sass-loader'
            ]
        }
    ]
  },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     },
//     extensions: ['*', '.js', '.vue', '.json']
//   },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};