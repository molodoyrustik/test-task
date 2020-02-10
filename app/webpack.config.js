const path = require('path');
const webpack = require('webpack');

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devserver            = require('./webpack/devserver');
const sass                 = require('./webpack/sass');
const extractCSS           = require('./webpack/css.extract');
const files                = require('./webpack/files');
const js                   = require('./webpack/js');
const prodPlugins          = require('./webpack/prod.plugins');
const devPlugins           = require('./webpack/dev.plugins');

var config = {
  module: {
    rules: [
      ...files(),
      ...js(),
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // config.entry = [
    //   'react-hot-loader/patch',
    //   'webpack-dev-server/client?http://localhost:3000',
    //   'webpack/hot/only-dev-server',
    //   './src/index.js',
    // ]
    config.entry = ['react-hot-loader/patch', './src/index.js']
    config.output = {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    }
    config.devtool = 'source-map';
    config.devServer = devserver();
    config.plugins = devPlugins();
    config.module.rules = config.module.rules.concat([
      ...sass()
    ])
    config.resolve.alias = {
      'react-dom': '@hot-loader/react-dom',
    }
  }

  if (argv.mode === 'production') {
    config.entry = [
      './src/index.js'
    ]
    config.output = {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/bundle.[hash].js'
    }
    config.plugins = [
      ...prodPlugins(),
    ]
    config.optimization = {
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
    config.module.rules = config.module.rules.concat([
      ...extractCSS()
    ])
  }
  return config;
};
