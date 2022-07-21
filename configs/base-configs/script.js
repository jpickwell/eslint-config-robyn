'use strict';

const { nodeVersion } = require('../../lib/helpers');

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
		/**********************************************************
		 * @TYPESCRIPT-ESLINT
		 **********************************************************/

		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/no-var-requires': 'off',

		/**********************************************************************
		 * N[ODE]
		 **********************************************************************/

		'n/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: [],
				version: nodeVersion,
			},
		],

		/**********************************************************************
		 * UNICORN
		 **********************************************************************/

		'unicorn/prefer-module': 'off',
	},
};

module.exports = config;
