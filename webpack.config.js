const { addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, webpack } = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const devServer = require('@webpack-blocks/dev-server')
const cssnext = require("postcss-cssnext")

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
  postcss([
    cssnext()
  ]),
  env('development', [
    devServer({
      port: 3000
    }),
    sourceMaps(),
    devServer.reactHot(),
  ]),
])
