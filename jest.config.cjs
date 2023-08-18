module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest/setup-tests.ts'],
  testPathIgnorePatterns: ['/node_modules'],
  transform: {
    '^.+\\.(js|jsx|cjs|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.js$': ['babel-jest', { configFile: './babel-jest.config.js' }],
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
}
