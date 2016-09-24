const path = require('path');
const autoprefixer = require('autoprefixer');

const PATH = {
  SRC: path.join(__dirname, 'src/app'),
  DIST: path.join(__dirname, 'dist/app'),
};

PATH.SRC_INDEX = `${PATH.SRC}/index`;
PATH.SRC_STYLE = `${PATH.SRC}/style/style`;

const config = {
  entry: PATH.SRC_INDEX,

  output: {
    path: PATH.DIST,
    filename: 'bundle.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx'],
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
};

module.exports = config;
