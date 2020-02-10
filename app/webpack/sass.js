const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (paths) {
  return [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true,
          },
        },
        'css-loader',
        'sass-loader',
      ],
    },
  ]
};
