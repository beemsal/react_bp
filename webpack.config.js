var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader?cacheDirectory', 'eslint-loader'],
        include: path.join(__dirname, 'app')
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: 'APP',
      appMountId: 'app',
      inject: false
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};