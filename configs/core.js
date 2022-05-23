'use strict';

const restrictedGlobals = require('confusing-browser-globals');
const { restrictedSyntax, warningCommentTerms } = require('../lib/lists');
const { buildIdentifierMatchRegExpString } = require('../lib/reg-exps');
const sharedConfigs = require('../lib/shared-configs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['eslint:recommended'],
	rules: {
		'accessor-pairs': 'error',
		'array-callback-return': [
			'error',
			{
				allowImplicit: true,
				checkForEach: true,
			},
		],
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: false,
			},
		],
		'block-scoped-var': 'error',
		camelcase: 'error',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'error',
		complexity: ['error', 10],
		'consistent-return': 'off',
		'consistent-this': 'off',
		curly: 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		eqeqeq: ['error', 'smart'],
		'func-name-matching': [
			'error',
			{
				considerPropertyDescriptor: true,
			},
		],
		'func-names': ['error', 'as-needed'],
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: false,
			},
		],
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': [
			'error',
			buildIdentifierMatchRegExpString(),
			{
				ignoreDestructuring: false,
				onlyDeclarations: true,
				properties: true,
			},
		],
		'init-declarations': sharedConfigs.initDeclarations,
		'line-comment-position': 'off',
		'lines-around-comment': 'off',
		'lines-between-class-members': 'error',
		'max-classes-per-file': 'error',
		'max-depth': 'error',
		'max-len': 'off',
		'max-lines': [
			'error',
			{
				max: 500,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [
			'error',
			{
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-nested-callbacks': ['error', 4],
		'max-params': ['error', 5],
		'max-statements': 'error',
		'max-statements-per-line': 'error',
		'multiline-comment-style': 'off',
		'new-cap': 'off',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-confusing-arrow': 'error',
		'no-console': 'error',
		'no-constant-binary-expression': 'error',
		'no-constructor-return': 'error',
		'no-continue': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'off',
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		'no-empty-function': 'error',
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [
			'error',
			{
				enforceForLogicalOperands: true,
			},
		],
		'no-extra-label': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': ['error', 'both'],
		'no-invalid-this': 'error',
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: false,
			},
		],
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [
			'error',
			{
				allowLoop: true,
				allowSwitch: true,
			},
		],
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof'],
				],
			},
		],
		'no-multi-assign': 'error',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'off',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-restricted-exports': 'off',
		'no-restricted-globals': ['error', ...restrictedGlobals],
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': ['error', ...restrictedSyntax],
		'no-return-assign': ['error', 'always'],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': [
			'error',
			{
				allowInParentheses: false,
			},
		],
		'no-shadow': sharedConfigs.noShadow,
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-throw-literal': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': [
			'error',
			{
				enforceInMethodNames: true,
			},
		],
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-unreachable-loop': 'error',
		'no-unsafe-negation': [
			'error',
			{
				enforceForOrderingRelations: true,
			},
		],
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		],
		'no-unused-expressions': 'error',
		'no-unused-private-class-members': 'error',
		'no-use-before-define': sharedConfigs.noUseBeforeDefine,
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': [
			'warn',
			{
				terms: warningCommentTerms,
			},
		],
		'object-shorthand': 'error',
		'one-var': [
			'error',
			{
				initialized: 'never',
				uninitialized: 'always',
			},
		],
		'operator-assignment': 'error',
		'padding-line-between-statements':
			sharedConfigs.paddingLineBetweenStatements,
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true,
				allowUnboundThis: true,
			},
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		quotes: sharedConfigs.quotes,
		radix: 'error',
		'require-atomic-updates': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'sort-keys': [
			'error',
			'asc',
			{
				caseSensitive: false,
				natural: true,
			},
		],
		'sort-vars': [
			'error',
			{
				ignoreCase: true,
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					balanced: true,
					exceptions: ['*'],
					markers: ['*'],
				},
				line: {
					markers: ['*', '/'],
				},
			},
		],
		strict: 'error',
		'symbol-description': 'error',
		'use-isnan': [
			'error',
			{
				enforceForIndexOf: true,
			},
		],
		'vars-on-top': 'error',
		yoda: [
			'error',
			'never',
			{
				exceptRange: true,
			},
		],
	},
};
