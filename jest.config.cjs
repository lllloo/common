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
  // 調整msw的環境
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['./jest.polyfills.js'],
};

module.exports = config;
