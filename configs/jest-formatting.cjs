'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:jest-formatting/strict'],
	rules: {
		// Because the plugin config adds an override, the find-new-rules script
		// won't see those added rules.

		'jest-formatting/padding-around-after-all-blocks': 'off',
		'jest-formatting/padding-around-after-each-blocks': 'off',
		'jest-formatting/padding-around-all': 'off',
		'jest-formatting/padding-around-before-all-blocks': 'off',
		'jest-formatting/padding-around-before-each-blocks': 'off',
		'jest-formatting/padding-around-describe-blocks': 'off',
		'jest-formatting/padding-around-expect-groups': 'off',
		'jest-formatting/padding-around-test-blocks': 'off',
	},
};
