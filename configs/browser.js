'use strict';

const restrictedGlobals = require('confusing-browser-globals');
const globals = require('globals');

const { buildIdentifierMatchRegExpString } = require('../lib/reg-exps');

/** @type {import('eslint').BaseConfig} */
const config = {
	env: {
		browser: true,
		node: false,
	},
	extends: [require.resolve('.')],
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
		'no-restricted-globals': ['error', ...restrictedGlobals],
	},
};

module.exports = config;
