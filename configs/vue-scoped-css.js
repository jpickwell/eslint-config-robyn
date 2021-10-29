'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  plugins: ['vue-scoped-css'],
  rules: {
    'vue-scoped-css/enforce-style-type': [
      'error',
      {
        allows: ['module', 'scoped'],
      },
    ],
    'vue-scoped-css/no-deprecated-deep-combinator': 'error',
    'vue-scoped-css/no-deprecated-v-enter-v-leave-class': 'error',
    'vue-scoped-css/no-parent-of-v-global': 'error',
    'vue-scoped-css/no-parsing-error': 'error',
    'vue-scoped-css/no-unused-keyframes': 'error',
    'vue-scoped-css/no-unused-selector': 'error',
    'vue-scoped-css/require-selector-used-inside': 'error',
    'vue-scoped-css/require-v-deep-argument': 'error',
    'vue-scoped-css/require-v-global-argument': 'error',
    'vue-scoped-css/require-v-slotted-argument': 'error',
  },
};
