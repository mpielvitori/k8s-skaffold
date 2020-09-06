export default {
  collectCoverage: true,
  coverageDirectory: './tests/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
  ],
  verbose: true,
  testEnvironment: 'jest-environment-node',
};
