'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:jest/recommended'],
	rules: {
		'jest/consistent-test-it': 0,
		'jest/expect-expect': 'error',
		'jest/max-nested-describe': 0,
		'jest/no-alias-methods': 0,
		'jest/no-commented-out-tests': 'error',
		'jest/no-conditional-in-test': 0,
		'jest/no-disabled-tests': 'error',
		'jest/no-duplicate-hooks': 0,
		'jest/no-hooks': 0,
		'jest/no-large-snapshots': 0,
		'jest/no-restricted-matchers': 0,
		'jest/no-test-return-statement': 0,
		'jest/prefer-called-with': 0,
		'jest/prefer-comparison-matcher': 0,
		'jest/prefer-equality-matcher': 0,
		'jest/prefer-expect-assertions': 0,
		'jest/prefer-expect-resolves': 0,
		'jest/prefer-hooks-on-top': 0,
		'jest/prefer-lowercase-title': 0,
		'jest/prefer-snapshot-hint': 0,
		'jest/prefer-spy-on': 0,
		'jest/prefer-strict-equal': 0,
		'jest/prefer-to-be': 0,
		'jest/prefer-to-contain': 0,
		'jest/prefer-to-have-length': 0,
		'jest/prefer-todo': 0,
		'jest/require-hook': 0,
		'jest/require-to-throw-message': 0,
		'jest/require-top-level-describe': 0,
		'jest/unbound-method': 0,
	},
};
