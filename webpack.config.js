const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname, //path.join(__dirname, "src"),
  entry: './src/js/client.js',
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'client.js'
  },
};
