'use strict'

let path = require('path')

//let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    subdivide: [
      './src/index'
    ],
  },
  output: {
    library: "subdivide",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.join(__dirname, 'browser'),
    filename: '[name].js',
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [ 'babel' ],
        include: [
          path.join(__dirname, 'src'),
        ]
      },
      {
        test: /\.png$/, loader: 'url-loader?limit=100000'
      }
    ]
  }
}
