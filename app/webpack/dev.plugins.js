const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false),
        'process.env.NODE_ENV': JSON.stringify('development'),
        'SERVICE_URL': JSON.stringify('https://dev.example.com')
      }),
      new HtmlWebpackPlugin({
        body: true,
        inject: false,
        hash: true,
        template: './utils/index.html',
        filename: 'index.html'
      }),
      new webpack.NamedModulesPlugin(),
      new MiniCssExtractPlugin({ filename: 'styles.css' }),
      new webpack.HotModuleReplacementPlugin()
    ]
};
