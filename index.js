const rules = require('eslint-plugin-you-dont-need-lodash-underscore/lib/rules/all');
const filter = require('lodash/filter');
const kebabCase = require('lodash/kebabCase');
const reduce = require('lodash/reduce');

const compatible = filter(Object.keys(rules), (rule) => rules[rule].compatible);

const incompatible = filter(
  Object.keys(rules),
  (rule) => !rules[rule].compatible,
);

const configure = (list, level) =>
  reduce(
    list,
    (returnValue, rule) =>
      Object.assign({}, returnValue, {
        ['you-dont-need-lodash-underscore/' +
        (rules[rule].ruleName || kebabCase(rule))]: level,
      }),
    {},
  );

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:lodash/recommended',
    'plugin:markdown/recommended',
    'plugin:node/recommended-module',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:you-dont-need-momentjs/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.jsx', '.mjs', '.vue'],
      },
    },
  },
  rules: {
    'lodash/prefer-lodash-method': [
      'error',
      {
        ignoreMethods: [
          'assign',
          'bind',
          'castArray',
          'concat',
          'detect',
          'drop(Right)?',
          'endsWith',
          'entries',
          'extendOwn',
          'fill',
          'first',
          'flatten',
          'indexOf',
          'is(Array|Finite|Function|Integer|NaN|Nil|Null|String|Undefined)',
          'join',
          'keys',
          'last(IndexOf)?',
          'omit',
          'pad(End|Start)',
          'pairs',
          'repeat',
          'replace',
          'reverse',
          'slice',
          'split',
          'startsWith',
          'throttle',
          'to(Lower|Pairs|Upper)',
          'trim',
          'uniq',
          'values',
        ],
      },
    ],
    ...configure(compatible, 'error'),
    ...configure(incompatible, 'off'),
  },
};
