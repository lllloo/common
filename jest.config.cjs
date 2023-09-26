
/** @type {import('jest').Config} */
const config = {
    coverageReporters: ["text"],
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/mocks/**',
    ],
    testEnvironment: "jsdom",
};

module.exports = config;
