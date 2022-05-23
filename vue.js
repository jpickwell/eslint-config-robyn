'use strict';

const { mapConfigs, override } = require('./lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [
		require.resolve('./browser.js'),
		...mapConfigs('vue', 'vue-scoped-css', 'prettier'),
	],
	overrides: [
		override(['?(c)js'], {
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		}),
		override(['ts?(x)'], {
			rules: {
				'no-unused-vars': 'off',
			},
		}),
		override([{ files: ['shims-tsx.d.ts'] }], {
			rules: {
				'@typescript-eslint/no-empty-interface': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
			},
		}),
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		extraFileExtensions: ['.vue'],
		parser: require.resolve('@typescript-eslint/parser'),
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
};
