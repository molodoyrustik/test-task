const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(cssName, paths) {
    return [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
};
