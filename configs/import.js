'use strict';

const { override } = require('../lib/helpers');
const { allExtensions } = require('../lib/lists');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  overrides: [
    override(['ts'], {
      settings: {
        'import/extensions': allExtensions,
        'import/external-module-folders': [
          'node_modules',
          'node_modules/@types',
        ],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.d.ts'],
        },
        'import/resolver': {
          node: {
            extensions: allExtensions,
          },
        },
      },
    }),
  ],
  plugins: ['import'],
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        pattern: {
          js: 'never',
        },
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/max-dependencies': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowCallExpression: false,
      },
    ],
    'import/no-commonjs': [
      'error',
      {
        allowConditionalRequire: false,
      },
    ],
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'error',
  },
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(css|less|scss|styl)$'],
  },
};
