'use strict';

const { typescriptOverride } = require(`./lib/helpers.cjs`);

/** @typedef {import('eslint').BaseConfig} */

const rule = [
	`error`,
	`backtick`,
	{
		allowTemplateLiterals: true,
		avoidEscape: true,
	},
];

/** @type {BaseConfig} */
module.exports = {
	overrides: [
		typescriptOverride({
			rules: {
				'@typescript-eslint/quotes': rule,
			},
		}),
	],
	rules: {
		quotes: rule,
	},
};
