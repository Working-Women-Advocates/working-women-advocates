'use strict'

const webpack = require('webpack') // eslint-disable-line no-unused-vars

module.exports = {
  entry: './app/react/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'sass-loader',  // compiles Sass to CSS
          options: {
            includePaths: ['app/sass/main.scss']
          }
        }]
      }
    ]
  }
}
