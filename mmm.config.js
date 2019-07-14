module.exports = {
  transformJestConfig: config => ({
    ...config,
    collectCoverageFrom: [...config.collectCoverageFrom, '!**/stories.tsx'],
    coverageThreshold: {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
      },
    },
  }),
}
