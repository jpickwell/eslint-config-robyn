'use strict';

const { nodeVersion } = require('../lib/helpers.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	globals: {
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
		'n/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: ['modules'],
				version: nodeVersion,
			},
		],

		'unicorn/prefer-module': 'error',
	},
};
