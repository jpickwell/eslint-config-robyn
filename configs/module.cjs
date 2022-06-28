'use strict';

const {
	commonGlobals,
	commonRules,
} = require('eslint-plugin-n/lib/configs/_commons');

const { nodeVersion } = require('../lib/helpers.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	globals: {
		...commonGlobals,
		__dirname: 'off',
		__filename: 'off',
		exports: 'off',
		module: 'off',
		require: 'off',
	},
	parserOptions: {
		ecmaFeatures: {
			globalReturn: false,
		},
		sourceType: 'module',
	},
	rules: {
		...commonRules,
		'n/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: ['modules'],
				version: nodeVersion,
			},
		],
	},
};
