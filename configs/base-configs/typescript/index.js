'use strict';

const fs = require('node:fs');
const path = require('node:path');

const { override } = require('../../../lib/helpers');
const { allExtensions } = require('../../../lib/lists');
const sharedConfigs = require('../../../lib/shared-configs');

// eslint-disable-next-line n/no-sync
const tsconfig = fs.existsSync('tsconfig.json')
	? path.resolve('tsconfig.json')
	: fs.existsSync('types/tsconfig.json') // eslint-disable-line n/no-sync
	? path.resolve('types/tsconfig.json')
	: undefined;

const tsconfigRootDirectory = tsconfig
	? path.dirname(tsconfig)
	: path.resolve(__dirname, '../../..');

/** @type {import('eslint').BaseConfig} */
const config = {
	// Manually authored .d.ts files are generally used to describe external
	// APIs that are not expected to follow our coding conventions. Linting
	// those files tends to produce a lot of spurious suppressions, so we simply
	// ignore them.
	ignorePatterns: ['*.d.ts'],

	overrides: [
		override(['ts', 'tsx'], {
			parserOptions: {
				project: tsconfig,
				tsconfigRootDir: tsconfigRootDirectory,
			},
			rules: {
				/**************************************************************
				 * CORE
				 **************************************************************/

				'dot-notation': 'off',
				'no-implied-eval': 'off',
				'no-return-await': 'off',
				'no-throw-literal': 'off',
				// 'require-await': `off`,

				/**************************************************************
				 * @TYPESCRIPT-ESLINT
				 **************************************************************/

				// eslint-disable-next-line sort-keys
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/consistent-type-exports': 0,
				'@typescript-eslint/dot-notation': sharedConfigs.dotNotation(),
				'@typescript-eslint/naming-convention':
					sharedConfigs.typescript.namingConvention(false),
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/no-confusing-void-expression': 'error',
				'@typescript-eslint/no-floating-promises': [
					'error',
					{
						ignoreIIFE: true,

						// Prepend a function call with `void` to mark it as not
						// needing to be awaited, which silences this rule.
						ignoreVoid: true,
					},
				],
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-implied-eval':
					sharedConfigs.noImpliedEval(),
				'@typescript-eslint/no-meaningless-void-operator': 'error',
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksConditionals: true,
						checksVoidReturn: false,
					},
				],
				'@typescript-eslint/no-redundant-type-constituents': 'error',
				'@typescript-eslint/no-throw-literal': [
					sharedConfigs.noThrowLiteral(),
					{
						allowThrowingAny: false,

						// This should ideally be `false`, but it makes
						// re-throwing errors inconvenient. There should be a
						// separate `allowRethrowingUnknown` option.
						allowThrowingUnknown: true,
					},
				],
				'@typescript-eslint/no-unnecessary-boolean-literal-compare':
					'error',
				'@typescript-eslint/no-unnecessary-condition': 'off',
				'@typescript-eslint/no-unnecessary-qualifier': 'error',
				'@typescript-eslint/no-unnecessary-type-arguments': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',

				// This makes it hard to pass around errors.
				'@typescript-eslint/no-unsafe-argument': 'off',

				'@typescript-eslint/no-unsafe-assignment': 'error',
				'@typescript-eslint/no-unsafe-call': 'error',

				// Disabled until TS supports the `node:` protocol.
				'@typescript-eslint/no-unsafe-member-access': 'off',

				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/non-nullable-type-assertion-style': 'error',
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-nullish-coalescing': 'error',
				'@typescript-eslint/prefer-readonly': 'error',

				// Too annoying.
				'@typescript-eslint/prefer-readonly-parameter-types': 'off',

				'@typescript-eslint/prefer-reduce-type-parameter': 'error',
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'@typescript-eslint/prefer-return-this-type': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'@typescript-eslint/promise-function-async': 'error',
				'@typescript-eslint/require-array-sort-compare': [
					'error',
					{
						ignoreStringArrays: true,
					},
				],
				'@typescript-eslint/require-await': [
					// Disabled for now because it is too buggy.
					// sharedConfigs.requireAwait,
					'off',
				],
				'@typescript-eslint/restrict-plus-operands': [
					'error',
					{
						allowAny: false,
						checkCompoundAssignments: true,
					},
				],
				'@typescript-eslint/restrict-template-expressions': [
					'error',
					{
						allowNumber: true,
					},
				],
				'@typescript-eslint/return-await': sharedConfigs.returnAwait(),
				'@typescript-eslint/strict-boolean-expressions': [
					'off',
					{
						allowNullable: true,
						allowSafe: true,
					},
				],
				'@typescript-eslint/switch-exhaustiveness-check': 'error',

				// Disabled as it crashes on most code.
				'@typescript-eslint/unbound-method': [
					'off',
					{
						ignoreStatic: true,
					},
				],
			},
		}),
		override(['tsx'], {
			rules: {
				/**************************************************************
				 * @TYPESCRIPT-ESLINT
				 **************************************************************/

				'@typescript-eslint/naming-convention':
					sharedConfigs.typescript.namingConvention(true),
			},
		}),
	],
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: {
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false,
	},
	plugins: ['@typescript-eslint'],
	rules: {
		/**********************************************************************
		 * CORE
		 **********************************************************************/

		'brace-style': 'off',
		camelcase: 'off',
		'comma-dangle': 'off',
		'comma-spacing': 'off',
		'constructor-super': 'off',
		'default-param-last': 'off',
		'func-call-spacing': 'off',
		'getter-return': 'off',
		indent: 'off',
		'init-declarations': 'off',
		'keyword-spacing': 'off',
		'lines-between-class-members': 'off',
		'no-array-constructor': 'off',
		'no-const-assign': 'off',
		'no-dupe-args': 'off',
		'no-dupe-class-members': 'off',
		'no-dupe-keys': 'off',
		'no-empty-function': 'off',
		'no-extra-parens': 'off',
		'no-extra-semi': 'off',
		'no-func-assign': 'off',
		'no-import-assign': 'off',
		'no-invalid-this': 'off',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'off',
		'no-magic-numbers': 'off',
		'no-new-symbol': 'off',
		'no-obj-calls': 'off',
		'no-redeclare': 'off',
		'no-restricted-imports': 'off',
		'no-setter-return': 'off',
		'no-shadow': 'off',
		'no-this-before-super': 'off',
		'no-undef': 'off',
		'no-unreachable': 'off',
		'no-unsafe-negation': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		'no-void': [
			'error',
			{
				// To allow `ignoreVoid` in
				// `@typescript-eslint/no-floating-promises`.
				allowAsStatement: true,
			},
		],
		'object-curly-spacing': 'off',
		'padding-line-between-statements': 'off',
		'prefer-const': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		quotes: 'off',
		semi: 'off',
		'space-before-blocks': 'off',
		'space-before-function-paren': 'off',
		'space-infix-ops': 'off',

		// TS(2367)
		'valid-typeof': 'off',

		/**********************************************************************
		 * @TYPESCRIPT-ESLINT
		 **********************************************************************/

		// eslint-disable-next-line sort-keys
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple',
			},
		],
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				minimumDescriptionLength: 4,
				'ts-expect-error': 'allow-with-description',
			},
		],
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: false,
				types: {
					'[[[[[]]]]]': '🦄💥',
					'[[[[]]]]': 'ur drunk 🤡',
					'[[[]]]':
						'Do not use `[[[]]]`. Use `SomeType[][][]` instead.',
					'[[]]': 'Do not use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.',
					'[]': 'Do not use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.',
					'{}': {
						message: [
							'`{}` actually means "any non-nullish value".',
							'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
							'- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.',
						].join('\n'),
					},
					BigInt: {
						fixWith: 'bigint',
						message: 'Use `bigint` instead.',
					},
					Boolean: {
						fixWith: 'boolean',
						message: 'Use `boolean` instead.',
					},
					Function: {
						message: [
							'The `Function` type accepts any function-like value.',
							'It provides no type safety when calling the function, which can be a common source of bugs.',
							'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
							'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
						].join('\n'),
					},
					null: {
						fixWith: 'undefined',
						message: 'Use `undefined` instead.',
					},
					Number: {
						fixWith: 'number',
						message: 'Use `number` instead.',
					},
					object: {
						message: [
							'The `object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
							'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
						].join('\n'),
					},
					Object: {
						message: [
							'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
							'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
						].join('\n'),
					},
					String: {
						fixWith: 'string',
						message: 'Use `string` instead.',
					},
					Symbol: {
						fixWith: 'symbol',
						message: 'Use `symbol` instead.',
					},
				},
			},
		],
		'@typescript-eslint/brace-style': sharedConfigs.braceStyle(),
		'@typescript-eslint/class-literal-property-style': ['error', 'getters'],
		'@typescript-eslint/comma-dangle': sharedConfigs.commaDangle(),
		'@typescript-eslint/comma-spacing': sharedConfigs.commaSpacing(),
		'@typescript-eslint/consistent-generic-constructors': 0,
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter',
			},
		],
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'interface',
		],
		'@typescript-eslint/consistent-type-imports': 0,
		'@typescript-eslint/default-param-last':
			sharedConfigs.defaultParamLast(),
		'@typescript-eslint/explicit-function-return-type': [
			'warn',
			{
				allowExpressions: true,
				allowHigherOrderFunctions: false,
				allowTypedFunctionExpressions: true,
			},
		],
		'@typescript-eslint/explicit-member-accessibility': 0,

		// Too many false-positives.
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		'@typescript-eslint/func-call-spacing': sharedConfigs.funcCallSpacing(),
		'@typescript-eslint/indent': sharedConfigs.indent(),
		'@typescript-eslint/init-declarations':
			sharedConfigs.initDeclarations(),
		'@typescript-eslint/keyword-spacing': sharedConfigs.keywordSpacing(),
		'@typescript-eslint/lines-between-class-members':
			sharedConfigs.linesBetweenClassMembers(),
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: {
					memberTypes: [
						'signature',
						'field',
						'constructor',
						['get', 'set'],
						'method',
					],
					order: 'alphabetically-case-insensitive',
				},
			},
		],
		'@typescript-eslint/method-signature-style': 'off',
		'@typescript-eslint/no-array-constructor':
			sharedConfigs.noArrayConstructor(),
		'@typescript-eslint/no-confusing-non-null-assertion': 0,
		'@typescript-eslint/no-dupe-class-members':
			sharedConfigs.noDupeClassMembers(),
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-function': sharedConfigs.noEmptyFunction(),
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true,
			},
		],
		'@typescript-eslint/no-explicit-any': [
			'warn',
			{
				fixToUnknown: true,
				ignoreRestArgs: true,
			},
		],
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extra-parens': sharedConfigs.noExtraParens(),
		'@typescript-eslint/no-extra-semi': sharedConfigs.noExtraSemi(),
		'@typescript-eslint/no-extraneous-class': [
			'error',
			{
				allowConstructorOnly: false,
				allowEmpty: false,
				allowStaticOnly: false,
				allowWithDecorator: true,
			},
		],
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-invalid-this': sharedConfigs.noInvalidThis(),

		// Too many false-positives.
		'@typescript-eslint/no-invalid-void-type': 'off',

		'@typescript-eslint/no-loop-func': sharedConfigs.noLoopFunc(),
		'@typescript-eslint/no-loss-of-precision':
			sharedConfigs.noLossOfPrecision(),
		'@typescript-eslint/no-magic-numbers': sharedConfigs.noMagicNumbers(),
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': [
			'error',
			{
				allowDeclarations: false,
				allowDefinitionFiles: false,
			},
		],
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-redeclare': sharedConfigs.noRedeclare(),
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-restricted-imports':
			sharedConfigs.noRestrictedImports(),
		'@typescript-eslint/no-shadow': [
			sharedConfigs.noShadow()[0],
			{
				...sharedConfigs.noShadow()[1],
				ignoreFunctionTypeParameterNameValueShadow: false,
			},
		],
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true,
			},
		],
		'@typescript-eslint/no-type-alias': 0,
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unused-expressions':
			sharedConfigs.noUnusedExpressions(),
		'@typescript-eslint/no-unused-vars': sharedConfigs.noUnusedVars(),
		'@typescript-eslint/no-use-before-define':
			sharedConfigs.noUseBeforeDefine({
				enums: true,
				typedefs: true,
			}),
		'@typescript-eslint/no-useless-constructor':
			sharedConfigs.noUselessConstructor(),
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/object-curly-spacing':
			sharedConfigs.objectCurlySpacing(),
		'@typescript-eslint/padding-line-between-statements':
			sharedConfigs.paddingLineBetweenStatements(),
		'@typescript-eslint/parameter-properties': [
			'error',
			{
				prefer: 'parameter-property',
			},
		],
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-enum-initializers': 0,
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/quotes': sharedConfigs.quotes(),
		'@typescript-eslint/semi': sharedConfigs.semi(),
		'@typescript-eslint/sort-type-union-intersection-members': 0,
		'@typescript-eslint/space-before-blocks':
			sharedConfigs.spaceBeforeBlocks(),
		'@typescript-eslint/space-before-function-paren':
			sharedConfigs.spaceBeforeFunctionParen(),
		'@typescript-eslint/space-infix-ops': sharedConfigs.spaceInfixOps(),
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				lib: 'never',
				path: 'never',
				types: 'never',
			},
		],
		'@typescript-eslint/type-annotation-spacing': 'off',
		'@typescript-eslint/typedef': [
			0,
			{
				arrayDestructuring: false,
				arrowParameter: false,
				memberVariableDeclaration: true,
				objectDestructuring: false,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],

		'@typescript-eslint/unified-signatures': [
			'error',
			{
				ignoreDifferentlyNamedParameters: true,
			},
		],

		/**********************************************************************
		 * IMPORT
		 **********************************************************************/

		// Does not work when the TS definition exports a default const.
		'import/default': 'off',

		// Disabled because of https://github.com/benmosher/eslint-plugin-import/issues/1590
		'import/export': 'off',

		'import/extensions': sharedConfigs.import.extensions({
			pattern: {
				js: 'always',
				ts: 'never',
				tsx: 'never',
			},
		}),

		// Disabled as it does not work with TS.
		'import/named': 'off',

		// The rule is buggy with TS.
		'import/namespace': 'off',

		// Does not work with TS.
		'import/no-unresolved': 'off',

		/**********************************************************************
		 * N[ODE]
		 **********************************************************************/

		'n/file-extension-in-import': sharedConfigs.n.fileExtensionInImport({
			// TS does not yet support extensions and fails with error
			// TS2691.
			'.ts': 'never',
			'.tsx': 'never',
		}),

		// TS might have features not supported in a specific Node
		// version.
		'n/no-unsupported-features/es-builtins': 'off',
		'n/no-unsupported-features/es-syntax': 'off',

		/**********************************************************************
		 * UNICORN
		 **********************************************************************/

		'unicorn/import-style': 'off',
		'unicorn/no-null': 'off',

		// Does not work with TS.
		'unicorn/prefer-json-parse-buffer': 'off',
	},
	settings: {
		'import/extensions': allExtensions,
		'import/external-module-folders': [
			'node_modules',
			'node_modules/@types',
		],
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: allExtensions,
			},
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
};

module.exports = config;
