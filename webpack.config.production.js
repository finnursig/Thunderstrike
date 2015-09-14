var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config');

config.debug = false;
config.devtool = null;
config.module.loaders[0].loader = ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader');
config.plugins.push(new webpack.optimize.UglifyJsPlugin());
config.plugins.push(new ExtractTextPlugin('[name].bundle.css', { allChunks: true }));

module.exports = config;