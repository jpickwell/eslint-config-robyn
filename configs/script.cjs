'use strict';

const {
	commonGlobals,
	commonRules,
} = require(`eslint-plugin-n/lib/configs/_commons`);

const { nodeVersion } = require(`../lib/helpers.cjs`);

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	globals: {
		...commonGlobals,
		__dirname: `readonly`,
		__filename: `readonly`,
		exports: `writable`,
		module: `readonly`,
		require: `readonly`,
	},
	parserOptions: {
		ecmaFeatures: {
			globalReturn: true,
		},
		sourceType: `script`,
	},
	rules: {
		...commonRules,
		'n/no-unsupported-features/es-syntax': [
			`error`,
			{
				ignores: [],
				version: nodeVersion,
			},
		],
	},
};
