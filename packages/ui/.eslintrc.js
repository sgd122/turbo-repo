/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/react-internal.js'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
  ignorePatterns: ['.*.js', '*.config.js'],
  rules: {
    'import/no-unresolved': 'off',
  },
};
