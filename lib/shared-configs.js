'use strict';

const compact = require('lodash/compact');
const constant = require('lodash/constant');
const isEmpty = require('lodash/isEmpty');
const merge = require('lodash/merge');

const { restrictedImports, restrictedSyntax } = require('./lists');

const ERROR = constant('error');
const OFF = constant('off');
const WARN = constant('warn');

function withOptions(value, defaultOptions = {}) {
	return (options = {}) => {
		const settings = [...value, merge({}, defaultOptions, options)];

		if (isEmpty(settings.at(-1))) {
			settings.pop();
		}

		return settings;
	};
}

const configs = {
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
			ignorePackages: true,
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
	n: {
		fileExtensionInImport: withOptions(['error', 'always']),
	},
	noArrayConstructor: ERROR,
	noConstantCondition: WARN,
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
	noUseBeforeDefine: withOptions(['error'], {
		classes: true,
		functions: false,
		variables: true,
	}),
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
	operatorAssignment: withOptions(['error', 'always']),
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
	requireAwait: OFF,
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
	typescript: {
		// eslint-disable-next-line max-lines-per-function
		namingConvention: (isTsx) => [
			'error',
			{
				// Ignore `{'Retry-After': retryAfter}` type properties.

				filter: {
					match: true,
					regex: '[ -]',
				},
				format: null,
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
			},
			{
				format: ['strictCamelCase', 'UPPER_CASE'],
				leadingUnderscore: 'allowSingleOrDouble',
				modifiers: ['const'],
				selector: 'variable',
				trailingUnderscore: 'allow',
			},
			{
				format: ['StrictPascalCase'],
				prefix: ['can', 'did', 'has', 'is', 'should', 'will'],
				selector: 'variable',
				types: ['boolean'],
			},
			{
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
				// Interface name should not be prefixed with `I`.

				filter: /^(?!I)[A-Z]/u.source,
				format: ['StrictPascalCase'],
				selector: 'interface',
			},
			{
				format: ['StrictPascalCase'],
				prefix: ['T'],
				selector: 'typeParameter',
			},
			{
				// Allow these in non-camel-case when quoted.

				format: null,
				modifiers: ['requiresQuotes'],
				selector: ['classProperty', 'objectLiteralProperty'],
			},
		],
	},
};

module.exports = configs;
