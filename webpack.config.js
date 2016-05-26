var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['react-hot', 'babel-loader'],
        exclude: /node_modules/,
        query: {
          babelrc: false,
          presets: [
            'react',
            'es2015',
            'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
