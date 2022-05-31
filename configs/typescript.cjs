'use strict';

const typescriptAllConfig = require('@typescript-eslint/eslint-plugin/dist/configs/all');
const filter = require('lodash/filter');
const { override } = require('../lib/helpers.cjs');
const sharedConfigs = require('../lib/shared-configs.cjs');

/** @typedef {import('eslint').BaseConfig} */
/** @typedef {import('eslint').RulesRecord} */

/** @type {BaseConfig} */
const config = {
	extends: ['plugin:@typescript-eslint/base'],
	overrides: [
		override(['ts?(x)'], {
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/array-type': [
					'error',
					{
						default: 'array-simple',
					},
				],
				'@typescript-eslint/init-declarations':
					sharedConfigs.initDeclarations,
				'@typescript-eslint/no-magic-numbers': 'off',
				'@typescript-eslint/no-restricted-imports': 'off',
				'@typescript-eslint/no-shadow': [
					sharedConfigs.noShadow[0],
					{
						...sharedConfigs.noShadow[1],
						ignoreFunctionTypeParameterNameValueShadow: false,
					},
				],
				'@typescript-eslint/no-use-before-define':
					sharedConfigs.noUseBeforeDefine,
				'@typescript-eslint/padding-line-between-statements':
					sharedConfigs.paddingLineBetweenStatements,
				'@typescript-eslint/quotes': sharedConfigs.quotes,
				'import/extensions': [
					'error',
					'always',
					{
						ignorePackages: true,
						pattern: {
							ts: 'never',
						},
					},
				],
				'import/named': 'off',
				'no-shadow': 'off',
				'node/file-extension-in-import': [
					'error',
					'always',
					{
						'.ts': 'never',
					},
				],
				'node/no-missing-import': 'off',
			},
		}),
		override(['d.ts'], {
			rules: {
				'import/unambiguous': 'off',
			},
		}),
	],
	rules: {},
};

/** @type RulesRecord */
const typescriptRules = [
	...new Set(
		filter(
			[
				...Object.keys(typescriptAllConfig.rules),
				...Object.keys(config.overrides[0].rules),
			],
			/**
			 *
			 * @param {string} ruleName
			 * @returns {boolean}
			 */
			(ruleName) => ruleName.startsWith('@typescript-eslint/'),
		),
	),
];

for (const ruleName of typescriptRules) {
	// eslint-disable-next-line security/detect-object-injection -- not user input
	config.rules[ruleName] = 'off';
}

module.exports = config;
