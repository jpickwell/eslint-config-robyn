'use strict';

const fs = require('node:fs');
const path = require('node:path');

const { commonGlobals } = require('eslint-plugin-n/lib/configs/_commons');

const env = require('../lib/env');
const { nodeVersion, override, typescriptOverride } = require('../lib/helpers');
const { allExtensions, warningCommentTerms } = require('../lib/lists');
const { buildIdentifierMatchRegExpString } = require('../lib/reg-exps');
const sharedConfigs = require('../lib/shared-configs');

// eslint-disable-next-line n/no-sync
const tsconfig = fs.existsSync('tsconfig.json')
	? path.resolve('tsconfig.json')
	: fs.existsSync('types/tsconfig.json') // eslint-disable-line n/no-sync
	? path.resolve('types/tsconfig.json')
	: undefined;

const tsconfigRootDirectory = tsconfig
	? path.dirname(tsconfig)
	: path.resolve(__dirname, '..');

const moduleConfigPath = require.resolve('./module');
const scriptConfigPath = require.resolve('./script');

/** @type {import('eslint').BaseConfig} */
const config = {
	env: {
		'shared-node-browser': true,
	},
	extends: [
		'plugin:markdown/recommended',
		moduleConfigPath,
		require.resolve('./deprecated'),
	],
	globals: {
		...commonGlobals,
	},

	// Manually authored .d.ts files are generally used to describe external
	// APIs that are not expected to follow our coding conventions. Linting
	// those files tends to produce a lot of spurious suppressions, so we simply
	// ignore them.
	ignorePatterns: ['*.d.ts'],

	overrides: [
		override(
			[
				{
					extensions: ['cjs'],
					files: [
						'.commitlintrc.js',
						'.eslintrc.js',
						'.prettierrc.js',
						'.stylelintrc.js',
						'.versionrc.js',
						'commitlint.config.js',
						'postcss.config.js',
						'prettier.config.js',
						'stylelint.config.js',
					],
				},
			],
			{
				extends: [scriptConfigPath],
				rules: {
					'@typescript-eslint/no-var-requires': 'off',
				},
			},
		),
		override(
			[
				{
					files: [
						'.commitlintrc.cjs',
						'.commitlintrc.js',
						'.commitlintrc.ts',
						'.eslintrc.cjs',
						'.eslintrc.js',
						'.prettierrc.cjs',
						'.prettierrc.js',
						'.stylelintrc.cjs',
						'.stylelintrc.js',
						'.versionrc.cjs',
						'.versionrc.js',
						'commitlint.config.cjs',
						'commitlint.config.js',
						'commitlint.config.ts',
						'lint-staged.config.cjs',
						'lint-staged.config.js',
						'lint-staged.config.mjs',
						'postcss.config.js',
						'prettier.config.cjs',
						'prettier.config.js',
						'stylelint.config.cjs',
						'stylelint.config.js',
						'vite.config.js',
						'vite.config.ts',
					],
				},
			],
			{
				rules: {
					'n/no-unpublished-require': 'off',
				},
			},
		),
		override(['mjs'], {
			extends: [moduleConfigPath],
		}),
		typescriptOverride({
			parserOptions: {
				project: './tsconfig.json',
				sourceType: 'module',
				tsconfigRootDir: tsconfigRootDirectory,
				warnOnUnsupportedTypeScriptVersion: false,
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'brace-style': 'off',
				camelcase: 'off',
				'comma-dangle': 'off',
				'comma-spacing': 'off',
				'constructor-super': 'off',
				'default-param-last': 'off',
				'dot-notation': 'off',
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
				'no-implied-eval': 'off',
				'no-import-assign': 'off',
				'no-invalid-this': 'off',
				'no-loop-func': 'off',
				'no-loss-of-precision': 'off',
				'no-magic-numbers': 'off',
				'no-new-symbol': 'off',
				'no-obj-calls': 'off',
				'no-redeclare': 'off',
				'no-restricted-imports': 'off',
				'no-return-await': 'off',
				'no-setter-return': 'off',
				'no-shadow': 'off',
				'no-this-before-super': 'off',
				'no-throw-literal': 'off',
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
				// 'require-await': `off`,
				semi: 'off',
				'space-before-blocks': 'off',
				'space-before-function-paren': 'off',
				'space-infix-ops': 'off',

				// TS(2367)
				'valid-typeof': 'off',

				// eslint-disable-next-line sort-keys
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/array-type': [
					'error',
					{
						default: 'array-simple',
					},
				],
				'@typescript-eslint/await-thenable': 'error',
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
				'@typescript-eslint/class-literal-property-style': [
					'error',
					'getters',
				],
				'@typescript-eslint/comma-dangle': sharedConfigs.commaDangle(),
				'@typescript-eslint/comma-spacing':
					sharedConfigs.commaSpacing(),
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
				'@typescript-eslint/consistent-type-exports': 0,
				'@typescript-eslint/consistent-type-imports': 0,
				'@typescript-eslint/default-param-last':
					sharedConfigs.defaultParamLast(),
				'@typescript-eslint/dot-notation': sharedConfigs.dotNotation(),
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

				'@typescript-eslint/func-call-spacing':
					sharedConfigs.funcCallSpacing(),
				'@typescript-eslint/indent': sharedConfigs.indent(),
				'@typescript-eslint/init-declarations':
					sharedConfigs.initDeclarations(),
				'@typescript-eslint/keyword-spacing':
					sharedConfigs.keywordSpacing(),
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
				'@typescript-eslint/naming-convention':
					sharedConfigs.typescript.namingConvention(false),
				'@typescript-eslint/no-array-constructor':
					sharedConfigs.noArrayConstructor(),
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/no-confusing-non-null-assertion': 0,
				'@typescript-eslint/no-confusing-void-expression': 'error',
				'@typescript-eslint/no-dupe-class-members':
					sharedConfigs.noDupeClassMembers(),
				'@typescript-eslint/no-duplicate-enum-values': 'error',
				'@typescript-eslint/no-dynamic-delete': 'error',
				'@typescript-eslint/no-empty-function':
					sharedConfigs.noEmptyFunction(),
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
				'@typescript-eslint/no-extra-parens':
					sharedConfigs.noExtraParens(),
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
				'@typescript-eslint/no-inferrable-types': 'error',
				'@typescript-eslint/no-invalid-this':
					sharedConfigs.noInvalidThis(),

				// Too many false-positives.
				'@typescript-eslint/no-invalid-void-type': 'off',

				'@typescript-eslint/no-loop-func': sharedConfigs.noLoopFunc(),
				'@typescript-eslint/no-loss-of-precision':
					sharedConfigs.noLossOfPrecision(),
				'@typescript-eslint/no-magic-numbers':
					sharedConfigs.noMagicNumbers(),
				'@typescript-eslint/no-meaningless-void-operator': 'error',
				'@typescript-eslint/no-misused-new': 'error',
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksConditionals: true,
						checksVoidReturn: false,
					},
				],
				'@typescript-eslint/no-namespace': [
					'error',
					{
						allowDeclarations: false,
						allowDefinitionFiles: false,
					},
				],
				'@typescript-eslint/no-non-null-asserted-nullish-coalescing':
					'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain':
					'error',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-redeclare': sharedConfigs.noRedeclare(),
				'@typescript-eslint/no-redundant-type-constituents': 'error',
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
				'@typescript-eslint/no-type-alias': 0,
				'@typescript-eslint/no-unnecessary-boolean-literal-compare':
					'error',
				'@typescript-eslint/no-unnecessary-condition': 'off',
				'@typescript-eslint/no-unnecessary-qualifier': 'error',
				'@typescript-eslint/no-unnecessary-type-arguments': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'@typescript-eslint/no-unnecessary-type-constraint': 'error',

				// This makes it hard to pass around errors.
				'@typescript-eslint/no-unsafe-argument': 'off',

				'@typescript-eslint/no-unsafe-assignment': 'error',
				'@typescript-eslint/no-unsafe-call': 'error',

				// Disabled until TS supports the `node:` protocol.
				'@typescript-eslint/no-unsafe-member-access': 'off',

				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/no-unused-expressions':
					sharedConfigs.noUnusedExpressions(),
				'@typescript-eslint/no-unused-vars':
					sharedConfigs.noUnusedVars(),
				'@typescript-eslint/no-use-before-define':
					sharedConfigs.noUseBeforeDefine({
						enums: true,
						typedefs: true,
					}),
				'@typescript-eslint/no-useless-constructor':
					sharedConfigs.noUselessConstructor(),
				'@typescript-eslint/no-useless-empty-export': 'error',
				'@typescript-eslint/no-var-requires': 'error',
				'@typescript-eslint/non-nullable-type-assertion-style': 'error',
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
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-literal-enum-member': 'error',
				'@typescript-eslint/prefer-namespace-keyword': 'error',
				'@typescript-eslint/prefer-nullish-coalescing': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/prefer-readonly': 'error',

				// Too annoying.
				'@typescript-eslint/prefer-readonly-parameter-types': 'off',

				'@typescript-eslint/prefer-reduce-type-parameter': 'error',
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'@typescript-eslint/prefer-return-this-type': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'@typescript-eslint/prefer-ts-expect-error': 'error',
				'@typescript-eslint/promise-function-async': 'error',
				'@typescript-eslint/quotes': sharedConfigs.quotes(),
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
				'@typescript-eslint/semi': sharedConfigs.semi(),
				'@typescript-eslint/sort-type-union-intersection-members': 0,
				'@typescript-eslint/space-before-blocks':
					sharedConfigs.spaceBeforeBlocks(),
				'@typescript-eslint/space-before-function-paren':
					sharedConfigs.spaceBeforeFunctionParen(),
				'@typescript-eslint/space-infix-ops':
					sharedConfigs.spaceInfixOps(),
				'@typescript-eslint/strict-boolean-expressions': [
					'off',
					{
						allowNullable: true,
						allowSafe: true,
					},
				],
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
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

				// Disabled as it crashes on most code.
				'@typescript-eslint/unbound-method': [
					'off',
					{
						ignoreStatic: true,
					},
				],

				'@typescript-eslint/unified-signatures': [
					'error',
					{
						ignoreDifferentlyNamedParameters: true,
					},
				],

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

				'n/file-extension-in-import': 'off',

				// TS might have features not supported in a specific Node
				// version.
				'n/no-unsupported-features/es-builtins': 'off',
				'n/no-unsupported-features/es-syntax': 'off',

				'unicorn/import-style': 'off',
				'unicorn/no-null': 'off',
			},
			settings: {
				'import/extensions': allExtensions,
				'import/external-module-folders': [
					'node_modules',
					'node_modules/@types',
				],
				'import/parsers': {
					[require.resolve('@typescript-eslint/parser')]: [
						'.ts',
						'.tsx',
					],
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
		}),
		override(['tsx'], {
			rules: {
				'@typescript-eslint/naming-convention':
					sharedConfigs.typescript.namingConvention(true),
			},
		}),
	],
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
	},
	plugins: [
		'ava',
		'eslint-comments',
		'import',
		'lodash',
		'n',
		'no-use-extend-native',
		'prettier',
		'promise',
		'security',
		'unicorn',
		'you-dont-need-lodash-underscore',
	],
	reportUnusedDisableDirectives: true,
	rules: {
		'accessor-pairs': [
			'error',
			{
				enforceForClassMembers: true,
			},
		],
		'array-bracket-newline': sharedConfigs.arrayBracketNewline(),
		'array-bracket-spacing': sharedConfigs.arrayBracketSpacing(),
		'array-callback-return': [
			'error',
			{
				allowImplicit: true,
				checkForEach: true,
			},
		],
		'array-element-newline': 'off',
		'arrow-body-style': 'off',
		'arrow-parens': 'off',
		'arrow-spacing': sharedConfigs.arrowSpacing(),
		'block-scoped-var': 'error',
		'block-spacing': sharedConfigs.blockSpacing(),
		'brace-style': sharedConfigs.braceStyle(),
		camelcase: sharedConfigs.camelcase(),
		'capitalized-comments': 'off',
		'class-methods-use-this': 'error',
		'comma-dangle': sharedConfigs.commaDangle(),
		'comma-spacing': sharedConfigs.commaSpacing(),
		'comma-style': sharedConfigs.commaStyle(),
		complexity: [
			'warn',
			{
				max: 20,
			},
		],
		'computed-property-spacing': 'off',
		'consistent-return': 'off',
		'consistent-this': 'off',
		'constructor-super': 'error',
		curly: 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': sharedConfigs.defaultParamLast(),
		'dot-location': sharedConfigs.dotLocation(),
		'dot-notation': sharedConfigs.dotNotation(),
		'eol-last': 'off',
		eqeqeq: sharedConfigs.eqeqeq(),
		'for-direction': 'error',
		'func-call-spacing': sharedConfigs.funcCallSpacing(),
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
		'function-call-argument-newline': 'off',
		'function-paren-newline': 'off',
		'generator-star': 'off',
		'generator-star-spacing': 'off',
		'getter-return': 'error',
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
		'implicit-arrow-linebreak': 'off',
		indent: sharedConfigs.indent(),
		'init-declarations': sharedConfigs.initDeclarations(),
		'jsx-quotes': 'off',
		'key-spacing': sharedConfigs.keySpacing(),
		'keyword-spacing': sharedConfigs.keywordSpacing(),
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'lines-between-class-members': sharedConfigs.linesBetweenClassMembers(),
		'max-classes-per-file': [
			'error',
			{
				ignoreExpressions: false,
				max: 1,
			},
		],
		'max-depth': [
			'warn',
			{
				max: 4,
			},
		],
		'max-len': sharedConfigs.maxLen(),

		// If you have more than 2,000 lines in a single source file, then it is
		// probably time to split up your code.
		'max-lines': [
			'warn',
			{
				max: 2000,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [
			'warn',
			{
				IIFEs: false,
				max: 50,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-nested-callbacks': [
			'warn',
			{
				max: 10,
			},
		],
		'max-params': [
			'warn',
			{
				max: 5,
			},
		],
		'max-statements': [
			'warn',
			{
				max: 20,
			},
			{
				ignoreTopLevelFunctions: false,
			},
		],
		'max-statements-per-line': [
			'error',
			{
				max: 1,
			},
		],
		'multiline-comment-style': 'off',
		'multiline-ternary': 'off',
		'new-cap': [
			'error',
			{
				capIsNew: true,

				// eslint-disable-next-line unicorn/no-keyword-prefix
				newIsCap: true,
			},
		],
		'new-parens': 'off',
		'newline-per-chained-call': 'off',
		'no-alert': 'error',
		'no-array-constructor': sharedConfigs.noArrayConstructor(),
		'no-arrow-condition': 'off',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': [
			'warn',
			{
				allow: [
					// '&',
					// '&=',
					'<<',
					'<<=',
					'>>',
					'>>=',
					'>>>',
					'>>>=',
					'^',
					'^=',
					// '|',
					// '|=',
					'~',
				],
				int32Hint: false,
			},
		],
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-comma-dangle': 'off',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-confusing-arrow': [
			'error',
			{
				allowParens: false,
			},
		],
		'no-console': env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'error',
		'no-constant-condition': sharedConfigs.noConstantCondition(),
		'no-constructor-return': 'error',
		'no-continue': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': sharedConfigs.noDupeClassMembers(),
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'off',
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-empty-character-class': 'error',
		'no-empty-function': sharedConfigs.noEmptyFunction(),
		'no-empty-pattern': sharedConfigs.noEmptyPattern(),
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': [
			'error',
			{
				enforceForLogicalOperands: true,
			},
		],
		'no-extra-label': 'error',
		'no-extra-parens': sharedConfigs.noExtraParens(),
		'no-extra-semi': sharedConfigs.noExtraSemi(),
		'no-fallthrough': 'error',
		'no-floating-decimal': 'off',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': sharedConfigs.noImpliedEval(),
		'no-import-assign': 'error',
		'no-inline-comments': [
			'warn',
			{
				// ESLint directive comments are always ignored, so this pattern
				// does not need to include them.
				ignorePattern: '',
			},
		],
		'no-inner-declarations': ['error', 'both'],
		'no-invalid-regexp': 'error',
		'no-invalid-this': sharedConfigs.noInvalidThis(),
		'no-irregular-whitespace': sharedConfigs.noIrregularWhitespace(),
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
		'no-loop-func': sharedConfigs.noLoopFunc(),
		'no-loss-of-precision': sharedConfigs.noLossOfPrecision(),
		'no-magic-numbers': sharedConfigs.noMagicNumbers(),
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-multi-assign': 'error',
		'no-multi-spaces': 'off',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'off',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'off',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': sharedConfigs.noRedeclare(),
		'no-regex-spaces': 'error',
		'no-reserved-keys': 'off',
		'no-restricted-exports': 'off',
		'no-restricted-globals': ['error', 'event'],
		'no-restricted-imports': sharedConfigs.noRestrictedImports(),
		'no-restricted-properties': 'off',
		'no-restricted-syntax': sharedConfigs.noRestrictedSyntax(),
		'no-return-assign': ['error', 'always'],
		'no-return-await': sharedConfigs.returnAwait(),
		'no-script-url': 'error',
		'no-self-assign': [
			'error',
			{
				props: true,
			},
		],
		'no-self-compare': 'error',
		'no-sequences': [
			'error',
			{
				allowInParentheses: false,
			},
		],
		'no-setter-return': 'error',
		'no-shadow': sharedConfigs.noShadow(),
		'no-shadow-restricted-names': 'error',
		'no-space-before-semi': 'off',
		'no-sparse-arrays': sharedConfigs.noSparseArrays(),
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': sharedConfigs.noThrowLiteral(),
		'no-trailing-spaces': 'off',
		'no-undef': [
			'error',
			{
				typeof: true,
			},
		],
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-underscore-dangle': [
			'error',
			{
				enforceInMethodNames: true,
			},
		],
		'no-unexpected-multiline': 'off',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		],
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
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
		'no-unused-expressions': sharedConfigs.noUnusedExpressions(),
		'no-unused-labels': 'error',
		'no-unused-private-class-members': 'error',
		'no-unused-vars': sharedConfigs.noUnusedVars(),
		'no-use-before-define': sharedConfigs.noUseBeforeDefine(),
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': [
			'error',
			{
				enforceForClassMembers: true,
			},
		],
		'no-useless-concat': sharedConfigs.noUselessConcat(),
		'no-useless-constructor': sharedConfigs.noUselessConstructor(),
		'no-useless-escape': 'error',
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
		'no-whitespace-before-property': 'off',
		'no-with': 'error',
		'no-wrap-func': 'off',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': sharedConfigs.objectCurlyNewline(),
		'object-curly-spacing': sharedConfigs.objectCurlySpacing(),
		'object-property-newline': sharedConfigs.objectPropertyNewline(),
		'object-shorthand': sharedConfigs.objectShorthand(),
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': 'off',
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': sharedConfigs.operatorLinebreak(),
		'padded-blocks': 'off',
		'padding-line-between-statements':
			sharedConfigs.paddingLineBetweenStatements(),
		'prefer-arrow-callback': 'off',
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'prefer-destructuring': [
			'error',
			{
				// `array` is disabled because it forces destructuring on stupid
				// stuff like `foo.bar = process.argv[2];`

				AssignmentExpression: {
					array: false,

					// Disabled because object assignment destructuring requires
					// parens wrapping:
					// `let foo; ({foo} = object);`
					object: false,
				},
				VariableDeclarator: {
					array: false,
					object: true,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true,
			},
		],
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': sharedConfigs.preferTemplate(),
		'quote-props': sharedConfigs.quoteProps(),
		quotes: sharedConfigs.quotes(),
		radix: 'error',
		'require-atomic-updates': 'error',
		'require-await': sharedConfigs.requireAwait(),
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'off',
		semi: sharedConfigs.semi(),
		'semi-spacing': 'off',
		'semi-style': 'off',

		// We use `import` plugin.
		'sort-imports': 'off',

		'sort-keys': sharedConfigs.sortKeys(),
		'sort-vars': [
			'error',
			{
				ignoreCase: true,
			},
		],
		'space-after-function-name': 'off',
		'space-after-keywords': 'off',
		'space-before-blocks': sharedConfigs.spaceBeforeBlocks(),
		'space-before-function-paren': sharedConfigs.spaceBeforeFunctionParen(),
		'space-before-function-parentheses': 'off',
		'space-before-keywords': 'off',
		'space-in-brackets': 'off',
		'space-in-parens': sharedConfigs.spaceInParens(),
		'space-infix-ops': sharedConfigs.spaceInfixOps(),
		'space-return-throw-case': 'off',
		'space-unary-ops': sharedConfigs.spaceUnaryOps(),
		'space-unary-word-ops': 'off',
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					balanced: true,
					exceptions: ['*', '+', '-'],
					markers: ['!', '*'],
				},
				line: {
					exceptions: ['*', '+', '-'],
					markers: ['!', '/', '=>'],
				},
			},
		],
		strict: 'error',
		'switch-colon-spacing': 'off',
		'symbol-description': 'error',
		'template-curly-spacing': sharedConfigs.templateCurlySpacing(),
		'template-tag-spacing': 'off',
		'unicode-bom': 'off',
		'use-isnan': [
			'error',
			{
				enforceForIndexOf: true,
			},
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: false,
			},
		],
		'vars-on-top': 'error',
		'wrap-iife': 'off',
		'wrap-regex': 'off',
		'yield-star-spacing': 'off',
		yoda: [
			'error',
			'never',
			{
				exceptRange: true,
			},
		],

		// eslint-disable-next-line sort-keys
		'ava/assertion-arguments': 'error',
		'ava/hooks-order': 'error',
		'ava/max-asserts': ['off', 5],
		'ava/no-async-fn-without-await': 'error',
		'ava/no-duplicate-modifiers': 'error',
		'ava/no-identical-title': 'error',
		'ava/no-ignored-test-files': 'error',
		'ava/no-import-test-files': 'error',
		'ava/no-incorrect-deep-equal': 'error',
		'ava/no-inline-assertions': 'error',
		'ava/no-nested-tests': 'error',
		'ava/no-only-test': 'error',
		'ava/no-skip-assert': 'error',
		'ava/no-skip-test': 'error',
		'ava/no-todo-implementation': 'error',
		'ava/no-todo-test': 'warn',
		'ava/no-unknown-modifiers': 'error',
		'ava/prefer-async-await': 'error',
		'ava/prefer-power-assert': 'off',
		'ava/prefer-t-regex': 'error',
		'ava/test-title': 'error',
		'ava/test-title-format': 'off',
		'ava/use-t': 'error',
		'ava/use-t-throws-async-well': 'error',
		'ava/use-t-well': 'error',
		'ava/use-test': 'error',
		'ava/use-true-false': 'error',

		'eslint-comments/disable-enable-pair': [
			'error',
			{
				allowWholeFile: true,
			},
		],
		'eslint-comments/no-aggregating-enable': 'error',
		'eslint-comments/no-duplicate-disable': 'error',
		'eslint-comments/no-restricted-disable': 'off',

		// Covered by `unicorn/no-abusive-eslint-disable`
		'eslint-comments/no-unlimited-disable': 'off',

		'eslint-comments/no-unused-disable': 'error',
		'eslint-comments/no-unused-enable': 'error',
		'eslint-comments/no-use': 'off',
		'eslint-comments/require-description': 'off',

		'import/default': 'error',
		'import/dynamic-import-chunkname': 'error',
		'import/export': 'error',
		'import/exports-last': 'error',
		'import/extensions': sharedConfigs.import.extensions(),
		'import/first': 'error',
		'import/group-exports': 'error',
		'import/max-dependencies': 'error',
		'import/named': 'error',
		'import/namespace': [
			'error',
			{
				allowComputed: true,
			},
		],
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'error',

		// We use `unicorn/prefer-module` instead.
		'import/no-commonjs': 'off',

		'import/no-cycle': [
			'error',
			{
				ignoreExternal: true,
			},
		],
		'import/no-default-export': 0,
		'import/no-deprecated': 'off',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-import-module-exports': 'error',
		'import/no-internal-modules': 0,
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 0,
		'import/no-namespace': 0,
		'import/no-nodejs-modules': 0,
		'import/no-relative-packages': 0,
		'import/no-relative-parent-imports': 0,
		'import/no-restricted-paths': 0,
		'import/no-self-import': 'error',
		'import/no-unassigned-import': [
			'error',
			{
				allow: [
					'**/*.css',
					'**/*.less',
					'**/*.sass',
					'**/*.scss',
					'**/register',
					'**/register.*',
					'**/register/**',
					'**/register/**.*',
					'@babel/polyfill',
				],
			},
		],

		// Does not work with TS.
		'import/no-unresolved': 'off',

		'import/no-unused-modules': 0,
		'import/no-useless-path-segments': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'import/order': [
			'warn',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				groups: [
					'unknown',
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
				'newlines-between': 'always',
				pathGroups: [
					{
						group: 'internal',
						pattern: '@/**',
						position: 'after',
					},
					{
						group: 'internal',
						pattern: '~/**',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: [
					'builtin',
					'external',
					'object',
				],
				warnOnUnassignedImports: false,
			},
		],
		'import/prefer-default-export': 0,
		'import/unambiguous': 'error',

		'lodash/callback-binding': 'error',
		'lodash/chain-style': ['error', 'as-needed'],
		'lodash/chaining': 'error',
		'lodash/collection-method-value': 'error',
		'lodash/collection-ordering': 'error',
		'lodash/collection-return': 'error',
		'lodash/consistent-compose': ['error', 'flow'],
		'lodash/identity-shorthand': ['error', 'always'],
		'lodash/import-scope': 'error',
		'lodash/matches-prop-shorthand': ['error', 'always'],
		'lodash/matches-shorthand': ['error', 'always', 3],
		'lodash/no-commit': 'error',
		'lodash/no-double-unwrap': 'error',
		'lodash/no-extra-args': 'error',
		'lodash/no-unbound-this': 'error',
		'lodash/path-style': ['error', 'string'],
		'lodash/prefer-compact': 'error',
		'lodash/prefer-constant': 'error',
		'lodash/prefer-filter': ['error', 3],
		'lodash/prefer-find': 'error',
		'lodash/prefer-flat-map': 'error',
		'lodash/prefer-get': ['error', 3],
		'lodash/prefer-immutable-method': 'error',
		'lodash/prefer-includes': [
			'error',
			{
				includeNative: true,
			},
		],
		'lodash/prefer-invoke-map': 'error',
		'lodash/prefer-is-nil': 'error',
		'lodash/prefer-lodash-chain': 'error',
		'lodash/prefer-lodash-method': [
			'error',
			{
				ignoreMethods: [
					'assign',
					'bind',
					'concat',
					'detect',
					'drop(Right)?',
					'endsWith',
					'entries',
					'extendOwn',
					'fill',
					'first',
					'indexOf',
					'is(Array|Finite|Integer|NaN|Null|Undefined)',
					'join',
					'keys',
					'last(IndexOf)?',
					'pad(End|Start)',
					'pairs',
					'repeat',
					'replace',
					'reverse',
					'slice',
					'split',
					'startsWith',
					'to(Lower|Pairs|Upper)',
					'trim',
					'uniq',
					'values',
				],
			},
		],
		'lodash/prefer-lodash-typecheck': 'error',
		'lodash/prefer-map': 'error',
		'lodash/prefer-matches': ['error', 3],
		'lodash/prefer-noop': 'error',
		'lodash/prefer-over-quantifier': 'error',
		'lodash/prefer-reject': ['error', 3],
		'lodash/prefer-some': [
			'error',
			{
				includeNative: true,
			},
		],
		'lodash/prefer-startswith': 'error',
		'lodash/prefer-thru': 'error',
		'lodash/prefer-times': 'error',
		'lodash/prefer-wrapper-method': 'error',
		'lodash/preferred-alias': 'error',
		'lodash/prop-shorthand': ['error', 'always'],
		'lodash/unwrap': 'error',

		'n/callback-return': 'error',
		'n/exports-style': [
			'error',
			'module.exports',
			{
				allowBatchAssign: true,
			},
		],
		'n/file-extension-in-import': [
			'error',
			'always',
			{
				// TS does not yet support extensions and fails with error
				// TS2691.
				'.ts': 'never',
				'.tsx': 'never',
			},
		],
		'n/global-require': 'error',
		'n/handle-callback-err': ['error', 'error'],
		'n/no-callback-literal': 'error',

		'n/no-deprecated-api': 'error',
		'n/no-exports-assign': 'error',

		// Redundant with `import/no-extraneous-dependencies`
		'n/no-extraneous-import': 'off',
		'n/no-extraneous-require': 'off',

		// Redundant with `import/no-unresolved`
		'n/no-missing-import': 'off',
		'n/no-missing-require': 'off',

		'n/no-mixed-requires': [
			'error',
			{
				allowCall: true,
				grouping: true,
			},
		],
		'n/no-new-require': 'error',
		'n/no-path-concat': 'error',
		'n/no-process-env': 'error',
		'n/no-process-exit': 'error',
		'n/no-restricted-import': 'off',
		'n/no-restricted-require': 'off',
		'n/no-sync': 'error',
		'n/no-unpublished-bin': 'error',
		'n/no-unpublished-import': 'off',
		'n/no-unpublished-require': 'off',
		'n/no-unsupported-features/es-builtins': [
			'error',
			{
				version: nodeVersion,
			},
		],
		'n/no-unsupported-features/es-syntax': 'error',
		'n/no-unsupported-features/node-builtins': [
			'error',
			{
				version: nodeVersion,
			},
		],
		'n/prefer-global/buffer': ['error', 'never'],
		'n/prefer-global/console': ['error', 'always'],
		'n/prefer-global/process': ['error', 'never'],
		'n/prefer-global/text-decoder': ['error', 'always'],
		'n/prefer-global/text-encoder': ['error', 'always'],
		'n/prefer-global/url': ['error', 'always'],
		'n/prefer-global/url-search-params': ['error', 'always'],
		'n/prefer-promises/dns': 'error',
		'n/prefer-promises/fs': 'error',
		'n/process-exit-as-throw': 'error',

		// Has issues.
		'n/shebang': 'off',

		'no-use-extend-native/no-use-extend-native': 'error',

		'prettier/prettier': 'error',

		'promise/always-return': 'error',
		'promise/avoid-new': 'error',
		'promise/catch-or-return': [
			'error',
			{
				allowFinally: true,
			},
		],
		'promise/no-callback-in-promise': 'error',
		'promise/no-native': 'off',
		'promise/no-nesting': 'error',
		'promise/no-new-statics': 'error',
		'promise/no-promise-in-callback': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/no-return-wrap': [
			'error',
			{
				allowReject: true,
			},
		],
		'promise/param-names': 'error',
		'promise/prefer-await-to-callbacks': 'error',
		'promise/prefer-await-to-then': 'error',
		'promise/valid-params': 'error',

		'security/detect-buffer-noassert': 'warn',
		'security/detect-child-process': 'warn',
		'security/detect-disable-mustache-escape': 'warn',
		'security/detect-eval-with-expression': 'warn',
		'security/detect-new-buffer': 'warn',
		'security/detect-no-csrf-before-method-override': 'warn',
		'security/detect-non-literal-fs-filename': 'warn',
		'security/detect-non-literal-regexp': 'warn',
		'security/detect-non-literal-require': 'warn',
		'security/detect-object-injection': 'warn',
		'security/detect-possible-timing-attacks': 'warn',
		'security/detect-pseudoRandomBytes': 'warn',

		// Too many false-positives, and no guidance.
		'security/detect-unsafe-regex': 'off',

		'unicorn/better-regex': 'error',
		'unicorn/catch-error-name': 'error',
		'unicorn/consistent-destructuring': 'off',
		'unicorn/consistent-function-scoping': 'error',
		'unicorn/custom-error-definition': 'error',
		'unicorn/empty-brace-spaces': 'off',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/expiring-todo-comments': 'off',
		'unicorn/explicit-length-check': 'error',
		'unicorn/filename-case': 'error',
		'unicorn/import-style': 'error',
		'unicorn/new-for-builtins': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-array-callback-reference': 'error',
		'unicorn/no-array-for-each': 'error',
		'unicorn/no-array-method-this-argument': 'error',
		'unicorn/no-array-push-push': 'error',
		'unicorn/no-array-reduce': 'error',
		'unicorn/no-await-expression-member': 'error',
		'unicorn/no-console-spaces': 'error',
		'unicorn/no-document-cookie': 'error',
		'unicorn/no-empty-file': 'error',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-hex-escape': 'error',
		'unicorn/no-instanceof-array': 'error',
		'unicorn/no-invalid-remove-event-listener': 'error',
		'unicorn/no-keyword-prefix': 'error',
		'unicorn/no-lonely-if': 'error',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-new-array': 'error',
		'unicorn/no-new-buffer': 'error',
		'unicorn/no-null': 'error',
		'unicorn/no-object-as-default-parameter': 'error',
		'unicorn/no-process-exit': 'error',
		'unicorn/no-static-only-class': 'error',
		'unicorn/no-thenable': 'error',
		'unicorn/no-this-assignment': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-unreadable-iife': 'error',
		'unicorn/no-unsafe-regex': 'error',
		'unicorn/no-unused-properties': 'error',
		'unicorn/no-useless-fallback-in-spread': 'error',
		'unicorn/no-useless-length-check': 'error',
		'unicorn/no-useless-promise-resolve-reject': 'error',
		'unicorn/no-useless-spread': 'error',
		'unicorn/no-useless-switch-case': 'error',
		'unicorn/no-useless-undefined': 'error',
		'unicorn/no-zero-fractions': 'error',
		'unicorn/number-literal-case': 'off',
		'unicorn/numeric-separators-style': [
			'error',
			{
				hexadecimal: {
					groupLength: 4,
					minimumDigits: 0,
				},
			},
		],
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-array-flat': 'error',
		'unicorn/prefer-array-flat-map': 'error',
		'unicorn/prefer-array-index-of': 'error',
		'unicorn/prefer-array-some': 'error',
		'unicorn/prefer-at': 'error',
		'unicorn/prefer-code-point': 'error',
		'unicorn/prefer-date-now': 'error',
		'unicorn/prefer-default-parameters': 'error',
		'unicorn/prefer-dom-node-append': 'error',
		'unicorn/prefer-dom-node-dataset': 'error',
		'unicorn/prefer-dom-node-remove': 'error',
		'unicorn/prefer-dom-node-text-content': 'error',
		'unicorn/prefer-event-target': 'error',
		'unicorn/prefer-export-from': 'error',
		'unicorn/prefer-includes': 'error',

		// Does not work with TS.
		'unicorn/prefer-json-parse-buffer': 'off',

		'unicorn/prefer-keyboard-event-key': 'error',
		'unicorn/prefer-logical-operator-over-ternary': 'error',
		'unicorn/prefer-math-trunc': 'error',
		'unicorn/prefer-modern-dom-apis': 'error',
		'unicorn/prefer-modern-math-apis': 'error',
		'unicorn/prefer-native-coercion-functions': 'error',
		'unicorn/prefer-negative-index': 'error',
		'unicorn/prefer-node-protocol': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/prefer-object-from-entries': 'error',
		'unicorn/prefer-optional-catch-binding': 'error',
		'unicorn/prefer-prototype-methods': 'error',
		'unicorn/prefer-query-selector': 'error',
		'unicorn/prefer-reflect-apply': 'error',
		'unicorn/prefer-regexp-test': 'error',
		'unicorn/prefer-set-has': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/prefer-string-replace-all': 'error',
		'unicorn/prefer-string-slice': 'error',
		'unicorn/prefer-string-starts-ends-with': 'error',
		'unicorn/prefer-string-trim-start-end': 'error',
		'unicorn/prefer-switch': 'error',
		'unicorn/prefer-ternary': 'error',
		'unicorn/prefer-top-level-await': 'error',
		'unicorn/prefer-type-error': 'error',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				extendDefaultReplacements: false,
				replacements: {
					blacklist: {
						exclude: true,
					},
					def: {
						defer: true,
						deferred: true,
						define: true,
						definition: true,
					},
					defs: {
						defers: true,
						defines: true,
						definitions: true,
					},
					dir: {
						direction: true,
						directory: true,
					},
					dirs: {
						directions: true,
						directories: true,
					},
					dst: {
						daylightSavingTime: true,
						destination: true,
						distribution: true,
					},
					e: {
						error: true,
						event: true,
					},
					ev: {
						event: true,
					},
					evt: {
						event: true,
					},
					ext: {
						extension: true,
						external: true,
					},
					exts: {
						extensions: true,
						externals: true,
					},
					master: {
						main: true,
					},
					ref: {
						refactor: true,
						reference: true,
						referer: true,
						referral: true,
					},
					refs: {
						refactors: true,
						references: true,
						referrals: true,
						referrers: true,
					},
					rel: {
						related: true,
						relationship: true,
						relative: true,
					},
					req: {
						request: true,
						require: true,
						requirement: true,
					},
					reqs: {
						requests: true,
						requirements: true,
						requires: true,
					},
					res: {
						response: true,
						result: true,
					},
					retval: {
						returnValue: true,
					},
					slave: {
						secondary: true,
					},
					tbl: {
						table: true,
					},
					tit: {
						title: true,
					},
					var: {
						variable: true,
						variation: true,
					},
					vars: {
						variables: true,
						variations: true,
					},
					ver: {
						version: true,
					},
					vers: {
						versions: true,
					},
					whitelist: {
						include: true,
					},
				},
			},
		],
		'unicorn/relative-url-style': 'error',
		'unicorn/require-array-join-separator': 'error',
		'unicorn/require-number-to-fixed-digits-argument': 'error',
		'unicorn/require-post-message-target-origin': 'error',
		'unicorn/string-content': 'off',
		'unicorn/template-indent': 'error',
		'unicorn/text-encoding-identifier-case': 'error',
		'unicorn/throw-new-error': 'error',

		'you-dont-need-lodash-underscore/all': 'off',
		'you-dont-need-lodash-underscore/any': 'off',
		'you-dont-need-lodash-underscore/assign': 'error',
		'you-dont-need-lodash-underscore/bind': 'error',
		'you-dont-need-lodash-underscore/cast-array': 'off',
		'you-dont-need-lodash-underscore/collect': 'off',
		'you-dont-need-lodash-underscore/concat': 'error',
		'you-dont-need-lodash-underscore/contains': 'off',
		'you-dont-need-lodash-underscore/detect': 'error',
		'you-dont-need-lodash-underscore/drop': 'error',
		'you-dont-need-lodash-underscore/drop-right': 'error',
		'you-dont-need-lodash-underscore/each': 'off',
		'you-dont-need-lodash-underscore/ends-with': 'error',
		'you-dont-need-lodash-underscore/entries': 'error',
		'you-dont-need-lodash-underscore/every': 'off',
		'you-dont-need-lodash-underscore/extend-own': 'error',
		'you-dont-need-lodash-underscore/fill': 'error',
		'you-dont-need-lodash-underscore/filter': 'off',
		'you-dont-need-lodash-underscore/find': 'off',
		'you-dont-need-lodash-underscore/find-index': 'off',
		'you-dont-need-lodash-underscore/first': 'error',
		'you-dont-need-lodash-underscore/flatten': 'off',
		'you-dont-need-lodash-underscore/foldl': 'off',
		'you-dont-need-lodash-underscore/foldr': 'off',
		'you-dont-need-lodash-underscore/for-each': 'off',
		'you-dont-need-lodash-underscore/get': 'off',
		'you-dont-need-lodash-underscore/includes': 'off',
		'you-dont-need-lodash-underscore/index-of': 'error',
		'you-dont-need-lodash-underscore/inject': 'off',
		'you-dont-need-lodash-underscore/is-array': 'error',
		'you-dont-need-lodash-underscore/is-finite': 'error',
		'you-dont-need-lodash-underscore/is-function': 'off',
		'you-dont-need-lodash-underscore/is-integer': 'error',
		'you-dont-need-lodash-underscore/is-nan': 'error',
		'you-dont-need-lodash-underscore/is-nil': 'off',
		'you-dont-need-lodash-underscore/is-null': 'error',
		'you-dont-need-lodash-underscore/is-string': 'off',
		'you-dont-need-lodash-underscore/is-undefined': 'error',
		'you-dont-need-lodash-underscore/join': 'error',
		'you-dont-need-lodash-underscore/keys': 'error',
		'you-dont-need-lodash-underscore/last': 'error',
		'you-dont-need-lodash-underscore/last-index-of': 'error',
		'you-dont-need-lodash-underscore/map': 'off',
		'you-dont-need-lodash-underscore/omit': 'off',
		'you-dont-need-lodash-underscore/pad-end': 'error',
		'you-dont-need-lodash-underscore/pad-start': 'error',
		'you-dont-need-lodash-underscore/pairs': 'error',
		'you-dont-need-lodash-underscore/reduce': 'off',
		'you-dont-need-lodash-underscore/reduce-right': 'off',
		'you-dont-need-lodash-underscore/repeat': 'error',
		'you-dont-need-lodash-underscore/replace': 'error',
		'you-dont-need-lodash-underscore/reverse': 'error',
		'you-dont-need-lodash-underscore/select': 'off',
		'you-dont-need-lodash-underscore/size': 'off',
		'you-dont-need-lodash-underscore/slice': 'error',
		'you-dont-need-lodash-underscore/some': 'off',
		'you-dont-need-lodash-underscore/split': 'error',
		'you-dont-need-lodash-underscore/starts-with': 'error',
		'you-dont-need-lodash-underscore/take-right': 'off',
		'you-dont-need-lodash-underscore/throttle': 'off',
		'you-dont-need-lodash-underscore/to-lower': 'error',
		'you-dont-need-lodash-underscore/to-pairs': 'error',
		'you-dont-need-lodash-underscore/to-upper': 'error',
		'you-dont-need-lodash-underscore/trim': 'error',
		'you-dont-need-lodash-underscore/uniq': 'error',
		'you-dont-need-lodash-underscore/values': 'error',
	},
	settings: {
		'import/core-modules': ['electron', 'atom'],
	},
};

module.exports = config;
