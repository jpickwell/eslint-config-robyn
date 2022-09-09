'use strict';

const reduce = require('lodash/reduce');

/** @type {import('eslint').BaseConfig} */
const config = {
	rules: reduce(
		[
			'callback-return',
			'global-require',
			'handle-callback-err',
			'id-blacklist',
			'import/imports-first',
			'indent-legacy',
			'lines-around-directive',
			'n/no-hide-core-modules',
			'n/no-unsupported-features',
			'newline-after-var',
			'newline-before-return',
			'no-buffer-constructor',
			'no-catch-shadow',
			'no-mixed-requires',
			'no-native-reassign',
			'no-negated-in-lhs',
			'no-new-require',
			'no-path-concat',
			'no-process-env',
			'no-process-exit',
			'no-restricted-modules',
			'no-spaced-func',
			'no-sync',
			'prefer-reflect',
			'require-jsdoc',
			'unicorn/import-index',
			'unicorn/no-array-instanceof',
			'unicorn/no-fn-reference-in-iterator',
			'unicorn/no-reduce',
			'unicorn/prefer-dataset',
			'unicorn/prefer-event-key',
			'unicorn/prefer-exponentiation-operator',
			'unicorn/prefer-flat-map',
			'unicorn/prefer-node-append',
			'unicorn/prefer-node-remove',
			'unicorn/prefer-object-has-own',
			'unicorn/prefer-replace-all',
			'unicorn/prefer-starts-ends-with',
			'unicorn/prefer-text-content',
			'unicorn/prefer-trim-start-end',
			'unicorn/regex-shorthand',
			'valid-jsdoc',
			'vue/no-invalid-model-keys',
			'vue/script-setup-uses-vars',
		],
		(acc, rule) => {
			// eslint-disable-next-line security/detect-object-injection
			acc[rule] = 'off';

			return acc;
		},
		{},
	),
};

module.exports = config;
