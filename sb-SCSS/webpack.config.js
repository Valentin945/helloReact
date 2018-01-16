var webpack = require( 'webpack');
var path = require( 'path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR = path.resolve( __dirname, 'dist');
var APP_DIR = path.resolve( __dirname, 'src');

var config = {
  /// Tell webpack to use babel
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'stylesheets/[name].bundle.css',
      allChunks: true,
    }),
  ],
  entry: [APP_DIR + '/index.jsx', APP_DIR + '/stylesheets/main.scss'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
