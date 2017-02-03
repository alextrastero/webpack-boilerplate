const { createConfig, env, entryPoint, setOutput, sourceMaps } = require('@webpack-blocks/webpack2')
const devServer = require('@webpack-blocks/dev-server2')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const cssnext = require('postcss-cssnext')

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./build/bundle.js'),
  babel(),
  postcss([
    cssnext()
  ]),
  env('development', [
    devServer(),
    sourceMaps(),
    devServer.reactHot()
  ])
])
