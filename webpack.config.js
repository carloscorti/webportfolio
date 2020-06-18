const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  entry: {
    // vendor: './lib/app/vendor.js',
    main: './lib/app/js/main.js',
  },

  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: '[name].[contentHash].js',
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['react', 'env', 'stage-2'],
  //         },
  //       },
  //     },
  //   ],
  // },

  plugins: [
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'lib', 'assets'),
    }),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
};
