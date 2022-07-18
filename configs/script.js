'use strict';

const { nodeVersion } = require('../lib/helpers');

/** @type {import('eslint').BaseConfig} */
const config = {
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

module.exports = config;
