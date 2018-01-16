var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

var config = {
  devtool: 'eval',

  entry: [
    /// react-hot loader entry point
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],

  output: {
    filename: 'bundle.js',
    publicPath: '/dist',
    path:  path.resolve('dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules:  ['src', 'node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]

};

module.exports = config