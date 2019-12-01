module.exports = {
  test: {
    coverageIgnores: [
      '**/docs.tsx',
      'src/components/line-chart/**',
      'src/components/node-editor/**',
      'src/showcase/**',
    ],
  },
  components: [
    {
      type: 'ts-lib',
      name: 'lib',
      entryPath: 'src',
      outputPath: 'lib',
    },
    {
      type: 'ts-web-app',
      name: 'showcase',
      entryPath: 'src/showcase',
      outputPath: 'dist',
      htmlTemplatePath: 'src/showcase/index.html',
    },
  ],
}
