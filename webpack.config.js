const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isProductionMode = process.env.NODE.ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: isProductionMode ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  module: {
    rules: [
      /**
       * styles
       */
      {
        test: /\.css$/i,
        use: [
          isProductionMode
            ? MiniCSSExtractPlugin.loader
            : { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },

      /**
       * images
       */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      /**
       * fonts
       */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
