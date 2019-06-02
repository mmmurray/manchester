module.exports = {
  ...require('mmm-scripts/jest.config'),
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  globalSetup: 'jest-component-snapshot/setup',
  globalTeardown: 'jest-component-snapshot/teardown',
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    'jest-component-snapshot/extend-expect',
    'jest-dom/extend-expect',
  ],
}
