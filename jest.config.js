const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app's root directory
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for transforming files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Additional setup (optional)
};

module.exports = createJestConfig(customJestConfig);

