const { addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel6')
const devServer = require('@webpack-blocks/dev-server')

const path = require('path')

module.exports = createConfig([
  entryPoint('./src'),
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
    devServer({
      port: 3000
    }),
    sourceMaps()
  ]),
])
