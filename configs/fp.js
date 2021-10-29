'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  plugins: ['fp'],
  rules: {
    'fp/no-arguments': 'off',
    'fp/no-class': 'off',
    'fp/no-delete': 'error',
    'fp/no-events': 'error',
    'fp/no-get-set': 'off',
    'fp/no-let': 'off',
    'fp/no-loops': 'off',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': 'off',
    'fp/no-mutation': 'off',
    'fp/no-nil': 'off',
    'fp/no-proxy': 'off',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'off',
    'fp/no-throw': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-valueof-field': 'error',
  },
};
