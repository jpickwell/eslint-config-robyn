'use strict';

const globals = require('globals');
const { buildIdentifierMatchRegExpString } = require('./lib/reg-exps.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	env: {
		browser: true,
	},
	extends: [require.resolve('./index.cjs')],
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
