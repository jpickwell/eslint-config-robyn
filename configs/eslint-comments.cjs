'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:eslint-comments/recommended'],
	rules: {
		'eslint-comments/disable-enable-pair': [
			'error',
			{
				allowWholeFile: true,
			},
		],
		'eslint-comments/no-restricted-disable': 'off',
		'eslint-comments/no-unused-disable': 'off',
		'eslint-comments/no-use': 'off',
		'eslint-comments/require-description': [
			'error',
			{
				ignore: ['eslint-enable'],
			},
		],
	},
};
