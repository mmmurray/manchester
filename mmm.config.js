module.exports = {
  transformJestConfig: config => ({
    ...config,
    collectCoverageFrom: [...config.collectCoverageFrom, '!**/stories.tsx'],
  }),
}
