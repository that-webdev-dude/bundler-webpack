const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: { main: './src/main.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
    }),
  ].concat(
    devMode
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css',
          }),
        ]
  ),
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
