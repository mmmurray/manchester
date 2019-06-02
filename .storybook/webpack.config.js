const webpackConfig = require('mmm-scripts/webpack.config').default({
  proxy: false,
  entry: './src/index.tsx',
})('production')

module.exports = ({ config }) => {
  config.resolve = webpackConfig.resolve
  config.module = webpackConfig.module

  return config
}
