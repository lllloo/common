/** @type {import('jest').Config} */
const config = {
  coverageReporters: ["text"],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/mocks/**',
  ],
  testEnvironment: "jest-environment-jsdom",
  // 路徑簡寫
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  setupFiles: ['./jest.polyfills.js'],
};

module.exports = config;
