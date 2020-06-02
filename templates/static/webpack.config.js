const webpack = require('webpack');
const resolve = require('path').resolve;
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
 mode: 'production',
 devtool: 'source-map',
 entry: __dirname + '/js/index.jsx',
 output:{
      path: resolve('../public'),
      filename: 'bundle.js',
      publicPath: resolve('../public')
},
 resolve: {
  extensions: ['.js','.jsx','.css']
 },
 module: {
  rules: [
  {
   test: /\.jsx?/,
   loader: 'babel-loader',
   exclude: /node_modules/,
  },
  {
   test: /\.css$/,
   loader: 'style-loader!css-loader?modules'
  }]
 },
 optimization: {
        noEmitOnErrors: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true,
                },
                sourceMap: true,
            }),
        ],
 },
};
module.exports = config;
