module.exports = {
  ...require('mmm-scripts/jest.config'),
  globalSetup: 'jest-component-snapshot/setup',
  globalTeardown: 'jest-component-snapshot/teardown',
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    'jest-component-snapshot/extend-expect',
    'jest-dom/extend-expect',
  ],
}
