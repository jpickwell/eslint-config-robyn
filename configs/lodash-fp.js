'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  plugins: ['lodash-fp'],
  rules: {
    'lodash-fp/consistent-compose': ['error', 'flow'],
    'lodash-fp/consistent-name': 'error',
    'lodash-fp/no-argumentless-calls': 'error',
    'lodash-fp/no-chain': 'error',
    'lodash-fp/no-extraneous-args': 'error',
    'lodash-fp/no-extraneous-function-wrapping': 'error',
    'lodash-fp/no-extraneous-iteratee-args': 'error',
    'lodash-fp/no-extraneous-partials': 'error',
    'lodash-fp/no-for-each': 'error',
    'lodash-fp/no-partial-of-curried': 'error',
    'lodash-fp/no-single-composition': 'error',
    'lodash-fp/no-submodule-destructuring': 'error',
    'lodash-fp/no-unused-result': 'error',
    'lodash-fp/prefer-compact': 'error',
    'lodash-fp/prefer-composition-grouping': 'error',
    'lodash-fp/prefer-constant': [
      'error',
      {
        arrowFunctions: true,
      },
    ],
    'lodash-fp/prefer-flat-map': 'error',
    'lodash-fp/prefer-get': ['error', 2],
    'lodash-fp/prefer-identity': [
      'error',
      {
        arrowFunctions: true,
      },
    ],
    'lodash-fp/preferred-alias': [
      'error',
      {
        overrides: [
          'assignIn',
          'assignInWith',
          'forEach',
          'forEachRight',
          'head',
          'toPairs',
          'toPairsIn',
        ],
      },
    ],
    'lodash-fp/use-fp': 'error',
  },
};
