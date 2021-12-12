const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// TODO
// 1 - sort out the multi page static website case - a dedicated config file?
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { static: './dist' },
  entry: { main: './src/main.js' },
  plugins: [new HtmlWebpackPlugin({ title: 'Development' })],
  // optimization: { splitChunks: { chunks: 'all' } },
  // optimization: { runtimeChunk: 'single', splitChunks: { chunks: 'all' } },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },

  module: {
    rules: [
      /**
       * ------------------------------
       * CSS styles
       * ------------------------------
       */
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },

      /**
       * ------------------------------
       * SASS styles
       * ------------------------------
       */
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
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

      /**
       * ------------------------------
       * images
       * ------------------------------
       */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      /**
       * ------------------------------
       * fonts
       * ------------------------------
       */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
