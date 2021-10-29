'use strict';

const { mapDeprecatedRules } = require('../lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  rules: mapDeprecatedRules([
    '@typescript-eslint/no-implicit-any-catch',
    '@typescript-eslint/no-unused-vars-experimental',
    'callback-return',
    'global-require',
    'handle-callback-err',
    'id-blacklist',
    'import/imports-first',
    'indent-legacy',
    'jest/no-expect-resolves',
    'jest/no-truthy-falsy',
    'jest/no-try-expect',
    'jest/prefer-inline-snapshots',
    'jest/valid-describe',
    'lines-around-directive',
    'newline-after-var',
    'newline-before-return',
    'no-buffer-constructor',
    'no-catch-shadow',
    'no-mixed-requires',
    'no-native-reassign',
    'no-negated-in-lhs',
    'no-new-require',
    'no-path-concat',
    'no-process-env',
    'no-process-exit',
    'no-restricted-modules',
    'no-spaced-func',
    'no-sync',
    'node/no-hide-core-modules',
    'node/no-unsupported-features',
    'prefer-reflect',
    'require-jsdoc',
    'unicorn/no-array-instanceof',
    'unicorn/no-fn-reference-in-iterator',
    'unicorn/no-reduce',
    'unicorn/prefer-dataset',
    'unicorn/prefer-event-key',
    'unicorn/prefer-exponentiation-operator',
    'unicorn/prefer-flat-map',
    'unicorn/prefer-node-append',
    'unicorn/prefer-node-remove',
    'unicorn/prefer-replace-all',
    'unicorn/prefer-starts-ends-with',
    'unicorn/prefer-text-content',
    'unicorn/prefer-trim-start-end',
    'unicorn/regex-shorthand',
    'valid-jsdoc',
    'vue-scoped-css/require-scoped',
    'vue/experimental-script-setup-vars',
    'vue/name-property-casing',
    'vue/no-confusing-v-for-v-if',
  ]),
};
