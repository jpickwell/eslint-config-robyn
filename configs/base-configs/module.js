'use strict';

const { nodeVersion } = require('../../lib/helpers');

/** @type {import('eslint').BaseConfig} */
const config = {
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
		/**********************************************************************
		 * N[ODE]
		 **********************************************************************/

		'n/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: ['modules'],
				version: nodeVersion,
			},
		],

		/**********************************************************************
		 * UNICORN
		 **********************************************************************/

		'unicorn/prefer-module': 'error',
	},
};

module.exports = config;
