const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: 'source-map',
    entry: './src/js/index',
    output: {
      filename: (mode === 'development') ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
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
