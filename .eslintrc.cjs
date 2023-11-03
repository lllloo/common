/* eslint-env node */
module.exports = {
  root: true,
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  extends: [
    "eslint:recommended",
    'plugin:jest-dom/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  ignorePatterns: [
    '__tests__/', 
    'jest.polyfills.js'
  ],
}
