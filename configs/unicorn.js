'use strict';

const { warningCommentTerms } = require('../lib/lists');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:unicorn/recommended'],
	rules: {
		'unicorn/custom-error-definition': 'error',
		'unicorn/expiring-todo-comments': [
			'error',
			{
				terms: warningCommentTerms,
			},
		],
		'unicorn/import-index': 'error',
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-array-method-this-argument': 'off',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-unused-properties': 'error',
		'unicorn/numeric-separators-style': [
			'error',
			{
				hexadecimal: {
					groupLength: 4,
					minimumDigits: 0,
				},
			},
		],
		'unicorn/prefer-at': 'error',
		'unicorn/prefer-json-parse-buffer': 'error',
		'unicorn/prefer-string-replace-all': 'error',
		'unicorn/prefer-top-level-await': 'error',
		'unicorn/prevent-abbreviations': 'off',
	},
};
