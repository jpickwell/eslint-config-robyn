'use strict';

const compact = require('lodash/compact');
const constant = require('lodash/constant');
const defaultsDeep = require('lodash/defaultsDeep');
const { restrictedImports, restrictedSyntax } = require('./lists');

const ERROR = constant('error');
const OFF = constant('off');

function withOptions(value, defaultOptions) {
	return (options = {}) => [
		...value,
		defaultsDeep({}, defaultOptions, options),
	];
}

module.exports = {
	arrayBracketNewline: OFF,
	arrayBracketSpacing: OFF,
	arrowSpacing: OFF,
	blockSpacing: OFF,
	braceStyle: OFF,
	camelcase: () => [
		'error',
		{
			properties: 'always',
		},
	],
	commaDangle: OFF,
	commaSpacing: OFF,
	commaStyle: OFF,
	defaultParamLast: ERROR,
	dotLocation: OFF,
	dotNotation: ERROR,
	eqeqeq: ERROR,
	funcCallSpacing: OFF,
	import: {
		extensions: withOptions(['error', 'always'], {
			pattern: {
				js: 'never',
			},
		}),
	},
	indent: OFF,
	initDeclarations: () => [
		'error',
		'never',
		{
			ignoreForLoopInit: true,
		},
	],
	keySpacing: OFF,
	keywordSpacing: OFF,
	linesBetweenClassMembers: () => [
		'error',
		'always',
		{
			// Workaround to allow class fields to not have lines between
			// them.
			exceptAfterSingleLine: true,
		},
	],
	maxLen: OFF,
	noArrayConstructor: ERROR,
	noConstantCondition: ERROR,
	noDupeClassMembers: ERROR,
	noEmptyFunction: ERROR,
	noEmptyPattern: ERROR,
	noExtraParens: OFF,
	noExtraSemi: OFF,
	noImpliedEval: ERROR,
	noInvalidThis: ERROR,
	noIrregularWhitespace: () => [
		'error',
		{
			skipStrings: false,
		},
	],
	noLoopFunc: ERROR,
	noLossOfPrecision: ERROR,
	noMagicNumbers: OFF,
	noRedeclare: ERROR,
	noRestrictedImports: () => ['error', ...restrictedImports],
	noRestrictedSyntax: () => ['error', ...restrictedSyntax],
	noShadow: () => [
		'error',
		{
			hoist: 'all',
		},
	],
	noSparseArrays: ERROR,
	noThrowLiteral: ERROR,
	noUnusedExpressions: () => [
		'error',
		{
			enforceForJSX: true,
		},
	],
	noUnusedVars: () => [
		'error',
		{
			args: 'after-used',
			argsIgnorePattern: /^_/u.source,
			caughtErrors: 'all',
			caughtErrorsIgnorePattern: /^_$/u.source,
			ignoreRestSiblings: true,
			vars: 'all',
		},
	],
	noUseBeforeDefine: () => [
		'error',
		{
			functions: false,
			variables: false,
		},
	],
	noUselessConcat: ERROR,
	noUselessConstructor: ERROR,
	objectCurlyNewline: OFF,
	objectCurlySpacing: OFF,
	objectPropertyNewline: OFF,
	objectShorthand: () => [
		'error',
		'always',
		{
			avoidExplicitReturnArrows: true,
		},
	],
	operatorLinebreak: OFF,
	paddingLineBetweenStatements: () => [
		'error',
		{
			blankLine: 'always',
			next: '*',
			prev: 'multiline-block-like',
		},
		{
			blankLine: 'always',
			next: '*',
			prev: ['const', 'let', 'var'],
		},
		{
			blankLine: 'any',
			next: ['const', 'let', 'var'],
			prev: ['const', 'let', 'var'],
		},
		{
			blankLine: 'always',
			next: '*',
			prev: 'directive',
		},
		{
			blankLine: 'any',
			next: 'directive',
			prev: 'directive',
		},
	],
	preferTemplate: ERROR,
	quoteProps: OFF,
	quotes: () => [
		'error',
		'single',
		{
			avoidEscape: true,
		},
	],
	requireAwait: ERROR,
	returnAwait: ERROR,
	semi: OFF,
	sortKeys: () => [
		'error',
		'asc',
		{
			caseSensitive: false,
			natural: true,
		},
	],
	spaceBeforeBlocks: OFF,
	spaceBeforeFunctionParen: OFF,
	spaceInfixOps: OFF,
	spaceInParens: OFF,
	spaceUnaryOps: OFF,
	templateCurlySpacing: OFF,

	typescriptEslintNamingConvention: (isTsx) => [
		'error',
		{
			// Ignore `{'Retry-After': retryAfter}` type properties.
			filter: {
				match: false,
				regex: '[- ]',
			},

			format: compact(['strictCamelCase', isTsx && 'StrictPascalCase']),

			// We allow double underscore because of GraphQL type names.
			leadingUnderscore: 'allowSingleOrDouble',

			/// selector: ['variableLike', 'memberLike', 'property', 'method'],
			// Note: Leaving out `parameter` and `typeProperty` because of the mentioned known issues.
			// Note: We are intentionally leaving out `enumMember` as it's usually pascal-case or upper-snake-case.
			selector: [
				'accessor',
				'classMethod',
				'classProperty',
				'function',
				'objectLiteralMethod',
				'objectLiteralProperty',
				'parameterProperty',
				'typeMethod',
				'variable',
			],

			trailingUnderscore: 'allow',
		},
		{
			format: ['StrictPascalCase'],
			selector: 'typeLike',
		},
		{
			format: ['StrictPascalCase'],
			prefix: ['can', 'did', 'has', 'is', 'should', 'will'],
			selector: 'variable',
			types: ['boolean'],
		},
		{
			// Interface name should not be prefixed with `I`.

			filter: /^(?!I)[A-Z]/u.source,
			format: ['StrictPascalCase'],
			selector: 'interface',
		},
		{
			// Type parameter name should either be `T` or a descriptive name.

			filter: /^T$|^[A-Z][A-Za-z]+$/u.source,
			format: ['StrictPascalCase'],
			selector: 'typeParameter',
		},
		{
			// Allow these in non-camel-case when quoted.

			// eslint-disable-next-line unicorn/no-null
			format: null,
			modifiers: ['requiresQuotes'],
			selector: ['classProperty', 'objectLiteralProperty'],
		},
	],
};
