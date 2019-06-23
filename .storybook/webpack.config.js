const webpackConfig = require('mmm-scripts/webpack.config').default(
  'production',
)

module.exports = ({ config }) => {
  config.resolve = webpackConfig.resolve
  config.module = webpackConfig.module

  return config
}
