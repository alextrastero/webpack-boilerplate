const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  dist: resolve(__dirname, 'dist'),
  src: resolve(__dirname, 'src'),
  public: resolve(__dirname, '/')
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: PATHS.public,
  },
  context: PATHS.src,
  devtool: 'inline',
  devServer: {
    hot: true,
    contentBase: PATHS.dist,
    publicPath: PATHS.public
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
