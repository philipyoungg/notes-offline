const path = require('path')

const APP_DIR =  path.join(__dirname, 'src/app')
const BUILD_DIR =  path.join(__dirname, 'dist/app')

const config = {
  entry: APP_DIR + '/index',

  output: {
    path: BUILD_DIR,
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
        include: APP_DIR,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
    ],
  },
}

module.exports = config
