'use strict';

const { nodeVersion } = require('../lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	globals: {
		__dirname: 'readonly',
		__filename: 'readonly',
		exports: 'writable',
		module: 'readonly',
		require: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			globalReturn: true,
		},
		sourceType: 'script',
	},
	rules: {
		'n/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: [],
				version: nodeVersion,
			},
		],

		'unicorn/prefer-module': 'off',
	},
};
