'use strict';

const compact = require(`lodash/compact`);
const { restrictedImports, restrictedSyntax } = require(`./lists.cjs`);

module.exports = {
	arrayBracketNewline: () => `off`,
	arrayBracketSpacing: () => `off`,
	arrowSpacing: () => `off`,
	blockSpacing: () => `off`,
	braceStyle: () => `off`,
	camelcase: () => [
		`error`,
		{
			properties: `always`,
		},
	],
	commaDangle: () => `off`,
	commaSpacing: () => `off`,
	commaStyle: () => `off`,
	defaultParamLast: () => `error`,
	dotLocation: () => `off`,
	dotNotation: () => `error`,
	eqeqeq: () => `error`,
	funcCallSpacing: () => `off`,
	import: {
		extensions: (additionalOptions = {}) => [
			`error`,
			`always`,
			{
				ignorePackages: true,
				...additionalOptions,
			},
		],
	},
	indent: () => `off`,
	initDeclarations: () => [
		`error`,
		`never`,
		{
			ignoreForLoopInit: true,
		},
	],
	keySpacing: () => `off`,
	keywordSpacing: () => `off`,
	linesBetweenClassMembers: () => [
		`error`,
		`always`,
		{
			// Workaround to allow class fields to not have lines between
			// them.
			exceptAfterSingleLine: true,
		},
	],
	maxLen: () => `off`,
	noArrayConstructor: () => `error`,
	noConstantCondition: () => `error`,
	noDupeClassMembers: () => `error`,
	noEmptyFunction: () => `error`,
	noEmptyPattern: () => `error`,
	noExtraParens: () => `off`,
	noExtraSemi: () => `off`,
	noImpliedEval: () => `error`,
	noInvalidThis: () => `error`,
	noIrregularWhitespace: () => [
		`error`,
		{
			skipStrings: false,
		},
	],
	noLoopFunc: () => `error`,
	noLossOfPrecision: () => `error`,
	noMagicNumbers: () => `off`,
	noRedeclare: () => `error`,
	noRestrictedImports: () => [`error`, ...restrictedImports],
	noRestrictedSyntax: () => [`error`, ...restrictedSyntax],
	noShadow: () => [
		`error`,
		{
			hoist: `all`,
		},
	],
	noSparseArrays: () => `error`,
	noThrowLiteral: () => `error`,
	noUnusedExpressions: () => [
		`error`,
		{
			enforceForJSX: true,
		},
	],
	noUnusedVars: () => [
		`error`,
		{
			args: `after-used`,
			argsIgnorePattern: /^_/u.source,
			caughtErrors: `all`,
			caughtErrorsIgnorePattern: /^_$/u.source,
			ignoreRestSiblings: true,
			vars: `all`,
		},
	],
	noUseBeforeDefine: () => [
		`error`,
		{
			functions: false,
			variables: false,
		},
	],
	noUselessConcat: () => `error`,
	noUselessConstructor: () => `error`,
	objectCurlyNewline: () => `off`,
	objectCurlySpacing: () => `off`,
	objectPropertyNewline: () => `off`,
	objectShorthand: () => [
		`error`,
		`always`,
		{
			avoidExplicitReturnArrows: true,
		},
	],
	operatorLinebreak: () => `off`,
	paddingLineBetweenStatements: () => [
		`error`,
		{
			blankLine: `always`,
			next: `*`,
			prev: `multiline-block-like`,
		},
		{
			blankLine: `always`,
			next: `*`,
			prev: [`const`, `let`, `var`],
		},
		{
			blankLine: `any`,
			next: [`const`, `let`, `var`],
			prev: [`const`, `let`, `var`],
		},
		{
			blankLine: `always`,
			next: `*`,
			prev: `directive`,
		},
		{
			blankLine: `any`,
			next: `directive`,
			prev: `directive`,
		},
	],
	preferTemplate: () => `error`,
	quoteProps: () => `off`,
	quotes: () => [
		`error`,
		`single`,
		{
			allowTemplateLiterals: true,
			avoidEscape: true,
		},
	],
	requireAwait: () => `error`,
	returnAwait: () => `error`,
	semi: () => `off`,
	sortKeys: () => [
		`error`,
		`asc`,
		{
			caseSensitive: false,
			natural: true,
		},
	],
	spaceBeforeBlocks: () => `off`,
	spaceBeforeFunctionParen: () => `off`,
	spaceInfixOps: () => `off`,
	spaceInParens: () => `off`,
	spaceUnaryOps: () => `off`,
	templateCurlySpacing: () => `off`,

	typescriptEslintNamingConvention: (isTsx) => [
		`error`,
		{
			// Ignore `{'Retry-After': retryAfter}` type properties.
			filter: {
				match: false,
				regex: `[- ]`,
			},

			format: compact([`strictCamelCase`, isTsx && `StrictPascalCase`]),

			// We allow double underscore because of GraphQL type names.
			leadingUnderscore: `allowSingleOrDouble`,

			/// selector: ['variableLike', 'memberLike', 'property', 'method'],
			// Note: Leaving out `parameter` and `typeProperty` because of the mentioned known issues.
			// Note: We are intentionally leaving out `enumMember` as it's usually pascal-case or upper-snake-case.
			selector: [
				`accessor`,
				`classMethod`,
				`classProperty`,
				`function`,
				`objectLiteralMethod`,
				`objectLiteralProperty`,
				`parameterProperty`,
				`typeMethod`,
				`variable`,
			],

			trailingUnderscore: `allow`,
		},
		{
			format: [`StrictPascalCase`],
			selector: `typeLike`,
		},
		{
			format: [`StrictPascalCase`],
			prefix: [`can`, `did`, `has`, `is`, `should`, `will`],
			selector: `variable`,
			types: [`boolean`],
		},
		{
			// Interface name should not be prefixed with `I`.

			filter: /^(?!I)[A-Z]/u.source,
			format: [`StrictPascalCase`],
			selector: `interface`,
		},
		{
			// Type parameter name should either be `T` or a descriptive name.

			filter: /^T$|^[A-Z][A-Za-z]+$/u.source,
			format: [`StrictPascalCase`],
			selector: `typeParameter`,
		},
		{
			// Allow these in non-camel-case when quoted.

			// eslint-disable-next-line unicorn/no-null
			format: null,
			modifiers: [`requiresQuotes`],
			selector: [`classProperty`, `objectLiteralProperty`],
		},
	],
};
