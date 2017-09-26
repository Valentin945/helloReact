var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
/// Tell webpack to use babel
  module : {
    loaders : [
      {
        test : /\.jsx?/,
      include : APP_DIR,
      loader: 'babel-loader'
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
