'use strict';

const globals = require('globals');
const { override } = require('./lib/helpers');
const { buildIdentifierMatchRegExpString } = require('./lib/reg-exps');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  env: {
    browser: true,
  },
  extends: [require.resolve('./index.js')],
  overrides: [
    override(['ts'], {
      rules: {},
    }),
  ],
  rules: {
    'id-match': [
      'error',
      buildIdentifierMatchRegExpString(Object.keys(globals.browser)),
      {
        ignoreDestructuring: false,
        onlyDeclarations: true,
        properties: false,
      },
    ],
  },
};
