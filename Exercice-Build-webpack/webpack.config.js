const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BannerPlugin } = require('webpack')

module.exports = function(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: 'source-map',
    entry: './src/js/index',
    output: {
      filename: (mode === 'development') ? '[name].js' : '[name].[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new BannerPlugin({
        banner: 'Copyright Romain 2021'
      })
    ],
    resolve: {
      extensions: [ '.ts', '.js' ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
  };

  return config;
};
