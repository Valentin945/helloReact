var webpack = require('webpack');
var path = require( 'path');

// var BUILD_DIR = path.resolve( __dirname, 'dist');
var WebpackNotiferPlugin = require('webpack-notifier')

var config = {
  /// Tell webpack to use babel
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],
  output: {
    publicPath: '/dist',
    path:  path.resolve('dist'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ['src', 'node_modules'],
  },
  
  module : {
    loaders : [
      {
        test : /\.tsx?$/,
        loader: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotiferPlugin({alwaysNotify: true})
  ]
};

module.exports = config;
