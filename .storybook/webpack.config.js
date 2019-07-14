module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/typescript', '@babel/react'],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        },
      },
    ],
  })

  return config
}
