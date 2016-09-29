/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


const PATH = {
  SRC: path.join(__dirname, 'src/client'),
  DEST: path.join(__dirname, 'dist/app'),
};

PATH.SRC_INDEX = `${PATH.SRC}/index`;
PATH.SRC_STYLE = `${PATH.SRC}/style/style`;

const config = {
  entry: PATH.SRC_INDEX,

  output: {
    path: PATH.DEST,
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  devServer: {
    contentBase: PATH.DEST,
    inline: true,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATH.SRC,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
        include: PATH.SRC_STYLE,
      },
    ],
  },
  postcss() {
    return [autoprefixer];
  },
  plugins: [
    new NpmInstallPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
