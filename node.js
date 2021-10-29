'use strict';

const globals = require('globals');
const { override } = require('./lib/helpers');
const { buildIdentifierMatchRegExpString } = require('./lib/reg-exps');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  env: {
    node: true,
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
      buildIdentifierMatchRegExpString(Object.keys(globals.node)),
      {
        ignoreDestructuring: false,
        onlyDeclarations: true,
        properties: false,
      },
    ],
  },
};
