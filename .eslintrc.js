module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    project: './tsconfig.typecheck.json',
    sourceType: "module",
  },
  env: {
    browser: true,
    mocha: true,
    node: true,
    'jest/globals': true,
    webextensions: true,
  },
  extends: [
    'airbnb-typescript/base',
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  }
};