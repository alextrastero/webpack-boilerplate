const path = require('path');
const babel = require('@webpack-blocks/babel6');
const { addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack } = require('@webpack-blocks/webpack')
const devServer = require('@webpack-blocks/dev-server')

module.exports = createConfig([
  entryPoint('./src/index'),
  setOutput({
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }),
  addPlugins([
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env || 'development')
    })
  ]),
  babel(),
  env('development', [
    devServer(),
    sourceMaps(),
    devServer.reactHot(),
  ])
]);
