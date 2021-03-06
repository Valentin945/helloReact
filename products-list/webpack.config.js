var webpack = require( 'webpack');
var path = require( 'path');

var BUILD_DIR = path.resolve( __dirname, 'client/public');
var APP_DIR = path.resolve( __dirname, 'client');

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
        loader: "style-loader!css-loader"
      }
    ]
  },
  entry: APP_DIR + '/index.jsx',
  output: { 
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
