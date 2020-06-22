const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './lib/app/js/main.js',
  },

  plugins: [
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(__dirname, 'lib', 'assets'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtraxtPlugin({
      filename: 'css-[name].[contentHash].css',
    }),
  ],

  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'js-[name].[contentHash].js',
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtraxtPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts/',
          publicPath: '/build/fonts/',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
};
