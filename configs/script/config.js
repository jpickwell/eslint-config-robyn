'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
    },
    sourceType: 'script',
  },
  rules: {
    'fp/no-mutation': [
      'off',
      {
        commonjs: true,
      },
    ],
    'import/no-commonjs': 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: [],
      },
    ],
    'unicorn/prefer-module': 'off',
  },
};
